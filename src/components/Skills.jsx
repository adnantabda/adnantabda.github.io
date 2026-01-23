import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@iconify/react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'logos:react' },
      { name: 'JavaScript (ES6+)', icon: 'logos:javascript' },
      { name: 'HTML · CSS · SCSS', icon: 'logos:html-5' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Framer Motion', icon: 'logos:framer' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Supabase', icon: 'logos:supabase-icon' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'SQLite', icon: 'logos:sqlite' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Python', icon: 'logos:python' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git · GitHub', icon: 'logos:git-icon' },
      { name: 'CI/CD', icon: 'logos:github-actions' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'REST APIs', icon: 'carbon:api' },
      { name: 'Auth & Realtime', icon: 'carbon:security' },
    ],
  },
];

const Skills = () => {
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
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30" ref={ref}>
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
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              The tools and technologies I use to build fast, reliable products.
            </p>
          </motion.div>

          {/* Skills Grid by Category */}
          <motion.div
            variants={container}
            className="grid md:grid-cols-3 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={item} className="space-y-4">
                <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-green-500/30 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <Icon
                          icon={skill.icon}
                          width="24"
                          height="24"
                          className="transition-transform duration-200 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;