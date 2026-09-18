import type { Rarity } from "@/lib/types";

/** One place to keep rarity styling consistent across cards, trophies and chips. */
export const RARITY: Record<
	Rarity,
	{ label: string; text: string; border: string; bg: string; dot: string }
> = {
	common: {
		label: "Common",
		text: "text-ink-2",
		border: "border-line",
		bg: "bg-surface-2",
		dot: "bg-ink-3",
	},
	rare: {
		label: "Rare",
		text: "text-accent",
		border: "border-accent/35",
		bg: "bg-accent-soft",
		dot: "bg-accent",
	},
	epic: {
		label: "Epic",
		text: "text-violet",
		border: "border-violet/35",
		bg: "bg-violet/10",
		dot: "bg-violet",
	},
	legendary: {
		label: "Legendary",
		text: "text-gold",
		border: "border-gold/40",
		bg: "bg-gold/10",
		dot: "bg-gold",
	},
};
