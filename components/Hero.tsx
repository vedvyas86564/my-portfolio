"use client";

import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

import portfolioData from "@/lib/config";
import Reveal from "@/components/Reveal";

const ICONS: Record<string, typeof Github> = {
	GitHub: Github,
	LinkedIn: Linkedin,
};

export default function Hero() {
	return (
		<section id="top" className="pt-16 pb-24 sm:pt-24 sm:pb-32">
			<Reveal>
				<span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1">
					<span className="animate-blip h-1.5 w-1.5 rounded-full bg-lime" />
					<span className="mono text-[0.6875rem] tracking-wider text-lime">
						{portfolioData.status}
					</span>
				</span>
			</Reveal>

			<Reveal delay={60}>
				<h1 className="mt-7 text-[clamp(2.75rem,8vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-ink">
					{portfolioData.name}
				</h1>
			</Reveal>

			<Reveal delay={110}>
				<p className="mono mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-accent">
					<span>{portfolioData.className}</span>
					<span className="text-ink-3">/</span>
					<span className="inline-flex items-center gap-1.5 text-ink-3">
						<MapPin className="h-3.5 w-3.5" />
						{portfolioData.location}
					</span>
				</p>
			</Reveal>

			<Reveal delay={160}>
				<p className="mt-8 max-w-2xl text-xl leading-snug text-ink sm:text-2xl">
					{portfolioData.tagline}
				</p>
			</Reveal>

			<Reveal delay={210}>
				<p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-2">
					{portfolioData.bio}
				</p>
			</Reveal>

			<Reveal delay={260}>
				<div className="mt-9 flex flex-wrap items-center gap-3">
					<a
						href={`mailto:${portfolioData.email}`}
						className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
					>
						<Mail className="h-4 w-4" />
						Get in touch
					</a>

					{portfolioData.links.map((link) => {
						const Icon = ICONS[link.name] ?? Github;
						return (
							<a
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
							>
								<Icon className="h-4 w-4" />
								{link.name}
							</a>
						);
					})}
				</div>
			</Reveal>

			<Reveal delay={340}>
				<a
					href="#stats"
					className="mono mt-16 inline-flex items-center gap-2 text-xs tracking-wider text-ink-3 transition-colors hover:text-accent"
				>
					<ArrowDown className="h-3.5 w-3.5" />
					SCROLL TO EXPLORE — YOU EARN XP FOR IT
				</a>
			</Reveal>
		</section>
	);
}
