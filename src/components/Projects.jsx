import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Tag, ArrowRight } from 'lucide-react';
import pimai from '../assets/pimai-screenshot.png';
import cpinput from '../assets/cpinput-screenshot.png'
import naifdigital from '../assets/naifdigital-screenshot.png'
import hamidmuude from '../assets/hamidmuude.png'
import dosyncer from '../assets/dosyncer.png'
import onepiece from '../assets/onepiece-game.png'

const projects = [
  {
    id: 1,
    image: pimai, 
    title: "Pimai",
    category: "Web Development",
    description: "Pimai is a personal information management AI website that helps organize and plan your daily tasks efficiently.",
    fullDescription: "Pimai is an advanced AI-powered personal information management system designed to revolutionize how you organize and manage your daily tasks. Built with cutting-edge technology, it leverages artificial intelligence to understand your patterns, preferences, and priorities to provide intelligent task organization, smart scheduling, and personalized productivity insights.",
    technologies: ["React", "TypeScript", "AI/ML", "Node.js", "MongoDB"],
    features: ["AI-powered task organization", "Smart scheduling", "Personal analytics", "Cross-platform sync"],
    link: "https://pimai.example.com",
    github: "https://github.com/username/pimai",
    date: "2024",
    status: "Live"
  },
   {
    id: 2,
    image: cpinput, 
    title: "CPinput",
    category: "Developer Tools",
    description: "CPinput is a smart Codeforces input parser that auto-generates Python input code using natural language.",
    fullDescription:
      "CPinput is a productivity tool designed for competitive programmers. It reads natural language input descriptions from Codeforces-style problems and instantly generates accurate, clean Python input code using a robust regex template engine. With 100+ templates and support for edge cases like test cases and matrices, it speeds up coding significantly.",
    technologies: ["JavaScript", "Regex", "Python", "Vite", "HTML/CSS"],
    features: ["Regex-based input parsing", "100+ input templates", "Auto-generated Python code", "Edge case handling"],
    link: "https://cpinput.netlify.app",
    github: "https://github.com/adnantabda/cpinput",
    date: "2025",
    status: "Live",
  },
    {
    id: 3,
    image: naifdigital, 
    title: "Naif Digital",
    category: "Agency Website",
    description: "Official agency site for Tena Solutions, offering digital services and products across multiple sectors.",
    fullDescription:
      "The Naif Digital website is the central hub for showcasing services, case studies, and expertise in full-stack development, branding, media, and strategic digital solutions. Built with performance, clarity, and growth in mind, it communicates trust and professionalism to potential clients.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel"],
    features: ["Service catalog", "Responsive design", "Smooth animations", "Optimized performance", "SEO ready"],
    link: "http://github.com/naifdigital/naifdigital-website/",
    github: "https://github.com/naifdigital",
    date: "2025",
    status: "Live",
  },
  {
  id: 4,
  image: hamidmuude,
  title: "Hamid Muudee+",
  category: "Mobile Development",
  description: "A modern Oromo-English dictionary app based on the legacy Hamid Muudee book, rebuilt for mobile users.",
  fullDescription:
    "Hamid Muudee+ is a mobile dictionary app that digitizes the well-known Hamid Muudee Oromo-English dictionary book. Designed with the goal of cultural preservation and modern access, the app offers fast search, offline access, and a clean UI to help users explore thousands of terms with ease.",
  technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Tailwind for RN"],
  features: [
    "Offline searchable dictionary",
    "Clean and accessible UI",
    "Built-in support for both Oromo and English",
    "Based on the original Hamid Muudee book"
  ],
  link: "https://hamidmuudee.com", // update if there's a real link
  github: "https://github.com/adnantabda/hamid-muudee-plus",
  date: "2025",
  status: "In Progress"
},
  {
    id: 5,
    image: dosyncer,
    title: "DoSyncer",
    category: "Task Manager App",
    description: "A habit and task management app built using pure JavaScript.",
    fullDescription: "DoSyncer is a productivity tool that helps users manage their daily to-dos, projects, and habits. Developed with minimal dependencies using pure JavaScript, it's a clean and lightweight planner perfect for daily use.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    features: ["Project and task tracking", "Daily planner", "Habit tracker", "Simple UI"],
    link: "https://adnantabda.github.io/DoSyncer/",
    github: "https://github.com/adnantabda/DoSyncer",
    date: "2024",
    status: "Live"
  },
  {
  id: 6,
  image: onepiece, 
  title: "Bounty Clash",
  category: "Battle Game",
  description: "A turn-based character battle game inspired by One Piece.",
  fullDescription: "Bounty Clash is a strategic turn-based browser game where players choose iconic characters from the One Piece universe and engage in battles to increase their bounty. Each character has unique stats and abilities, and winning battles earns bounty points and reputation across different factions.",
  technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
  features: [
    "Character selection with special abilities",
    "Turn-based battle system",
    "Bounty increase mechanics",
    "Faction-based character filtering",
    "Cooldown system for special moves"
  ],
  link: "https://github.com/adnantabda/One-piece-Bounty-Clash", 
  github: "https://github.com/adnantabda/One-piece-Bounty-Clash", 
  date: "2024",
  status: "Live"
}


];

const ProjectDialog = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-slate-700/50">
        <DialogHeader className="space-y-4">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg border border-slate-700/30"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                {project.status}
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
                {project.date}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </DialogTitle>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/30">
                {project.category}
              </span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-cyan-400" />
              About This Project
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 rounded-lg border border-blue-500/20 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30"
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700/30">
            <Button 
              asChild 
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Project
              </a>
            </Button>
            
            {project.github && (
              <Button 
                asChild 
                variant="outline" 
                className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white py-3 px-6 rounded-lg transition-all duration-300"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section className="relative py-20 bg-slate-900/50 backdrop-blur-sm" id='projects'>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative container mx-auto px-6 max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium mb-3">
              MY WORK
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Latest Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Selected Projects"].map((filter) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === "Selected Projects"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "glass border border-slate-700/30 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-400/30 hover:text-cyan-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="glass rounded-2xl overflow-hidden border border-slate-700/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-cyan-400 text-sm font-medium mb-1">{project.category}</span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-slate-300 text-sm mt-2 opacity-90">Click to view details</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30">
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">{project.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectDialog 
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
}