import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "Occasional Designer",
];

export const LoopingRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 sm:h-12 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          className="text-2xl sm:text-3xl font-extrabold absolute w-full text-start text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};


export default LoopingRoles;