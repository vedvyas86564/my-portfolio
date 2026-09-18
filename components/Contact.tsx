"use client";

import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

import portfolioData from "@/lib/config";
import Reveal from "@/components/Reveal";
import { useGame } from "@/components/GameProvider";

const ICONS: Record<string, typeof Github> = {
	GitHub: Github,
	LinkedIn: Linkedin,
};

export default function Contact() {
	const { xp, level, levelTitle, unlocked } = useGame();
	const [copied, setCopied] = useState(false);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(portfolioData.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			/* clipboard blocked, but the mailto link still works */
		}
	}

	return (
		<section id="contact" className="scroll-mt-24 py-20">
			<Reveal>
				<div className="card overflow-hidden">
					{/* Terminal chrome */}
					<div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
						<span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
						<span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
						<span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
						<span className="mono ml-2 text-[0.625rem] tracking-wider text-ink-3">
							contact.sh
						</span>
					</div>

					<div className="p-6 sm:p-8">
						<p className="mono text-[0.8125rem] text-ink-3">
							<span className="text-lime">➜</span> ~ whoami
						</p>
						<p className="mono mt-1 text-[0.8125rem] text-ink">{portfolioData.handle}</p>

						<p className="mono mt-4 text-[0.8125rem] text-ink-3">
							<span className="text-lime">➜</span> ~ cat session.log
						</p>
						<p className="mono mt-1 text-[0.8125rem] text-ink-2">
							level {level} · {levelTitle.toLowerCase()} · {xp} xp ·{" "}
							{unlocked.length}/{portfolioData.achievements.length} achievements
							<span className="animate-caret ml-0.5 text-accent">█</span>
						</p>

						{/* Only rendered once the Konami code has been entered. */}
						<div className="dev-only">
							<p className="mono mt-4 text-[0.8125rem] text-ink-3">
								<span className="text-lime">➜</span> ~ cat .secret
							</p>
							<p className="mono mt-1 text-[0.8125rem] text-lime">
								konami accepted. you read the whole page, which is more than most people
								do. say hi and mention up up down down.
							</p>
						</div>

						<h2 className="mt-9 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
							Say hi.
						</h2>
						<p className="mt-3 max-w-lg text-[0.9375rem] leading-relaxed text-ink-2">
							I&apos;m looking for a software engineering or AI internship for Summer 2027.
							I&apos;ll also happily talk about index tuning with anyone who asks.
						</p>

						<div className="mt-7 flex flex-wrap items-center gap-3">
							<a
								href={`mailto:${portfolioData.email}`}
								className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
							>
								<Mail className="h-4 w-4" />
								{portfolioData.email}
							</a>

							<button
								type="button"
								onClick={copyEmail}
								aria-label="Copy email address"
								className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2.5 text-sm text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
							>
								{copied ? (
									<>
										<Check className="h-4 w-4 text-lime" />
										Copied
									</>
								) : (
									<>
										<Copy className="h-4 w-4" />
										Copy
									</>
								)}
							</button>

							{portfolioData.links.map((link) => {
								const Icon = ICONS[link.name] ?? Github;
								return (
									<a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-4 py-2.5 text-sm text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
									>
										<Icon className="h-4 w-4" />
										{link.label}
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
