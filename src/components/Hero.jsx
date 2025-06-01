import { useState, useEffect } from 'react';
import { Terminal, Code, Database, Server, Cpu, Zap } from 'lucide-react';
import LoopingRoles from './LoopingRoles';
import Highlights from './Highlights';

const FloatingCode = ({ children, className, delay = 0 }) => (
  <div
    className={`absolute opacity-20 text-slate-500 font-mono text-sm select-none pointer-events-none ${className}`}
    style={{
      animation: `float 6s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    {children}
  </div>
);

const TechIcon = ({ icon: Icon, label, delay }) => (
  <div
    className="flex flex-col items-center space-y-2 opacity-0 animate-fade-in"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-110">
      <Icon size={24} className="text-cyan-400" />
    </div>
    <span className="text-xs text-slate-400 font-medium">{label}</span>
  </div>
);

const StatusBadge = () => (
  <div className="inline-flex items-center space-x-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-full px-4 py-2 mb-6">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
    <span className="text-sm text-slate-300 font-medium">Available for hire</span>
  </div>
);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const techStack = [
    { icon: Terminal, label: 'Node.js', delay: 200 },
    { icon: Code, label: 'JavaScript', delay: 400 },
    { icon: Database, label: 'PostgreSQL', delay: 600 },
    { icon: Server, label: 'Python', delay: 800 },
    { icon: Cpu, label: 'System Design', delay: 1000 },
    { icon: Zap, label: 'Performance', delay: 1200 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden lg:pl-20 xl:pl-72">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Floating Code Elements */}
      <FloatingCode className="top-20 left-1/4" delay={0}>
        const express = require('express');
      </FloatingCode>
      <FloatingCode className="top-32 right-1/4" delay={1}>
        SELECT * FROM users WHERE active = true;
      </FloatingCode>
      <FloatingCode className="top-40 left-1/3" delay={2}>
        `app.listen(3000, () =  console.log('Server running'));``
      </FloatingCode>
      <FloatingCode className="bottom-40 left-1/4" delay={3}>
        import Pool  from 'pg';
      </FloatingCode>
      <FloatingCode className="bottom-32 right-1/3" delay={4}>
        def optimize_query(sql): return sql
      </FloatingCode>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Status Badge */}
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <StatusBadge />
            </div>

            {/* Main Heading */}
            <div className={`transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Software</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Engineer
                </span>
                <span className="text-cyan-400">.</span>
              </h1>
            </div>

            {/* Subtitle with Looping Roles */}
            <div className={`transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <LoopingRoles />
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
                Backend-focused full-stack developer specializing in{' '}
                <span className="text-cyan-400 font-semibold">Node.js</span>,{' '}
                <span className="text-blue-400 font-semibold">PostgreSQL</span>, and{' '}
                <span className="text-purple-400 font-semibold">Python</span>. 
                I architect scalable systems, optimize database performance, and build robust APIs 
                that power modern applications.
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className={`transform transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-wrap gap-6 mb-12">
                {techStack.map((tech, index) => (
                  <TechIcon
                    key={tech.label}
                    icon={tech.icon}
                    label={tech.label}
                    delay={tech.delay}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:from-cyan-400 hover:to-blue-500"
                >
                  <span>Let's Build Something</span>
                  <Terminal size={20} className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 font-semibold rounded-lg hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className={`transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/adnantabda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="GitHub profile"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a
                  href="https://linkedin.com/in/adnantabda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn profile"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href="mailto:adnantabda@gmail.com"
                  className="p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Email Adnan"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.992L12 11.246l9.372-7.425h.992c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className={`relative z-10 pb-20 transform transition-all duration-1000 delay-1400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <Highlights />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
