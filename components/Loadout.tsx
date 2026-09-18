import portfolioData from "@/lib/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Loadout() {
	return (
		<section id="education" className="scroll-mt-24 py-20">
			<SectionHeading index="06 / LOADOUT" title="Education" />

			{portfolioData.education.map((entry) => (
				<Reveal key={entry.degree}>
					<article className="card p-6 sm:p-7">
						<div className="flex flex-wrap items-start justify-between gap-3">
							<div>
								<h3 className="text-lg font-semibold tracking-tight text-ink">
									{entry.degree}
								</h3>
								<p className="mt-1 text-sm text-accent">{entry.institution}</p>
								{entry.school && (
									<p className="text-[0.8125rem] text-ink-3">{entry.school}</p>
								)}
							</div>

							<div className="text-right">
								<p className="mono text-[0.6875rem] text-ink-3">{entry.date}</p>
								{entry.gpa && (
									<p className="mono mt-1.5 inline-block rounded-md border border-accent/30 bg-accent-soft px-2 py-0.5 text-xs text-accent">
										GPA {entry.gpa}
									</p>
								)}
							</div>
						</div>

						<div className="mt-7 grid gap-7 sm:grid-cols-2">
							<div>
								<p className="label mb-3">Completed coursework</p>
								<ul className="space-y-1.5">
									{entry.coursework.map((course) => (
										<li
											key={course}
											className="flex items-center gap-2.5 text-[0.8125rem] text-ink-2"
										>
											<span className="h-1 w-1 shrink-0 rounded-full bg-lime" />
											{course}
										</li>
									))}
								</ul>
							</div>

							{entry.inProgress && (
								<div>
									<p className="label mb-3">In progress</p>
									<ul className="space-y-1.5">
										{entry.inProgress.map((course) => (
											<li
												key={course}
												className="flex items-center gap-2.5 text-[0.8125rem] text-ink-2"
											>
												<span className="animate-blip h-1 w-1 shrink-0 rounded-full bg-accent" />
												{course}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</article>
				</Reveal>
			))}
		</section>
	);
}
