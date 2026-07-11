import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload, FaReact, FaNodeJs } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { SiMongodb, SiJavascript } from "react-icons/si";

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Palak-gupta9756", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/palak-gupta-12063a2a3/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:guptapalakpg9756@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-dark dark:via-dark-200 dark:to-dark" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-sm font-mono text-accent-cyan mb-4 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              &lt;Hello World /&gt;
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                Palak Gupta
              </span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  "Zoho Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                  "B.Tech IT Graduate",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-gray-500 dark:text-gray-400 max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Result-oriented B.Tech IT student building full-stack applications
              and AI-integrated solutions. Expert in React, Node.js, and MongoDB
              with a strong foundation in DSA and Cyber Security.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/resume/PALAK_RESUME.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium rounded-xl shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40 transition-all hover:-translate-y-0.5"
              >
                <FaDownload size={14} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-dark-400 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-accent-cyan hover:text-accent-cyan transition-all hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-accent-cyan/10 hover:text-accent-cyan transition-all hover:-translate-y-1"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">

              {/* Outer spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #ec4899, #00d4ff)",
                  padding: "3px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-dark" />
              </motion.div>

              {/* Middle static ring */}
              <div
                className="absolute inset-[6px] rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
              />

              {/* Glow blob */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/30 via-accent-purple/20 to-accent-pink/20 blur-2xl scale-110 -z-10" />

              {/* Photo */}
              <div className="absolute inset-[10px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/photo.jpeg"
                  alt="Palak Gupta"
                  className="w-full h-full object-cover object-top scale-105"
                />
                {/* Subtle inner overlay for depth */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </div>

              {/* Status badge */}
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white dark:bg-dark-200 rounded-full shadow-xl border border-gray-200/80 dark:border-dark-400 whitespace-nowrap z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <span className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to opportunities
                </span>
              </motion.div>

              {/* Floating tech badges */}
              {[
                { icon: FaReact, color: "#61DAFB", label: "React", pos: "top-2 -left-4 sm:-left-6" },
                { icon: FaNodeJs, color: "#68A063", label: "Node", pos: "top-1/2 -right-4 sm:-right-6 -translate-y-1/2" },
                { icon: SiMongodb, color: "#47A248", label: "Mongo", pos: "bottom-12 -left-4 sm:-left-6" },
                { icon: SiJavascript, color: "#F7DF1E", label: "JS", pos: "-top-3 right-10" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className={`absolute ${badge.pos} z-10`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.15, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white dark:bg-dark-200 shadow-lg border border-gray-100 dark:border-dark-400 flex items-center justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    title={badge.label}
                  >
                    <badge.icon size={18} color={badge.color} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
