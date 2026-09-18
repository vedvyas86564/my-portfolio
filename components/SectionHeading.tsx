import Reveal from "@/components/Reveal";

type Props = {
	index: string;
	title: string;
	blurb?: string;
	/** Right-aligned status text, e.g. a count. */
	meta?: string;
};

export default function SectionHeading({ index, title, blurb, meta }: Props) {
	return (
		<Reveal className="mb-10">
			<div className="flex items-end justify-between gap-6">
				<div>
					<span className="label">{index}</span>
					<h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
						{title}
					</h2>
				</div>
				{meta && (
					<span className="mono shrink-0 pb-1 text-xs text-ink-3">{meta}</span>
				)}
			</div>
			{blurb && <p className="mt-3 max-w-2xl text-sm text-ink-2">{blurb}</p>}
			<div className="hairline mt-6" />
		</Reveal>
	);
}
