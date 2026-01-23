import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Sparkles, Zap, Rocket, Users } from 'lucide-react';

const values = [
    {
        icon: Brain,
        title: 'Structured Problem-Solving',
        description: "I break complex ideas into clear, achievable solutions — turning product requirements into clean, well-structured code.",
    },
    {
        icon: Sparkles,
        title: 'Excellence in Delivery',
        description: 'I care deeply about code quality, UI polish, and long-term maintainability. What I ship is built to last.',
    },
    {
        icon: Zap,
        title: 'Performance & Reliability',
        description: 'From frontend interactions to backend logic, I build apps that stay fast and stable under real-world usage.',
    },
    {
        icon: Rocket,
        title: 'SaaS & MVP Focus',
        description: "Your business goals come first. I build only what's needed to validate & grow — no overengineering, no wasted time.",
    },
    {
        icon: Users,
        title: 'Client-Centric Collaboration',
        description: 'I work closely with clients, adapting quickly to feedback and evolving requirements to deliver exactly what the product needs.',
    },
];

const About = () => {
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
        <section id="about" className="py-24 sm:py-32" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <motion.div variants={item} className="max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Full-stack development focused on{' '}
                            <span className="text-green-400">real business outcomes</span>.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            I specialize in building SaaS applications and MVPs that are fast to launch,
                            easy to maintain, and ready for real users. My work blends clean frontend
                            experiences with reliable backend systems, so your product doesn't just
                            look good — it works flawlessly.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I focus on helping startups validate ideas, ship faster, and iterate
                            confidently, without cutting corners on performance or scalability.
                        </p>
                    </motion.div>

                    {/* Value Grid */}
                    <motion.div
                        variants={container}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    variants={item}
                                    className="group relative p-6 rounded-xl bg-secondary/50 border border-border hover:border-green-500/30 hover:bg-secondary transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                            <Icon size={20} strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {value.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        variants={item}
                        className="flex flex-wrap justify-center gap-12 pt-8 border-t border-border"
                    >
                        {[
                            { label: 'Years Experience', value: '3+' },
                            { label: 'Web Projects Built', value: '20+' },
                            { label: 'Client Satisfaction', value: '100%' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl sm:text-5xl font-bold text-green-400">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground mt-2">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
