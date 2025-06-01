import { useState, useEffect } from 'react';
import { Menu, Github, Linkedin, Mail, Code2, Terminal, Database } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Terminal },
    { name: 'Work', href: '#work', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Database },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/adnantabda', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/adnantabda', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:adnantabda@gmail.com', label: 'Email' },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      {/* Mobile Header - Now Hidden */}
      <header
        className={`lg:hidden hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 py-3' 
            : 'bg-slate-900/90 backdrop-blur-lg py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Adnan Tahir
          </a>

          <button
            className="relative p-2 text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none z-60"
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'top-2.5'
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-slate-900/98 backdrop-blur-xl z-50 transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <nav className="space-y-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-3xl font-light text-slate-300 hover:text-white transition-all duration-300 transform ${
                    isMobileMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-16 flex justify-center space-x-8">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 transform ${
                      isMobileMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + navItems.length) * 100}ms` }}
                    aria-label={link.label}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 xl:w-72 z-50 bg-slate-950/90 backdrop-blur-xl border-r border-slate-800/30">
        <div className="flex flex-col h-full w-full p-6">
          {/* Logo */}
          <div className="mb-12">
            <a
              href="#home"
              className="group block"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Terminal size={20} className="text-white" />
                </div>
                <div className="hidden xl:block">
                  <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Adnan Tahir
                  </h1>
                  <p className="text-xs text-slate-400">Software Engineer</p>
                </div>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-3 p-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
                >
                  <IconComponent size={20} className="flex-shrink-0" />
                  <span className="hidden xl:block font-medium">{item.name}</span>
                  <div className="hidden xl:block ml-auto w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="border-t border-slate-800/50 pt-6">
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <IconComponent size={18} className="flex-shrink-0" />
                    <span className="hidden xl:block text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="hidden xl:block mt-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Available for hire</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
