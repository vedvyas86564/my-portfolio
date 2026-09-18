"use client";

import portfolioData from "@/lib/config";
import { RARITY } from "@/lib/rarity";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useGame } from "@/components/GameProvider";

export default function TrophyCase() {
	const { unlock } = useGame();

	const legendaryCount = portfolioData.trophies.filter(
		(t) => t.rarity === "legendary",
	).length;

	return (
		<section id="trophies" className="scroll-mt-24 py-20">
			<SectionHeading
				index="05 / TROPHY CASE"
				title="Earned"
				blurb="These ones aren't unlocked by scrolling — they already happened."
				meta={`${legendaryCount} legendary`}
			/>

			<div className="grid gap-3 sm:grid-cols-2">
				{portfolioData.trophies.map((trophy, index) => {
					const rarity = RARITY[trophy.rarity];

					return (
						<Reveal
							key={trophy.id}
							delay={index * 55}
							onReveal={index === 0 ? () => unlock("trophies") : undefined}
						>
							<article className="card card-hover h-full p-5">
								<div className="flex items-start justify-between gap-3">
									<span
										className={`mono inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[0.625rem] tracking-wider ${rarity.border} ${rarity.bg} ${rarity.text}`}
									>
										<span className={`h-1 w-1 rounded-full ${rarity.dot}`} />
										{rarity.label.toUpperCase()}
									</span>
									<span className="mono shrink-0 text-[0.625rem] text-ink-3">
										{trophy.date}
									</span>
								</div>

								<h3 className="mt-3.5 text-[0.9375rem] font-semibold tracking-tight text-ink">
									{trophy.title}
								</h3>
								<p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-2">
									{trophy.detail}
								</p>
							</article>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
}
