"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
	children: React.ReactNode;
	/** Stagger, in ms. */
	delay?: number;
	className?: string;
	as?: "div" | "li" | "section" | "article";
	/** Fires once, the first time the element is at least partly on screen. */
	onReveal?: () => void;
};

/**
 * Fades content up as it scrolls into view, and optionally reports the first
 * sighting so the game layer can award an achievement for it.
 */
export default function Reveal({
	children,
	delay = 0,
	className = "",
	as: Tag = "div",
	onReveal,
}: RevealProps) {
	const ref = useRef<HTMLElement>(null);
	const [seen, setSeen] = useState(false);
	const callback = useRef(onReveal);

	// Keep the latest callback without re-running the observer effect.
	useEffect(() => {
		callback.current = onReveal;
	}, [onReveal]);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					setSeen(true);
					callback.current?.();
					observer.disconnect();
				}
			},
			{ threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<Tag
			ref={ref as never}
			className={`reveal ${seen ? "is-in" : ""} ${className}`}
			style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
		>
			{children}
		</Tag>
	);
}
