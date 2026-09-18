export type Rarity = "common" | "rare" | "epic" | "legendary";

/** A single résumé bullet, optionally with the number that makes it land. */
export type Beat = {
	text: string;
	metric?: string;
};

export type Stat = {
	key: string;
	label: string;
	/** 0–100, used for the bar width. */
	value: number;
	/** The real evidence behind the number. */
	evidence: string;
};

export type Quest = {
	id: string;
	role: string;
	org: string;
	orgNote?: string;
	date: string;
	location: string;
	status: "active" | "complete";
	summary: string;
	objectives: Beat[];
	tags: string[];
};

export type Artifact = {
	id: string;
	title: string;
	subtitle: string;
	rarity: Rarity;
	date: string;
	stack: string[];
	summary: string;
	highlights: Beat[];
	/** Headline numbers shown as a stat strip on the card. */
	readouts: { label: string; value: string }[];
	githubLink?: string;
	liveLink?: string;
};

export type SkillBranch = {
	id: string;
	name: string;
	blurb: string;
	skills: string[];
};

export type Trophy = {
	id: string;
	title: string;
	detail: string;
	date: string;
	rarity: Rarity;
};

export type EducationEntry = {
	degree: string;
	institution: string;
	school?: string;
	date: string;
	location: string;
	gpa?: string;
	coursework: string[];
	inProgress?: string[];
};

/** An achievement the *visitor* unlocks by exploring the site. */
export type VisitorAchievement = {
	id: string;
	title: string;
	hint: string;
	xp: number;
	/** Secret achievements stay masked until unlocked. */
	secret?: boolean;
};

export type Portfolio = {
	name: string;
	handle: string;
	className: string;
	tagline: string;
	location: string;
	email: string;
	status: string;
	bio: string[];
	links: { name: string; url: string; label: string }[];
	stats: Stat[];
	quests: Quest[];
	artifacts: Artifact[];
	skillTree: SkillBranch[];
	trophies: Trophy[];
	education: EducationEntry[];
	achievements: VisitorAchievement[];
	levels: { threshold: number; title: string }[];
};
