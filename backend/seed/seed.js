const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("../models/Project");
const Skill = require("../models/Skill");

dotenv.config();

const projects = [
  {
    title: "AI Virtual Assistant",
    description: "MERN-stack AI assistant integrated with Gemini AI and Web Speech API for real-time voice interaction. Features JWT auth, Cloudinary image uploads, YouTube search, speech-based responses, and full deployment on Render.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Gemini AI", "Web Speech API", "JWT", "Cloudinary"],
    githubLink: "https://github.com/Palak-gupta9756/virtual-assistant",
    liveLink: "", category: "MERN", starred: true, initials: "AI", gradient: "from-violet-500/30 via-purple-500/20 to-pink-500/20",
    featured: true, order: 1,
  },
  {
    title: "Green Cart",
    description: "Full-stack online grocery delivery platform with product browsing, cart management, and secure Stripe-powered checkout. Implements JWT auth, end-to-end MERN development, and optimised deployment.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "JWT"],
    githubLink: "https://github.com/Palak-gupta9756/Green_Cart",
    liveLink: "", category: "MERN", starred: true, initials: "GC", gradient: "from-green-500/30 via-emerald-500/20 to-teal-500/20",
    featured: true, order: 2,
  },
  {
    title: "Temple & Pilgrimage Crowd Management",
    description: "Smart crowd management system for temples and pilgrimage sites using MERN + AI. Supports real-time monitoring, congestion alerts, and better resource allocation during high-traffic religious events.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "AI/ML", "Real-time"],
    githubLink: "https://github.com/Palak-gupta9756/Temple_Crowd_Management",
    liveLink: "", category: "MERN", starred: false, initials: "TC", gradient: "from-orange-500/30 via-amber-500/20 to-yellow-500/20",
    featured: true, order: 3,
  },
  {
    title: "Transaction-Safe Order Engine",
    description: "Production-grade fault-tolerant order processing system built with MERN. Demonstrates MongoDB multi-document transactions, optimistic concurrency locking, idempotency keys with 24h TTL, and exponential-backoff retry logic to prevent overselling under high concurrency.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Transactions", "Idempotency", "Winston"],
    githubLink: "https://github.com/Palak-gupta9756/transaction-safe-order-engine",
    liveLink: "", category: "MERN", starred: false, initials: "TS", gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/20",
    featured: true, order: 4,
  },
  {
    title: "Calculator (React Native)",
    description: "Clean, mobile-friendly calculator app built with React Native (Expo) and TypeScript. Supports arithmetic, decimals, divide-by-zero error handling, and displays the full expression above the result.",
    image: "",
    technologies: ["React Native", "TypeScript", "Expo"],
    githubLink: "https://github.com/Palak-gupta9756/Calculator-using-React-Native",
    liveLink: "", category: "React Native", starred: true, initials: "RN", gradient: "from-blue-500/30 via-cyan-500/20 to-sky-500/20",
    featured: false, order: 5,
  },
  {
    title: "SimplifiIQ AI Assessment",
    description: "3-part AI research assessment: Python data-cleaning pipeline on raw task logs, web scraping + Gemini 2.5 Flash API summarisation, and React dashboard for filtering and visualising the summarised data.",
    image: "",
    technologies: ["Python", "Gemini API", "React", "BeautifulSoup", "Pandas", "Web Scraping"],
    githubLink: "https://github.com/Palak-gupta9756/simplifiIQ-assessment",
    liveLink: "", category: "Python", starred: false, initials: "SA", gradient: "from-yellow-500/30 via-amber-500/20 to-orange-500/20",
    featured: false, order: 6,
  },
  {
    title: "Stone-Paper-Scissors Game",
    description: "Classic Stone-Paper-Scissors game in Python. Players compete against the computer with randomised moves. Tracks scores across rounds with a clean terminal interface.",
    image: "",
    technologies: ["Python", "Random", "CLI"],
    githubLink: "https://github.com/Palak-gupta9756/Stone-Paper-Scissor_Game",
    liveLink: "", category: "Python", starred: false, initials: "SP", gradient: "from-red-500/30 via-rose-500/20 to-pink-500/20",
    featured: false, order: 7,
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Two-player Tic-Tac-Toe written in Python with win detection across rows, columns, and diagonals, draw detection, and a text-based board rendered in the terminal.",
    image: "",
    technologies: ["Python", "CLI", "Game Logic"],
    githubLink: "https://github.com/Palak-gupta9756/Tic-Tac-Toe_Game",
    liveLink: "", category: "Python", starred: false, initials: "TT", gradient: "from-purple-500/30 via-violet-500/20 to-indigo-500/20",
    featured: false, order: 8,
  },
  {
    title: "Plant Growth Visualization",
    description: "Data visualization project tracking plant growth metrics over time. Generates Matplotlib charts from structured datasets to analyse and compare growth patterns across plant varieties.",
    image: "",
    technologies: ["Python", "Matplotlib", "Data Visualization"],
    githubLink: "https://github.com/Palak-gupta9756/Plant-growth-visualization",
    liveLink: "", category: "Python", starred: false, initials: "PG", gradient: "from-green-500/30 via-lime-500/20 to-emerald-500/20",
    featured: false, order: 9,
  },
  {
    title: "Quiz Game",
    description: "Interactive browser-based quiz game built with vanilla JavaScript. Features timed questions, score tracking, dynamic question rendering, and a results summary screen.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Palak-gupta9756/Quiz_Game",
    liveLink: "", category: "JavaScript", starred: false, initials: "QG", gradient: "from-yellow-500/30 via-orange-500/20 to-red-500/20",
    featured: false, order: 10,
  },
  {
    title: "Advanced Interactive Calculator",
    description: "Feature-rich calculator with polished UI. Supports chained operations, keyboard shortcuts, clear and delete actions, and handles edge cases like division by zero.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Palak-gupta9756/Advanced-Interactive-Calculator",
    liveLink: "", category: "JavaScript", starred: false, initials: "AC", gradient: "from-blue-500/30 via-sky-500/20 to-cyan-500/20",
    featured: false, order: 11,
  },
  {
    title: "Currency Converter",
    description: "Real-time currency converter fetching live exchange rates via external API. Supports multiple currencies and updates conversion results instantly as the user types.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API"],
    githubLink: "https://github.com/Palak-gupta9756/Currency-Converter",
    liveLink: "", category: "JavaScript", starred: false, initials: "CC", gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
    featured: false, order: 12,
  },
  {
    title: "Guess the Number Game",
    description: "Browser-based number guessing game. The user guesses a randomly generated number within a range; the app provides high/low hints and tracks the number of attempts.",
    image: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Palak-gupta9756/-Guess-the-Number-Game",
    liveLink: "", category: "JavaScript", starred: false, initials: "GN", gradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-500/20",
    featured: false, order: 13,
  },
];

