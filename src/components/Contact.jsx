import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const ContactSection = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY }) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const background = useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.2), transparent 80%)`;

  return (
    <div className="relative py-20 px-4 overflow-hidden dark:to-gray-800">
      {/* Floating gradient dots (background decoration) */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      {/* Main Contact Card (3D Tilt Effect) */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          background,
        }}
        className="relative max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
      >
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-2xl p-[2px] overflow-hidden">
          <motion.div
            style={{ background }}
            className="absolute inset-0 rounded-xl"
          />
        </div>

        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-bold text-blue-400 bg-clip-text text-transparent mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            I'm currently available for freelance work or full-time positions. 
            Whether you have a project in mind or just want to chat tech, I'd love to hear from you!
          </p>

          {/* Contact Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <FiMail className="w-5 h-5" />,
                label: "Email Me",
                href: "mailto:you@example.com",
                style: "bg-gradient-to-r from-blue-500 to-blue-600",
              },
              {
                icon: <FiLinkedin className="w-5 h-5" />,
                label: "LinkedIn",
                href: "https://linkedin.com/in/yourusername",
                style: "bg-gradient-to-r from-blue-700 to-blue-800",
              },
              {
                icon: <FiGithub className="w-5 h-5" />,
                label: "GitHub",
                href: "https://github.com/yourusername",
                style: "bg-gradient-to-r from-gray-800 to-gray-900",
              },
              {
                icon: <FiTwitter className="w-5 h-5" />,
                label: "Twitter",
                href: "https://twitter.com/yourusername",
                style: "bg-gradient-to-r from-sky-500 to-sky-600",
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`${item.style} text-white font-medium rounded-lg p-4 flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg`}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Signature Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Crafted with care by <span className="font-medium">Adnan Tahir</span> • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;