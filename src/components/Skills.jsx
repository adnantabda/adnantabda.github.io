import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
  { name: "Figma", icon: "logos:figma", level: 87 },
  { name: "HTML5", icon: "logos:html-5", level: 91 },
  { name: "CSS3", icon: "logos:css-3", level: 89 },
  { name: "Git", icon: "logos:git-icon", level: 85 },
  { name: "Linux", icon: "logos:linux-tux", level: 80 },
  { name: "Vite", icon: "logos:vitejs", level: 84 },
  { name: "Framer Motion", icon: "logos:framer", level: 78 },
  { name: "React", icon: "logos:react", level: 92 },
  { name: "Python", icon: "logos:python", level: 88 },
  { name: "TypeScript", icon: "logos:typescript-icon", level: 86 },
  { name: "Express", icon: "skill-icons:expressjs-light", level: 84 },
  { name: "Flask", icon: "logos:flask", level: 80 },
  { name: "PostgreSQL", icon: "logos:postgresql", level: 83 },
  { name: "Next.js", icon: "logos:nextjs-icon", level: 86 },
  { name: "Node.js", icon: "logos:nodejs-icon", level: 88 },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 90 },
];


const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-slate-900/50 backdrop-blur-sm" 
      id="skills"
    >
      {/* Background Pattern - matches Projects section */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Section Header - matches Projects styling */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium mb-3">
            MY EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <motion.ul
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
            >
              <div className="group relative h-full p-6 bg-slate-800/50 rounded-xl border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 w-12 h-12 flex items-center justify-center">
                    <Icon 
                      icon={skill.icon} 
                      width="48" 
                      height="48" 
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;