const skills = [
  // Frontend
  { category: "Frontend", name: "React.js", level: 90, icon: "SiReact", order: 1 },
  { category: "Frontend", name: "JavaScript (ES6+)", level: 88, icon: "SiJavascript", order: 2 },
  { category: "Frontend", name: "HTML5", level: 95, icon: "SiHtml5", order: 3 },
  { category: "Frontend", name: "CSS3", level: 90, icon: "SiCss", order: 4 },
  { category: "Frontend", name: "Tailwind CSS", level: 85, icon: "SiTailwindcss", order: 5 },
  { category: "Frontend", name: "Responsive Design", level: 90, icon: "MdDevices", order: 6 },

  // Backend
  { category: "Backend", name: "Node.js", level: 85, icon: "SiNodedotjs", order: 1 },
  { category: "Backend", name: "Express.js", level: 85, icon: "SiExpress", order: 2 },
  { category: "Backend", name: "RESTful APIs", level: 88, icon: "AiOutlineApi", order: 3 },
  { category: "Backend", name: "JWT Authentication", level: 80, icon: "SiJsonwebtokens", order: 4 },

  // Database
  { category: "Database", name: "MongoDB", level: 85, icon: "SiMongodb", order: 1 },
  { category: "Database", name: "MySQL", level: 75, icon: "SiMysql", order: 2 },
  { category: "Database", name: "Mongoose", level: 82, icon: "SiMongodb", order: 3 },

  // Languages
  { category: "Languages", name: "JavaScript", level: 88, icon: "SiJavascript", order: 1 },
  { category: "Languages", name: "Python", level: 75, icon: "SiPython", order: 2 },
  { category: "Languages", name: "Java", level: 70, icon: "FaJava", order: 3 },
  { category: "Languages", name: "C", level: 72, icon: "SiC", order: 4 },

  // Tools
  { category: "Tools", name: "Git", level: 85, icon: "SiGit", order: 1 },
  { category: "Tools", name: "GitHub", level: 88, icon: "SiGithub", order: 2 },
  { category: "Tools", name: "Cloudinary", level: 75, icon: "SiCloudinary", order: 3 },
  { category: "Tools", name: "Render", level: 78, icon: "SiRender", order: 4 },
  { category: "Tools", name: "Vercel", level: 80, icon: "SiVercel", order: 5 },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected for seeding...");

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log("Cleared existing data");

    // Insert seed data
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    console.log("Seed data inserted successfully!");

    process.exit(0);
  } catch (error) {
    console.error(`Seed error: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
