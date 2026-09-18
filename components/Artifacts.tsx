"use client";

import { useState } from "react";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

import portfolioData from "@/lib/config";
import type { Artifact } from "@/lib/types";
import { RARITY } from "@/lib/rarity";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useGame } from "@/components/GameProvider";

export default function Artifacts() {
	const { unlock } = useGame();

	return (
		<section id="artifacts" className="scroll-mt-24 py-20">
			<SectionHeading
				index="03 / ARTIFACTS"
				title="Projects"
				blurb="Three things I built end to end. Rarity is assigned by how hard they were to get right, not by how they look."
				meta={`${portfolioData.artifacts.length} items`}
			/>

			<div className="space-y-4">
				{portfolioData.artifacts.map((artifact, index) => (
					<Reveal
						key={artifact.id}
						delay={index * 90}
						onReveal={index === 0 ? () => unlock("artifacts") : undefined}
					>
						<ArtifactCard artifact={artifact} onExpand={() => unlock("deep-dive")} />
					</Reveal>
				))}
			</div>
		</section>
	);
}

function ArtifactCard({
	artifact,
	onExpand,
}: {
	artifact: Artifact;
	onExpand: () => void;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const rarity = RARITY[artifact.rarity];

	function toggle() {
		if (!isOpen) onExpand();
		setIsOpen((open) => !open);
	}

	return (
		<article className={`card card-hover overflow-hidden ${isOpen ? "border-line-strong" : ""}`}>
			<button
				type="button"
				onClick={toggle}
				aria-expanded={isOpen}
				className="w-full p-5 text-left sm:p-6"
			>
				<div className="flex items-start justify-between gap-4">
					<div className="min-w-0">
						<div className="flex flex-wrap items-center gap-2.5">
							<span
								className={`mono inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[0.625rem] tracking-wider ${rarity.border} ${rarity.bg} ${rarity.text}`}
							>
								<span className={`h-1 w-1 rounded-full ${rarity.dot}`} />
								{rarity.label.toUpperCase()}
							</span>
							<span className="mono text-[0.6875rem] text-ink-3">{artifact.date}</span>
						</div>

						<h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
							{artifact.title}
						</h3>
						<p className="mt-0.5 text-sm text-ink-3">{artifact.subtitle}</p>
					</div>

					<ChevronDown
						className={`mt-1 h-4 w-4 shrink-0 text-ink-3 transition-transform duration-300 ${
							isOpen ? "rotate-180" : ""
						}`}
					/>
				</div>

				<p className="mt-4 max-w-2xl text-[0.875rem] leading-relaxed text-ink-2">
					{artifact.summary}
				</p>

				{/* Headline numbers — always visible, they do the selling. */}
				<dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
					{artifact.readouts.map((readout) => (
						<div key={readout.label} className="bg-surface-2 px-3 py-2.5">
							<dt className="mono text-[0.5625rem] tracking-wider text-ink-3">
								{readout.label.toUpperCase()}
							</dt>
							<dd className="mono mt-1 text-sm text-ink">{readout.value}</dd>
						</div>
					))}
				</dl>
			</button>

			<div
				className="grid transition-[grid-template-rows] duration-400 ease-out"
				style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
			>
				<div className="overflow-hidden">
					<div className="border-t border-line px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
						<ul className="space-y-4">
							{artifact.highlights.map((highlight, index) => (
								<li key={index} className="flex gap-3.5">
									<span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${rarity.dot}`} />
									<div className="min-w-0 flex-1">
										<p className="text-[0.875rem] leading-relaxed text-ink-2">
											{highlight.text}
										</p>
										{highlight.metric && (
											<span className="mono mt-2 inline-block rounded border border-line bg-surface-2 px-2 py-0.5 text-[0.625rem] tracking-wider text-ink">
												{highlight.metric}
											</span>
										)}
									</div>
								</li>
							))}
						</ul>

						<div className="mt-6 flex flex-wrap gap-1.5">
							{artifact.stack.map((tech) => (
								<span
									key={tech}
									className="mono rounded-md border border-line bg-surface-2 px-2 py-1 text-[0.625rem] text-ink-3"
								>
									{tech}
								</span>
							))}
						</div>

						{(artifact.githubLink || artifact.liveLink) && (
							<div className="mt-6 flex flex-wrap gap-3">
								{artifact.githubLink && (
									<a
										href={artifact.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-xs text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
									>
										<Github className="h-3.5 w-3.5" />
										Source
									</a>
								)}
								{artifact.liveLink && (
									<a
										href={artifact.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-xs text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
									>
										<ExternalLink className="h-3.5 w-3.5" />
										Live
									</a>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}
