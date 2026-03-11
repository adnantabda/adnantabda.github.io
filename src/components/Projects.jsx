import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

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
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground group-hover:scale-105 transition-transform duration-500">
              <span className="text-xs font-mono opacity-50 uppercase tracking-widest px-4 text-center">{project.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
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
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[10px] font-bold bg-secondary text-muted-foreground rounded uppercase tracking-wider border border-border group-hover:border-green-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2.5 py-1 text-[10px] font-bold bg-secondary text-muted-foreground rounded uppercase tracking-wider border border-border">
                +{project.technologies.length - 3}
              </span>
            )}
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
        <div className="relative aspect-video overflow-hidden bg-secondary">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm font-mono opacity-50 uppercase tracking-widest">{project.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
            <p className="text-green-400 font-medium">{project.tagline}</p>
          </DialogHeader>

          {/* Description */}
          <p className="text-foreground leading-relaxed">
            {project.details || project.description}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-bold bg-green-500/10 text-green-400 rounded-lg border border-green-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            )}
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

  const featuredProjects = projects.filter(p => p.featured);

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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div variants={item} className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A selection of products where I built real products, combining
                frontend polish with reliable backend systems.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group"
              >
                View all projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </motion.div>
            ))}
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