"use client";

import portfolioData from "@/lib/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useGame } from "@/components/GameProvider";

const TOTAL_SKILLS = portfolioData.skillTree.reduce(
	(sum, branch) => sum + branch.skills.length,
	0,
);

export default function SkillTree() {
	const { unlock } = useGame();

	return (
		<section id="tree" className="scroll-mt-24 py-20">
			<SectionHeading
				index="04 / SKILL TREE"
				title="Unlocked"
				blurb="Five branches. Nodes light up as you scroll past them."
				meta={`${TOTAL_SKILLS} nodes`}
			/>

			<div className="space-y-8">
				{portfolioData.skillTree.map((branch, branchIndex) => (
					<Reveal
						key={branch.id}
						delay={branchIndex * 80}
						onReveal={branchIndex === 0 ? () => unlock("tree") : undefined}
					>
						<div className="relative pl-6 sm:pl-8">
							{/* The trunk line running down each branch. */}
							<span className="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-accent/50 via-line to-transparent" />
							<span className="absolute -left-[3px] top-1.5 h-[7px] w-[7px] rounded-full bg-accent" />

							<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<h3 className="text-sm font-semibold text-ink">{branch.name}</h3>
								<span className="mono text-[0.625rem] text-ink-3">
									{branch.skills.length} nodes
								</span>
							</div>
							<p className="mt-1 text-[0.8125rem] text-ink-3">{branch.blurb}</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{branch.skills.map((skill, skillIndex) => (
									<Reveal key={skill} delay={skillIndex * 35 + 120}>
										<span className="group inline-flex cursor-default items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-[0.8125rem] text-ink-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:text-ink">
											<span className="h-1.5 w-1.5 rounded-full bg-line-strong transition-colors duration-200 group-hover:bg-accent" />
											{skill}
										</span>
									</Reveal>
								))}
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
