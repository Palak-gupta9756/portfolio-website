import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { getProjects } from "../services/api";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

// All projects sourced from GitHub: https://github.com/Palak-gupta9756
const allProjects = [
  // ── MERN ──────────────────────────────────────────────────────────────────
  {
    _id: "1",
    title: "AI Virtual Assistant",
    description:
      "MERN-stack AI assistant integrated with Gemini AI and Web Speech API for real-time voice interaction. Features JWT auth, Cloudinary image uploads, YouTube search, speech-based responses, and full deployment on Render.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Gemini AI", "Web Speech API", "JWT", "Cloudinary"],
    githubLink: "https://github.com/Palak-gupta9756/virtual-assistant",
    liveLink: "",
    category: "MERN",
    starred: true,
    gradient: "from-violet-500/30 via-purple-500/20 to-pink-500/20",
    initials: "AI",
  },
  {
    _id: "2",
    title: "Green Cart",
    description:
      "Full-stack online grocery delivery platform with product browsing, cart management, and secure Stripe-powered checkout. Implements JWT auth, end-to-end MERN development, and optimised deployment.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "JWT"],
    githubLink: "https://github.com/Palak-gupta9756/Green_Cart",
    liveLink: "",
    category: "MERN",
    starred: true,
    gradient: "from-green-500/30 via-emerald-500/20 to-teal-500/20",
    initials: "GC",
  },
  {
    _id: "3",
    title: "Temple & Pilgrimage Crowd Management",
    description:
      "Smart crowd management system for temples and pilgrimage sites using MERN + AI. Supports real-time monitoring, congestion alerts, and better resource allocation during high-traffic religious events.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "AI/ML", "Real-time"],
    githubLink: "https://github.com/Palak-gupta9756/Temple_Crowd_Management",
    liveLink: "",
    category: "MERN",
    starred: false,
    gradient: "from-orange-500/30 via-amber-500/20 to-yellow-500/20",
    initials: "TC",
  },
  {
    _id: "4",
    title: "Transaction-Safe Order Engine",
    description:
      "Production-grade fault-tolerant order processing system built with MERN. Demonstrates MongoDB multi-document transactions, optimistic concurrency locking, idempotency keys with 24h TTL, and exponential-backoff retry logic to prevent overselling under high concurrency.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Transactions", "Idempotency", "Winston"],
    githubLink: "https://github.com/Palak-gupta9756/transaction-safe-order-engine",
    liveLink: "",
    category: "MERN",
    starred: false,
    gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/20",
    initials: "TS",
  },

  // ── React Native ───────────────────────────────────────────────────────────
  {
    _id: "5",
    title: "Calculator (React Native)",
    description:
      "Clean, mobile-friendly calculator app built with React Native (Expo) and TypeScript. Supports +, -, ×, ÷, %, decimals, double zeros, divide-by-zero error handling, and displays the full expression above the result.",
    image: "",
    technologies: ["React Native", "TypeScript", "Expo"],
    githubLink: "https://github.com/Palak-gupta9756/Calculator-using-React-Native",
    liveLink: "",
    category: "React Native",
    starred: true,
    gradient: "from-blue-500/30 via-cyan-500/20 to-sky-500/20",
    initials: "RN",
  },

  // ── Python ──────────────────────────────────────────────────────────────
  {
    _id: "7",
    title: "Stone-Paper-Scissors Game",
    description:
      "Classic Stone-Paper-Scissors game built in Python. Players compete against the computer with randomised moves. Tracks scores across rounds with a clean terminal interface.",
    image: "",
    technologies: ["Python", "Random", "CLI"],
    githubLink: "https://github.com/Palak-gupta9756/Stone-Paper-Scissor_Game",
    liveLink: "",
    category: "Python",
    starred: false,
    gradient: "from-red-500/30 via-rose-500/20 to-pink-500/20",
    initials: "SP",
  },
  {
    _id: "8",
    title: "Tic-Tac-Toe Game",
    description:
      "Two-player Tic-Tac-Toe game written in Python. Features win detection across all rows, columns, and diagonals, draw detection, and a text-based board rendered in the terminal.",
    image: "",
    technologies: ["Python", "CLI", "Game Logic"],
    githubLink: "https://github.com/Palak-gupta9756/Tic-Tac-Toe_Game",
    liveLink: "",
    category: "Python",
    starred: false,
    gradient: "from-purple-500/30 via-violet-500/20 to-indigo-500/20",
    initials: "TT",
  },
  {
    _id: "9",
    title: "Plant Growth Visualization",
    description:
      "Data visualization project tracking and displaying plant growth metrics over time. Generates charts from structured datasets to analyse and compare growth patterns across different plant varieties.",
    image: "",
    technologies: ["Python", "Matplotlib", "Data Visualization"],
    githubLink: "https://github.com/Palak-gupta9756/Plant-growth-visualization",
    liveLink: "",
    category: "Python",
    starred: false,
    gradient: "from-green-500/30 via-lime-500/20 to-emerald-500/20",
    initials: "PG",
  },

  // ── JavaScript ────────────────────────────────────────────────────────────
  {
    _id: "10",
    title: "Quiz Game",
    description:
      "Interactive browser-based quiz game built with vanilla JavaScript. Features timed questions, score tracking, dynamic question rendering, and a results summary screen.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Palak-gupta9756/Quiz_Game",
    liveLink: "",
    category: "JavaScript",
    starred: false,
    gradient: "from-yellow-500/30 via-orange-500/20 to-red-500/20",
    initials: "QG",
  },
  {
    _id: "11",
    title: "Advanced Interactive Calculator",
    description:
      "Feature-rich calculator with a polished UI built using JavaScript. Supports chained operations, keyboard shortcuts, clear and delete actions, and handles edge cases like division by zero.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Palak-gupta9756/Advanced-Interactive-Calculator",
    liveLink: "",
    category: "JavaScript",
    starred: false,
    gradient: "from-blue-500/30 via-sky-500/20 to-cyan-500/20",
    initials: "AC",
  },
  {
    _id: "12",
    title: "Currency Converter",
    description:
      "Real-time currency converter web app built with JavaScript. Fetches live exchange rates via an external API, supports multiple currencies, and updates conversion results instantly as the user types.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API"],
    githubLink: "https://github.com/Palak-gupta9756/Currency-Converter",
    liveLink: "",
    category: "JavaScript",
    starred: false,
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
    initials: "CC",
  },
  {
    _id: "13",
    title: "Guess the Number Game",
    description:
      "Browser-based number guessing game where the user tries to guess a randomly generated number within a range. Provides hints (too high / too low) and tracks the number of attempts taken.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Palak-gupta9756/-Guess-the-Number-Game",
    liveLink: "",
    category: "JavaScript",
    starred: false,
    gradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-500/20",
    initials: "GN",
  },
];

