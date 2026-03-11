import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, Github, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-32 pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-12">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-green-400 transition-colors mb-8 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                            All Projects
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            A complete list of products, tools, and systems I've built.
                            From AI-powered platforms to minimalist utilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-green-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-green-500/5"
                            >
                                {/* Image Placeholder/Image */}
                                <div className="relative aspect-video bg-secondary overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                                            <span className="text-xs font-mono opacity-50 uppercase tracking-widest">{project.title}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="p-6 flex flex-col flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-green-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-green-400 font-medium mt-1">
                                            {project.tagline}
                                        </p>
                                    </div>

                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-[10px] font-semibold bg-secondary text-muted-foreground rounded uppercase tracking-wider border border-border group-hover:border-green-500/20 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 mt-auto flex items-center gap-4">
                                        {project.link !== '#' && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-green-400 transition-colors"
                                                title="Live Preview"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-green-400 transition-colors"
                                                title="Source Code"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
