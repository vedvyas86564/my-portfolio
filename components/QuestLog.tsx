"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

import portfolioData from "@/lib/config";
import type { Quest } from "@/lib/types";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useGame } from "@/components/GameProvider";

export default function QuestLog() {
	const { unlock } = useGame();
	// Both roles are current, so both start open.
	const [open, setOpen] = useState<string[]>(portfolioData.quests.map((q) => q.id));

	function toggle(id: string) {
		unlock("deep-dive");
		setOpen((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
	}

	return (
		<section id="quests" className="scroll-mt-24 py-20">
			<SectionHeading
				index="02 / QUEST LOG"
				title="Experience"
				blurb="Two roles, both current. The objectives are what I actually did, numbers and all."
				meta={`${portfolioData.quests.length} active`}
			/>

			<div className="space-y-4">
				{portfolioData.quests.map((quest, index) => (
					<Reveal
						key={quest.id}
						delay={index * 90}
						onReveal={index === 0 ? () => unlock("quests") : undefined}
					>
						<QuestCard
							quest={quest}
							isOpen={open.includes(quest.id)}
							onToggle={() => toggle(quest.id)}
						/>
					</Reveal>
				))}
			</div>
		</section>
	);
}

function QuestCard({
	quest,
	isOpen,
	onToggle,
}: {
	quest: Quest;
	isOpen: boolean;
	onToggle: () => void;
}) {
	return (
		<article className="card overflow-hidden">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={isOpen}
				className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-surface-2/50 sm:p-6"
			>
				<div className="min-w-0 flex-1">
					<div className="flex flex-wrap items-center gap-2.5">
						<span
							className={`mono inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[0.625rem] tracking-wider ${
								quest.status === "active"
									? "border-lime/35 bg-lime/10 text-lime"
									: "border-line bg-surface-2 text-ink-3"
							}`}
						>
							{quest.status === "active" && (
								<span className="animate-blip h-1 w-1 rounded-full bg-lime" />
							)}
							{quest.status === "active" ? "IN PROGRESS" : "COMPLETE"}
						</span>
						<span className="mono text-[0.6875rem] text-ink-3">{quest.date}</span>
					</div>

					<h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">{quest.role}</h3>

					<p className="mt-1 text-sm text-accent">
						{quest.org}
						{quest.orgNote && (
							<span className="text-ink-3"> · {quest.orgNote}</span>
						)}
					</p>

					<p className="mono mt-1.5 inline-flex items-center gap-1.5 text-[0.6875rem] text-ink-3">
						<MapPin className="h-3 w-3" />
						{quest.location}
					</p>

					<p className="mt-4 max-w-2xl text-[0.875rem] leading-relaxed text-ink-2">
						{quest.summary}
					</p>
				</div>

				<ChevronDown
					className={`mt-1 h-4 w-4 shrink-0 text-ink-3 transition-transform duration-300 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>

			<div
				className="grid transition-[grid-template-rows] duration-400 ease-out"
				style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
			>
				<div className="overflow-hidden">
					<div className="border-t border-line px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
						<p className="label mb-4">Objectives</p>

						<ul className="space-y-4">
							{quest.objectives.map((objective, index) => (
								<li key={index} className="flex gap-3.5">
									<span className="mono mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent/30 bg-accent-soft text-[0.5625rem] text-accent">
										{String(index + 1).padStart(2, "0")}
									</span>
									<div className="min-w-0 flex-1">
										<p className="text-[0.875rem] leading-relaxed text-ink-2">
											{objective.text}
										</p>
										{objective.metric && (
											<span className="mono mt-2 inline-block rounded border border-line bg-surface-2 px-2 py-0.5 text-[0.625rem] tracking-wider text-ink">
												{objective.metric}
											</span>
										)}
									</div>
								</li>
							))}
						</ul>

						<div className="mt-6 flex flex-wrap gap-1.5">
							{quest.tags.map((tag) => (
								<span
									key={tag}
									className="mono rounded-md border border-line bg-surface-2 px-2 py-1 text-[0.625rem] text-ink-3"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
