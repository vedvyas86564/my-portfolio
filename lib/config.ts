import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Ved Vyas",
	headline: "Aspiring Innovator | Full-Stack Developer | AI Enthusiast",
	bio: "A results-driven computer science student at University of California Los Angeles with a passion for building disruptive, scalable, and user-centric applications. Eager to leverage modern technologies to solve real-world problems and drive impactful change. Currently seeking high-growth internship opportunities for Summer 2026.",

	// Your contact email
	email: "vedvyas07@ucla.edu",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https://github.com/vedvyas86564/public" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/ved-vyas-4721392ab/" },
		{ name: "Twitter", url: "https" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"Python", "C++", "Java", "Node.js",
		"Nueral Networks", "Pytorch", "Keras", "Pandas"
	],

	// Add your projects here
	projects: [
		{
			title: "Mock DMV",
			description: "Mock DMV for people to test driver's license elgibility",
			stack: ["Java"],
			githubLink: "https://github.com/vedvyas86564/public.git",
			liveLink: "",
		},
		{
			title: "Predicting Double Pendulum Motion",
			description: "Using feedforward neural networks to preduct",
			stack: ["Python", "Pytorch", "Sklearn", "numpy"],
			githubLink: "",
			liveLink: "https://colab.research.google.com/drive/1B_xJHcg8_eflkWbB68t5oSF1Sk11vMNa#scrollTo=dUeHp8evJZun",
		},
		{
			title: "Deca++",
			description: "A web-based tool for visualizing complex data structures and algorithms, built to help students (like me) understand core CS concepts in an interactive way.",
			stack: ["HTML", "React", "JavaScript", "CSS"],
			githubLink: "https://github.com/FontavianFreud/BellHacks-Deca2/tree/main/mhs-journalism-website",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "Software Engineer Intern (Incoming)",
			company: "Big Tech Co / FAANG",
			date: "Summer 202X",
			location: "Menlo Park, CA (Remote)",
			description: "Selected for a highly competitive internship program. Will be joining the [Cloud/AI/Growth] team to work on high-impact, customer-facing features."
		},
		{
			role: "President",
			company: "[Your Vibe-Coding Club Name]",
			date: "Aug 202X - Present",
			location: "[Your University]",
			description: "Grew the organization from 5 to 200+ members by fostering a culture of innovation and 'vibecoding.' Organized tech talks with industry leaders from Google, Meta, and hot startups."
		},
		{
			role: "Teaching Assistant - Intro to CS",
			company: "[Your University]",
			date: "Jan 202X - May 202X",
			location: "[Your University]",
			description: "Mentored 50+ students, held office hours, and graded assignments for foundational computer science concepts. Received a 95% positive feedback rating from students."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "University of California Los Angeles",
			date: "Expected May 2029",
			note: "Minor in Data Science"
		},
		{
			degree: "Best 'Vibe' Hack",
			institution: "[Some Hackathon]",
			date: "Fall 202X",
			note: "Awarded for the project with the slickest UI and best pitch."
		}
	]
};

export default PORTFOLIO_DATA;