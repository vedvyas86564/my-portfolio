"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Trophy, Lock, Check, X, Terminal } from "lucide-react";

import portfolioData from "@/lib/config";
import { useGame } from "@/components/GameProvider";

const NAV = [
	{ href: "#stats", label: "Stats" },
	{ href: "#quests", label: "Quests" },
	{ href: "#artifacts", label: "Projects" },
	{ href: "#tree", label: "Skills" },
	{ href: "#trophies", label: "Trophies" },
];

export default function Hud() {
	const { xp, level, levelTitle, levelProgress, nextThreshold, unlocked, theme, toggleTheme, devMode } =
		useGame();
	const [scrollPct, setScrollPct] = useState(0);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const drawerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onScroll() {
			const height = document.documentElement.scrollHeight - window.innerHeight;
			setScrollPct(height > 0 ? Math.min(1, window.scrollY / height) : 0);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Close the drawer on outside click or Escape.
	useEffect(() => {
		if (!drawerOpen) return;
		function onPointerDown(event: MouseEvent) {
			if (!drawerRef.current?.contains(event.target as Node)) setDrawerOpen(false);
		}
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") setDrawerOpen(false);
		}
		document.addEventListener("mousedown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("mousedown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [drawerOpen]);

	const total = portfolioData.achievements.length;

	return (
		<>
			{/* Scroll progress, hairline across the very top of the viewport. */}
			<div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
				<div
					className="h-full bg-accent transition-[width] duration-150 ease-out"
					style={{ width: `${scrollPct * 100}%` }}
				/>
			</div>

			<header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-xl">
				<div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-5 sm:px-8">
					{/* Identity + level */}
					<a href="#top" className="group flex shrink-0 items-center gap-3">
						<span className="mono flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong bg-surface-2 text-sm font-semibold text-accent">
							VV
						</span>
						<span className="hidden flex-col leading-tight sm:flex">
							<span className="text-sm font-semibold text-ink">{portfolioData.name}</span>
							<span className="mono text-[0.625rem] tracking-wider text-ink-3">
								LVL {level} · {levelTitle.toUpperCase()}
							</span>
						</span>
					</a>

					<nav className="mx-auto hidden items-center gap-1 md:flex">
						{NAV.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="rounded-md px-3 py-1.5 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
							>
								{item.label}
							</a>
						))}
					</nav>

					<div className="ml-auto flex items-center gap-2 md:ml-0">
						{devMode && (
							<span className="mono hidden items-center gap-1.5 rounded-md border border-lime/40 bg-lime/10 px-2 py-1 text-[0.625rem] tracking-wider text-lime sm:flex">
								<Terminal className="h-3 w-3" />
								DEV
							</span>
						)}

						{/* XP bar */}
						<div className="hidden w-32 lg:block">
							<div className="mono mb-1 flex justify-between text-[0.625rem] text-ink-3">
								<span>XP</span>
								<span>{nextThreshold ? `${xp}/${nextThreshold}` : `${xp} MAX`}</span>
							</div>
							<div className="relative h-1.5 overflow-hidden rounded-full bg-surface-2">
								<div
									className={`h-full rounded-full bg-gradient-to-r from-accent to-violet transition-[width] duration-700 ease-out ${
										levelProgress > 0 && levelProgress < 1 ? "xp-sheen relative overflow-hidden" : ""
									}`}
									style={{ width: `${Math.max(levelProgress * 100, xp > 0 ? 6 : 0)}%` }}
								/>
							</div>
						</div>

						<button
							type="button"
							onClick={() => setDrawerOpen((open) => !open)}
							aria-expanded={drawerOpen}
							aria-label="Achievements"
							className="flex items-center gap-1.5 rounded-md border border-line bg-surface-2 px-2.5 py-1.5 text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
						>
							<Trophy className="h-4 w-4" />
							<span className="mono text-xs">
								{unlocked.length}/{total}
							</span>
						</button>

						<button
							type="button"
							onClick={toggleTheme}
							aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
							className="rounded-md border border-line bg-surface-2 p-2 text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
						>
							{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
					</div>
				</div>

				{drawerOpen && <AchievementDrawer ref={drawerRef} onClose={() => setDrawerOpen(false)} />}
			</header>
		</>
	);
}

function AchievementDrawer({
	ref,
	onClose,
}: {
	ref: React.Ref<HTMLDivElement>;
	onClose: () => void;
}) {
	const { unlocked, xp, levelTitle } = useGame();

	return (
		<div
			ref={ref}
			className="animate-float-up absolute right-4 top-[calc(100%+0.5rem)] w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-line bg-surface p-4 shadow-2xl sm:right-8"
		>
			<div className="flex items-start justify-between">
				<div>
					<h3 className="text-sm font-semibold text-ink">Your progress</h3>
					<p className="mono mt-0.5 text-[0.625rem] tracking-wider text-ink-3">
						{xp} XP · {levelTitle.toUpperCase()}
					</p>
				</div>
				<button
					type="button"
					onClick={onClose}
					aria-label="Close achievements"
					className="rounded-md p-1 text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
				>
					<X className="h-4 w-4" />
				</button>
			</div>

			<ul className="mt-4 space-y-1.5">
				{portfolioData.achievements.map((achievement) => {
					const isUnlocked = unlocked.includes(achievement.id);
					const masked = achievement.secret && !isUnlocked;

					return (
						<li
							key={achievement.id}
							className={`flex items-center gap-3 rounded-lg px-2.5 py-2 transition-colors ${
								isUnlocked ? "bg-surface-2" : ""
							}`}
						>
							<span
								className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
									isUnlocked
										? "border-lime/40 bg-lime/10 text-lime"
										: "border-line text-ink-3"
								}`}
							>
								{isUnlocked ? <Check className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
							</span>
							<span className="min-w-0 flex-1">
								<span
									className={`block truncate text-xs font-medium ${
										isUnlocked ? "text-ink" : "text-ink-3"
									}`}
								>
									{masked ? "Hidden achievement" : achievement.title}
								</span>
								<span className="block truncate text-[0.6875rem] text-ink-3">
									{masked ? "Keep poking around." : achievement.hint}
								</span>
							</span>
							<span className="mono shrink-0 text-[0.625rem] text-ink-3">
								+{achievement.xp}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
