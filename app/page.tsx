import portfolioData from "@/lib/config";
import { GameProvider } from "@/components/GameProvider";
import Hud from "@/components/Hud";
import Toasts from "@/components/Toasts";
import Hero from "@/components/Hero";
import StatBlock from "@/components/StatBlock";
import QuestLog from "@/components/QuestLog";
import Artifacts from "@/components/Artifacts";
import SkillTree from "@/components/SkillTree";
import TrophyCase from "@/components/TrophyCase";
import Loadout from "@/components/Loadout";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<GameProvider>
			<Hud />

			<main className="mx-auto max-w-5xl px-5 sm:px-8">
				<Hero />
				<StatBlock />
				<QuestLog />
				<Artifacts />
				<SkillTree />
				<TrophyCase />
				<Loadout />
				<Contact />
			</main>

			<footer className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
				<div className="hairline mb-6" />
				<div className="flex flex-wrap items-center justify-between gap-3">
					<p className="mono text-[0.6875rem] text-ink-3">
						© {new Date().getFullYear()} {portfolioData.name}
					</p>
					<p className="mono text-[0.6875rem] text-ink-3">
						Built with Next.js and Tailwind. No analytics.{" "}
						<span className="text-ink-3/70">Try the konami code.</span>
					</p>
				</div>
			</footer>

			<Toasts />
		</GameProvider>
	);
}
