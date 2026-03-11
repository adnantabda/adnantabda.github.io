import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        title: 'Freelance Full-Stack Developer',
        company: 'Remote',
        period: '2023 – Present',
        description: [
            'Built SaaS MVPs and startup products using React, Supabase, and PostgreSQL',
            'Worked closely with founders to translate ideas into functional applications',
            'Delivered scalable, maintainable solutions focused on performance and UX',
        ],
        current: true,
    },
    {
        title: 'Frontend Developer',
        company: 'Various Projects',
        period: '2022 – 2024',
        description: [
            'Developed responsive user interfaces with React and modern CSS',
            'Collaborated with designers using Figma to implement clean UI/UX',
            'Optimized performance and accessibility across devices',
        ],
        current: false,
    },
    {
        title: 'Backend / API Development',
        company: 'Project-Based',
        period: '2022 – 2025',
        description: [
            'Designed RESTful APIs and database schemas',
            'Implemented authentication, authorization, and real-time features',
            'Documented backend logic for long-term maintainability',
        ],
        current: false,
    },
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section id="experience" className="py-24 sm:py-32 bg-secondary/30" ref={ref}>
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
                            Experience
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Where I've worked, learned, and grown as a developer.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div variants={container} className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                variants={item}
                                className="group relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-green-500/50 transition-colors"
                            >
                                {/* Timeline dot */}
                                <div className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${exp.current
                                        ? 'bg-green-500 border-green-500'
                                        : 'bg-background border-border group-hover:border-green-500/50'
                                    } transition-colors`} />

                                <div className="bg-card rounded-xl p-6 border border-border hover:border-green-500/30 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {exp.title}
                                            </h3>
                                            <p className="text-muted-foreground flex items-center gap-2">
                                                <Briefcase size={14} />
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                            {exp.current && (
                                                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 flex-shrink-0 mt-2" />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
