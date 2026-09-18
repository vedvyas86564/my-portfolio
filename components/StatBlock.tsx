"use client";

import { useState } from "react";

import portfolioData from "@/lib/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useGame } from "@/components/GameProvider";

export default function StatBlock() {
	const { unlock } = useGame();
	const [active, setActive] = useState<string | null>(null);

	return (
		<section id="stats" className="scroll-mt-24 py-20">
			<SectionHeading
				index="01 / ATTRIBUTES"
				title="The build"
				blurb="Six attributes, each one backed by something that actually shipped. Hover or tap a row for the receipt."
				meta={`${portfolioData.stats.length} stats`}
			/>

			<div className="grid gap-3 sm:grid-cols-2">
				{portfolioData.stats.map((stat, index) => {
					const isActive = active === stat.key;

					return (
						<Reveal
							key={stat.key}
							delay={index * 70}
							onReveal={index === 0 ? () => unlock("stats") : undefined}
						>
							<button
								type="button"
								onMouseEnter={() => setActive(stat.key)}
								onMouseLeave={() => setActive(null)}
								onFocus={() => setActive(stat.key)}
								onBlur={() => setActive(null)}
								onClick={() => setActive(isActive ? null : stat.key)}
								aria-expanded={isActive}
								className="card card-hover w-full p-5 text-left"
							>
								<div className="flex items-baseline justify-between gap-4">
									<span className="text-sm font-medium text-ink">{stat.label}</span>
									<span className="mono text-xs text-accent">{stat.value}</span>
								</div>

								<div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
									<div
										className="h-full rounded-full bg-gradient-to-r from-accent to-violet transition-[width] duration-1000 ease-out"
										style={{ width: `${stat.value}%` }}
									/>
								</div>

								<div
									className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
									style={{
										gridTemplateRows: isActive ? "1fr" : "0fr",
										opacity: isActive ? 1 : 0,
									}}
								>
									<p className="overflow-hidden text-[0.8125rem] leading-relaxed text-ink-2">
										<span className="block pt-3">{stat.evidence}</span>
									</p>
								</div>
							</button>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
}
