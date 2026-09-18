"use client";

import { useEffect } from "react";
import { Trophy, ArrowUp } from "lucide-react";

import { useGame, type Toast } from "@/components/GameProvider";

export default function Toasts() {
	const { toasts, dismissToast } = useGame();

	return (
		<div
			aria-live="polite"
			className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-2 p-4 sm:inset-x-auto sm:right-6 sm:items-end"
		>
			{toasts.map((toast) => (
				<ToastCard key={toast.key} toast={toast} onDone={() => dismissToast(toast.key)} />
			))}
		</div>
	);
}

function ToastCard({ toast, onDone }: { toast: Toast; onDone: () => void }) {
	useEffect(() => {
		const timer = setTimeout(onDone, 4200);
		return () => clearTimeout(timer);
		// onDone is stable per toast key.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toast.key]);

	return (
		<div className="animate-toast-in pointer-events-auto w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-line-strong bg-surface shadow-2xl">
			<div className="flex items-center gap-3 p-3.5">
				<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent-soft text-accent">
					{toast.levelUp ? <ArrowUp className="h-4 w-4" /> : <Trophy className="h-4 w-4" />}
				</span>
				<div className="min-w-0 flex-1">
					<p className="mono text-[0.625rem] tracking-[0.14em] text-accent">
						{toast.levelUp ? "LEVEL UP" : "ACHIEVEMENT UNLOCKED"}
					</p>
					<p className="truncate text-sm font-medium text-ink">
						{toast.levelUp ?? toast.title}
					</p>
				</div>
				<span className="mono shrink-0 text-xs text-lime">+{toast.xp}</span>
			</div>
			<div className="h-0.5 w-full bg-surface-2">
				<div className="animate-toast-timer h-full w-full bg-accent/60" />
			</div>
		</div>
	);
}
