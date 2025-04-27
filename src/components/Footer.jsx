import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left: Name & Role */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              <span className="text-blue-400 bg-clip-text "
            >
                Adnan Tahir
              </span>
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Software Engineer | Full-Stack Developer
            </p>
          </div>

          {/* Middle: Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Work", href: "#work" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:underline underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Social Links */}
          <div className="flex space-x-4">
            {[
              { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
              { icon: <FaTwitter />, href: "https://twitter.com/yourusername", label: "Twitter" },
              { icon: <FaEnvelope />, href: "mailto:you@example.com", label: "Email" },
              { icon: <FaFileAlt />, href: "/resume.pdf", label: "Resume" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:scale-110"
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} <span className="font-medium">Adnan Tahir</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;