const CATEGORIES = ["All", "MERN", "React Native", "Python", "JavaScript"];

const techColors = {
  "React": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  "React Native": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Node.js": "bg-green-500/10 text-green-600 dark:text-green-400",
  "MongoDB": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "Express.js": "bg-gray-500/10 text-gray-600 dark:text-gray-400",
  "Gemini AI": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Gemini API": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "AI/ML": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "Python": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  "TypeScript": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Expo": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "Stripe API": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "Transactions": "bg-red-500/10 text-red-600 dark:text-red-400",
  "Pandas": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  default: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [apiProjects, setApiProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects();
        if (data.success && data.data.length > 0) {
          setApiProjects(data.data);
        }
      } catch {
        // Use local fallback
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Use API data if available, else use the comprehensive local list
  const sourceProjects = apiProjects.length > 0 ? apiProjects : allProjects;

  const filtered =
    activeCategory === "All"
      ? sourceProjects
      : sourceProjects.filter((p) => p.category === activeCategory);

  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === "All" ? sourceProjects.length : sourceProjects.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-dark-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A collection of projects spanning full-stack web, mobile, Python, and AI"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-lg shadow-accent-cyan/25"
                  : "bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400 text-gray-600 dark:text-gray-400 hover:border-accent-cyan/40 hover:text-accent-cyan"
              }`}
            >
              {cat}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-md font-mono ${
                  activeCategory === cat
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-dark-400 text-gray-500 dark:text-gray-400"
                }`}
              >
                {counts[cat]}
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-gray-200 dark:border-dark-400 border-t-accent-cyan rounded-full animate-spin" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group relative rounded-2xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400 overflow-hidden hover:border-accent-cyan/50 transition-all hover:shadow-xl hover:shadow-accent-cyan/5 hover:-translate-y-1 flex flex-col"
                >
                  {/* Header gradient */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient || "from-accent-cyan/20 via-accent-purple/20 to-accent-pink/20"} flex items-center justify-center`}>
                    <span className="text-5xl font-black bg-gradient-to-br from-white/50 to-white/10 bg-clip-text text-transparent select-none">
                      {project.initials || project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                    </span>

                    {/* Star badge */}
                    {project.starred && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-400/20 border border-yellow-400/30">
                        <FaStar className="text-yellow-400" size={11} />
                        <span className="text-yellow-500 dark:text-yellow-400 text-xs font-semibold">Starred</span>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/20 backdrop-blur-sm text-white text-xs font-medium">
                      {project.category}
                    </div>

                    {/* Hover links */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-dark-200/90 text-gray-800 dark:text-gray-200 hover:text-accent-cyan text-sm font-medium transition-colors"
                          aria-label="GitHub"
                        >
                          <FaGithub size={15} /> Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-dark-200/90 text-gray-800 dark:text-gray-200 hover:text-accent-cyan text-sm font-medium transition-colors"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt size={13} /> Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent-cyan transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                            techColors[tech] || techColors.default
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-dark-400 text-gray-500 dark:text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Palak-gupta9756"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-dark-400 text-gray-700 dark:text-gray-300 font-medium hover:border-accent-cyan hover:text-accent-cyan transition-all hover:-translate-y-0.5"
          >
            <FaGithub size={18} />
            View All Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
