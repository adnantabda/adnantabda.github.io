import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

// Import project images
import pimai from '../assets/pimai-screenshot.png';
import cpinput from '../assets/cpinput-screenshot.png';
import naifdigital from '../assets/naifdigital-screenshot.png';
import hamidmuude from '../assets/hamidmuude.png';

const projects = [
  {
    id: 1,
    image: pimai,
    title: "Pimai",
    tagline: "AI-powered personal information management platform",
    description: "Built a full-stack application focused on structured data, performance, and clean UI.",
    technologies: ["React", "Node.js", "Supabase", "PostgreSQL"],
    link: "https://pimai.example.com",
    github: "https://github.com/adnantabda/pimai",
    featured: true,
  },
  {
    id: 2,
    image: cpinput,
    title: "Interactive Guitar Notation Viewer",
    tagline: "Complex frontend + backend system with synchronized video playback",
    description: "Built a sophisticated music learning tool with real-time notation display synchronized to video playback.",
    technologies: ["React", "JavaScript", "APIs"],
    link: "https://cpinput.netlify.app",
    github: "https://github.com/adnantabda/cpinput",
    featured: true,
  },
  {
    id: 3,
    image: naifdigital,
    title: "Agency & SaaS Websites",
    tagline: "Modern, responsive websites optimized for performance and SEO",
    description: "Built professional agency websites and SaaS landing pages with focus on conversion and performance.",
    technologies: ["React", "Tailwind CSS", "Supabase"],
    link: "https://github.com/naifdigital/naifdigital-website/",
    github: "https://github.com/naifdigital",
    featured: true,
  },
  {
    id: 4,
    image: hamidmuude,
    title: "Hamid Muudee+",
    tagline: "Oromo-English dictionary mobile app",
    description: "Mobile dictionary app digitizing the renowned Hamid Muudee Oromo-English dictionary for modern accessibility.",
    technologies: ["React Native", "Expo", "SQLite", "TypeScript"],
    link: "https://hamidmuudee.com",
    github: "https://github.com/adnantabda/hamid-muudee-plus",
    featured: true,
  },
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.article
      layout
      onClick={() => onClick(project)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-green-500/30 transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {project.tagline}
              </p>
            </div>
            <ArrowRight
              size={20}
              className="flex-shrink-0 text-muted-foreground group-hover:text-green-400 group-hover:translate-x-1 transition-all"
            />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectDialog = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        {/* Image Header */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
            <p className="text-muted-foreground">{project.tagline}</p>
          </DialogHeader>

          {/* Description */}
          <p className="text-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium bg-green-500/10 text-green-400 rounded-lg border border-green-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              <ExternalLink size={18} />
              View Live
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-lg border border-border hover:bg-secondary/80 transition-colors"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={item} className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects where I built real products, combining
              frontend polish with reliable backend systems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.filter(p => p.featured).map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* View More CTA */}
          <motion.div variants={item} className="text-center pt-4">
            <a
              href="https://github.com/adnantabda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              <span>View more on GitHub</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;