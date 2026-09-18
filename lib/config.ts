import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Ved Vyas",
	handle: "vedvyas86564",
	className: "AI / Backend Engineer",
	tagline: "I build search systems that can show their work.",
	location: "Los Angeles, CA",
	email: "vedvyas07@g.ucla.edu",
	status: "Looking for a SWE or AI internship, Summer 2027",
	bio: [
		"I'm a CS student at UCLA. Most of what I do right now is the matching and embedding service behind the Student Innovation Hub, which is less exciting than it sounds. It's schema design and index tuning, plus a lot of logging.",
		"Last summer I wrote a decoder-only transformer from scratch in JAX because I wanted to see where the math actually happens. In April my team won LAHacks with a camera platform we put together in 36 hours.",
	],

	links: [
		{ name: "GitHub", url: "https://github.com/vedvyas86564", label: "vedvyas86564" },
		{ name: "LinkedIn", url: "https://linkedin.com/in/vedvyas07", label: "vedvyas07" },
	],

	// Each number is backed by something real. The evidence string is the receipt.
	stats: [
		{
			key: "retrieval",
			label: "Retrieval & Search",
			value: 92,
			evidence:
				"Titan embeddings at 1,024 dimensions, kept in Postgres with pgvector. I tuned the IVFFlat index and built a RAG index of 4,149 embeddings that serves top-10 results.",
		},
		{
			key: "backend",
			label: "Backend & APIs",
			value: 88,
			evidence:
				"A documented REST service that hands back ranked cards with scores and the reasons behind them. Median response is 5.66 ms.",
		},
		{
			key: "observability",
			label: "Debugging & Observability",
			value: 86,
			evidence:
				"I caught a retrieval bug that threw no errors at all. The only reason I found it was logging I had already added for latency and recall.",
		},
		{
			key: "ml",
			label: "AI / ML Systems",
			value: 84,
			evidence:
				"A decoder-only transformer with 10.65M parameters, written by hand in JAX. No framework doing the hard parts for me.",
		},
		{
			key: "infra",
			label: "Systems & Infra",
			value: 80,
			evidence:
				"AWS RDS, nginx behind TLS, Docker, Linux deploys. I also held WebSocket fan-out under 3 seconds with several streams running at once.",
		},
		{
			key: "leadership",
			label: "Leadership & Teaching",
			value: 90,
			evidence:
				"I wrote a nine-week AI systems curriculum for a 50-fellow cohort. I also help run the mentorship program that pairs 50+ students with alumni mentors.",
		},
	],

	quests: [
		{
			id: "ucla-dts",
			role: "AI / Backend Engineer",
			org: "UCLA Division of Technology Services",
			orgNote: "Student Innovation Hub",
			date: "Apr 2026 to now",
			location: "Los Angeles, CA",
			status: "active",
			summary:
				"I own the matching and embedding services that connect students to real university projects, plus the logging that keeps them honest.",
			objectives: [
				{
					text: "Matching used to happen by hand. I replaced it with a ranked model covering 40+ live projects and 30 departments. It weighs problem area at 0.40, skill need at 0.25, semantic similarity at 0.20, and readiness at 0.15, and every match comes back with that breakdown attached so nobody has to guess why they got it.",
					metric: "5.66 ms median",
				},
				{
					text: "New projects index themselves now. I built the embedding service on AWS, writing 1,024-dimensional Titan embeddings into Postgres on RDS with pgvector. There's a backfill script too, and it skips records that haven't changed, so you can run it twice without breaking anything.",
					metric: "1,024-d embeddings",
				},
				{
					text: "One regression threw no errors at all. Results just quietly got worse. It turned out the IVFFlat index was set to 100 lists over 37 vectors. I only caught it because I had added latency and recall logging, and now there's a check that ties list count to how big the table actually is.",
					metric: "100 lists / 37 vectors",
				},
				{
					text: "The platform team kept getting stuck waiting on scoring internals, so I shipped the whole thing as a documented REST API that returns ranked cards with scores, matched tags, and reasons. Two-week sprints, against whatever the product lead had prioritized.",
				},
			],
			tags: ["Python", "PostgreSQL", "pgvector", "AWS", "REST APIs", "Agile"],
		},
		{
			id: "bse",
			role: "Partnership Lead & AI Curriculum Co-Lead",
			org: "Bruin Software Engineers",
			orgNote: "300+ member student engineering org",
			date: "Jan 2026 to now",
			location: "Los Angeles, CA",
			status: "active",
			summary:
				"I teach transformers to people who have never trained a model, and help connect them with alumni who have.",
			objectives: [
				{
					text: "I teach transformer internals to 8 fellows who came in having never touched ML. We start at tokenization and work up through attention and parameter counting. It's part of a nine-week AI systems curriculum I wrote for BSE's 50-fellow Fall 2026 Tech Fellowship.",
					metric: "9-week curriculum",
				},
				{
					text: "I help run the mentorship program. It pairs 50+ students with alumni mentors, matched on technical interest, career goals, and industry background.",
					metric: "50+ students paired",
				},
			],
			tags: ["Teaching", "Transformers", "Mentorship", "Program Design"],
		},
	],

	artifacts: [
		{
			id: "sentinel",
			title: "Sentinel AI",
			subtitle: "Real-time camera intelligence",
			rarity: "legendary",
			date: "Apr 2026",
			stack: ["Python", "FastAPI", "WebSockets", "MongoDB", "Linux", "nginx"],
			summary:
				"A camera platform that reads live streams and flags events in under three seconds. It can also prove nothing was tampered with, and the footage still never goes public.",
			highlights: [
				{
					text: "We won LAHacks 2026 against 300+ teams and more than 1,000 hackers. The thing actually worked by the end of the 36 hours, reading RTSP, MJPEG, and HTTP streams.",
					metric: "1st / 300+ teams",
				},
				{
					text: "I owned the backend microservices and kept latency under 3 seconds with several streams going at once. That meant FastAPI, WebSocket fan-out, a dual-transport stream manager, a 60-frame rolling buffer, and a 4-stage event pipeline, all running on Linux behind nginx with TLS.",
					metric: "< 3s end-to-end",
				},
				{
					text: "Video stays in private storage. Only SHA-256 event hashes go to the public ledger, so anyone can check that nothing was altered without ever watching the footage.",
				},
			],
			readouts: [
				{ label: "Build time", value: "36 h" },
				{ label: "Event latency", value: "< 3 s" },
				{ label: "Stream protocols", value: "3" },
				{ label: "Pipeline stages", value: "4" },
			],
		},
		{
			id: "transformer",
			title: "Decoder-Only Transformer",
			subtitle: "Written from scratch in JAX",
			rarity: "epic",
			date: "Jul to Aug 2026",
			stack: ["JAX", "NumPy", "Python"],
			summary:
				"No Hugging Face. No Flax. I wrote every layer myself because I wanted to know exactly where the arithmetic happens.",
			highlights: [
				{
					text: "10.65M parameters, 6 layers, 6 attention heads, d_model 384. It gets 99% on 3-digit addition. I wrote the architecture and the training loop myself in JAX, with nothing high-level doing the work for me.",
					metric: "99% accuracy",
				},
				{
					text: "Every layer is by hand, including tokenization, positional encoding, layer normalization, and residual connections. Then I threw out the Python-level loops and vectorized attention and loss with jax.jit.",
					metric: "10.65M params",
				},
			],
			readouts: [
				{ label: "Parameters", value: "10.65 M" },
				{ label: "Layers", value: "6" },
				{ label: "Heads", value: "6" },
				{ label: "d_model", value: "384" },
			],
		},
		{
			id: "memory-engine",
			title: "Team Memory Engine",
			subtitle: "RAG search over team history",
			rarity: "rare",
			date: "Jan to Mar 2026",
			stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "React"],
			summary:
				"Every answer points back to the message it came from. The retrieval layer is the product here, not a black box sitting behind one.",
			highlights: [
				{
					text: "7,477 messages across Slack and GitHub, all searchable. I parsed 392 threads into chunked documents and generated 4,149 embeddings, served as top-10 semantic retrieval over a 4-table schema with an IVFFlat index.",
					metric: "7,477 messages",
				},
				{
					text: "Every answer cites the messages it came from. The React front end talks to 6 FastAPI endpoints covering ingestion, query, listing, and extraction.",
					metric: "6 endpoints",
				},
			],
			readouts: [
				{ label: "Messages", value: "7,477" },
				{ label: "Threads", value: "392" },
				{ label: "Embeddings", value: "4,149" },
				{ label: "Retrieval", value: "top-10" },
			],
		},
	],

	skillTree: [
		{
			id: "languages",
			name: "Languages",
			blurb: "What I actually type in.",
			skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
		},
		{
			id: "systems",
			name: "Systems & Infrastructure",
			blurb: "Getting it running somewhere that isn't my laptop.",
			skills: [
				"Unix/Linux",
				"AWS (RDS, Titan)",
				"nginx",
				"TLS",
				"Git/GitHub",
				"Docker",
				"REST APIs",
				"Microservices",
				"WebSockets",
			],
		},
		{
			id: "data",
			name: "Data & Storage",
			blurb: "Where most of my retrieval bugs turn out to live.",
			skills: [
				"PostgreSQL",
				"pgvector",
				"MongoDB",
				"Schema design",
				"ANN indexing (IVFFlat)",
			],
		},
		{
			id: "ai",
			name: "AI / ML & Retrieval",
			blurb: "Built up from the primitives, not down from an API.",
			skills: [
				"Transformers",
				"Embeddings",
				"Semantic search",
				"RAG",
				"LLMs",
				"PyTorch",
				"JAX",
				"NumPy",
			],
		},
		{
			id: "practices",
			name: "Practices",
			blurb: "How the work stays correct after I ship it.",
			skills: [
				"Data structures & algorithms",
				"Agile/Scrum",
				"Code review",
				"Unit testing",
				"Debugging",
				"Observability",
			],
		},
	],

	trophies: [
		{
			id: "lahacks",
			title: "LAHacks 2026 Champion",
			detail:
				"First out of 300+ teams and more than 1,000 hackers. We built a working real-time camera platform in 36 hours.",
			date: "Apr 2026",
			rarity: "legendary",
		},
		{
			id: "mentorship",
			title: "Mentorship at Scale",
			detail:
				"I help run the Bruin Software Engineers mentorship program. It pairs 50+ students with alumni mentors based on technical interest, career goals, and industry background.",
			date: "2026",
			rarity: "epic",
		},
		{
			id: "ghost-index",
			title: "Ghost in the Index",
			detail:
				"A retrieval bug that threw no errors. The IVFFlat index had 100 lists sitting over 37 vectors. Only the latency and recall logging gave it away.",
			date: "2026",
			rarity: "epic",
		},
		{
			id: "from-scratch",
			title: "99% From Scratch",
			detail:
				"10.65M parameters in JAX, written by hand down to the layer norm. 99% on 3-digit addition.",
			date: "Aug 2026",
			rarity: "epic",
		},
		{
			id: "median",
			title: "5.66 ms Median",
			detail:
				"Ranked matching across 40+ projects and 30 departments, and you can still see why any given score came out the way it did.",
			date: "2026",
			rarity: "epic",
		},
		{
			id: "curriculum",
			title: "Curriculum Author",
			detail:
				"A nine-week AI systems curriculum for a 50-fellow cohort. I teach the transformer internals to 8 fellows who arrived with no ML background.",
			date: "2026",
			rarity: "rare",
		},
		{
			id: "gpa",
			title: "3.94 / 4.00",
			detail: "B.S. Computer Science at UCLA Samueli School of Engineering.",
			date: "Ongoing",
			rarity: "rare",
		},
		{
			id: "indexed",
			title: "7,477 Messages Indexed",
			detail:
				"392 threads turned into 4,149 embeddings, with every answer pointing back to the message it came from.",
			date: "Mar 2026",
			rarity: "rare",
		},
	],

	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "University of California, Los Angeles",
			school: "Samueli School of Engineering",
			date: "Expected May 2028",
			location: "Los Angeles, CA",
			gpa: "3.94 / 4.00",
			coursework: [
				"Data Structures",
				"Algorithms",
				"Object-Oriented Programming (Java/C++)",
				"Computer Systems",
				"Discrete Mathematics",
				"Machine Learning",
			],
			inProgress: [
				"Algorithms & Complexity (CS180)",
				"Software Construction & Unix/Linux Tooling (CS35L)",
				"Probability",
			],
		},
	],

	// Unlocked by the visitor as they explore. Kept light on purpose.
	achievements: [
		{ id: "boot", title: "Boot Sequence", hint: "Load the page.", xp: 10 },
		{ id: "stats", title: "Read the Build", hint: "Get down to the stats.", xp: 15 },
		{ id: "quests", title: "Quest Log Opened", hint: "Reach the experience section.", xp: 20 },
		{ id: "artifacts", title: "Artifact Inspected", hint: "Reach the projects.", xp: 20 },
		{ id: "tree", title: "Skill Tree Traversed", hint: "Reach the skill tree.", xp: 25 },
		{ id: "trophies", title: "Trophy Case Viewed", hint: "Reach the trophy case.", xp: 25 },
		{ id: "deep-dive", title: "Deep Dive", hint: "Open up a quest or a project.", xp: 30 },
		{ id: "theme", title: "Light Switch", hint: "Flip the theme.", xp: 15, secret: true },
		{ id: "konami", title: "↑ ↑ ↓ ↓ ← → ← → B A", hint: "You know the one.", xp: 60, secret: true },
		{ id: "cleared", title: "100% Cleared", hint: "Visit every section.", xp: 80 },
	],

	levels: [
		{ threshold: 0, title: "Visitor" },
		{ threshold: 45, title: "Scout" },
		{ threshold: 100, title: "Analyst" },
		{ threshold: 165, title: "Recruiter" },
		{ threshold: 235, title: "Insider" },
		{ threshold: 300, title: "Core Contributor" },
	],
};

export default PORTFOLIO_DATA;
