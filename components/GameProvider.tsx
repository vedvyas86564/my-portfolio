"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import portfolioData from "@/lib/config";

const STORAGE_KEY = "vv-portfolio-progress";
const THEME_KEY = "vv-portfolio-theme";
const KONAMI = [
	"ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
	"ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
	"b", "a",
];

/** Sections that must all be seen to earn "100% Cleared". */
const MAP_SECTIONS = ["stats", "quests", "artifacts", "tree", "trophies"];

export type Toast = {
	key: number;
	title: string;
	xp: number;
	levelUp?: string;
};

type GameState = {
	unlocked: string[];
	xp: number;
	level: number;
	levelTitle: string;
	nextThreshold: number | null;
	levelProgress: number;
	toasts: Toast[];
	devMode: boolean;
	theme: "dark" | "light";
	unlock: (id: string) => void;
	toggleTheme: () => void;
	dismissToast: (key: number) => void;
};

const GameContext = createContext<GameState | null>(null);

export function useGame() {
	const ctx = useContext(GameContext);
	if (!ctx) throw new Error("useGame must be used inside <GameProvider>");
	return ctx;
}

const XP_BY_ID = new Map(portfolioData.achievements.map((a) => [a.id, a.xp]));

function levelFor(xp: number) {
	const levels = portfolioData.levels;
	let index = 0;
	for (let i = 0; i < levels.length; i += 1) {
		if (xp >= levels[i].threshold) index = i;
	}
	const next = levels[index + 1] ?? null;
	const floor = levels[index].threshold;
	const span = next ? next.threshold - floor : 1;

	return {
		level: index + 1,
		levelTitle: levels[index].title,
		nextThreshold: next?.threshold ?? null,
		levelProgress: next ? Math.min(1, (xp - floor) / span) : 1,
	};
}

export function GameProvider({ children }: { children: React.ReactNode }) {
	const [unlocked, setUnlocked] = useState<string[]>([]);
	const [toasts, setToasts] = useState<Toast[]>([]);
	const [devMode, setDevMode] = useState(false);
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const [hydrated, setHydrated] = useState(false);

	// Refs avoid stale closures inside the keydown listener and observers.
	const unlockedRef = useRef<string[]>([]);
	const toastId = useRef(0);

	const xp = useMemo(
		() => unlocked.reduce((sum, id) => sum + (XP_BY_ID.get(id) ?? 0), 0),
		[unlocked],
	);
	const derived = useMemo(() => levelFor(xp), [xp]);

	const unlock = useCallback((id: string) => {
		if (unlockedRef.current.includes(id)) return;
		if (!XP_BY_ID.has(id)) return;

		const nextUnlocked = [...unlockedRef.current, id];
		unlockedRef.current = nextUnlocked;
		setUnlocked(nextUnlocked);

		const achievement = portfolioData.achievements.find((a) => a.id === id);
		if (!achievement) return;

		// Work out whether this unlock also crossed a level boundary.
		const before = levelFor(
			nextUnlocked
				.filter((x) => x !== id)
				.reduce((sum, x) => sum + (XP_BY_ID.get(x) ?? 0), 0),
		);
		const after = levelFor(
			nextUnlocked.reduce((sum, x) => sum + (XP_BY_ID.get(x) ?? 0), 0),
		);

		toastId.current += 1;
		setToasts((prev) => [
			...prev.slice(-2),
			{
				key: toastId.current,
				title: achievement.title,
				xp: achievement.xp,
				levelUp: after.level > before.level ? after.levelTitle : undefined,
			},
		]);

		if (id === "konami") {
			setDevMode(true);
			document.documentElement.dataset.dev = "on";
		}
	}, []);

	const dismissToast = useCallback((key: number) => {
		setToasts((prev) => prev.filter((t) => t.key !== key));
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			document.documentElement.dataset.theme = next;
			try {
				localStorage.setItem(THEME_KEY, next);
			} catch {
				/* private mode, so the theme just won't persist */
			}
			return next;
		});
		unlock("theme");
	}, [unlock]);

	// Restore progress, then grant the boot achievement. The read is deferred
	// off the effect itself (the server has no localStorage, so this is
	// client-only anyway) to avoid a cascading render. A timer rather than
	// requestAnimationFrame, because rAF is paused in background tabs and a
	// visitor who opens the site in one should still get their progress back.
	useEffect(() => {
		const restore = setTimeout(() => {
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (raw) {
					const saved = JSON.parse(raw) as string[];
					if (Array.isArray(saved)) {
						const valid = saved.filter((id) => XP_BY_ID.has(id));
						unlockedRef.current = valid;
						setUnlocked(valid);
						if (valid.includes("konami")) {
							setDevMode(true);
							document.documentElement.dataset.dev = "on";
						}
					}
				}
			} catch {
				/* corrupt or unavailable storage, so start fresh */
			}

			const stored = document.documentElement.dataset.theme;
			setTheme(stored === "light" ? "light" : "dark");
			setHydrated(true);
		}, 0);

		const timer = setTimeout(() => unlock("boot"), 900);
		return () => {
			clearTimeout(restore);
			clearTimeout(timer);
		};
	}, [unlock]);

	// Persist after hydration so we never overwrite saved state with [].
	useEffect(() => {
		if (!hydrated) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
		} catch {
			/* nothing to do here, progress is only cosmetic */
		}
	}, [unlocked, hydrated]);

	// Seeing every section on the map earns the completion achievement.
	// Derived here rather than inside unlock() so it can't recurse.
	useEffect(() => {
		if (!hydrated) return;
		if (unlocked.includes("cleared")) return;
		if (!MAP_SECTIONS.every((section) => unlocked.includes(section))) return;

		// Delay so this toast doesn't collide with the one that triggered it.
		const timer = setTimeout(() => unlock("cleared"), 700);
		return () => clearTimeout(timer);
	}, [unlocked, hydrated, unlock]);

	// Konami code.
	useEffect(() => {
		let position = 0;
		function onKeyDown(event: KeyboardEvent) {
			const expected = KONAMI[position];
			const pressed = event.key.length === 1 ? event.key.toLowerCase() : event.key;
			if (pressed === expected) {
				position += 1;
				if (position === KONAMI.length) {
					position = 0;
					unlock("konami");
				}
			} else {
				position = pressed === KONAMI[0] ? 1 : 0;
			}
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [unlock]);

	const value = useMemo<GameState>(
		() => ({
			unlocked,
			xp,
			toasts,
			devMode,
			theme,
			unlock,
			toggleTheme,
			dismissToast,
			...derived,
		}),
		[unlocked, xp, toasts, devMode, theme, unlock, toggleTheme, dismissToast, derived],
	);

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
