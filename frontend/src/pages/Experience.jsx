import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "AI Research Intern",
    company: "SimplifiIQ",
    location: "Dubai, UAE (Remote)",
    period: "Nov 2025 – Present",
    description:
      "Designed and implemented AI solutions as part of the core development team, focusing on system efficiency and reliability. Performed debugging, validation, and requirement analysis within the SDLC to deliver optimized application features.",
    tags: ["AI Research", "SDLC", "Debugging", "System Optimization"],
    color: "from-violet-500 to-purple-600",
    current: true,
  },
  {
    role: "MERN Stack Development Intern",
    company: "TechVision Technologies",
    location: "Hosted by SRMS College",
    period: "July 2025 – September 2025",
    description:
      "Developed and deployed full-stack MERN applications, including the 'GreenCart' grocery system. Managed end-to-end development, implemented JWT authentication, and integrated Stripe API for secure payments. Collaborated via Git/GitHub to resolve technical issues and optimize deployment.",
    tags: ["MERN Stack", "JWT Auth", "Stripe API", "Git/GitHub"],
    color: "from-cyan-500 to-blue-600",
    current: false,
  },
  {
    role: "Software Engineer Trainee",
    company: "Shivsys Software Pvt. Ltd.",
    location: "Remote",
    period: "May 2025 – July 2025",
    description:
      "Executed quality assurance (QA) by performing manual and automated testing, identifying and documenting bugs, and providing actionable enhancement suggestions to the development team to enhance product quality and reliability.",
    tags: ["QA Testing", "Bug Documentation", "Manual Testing", "Automated Testing"],
    color: "from-green-500 to-emerald-600",
    current: false,
  },
];

const certifications = [
  { name: "Software Testing", issuer: "NPTEL", date: "Jan 2025 – Feb 2025" },
  { name: "Artificial Intelligence", issuer: "Livewire, Bareilly", date: "June 2024" },
  { name: "Chatbot Development", issuer: "IBM", date: "November 2024" },
  { name: "Python Programming", issuer: "HackerRank", date: "December 2024" },
  { name: "Prompt Engineering for ChatGPT", issuer: "Coursera", date: "November 2024" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and growth in the tech industry"
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink md:-translate-x-0.5" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative mb-12 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:ml-auto md:pl-0" : "md:mr-auto md:pr-0"
              } pl-8 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:${
                  i % 2 === 0 ? "-left-[calc(50%+0.5rem)]" : "left-[calc(100%+0.5rem)]"
                } top-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg z-10 md:left-auto ${
                  i % 2 === 0 ? "md:-left-[2.15rem]" : "md:-right-[2.15rem] md:left-auto"
                }`}
              >
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple animate-ping opacity-40" />
                )}
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400 hover:border-accent-cyan/30 transition-all hover:shadow-lg hover:shadow-accent-cyan/5">
                {/* Status badge */}
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Current
                  </span>
                )}

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <h4 className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mt-1`}>
                  {exp.company}
                </h4>

                <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-accent-cyan" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-accent-purple" />
                    {exp.period}
                  </span>
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-dark-400 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Certifications & Achievements
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400 hover:border-accent-cyan/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-cyan/10">
                    <FaBriefcase className="text-accent-cyan text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-accent-purple mt-1">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Achievement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/20 sm:col-span-2 lg:col-span-1"
            >
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                🏆 Key Achievements
              </h4>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Merit scholarships totaling ₹70,000 from SRMS Trust for academic excellence</li>
                <li>• 200+ algorithmic challenges solved on GeeksforGeeks & LeetCode</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
