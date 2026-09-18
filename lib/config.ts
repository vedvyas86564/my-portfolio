import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Ved Vyas",
	handle: "vedvyas86564",
	className: "AI / Backend Engineer",
	tagline: "I build retrieval systems that can explain themselves.",
	location: "Los Angeles, CA",
	email: "vedvyas07@g.ucla.edu",
	status: "Open to SWE / AI internships — Summer 2027",
	bio: "CS at UCLA Samueli, building the ranked-matching and embedding services behind UCLA's Student Innovation Hub. I like the unglamorous half of AI: schema design, index tuning, and the logging that catches a regression nothing else reports. Most recently I wrote a decoder-only transformer from scratch in JAX, and won LAHacks 2026 with a real-time camera platform built in 36 hours.",

	links: [
		{ name: "GitHub", url: "https://github.com/vedvyas86564", label: "vedvyas86564" },
		{ name: "LinkedIn", url: "https://linkedin.com/in/vedvyas07", label: "vedvyas07" },
	],

	// Each number is backed by something real — the evidence string is the receipt.
	stats: [
		{
			key: "retrieval",
			label: "Retrieval & Search",
			value: 92,
			evidence:
				"1,024-d Titan embeddings in Postgres/pgvector, IVFFlat tuning, and a 4,149-embedding RAG index served at top-10.",
		},
		{
			key: "backend",
			label: "Backend & APIs",
			value: 88,
			evidence:
				"Documented REST service returning ranked cards with scores, matched tags and reasons — 5.66 ms median server-side.",
		},
		{
			key: "observability",
			label: "Debugging & Observability",
			value: 86,
			evidence:
				"Caught a silent retrieval regression that threw zero errors, using query-level latency and recall logging I had added myself.",
		},
		{
			key: "ml",
			label: "AI / ML Systems",
			value: 84,
			evidence:
				"10.65M-parameter decoder-only transformer written by hand in JAX — every layer, no framework abstractions.",
		},
		{
			key: "infra",
			label: "Systems & Infra",
			value: 80,
			evidence:
				"AWS RDS, nginx behind TLS, Docker, Linux deploys, and WebSocket fan-out holding sub-3s latency under concurrent streams.",
		},
		{
			key: "leadership",
			label: "Leadership & Teaching",
			value: 90,
			evidence:
				"Closed a 300+ member org's first corporate sponsor, designed a nine-week AI curriculum, and scaled mentorship to 50+ students.",
		},
	],

	quests: [
		{
			id: "ucla-dts",
			role: "AI / Backend Engineer",
			org: "UCLA Division of Technology Services",
			orgNote: "Student Innovation Hub",
			date: "Apr 2026 — Present",
			location: "Los Angeles, CA",
			status: "active",
			summary:
				"Own the matching and embedding services that connect students to live university projects — and the observability that keeps them honest.",
			objectives: [
				{
					text: "Replaced manual review with automated ranked matching across 40+ live projects and 30 departments, designing a hybrid scoring model (0.40 problem area, 0.25 skill need, 0.20 semantic, 0.15 readiness) that returns every match with a transparent score breakdown.",
					metric: "5.66 ms median",
				},
				{
					text: "Automated indexing of every new project by building the embedding service on AWS: 1,024-dimensional Titan embeddings written to PostgreSQL/RDS with pgvector, plus an idempotent backfill script that skips unchanged records.",
					metric: "1,024-d embeddings",
				},
				{
					text: "Diagnosed a silent retrieval regression that threw no errors, tracing it to an IVFFlat index configured with 100 lists over only 37 vectors. Found it only because I had added query-level latency and recall logging — then added a check that ties list count to table size.",
					metric: "100 lists / 37 vectors",
				},
				{
					text: "Unblocked the platform team from scoring internals by shipping the service as a documented REST API returning ranked cards with scores, matched tags and reasons, delivered in two-week Agile sprints against a product lead's priorities.",
				},
			],
			tags: ["Python", "PostgreSQL", "pgvector", "AWS", "REST APIs", "Agile"],
		},
		{
			id: "bse",
			role: "Partnership Lead & AI Curriculum Co-Lead",
			org: "Bruin Software Engineers",
			orgNote: "300+ member student engineering org",
			date: "Jan 2026 — Present",
			location: "Los Angeles, CA",
			status: "active",
			summary:
				"Teach the internals of transformers to people who have never trained a model — and fund the program that lets them.",
			objectives: [
				{
					text: "Teach transformer internals from first principles — tokenization, attention and parameter counting — to 8 fellows with no ML background, through a nine-week AI systems curriculum I designed for BSE's 50-fellow Fall 2026 Tech Fellowship.",
					metric: "9-week curriculum",
				},
				{
					text: "Closed Jane Street as BSE's first corporate sponsor in org history, by cold-contacting 20+ alumni and industry partners across 20 companies and carrying the pitch through to a signed commitment.",
					metric: "1st sponsor ever",
				},
				{
					text: "Scaled mentorship to 50+ students by designing a matching process that paired participants with 25 mentors on technical interest, career goals and industry background.",
					metric: "50+ mentees",
				},
			],
			tags: ["Teaching", "Transformers", "Partnerships", "Program Design"],
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
				"A camera platform that ingests live streams, surfaces candidate events in under three seconds, and proves nothing was tampered with — without ever making the footage public.",
			highlights: [
				{
					text: "Won LAHacks 2026 against 300+ teams and 1,000+ hackers by shipping a working real-time platform in 36 hours that ingested RTSP, MJPEG and HTTP streams.",
					metric: "1st / 300+ teams",
				},
				{
					text: "Held sub-3-second latency under concurrent streams by owning the backend microservices: FastAPI, WebSocket fan-out, a dual-transport stream manager, a 60-frame rolling buffer and a 4-stage event pipeline, deployed on Linux behind nginx with TLS.",
					metric: "< 3s end-to-end",
				},
				{
					text: "Kept footage private while preserving tamper-evidence, writing only SHA-256 event hashes to a public ledger and holding video in private storage.",
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
			date: "Jul — Aug 2026",
			stack: ["JAX", "NumPy", "Python"],
			summary:
				"No Hugging Face, no Flax, no nn.Module. Every layer implemented by hand to find out exactly where the arithmetic lives.",
			highlights: [
				{
					text: "Hit 99% accuracy on 3-digit addition with a 10.65M-parameter decoder-only transformer, implementing the architecture and training loop myself in JAX with no high-level framework abstractions: 6 layers, 6 attention heads, d_model 384.",
					metric: "99% accuracy",
				},
				{
					text: "Wrote every layer by hand — tokenization, positional encoding, layer normalization and residual connections — then vectorized attention and loss computation with jax.jit in place of Python-level loops.",
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
			date: "Jan — Mar 2026",
			stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "React"],
			summary:
				"Every answer traces back to the message it came from — the retrieval layer is the product, not a black box behind it.",
			highlights: [
				{
					text: "Made 7,477 messages searchable across Slack and GitHub history by parsing 392 threads into chunked documents and generating 4,149 embeddings, served via top-10 semantic retrieval over a 4-table schema with an IVFFlat index.",
					metric: "7,477 messages",
				},
				{
					text: "Cited every answer back to its source messages by wiring a React interface to 6 FastAPI endpoints for ingestion, query, listing and extraction.",
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
			blurb: "Where the work gets typed out.",
			skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
		},
		{
			id: "systems",
			name: "Systems & Infrastructure",
			blurb: "Getting it to run somewhere other than my laptop.",
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
			blurb: "The layer most retrieval bugs actually live in.",
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
			blurb: "Built from the primitives up, not the API down.",
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
				"First place against 300+ teams and 1,000+ hackers, with a real-time camera platform built in 36 hours.",
			date: "Apr 2026",
			rarity: "legendary",
		},
		{
			id: "jane-street",
			title: "First Sponsor in Org History",
			detail:
				"Closed Jane Street as Bruin Software Engineers' first corporate sponsor — 20+ alumni cold-contacted across 20 companies, carried through to a signed commitment.",
			date: "2026",
			rarity: "legendary",
		},
		{
			id: "ghost-index",
			title: "Ghost in the Index",
			detail:
				"Found a retrieval regression that threw no errors at all: an IVFFlat index with 100 lists over 37 vectors. Only the latency and recall logging exposed it.",
			date: "2026",
			rarity: "epic",
		},
		{
			id: "from-scratch",
			title: "99% From Scratch",
			detail:
				"A 10.65M-parameter decoder-only transformer in JAX, hand-written down to the layer norm, hitting 99% on 3-digit addition.",
			date: "Aug 2026",
			rarity: "epic",
		},
		{
			id: "median",
			title: "5.66 ms Median",
			detail:
				"Hybrid ranked matching across 40+ projects and 30 departments — and every score comes back explainable.",
			date: "2026",
			rarity: "epic",
		},
		{
			id: "curriculum",
			title: "Curriculum Author",
			detail:
				"Designed a nine-week AI systems curriculum for a 50-fellow cohort, teaching transformer internals to 8 fellows with no ML background.",
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
				"392 threads parsed into 4,149 embeddings, every answer cited back to the message it came from.",
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
		{ id: "stats", title: "Read the Build", hint: "Look at the attribute block.", xp: 15 },
		{ id: "quests", title: "Quest Log Opened", hint: "Reach the experience section.", xp: 20 },
		{ id: "artifacts", title: "Artifact Inspected", hint: "Reach the projects section.", xp: 20 },
		{ id: "tree", title: "Skill Tree Traversed", hint: "Reach the skill tree.", xp: 25 },
		{ id: "trophies", title: "Trophy Case Viewed", hint: "Reach the trophy case.", xp: 25 },
		{ id: "deep-dive", title: "Deep Dive", hint: "Expand a quest or an artifact.", xp: 30 },
		{ id: "theme", title: "Light Switch", hint: "Flip the theme.", xp: 15, secret: true },
		{ id: "konami", title: "↑ ↑ ↓ ↓ ← → ← → B A", hint: "You know the one.", xp: 60, secret: true },
		{ id: "cleared", title: "100% Cleared", hint: "Visit every section on the map.", xp: 80 },
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
