import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    { name: 'About', sectionId: 'about', type: 'scroll' },
    { name: 'Testimonials', sectionId: 'testimonials', type: 'scroll' },
    { name: 'All Projects', path: '/projects', type: 'link' },
    { name: 'Skills', sectionId: 'skills', type: 'scroll' },
    { name: 'Contact', sectionId: 'contact', type: 'scroll' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/adnantabda', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/adnantabda', label: 'LinkedIn' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-semibold text-green-400 hover:opacity-80 transition-opacity"
            >
              Adnan T.
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center gap-1">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-green-400 transition-colors rounded-lg hover:bg-secondary"
                      aria-label={link.label}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-5 bg-border mx-2" />

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-green-400 transition-colors rounded-lg hover:bg-secondary"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? (
                      <Sun size={18} strokeWidth={1.5} />
                    ) : (
                      <Moon size={18} strokeWidth={1.5} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                item.type === 'link' ? (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="text-2xl font-medium text-foreground hover:text-green-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      closeMenu();
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="text-2xl font-medium text-foreground hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </motion.button>
                )
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 mt-8"
              >
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-muted-foreground hover:text-green-400 transition-colors rounded-xl bg-secondary"
                      aria-label={link.label}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
