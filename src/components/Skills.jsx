import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
  { name: "Linux", icon: "logos:linux-tux", level: 90 },
  { name: "Kotlin", icon: "logos:kotlin", level: 85 },
  { name: "TypeScript", icon: "logos:typescript-icon", level: 88 },
  { name: "NestJS", icon: "logos:nestjs", level: 82 },
  { name: "PostgreSQL", icon: "logos:postgresql", level: 80 },
  { name: "Docker", icon: "logos:docker-icon", level: 78 },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 95 },
  { name: "Next.js", icon: "logos:nextjs-icon", level: 90 },
  { name: "Expo", icon: "logos:expo-icon", level: 75 },
  { name: "React", icon: "logos:react", level: 92 },
  { name: "Node.js", icon: "logos:nodejs-icon", level: 85 },
  { name: "GraphQL", icon: "logos:graphql", level: 70 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // For floating animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left - width / 2) * 0.1);
    mouseY.set((e.clientY - top - height / 2) * 0.1);
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 overflow-hidden dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background floating tech bubbles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 blur-xl"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          My Tech Stack
        </motion.h2>

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
          {skills.map((skill, index) => (
            <motion.li
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
              className="relative group"
            >
              <motion.div
style={{
    rotateX: useSpring(useTransform(mouseY, [-50, 50], [-5, 5])),
    rotateY: useSpring(useTransform(mouseX, [-50, 50], [5, -5])),
  }}
  
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
              >
                {/* Skill Icon with Gradient Glow */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                  <Icon icon={skill.icon} width="48" height="48" className="relative z-10" />
                </div>

                <p className="text-sm font-medium mb-2">{skill.name}</p>
                
                {/* Animated Skill Level Bar */}
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + index * 0.05, duration: 1, type: "spring" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {skill.level}%
                </span>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* CSS for floating bubbles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
};

export default Skills;