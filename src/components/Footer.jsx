import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/adnantabda', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/adnantabda', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:adnantabda@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'About', sectionId: 'about' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold text-green-400">
              Adnan T.
            </span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} — All rights reserved
            </p>
          </div>

          {/* Center - Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-sm text-muted-foreground hover:text-green-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right - Social & Back to Top */}
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 text-muted-foreground hover:text-green-400 transition-colors rounded-lg hover:bg-secondary"
                    aria-label={link.label}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-border" />

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 text-muted-foreground hover:text-green-400 transition-colors rounded-lg hover:bg-secondary"
              aria-label="Back to top"
            >
              <ArrowUp size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;