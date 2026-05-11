import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FaGraduationCap, FaShieldAlt, FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const highlights = [
    { icon: FaLaptopCode, label: "MERN Stack", value: "Full Stack Developer" },
    { icon: FaShieldAlt, label: "Specialization", value: "Cyber Security" },
    { icon: FaCode, label: "Problem Solving", value: "200+ DSA Problems" },
    { icon: FaGraduationCap, label: "Academic", value: "81% in B.Tech IT" },
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Shri Ram Murti Smarak College of Engineering & Technology",
      location: "Bareilly, UP",
      period: "Oct 2022 – Present",
      score: "81%",
      specialization: "Cyber Security (2023–Present)",
    },
    {
      degree: "Senior Secondary (Class 12)",
      institution: "Jamuna Prasad Memorial Public School",
      location: "Bareilly, UP",
      period: "March 2021 – 2022",
      score: "76.4%",
    },
    {
      degree: "Secondary (Class 10)",
      institution: "Jamuna Prasad Memorial Public School",
      location: "Bareilly, UP",
      period: "March 2019 – 2020",
      score: "77%",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-dark-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building scalable web applications and AI-driven solutions"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I&apos;m Palak Gupta 👋
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I&apos;m a result-oriented B.Tech Information Technology student and
                MERN Stack Developer with hands-on experience building full-stack
                applications and AI-integrated solutions.
              </p>
              <p>
                With expertise in React, Node.js, and MongoDB, and a strong
                foundation in Data Structures, Algorithms, and Cyber Security, I
                focus on developing scalable, secure, and user-centric web
                applications.
              </p>
              <p>
                I have a proven track record in enhancing system efficiency through
                AI research and software testing, and I&apos;m committed to
                continuous learning and delivering high-quality software solutions.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400 hover:border-accent-cyan/50 transition-colors"
                >
                  <item.icon className="text-accent-cyan text-xl mb-2" />
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-accent-cyan" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-6 border-l-2 border-accent-cyan/30"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent-cyan/20 border-2 border-accent-cyan" />

                  <div className="p-4 rounded-xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono px-2 py-1 bg-accent-cyan/10 text-accent-cyan rounded-md">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      📍 {edu.location} • {edu.period}
                    </p>
                    {edu.specialization && (
                      <p className="text-xs text-accent-purple mt-2 font-medium">
                        🔒 {edu.specialization}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
