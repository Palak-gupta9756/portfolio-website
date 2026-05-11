import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { getSkills } from "../services/api";
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython,
  SiGit, SiGithub, SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { MdDevices, MdApi } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { VscCloud } from "react-icons/vsc";

// Icon mapping
const iconMap = {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython,
  SiGit, SiGithub, SiVercel, FaJava,
  MdDevices, AiOutlineApi: MdApi, SiJsonwebtokens: RiShieldKeyholeLine,
  SiC: TbBrandCpp, SiCloudinary: VscCloud, SiRender: VscCloud,
};

// Fallback skills data matching Palak's resume
const fallbackSkills = {
  Frontend: [
    { name: "React.js", level: 90, icon: "SiReact" },
    { name: "JavaScript (ES6+)", level: 88, icon: "SiJavascript" },
    { name: "HTML5", level: 95, icon: "SiHtml5" },
    { name: "CSS3", level: 90, icon: "SiCss" },
    { name: "Tailwind CSS", level: 85, icon: "SiTailwindcss" },
    { name: "Responsive Design", level: 90, icon: "MdDevices" },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: "SiNodedotjs" },
    { name: "Express.js", level: 85, icon: "SiExpress" },
    { name: "RESTful APIs", level: 88, icon: "AiOutlineApi" },
    { name: "JWT Authentication", level: 80, icon: "SiJsonwebtokens" },
  ],
  Database: [
    { name: "MongoDB", level: 85, icon: "SiMongodb" },
    { name: "MySQL", level: 75, icon: "SiMysql" },
    { name: "Mongoose", level: 82, icon: "SiMongodb" },
  ],
  Languages: [
    { name: "JavaScript", level: 88, icon: "SiJavascript" },
    { name: "Python", level: 75, icon: "SiPython" },
    { name: "Java", level: 70, icon: "FaJava" },
    { name: "C", level: 72, icon: "SiC" },
  ],
  Tools: [
    { name: "Git", level: 85, icon: "SiGit" },
    { name: "GitHub", level: 88, icon: "SiGithub" },
    { name: "Cloudinary", level: 75, icon: "SiCloudinary" },
    { name: "Render", level: 78, icon: "SiRender" },
    { name: "Vercel", level: 80, icon: "SiVercel" },
  ],
};

const categoryColors = {
  Frontend: "from-cyan-500 to-blue-500",
  Backend: "from-green-500 to-emerald-500",
  Database: "from-purple-500 to-violet-500",
  Languages: "from-orange-500 to-amber-500",
  Tools: "from-pink-500 to-rose-500",
};

const Skills = () => {
  const [skills, setSkills] = useState(fallbackSkills);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await getSkills();
        if (data.success && Object.keys(data.data).length > 0) {
          setSkills(data.data);
        }
      } catch {
        // Use fallback
      }
    };
    fetchSkills();
  }, []);

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to build modern web applications"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-lg shadow-accent-cyan/25"
                  : "bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {(skills[activeCategory] || []).map((skill, i) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group p-5 rounded-2xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400 hover:border-accent-cyan/50 transition-all hover:shadow-lg hover:shadow-accent-cyan/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${categoryColors[activeCategory]} bg-opacity-10`}>
                    {IconComponent ? (
                      <IconComponent className="text-white text-lg" />
                    ) : (
                      <span className="text-white text-lg font-bold">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.level}% proficiency
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-100 dark:bg-dark-400 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${categoryColors[activeCategory]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
