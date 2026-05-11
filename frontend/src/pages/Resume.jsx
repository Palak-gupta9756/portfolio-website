import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FaDownload, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Resume"
          subtitle="Download or preview my professional resume"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="/resume/PALAK_RESUME.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium rounded-xl shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40 transition-all hover:-translate-y-0.5"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
            <a
              href="/resume/PALAK_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-300 dark:border-dark-400 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-accent-cyan hover:text-accent-cyan transition-all hover:-translate-y-0.5"
            >
              <FaEye size={16} />
              View Full Resume
            </a>
          </div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-400 shadow-xl bg-white dark:bg-dark-200"
          >
            <div className="p-6 sm:p-10">
              {/* Resume header */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                PALAK GUPTA
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Bareilly, Uttar Pradesh • guptapalakpg9756@gmail.com • +91-9027747449
              </p>
              <div className="w-full h-px bg-gradient-to-r from-accent-cyan to-accent-purple mb-6" />

              {/* Summary */}
              <div className="text-left mb-6">
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-2">
                  Summary
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Result-oriented B.Tech IT student and MERN Stack Developer with
                  hands-on experience building full-stack applications and
                  AI-integrated solutions. Expert in React, Node.js, and MongoDB.
                </p>
              </div>

              {/* Experience */}
              <div className="text-left mb-6">
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-2">
                  Experience
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      AI Research Intern — SimplifiIQ
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Dubai, UAE (Remote) • Nov 2025 – Present
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      MERN Stack Development Intern — TechVision Technologies
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SRMS College • July 2025 – Sep 2025
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      Software Engineer Trainee — Shivsys Software Pvt. Ltd.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Remote • May 2025 – July 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills preview */}
              <div className="text-left">
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-2">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Python", "Java", "Git", "REST APIs", "JWT"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs rounded-md bg-accent-cyan/10 text-accent-cyan font-medium"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Fade overlay */}
              <div className="mt-6 relative">
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-dark-200 to-transparent" />
                <p className="text-center text-xs text-gray-400 pt-8 relative z-10">
                  ... Download full resume for complete details
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
