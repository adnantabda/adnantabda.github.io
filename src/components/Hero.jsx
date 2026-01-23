import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Gradient Orbs - Green themed */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={item} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]"
          >
            I build{' '}
            <span className="text-green-400">launch-ready</span>{' '}
            SaaS & MVP products.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Full-stack developer specializing in{' '}
            <span className="text-foreground font-medium">React</span>,{' '}
            <span className="text-foreground font-medium">Supabase</span>, and{' '}
            <span className="text-foreground font-medium">PostgreSQL</span>.{' '}
            I help founders turn ideas into fast, scalable, production-ready web apps
            designed to validate the market and grow with users.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-200 shadow-lg shadow-green-500/20"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-lg border border-border hover:bg-secondary/80 hover:border-green-500/30 transition-all duration-200"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 pt-8"
          >
            {['React', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS', 'TypeScript'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary rounded-full border border-border hover:border-green-500/30 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
