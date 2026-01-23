import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

const Contact = () => {
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

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      description: 'For project inquiries',
      href: 'mailto:adnantabda@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      description: 'View my work',
      href: 'https://github.com/adnantabda',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      description: 'Connect professionally',
      href: 'https://linkedin.com/in/adnantabda',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={item} className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's build something that{' '}
              <span className="text-green-400">actually ships</span>.
            </h2>
            <p className="text-lg text-muted-foreground">
              Have an idea, MVP, or SaaS product in mind? I'm currently available
              and happy to discuss how we can bring it to life.
            </p>
          </motion.div>

          {/* CTA Card */}
          <motion.div variants={item} className="max-w-2xl mx-auto">
            <div className="relative p-8 sm:p-12 rounded-2xl bg-card border border-border overflow-hidden">
              {/* Gradient decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative space-y-8">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl text-foreground font-medium">
                    Ready to build a fast, scalable web app?
                  </p>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:adnantabda@gmail.com"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-200 shadow-lg shadow-green-500/20"
                  >
                    <Send size={18} />
                    <span>Send me an email</span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>

                {/* Contact Links */}
                <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-border">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex flex-col items-center p-4 rounded-xl hover:bg-secondary transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-green-400 group-hover:bg-green-500/10 transition-colors mb-3">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {link.label}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                          {link.description}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upwork Badge */}
          <motion.div variants={item} className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Also available on
            </p>
            <a
              href="https://www.upwork.com/freelancers/~01f84bd11081481fc7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06c1.492 0 2.703 1.212 2.703 2.703c-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z" />
              </svg>
              <span className="font-medium">Upwork Profile</span>
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;