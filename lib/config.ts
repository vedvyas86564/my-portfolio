import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Ved Vyas",
	headline: "UCLA Statistics and Data Science Student | Full-Stack & AI Developer | Community Educator",
	bio: "I'm a UCLA Statistics and Data Science major passionate about building accessible, data-driven, and community-oriented technology. From developing scalable applications to mentoring young students in computer science, I strive to combine innovation with social impact. Currently seeking software engineering or AI research internships for Summer 2026.",

	email: "vedvyas07@ucla.edu",

	links: [
		{ name: "GitHub", url: "https://github.com/vedvyas86564/public" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/ved-vyas-4721392ab/" }
	],

	skills: [
		"Python", "C++", "Java", "JavaScript", "React", "Node.js",
		"PyTorch", "Pandas", "NumPy", "Keras", "Machine Learning",
		"Data Visualization"
	],

	projects: [
		{
			title: "Mock DMV System",
			description: "Developed a mock DMV platform to help students check driver’s license eligibility by integrating XML and JSON data via Jackson. Designed to simulate a full backend workflow with Tomcat and Java servlets.",
			stack: ["Java", "Tomcat", "Jackson", "XML", "HTML/CSS"],
			githubLink: "https://github.com/vedvyas86564/public",
			liveLink: "",
		},
		{
			title: "Predicting Double Pendulum Motion",
			description: "Trained a feedforward neural network using PyTorch to model and predict chaotic double pendulum behavior. Focused on numerical simulation, loss optimization, and model evaluation.",
			stack: ["Python", "PyTorch", "scikit-learn", "NumPy"],
			githubLink: "",
			liveLink: "https://colab.research.google.com/drive/1B_xJHcg8_eflkWbB68t5oSF1Sk11vMNa",
		},
		{
			title: "Deca++",
			description: "Created a web-based platform to help DECA competitors prepare for conferences through personalized insights from past winners. Built at BellHacks using React and Firebase.",
			stack: ["React", "JavaScript", "HTML", "CSS", "Firebase"],
			githubLink: "https://github.com/FontavianFreud/BellHacks-Deca2/tree/main/mhs-journalism-website",
			liveLink: "",
		},
	],

	experience: [
		{
			role: "President",
			company: "Milpitas High School Tutoring Academy",
			date: "Aug 2024 – May 2025",
			location: "Milpitas, CA",
			description:
				"Led a districtwide tutoring initiative connecting high school tutors with elementary and middle school students. Promoted inclusive teaching practices and developed cultural responsiveness training to ensure equitable education access.",
		},
		{
			role: "Participant",
			company: "UC Berkeley ROAR Academy",
			date: "Summer 2024",
			location: "Berkeley, CA",
			description:
				"Learned to apply machine learning and reinforcement learning techniques to autonomous vehicle control. Developed and tested self-driving algorithms using Python and neural networks.",
		},
		{
			role: "Hackathon Developer",
			company: "Bay Area Hackathons",
			date: "2023 – 2024",
			location: "San Francisco Bay Area",
			description:
				"Built collaborative projects to address community issues through technology. Co-created a space for students to explore how coding can drive social good and innovation.",
		},
	],

	education: [
		{
			degree: "B.S. in Stats and Data Science (Intended switch to Computer Science)",
			institution: "University of California, Los Angeles",
			date: "Expected May 2029",
			note: "Relevant Coursework: Data Structures, Algorithms, Linear Algebra, Machine Learning",
		},
		{
		degree: "High School Diploma",
		institution: "Milpitas High School",
		date: "Graduated May 2025",
		note: "President of Milpitas High School Tutoring Academy; DECA competitor and hackathon participant.",
		},
	],
};

export default PORTFOLIO_DATA;
