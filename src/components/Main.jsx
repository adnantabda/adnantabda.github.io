import { useState, useEffect } from 'react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="relative py-20 bg-slate-900/50 backdrop-blur-sm" // Changed to match Skills
    >
      {/* Background Pattern - now identical to Skills */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative container mx-auto px-6 max-w-6xl"> {/* Changed container to match Skills */}
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header - now matches Skills styling exactly */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium mb-3">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Who I Am
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto"></div>
          </div>

          {/* Content */}
          <div className="glass rounded-2xl p-8 lg:p-12 border border-slate-700/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="space-y-6 text-lg lg:text-xl text-slate-300 leading-relaxed">
              <p>
                I'm{' '}
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Adnan Tahir Abda
                </span>
                , a Full Stack Developer, System Designer, and now venturing into Mobile App Development. 
                I help bring complex ideas to life through clean architecture and smart code.
              </p>

              <p>
                Outside of client work, I'm passionate about{' '}
                <span className="font-semibold text-purple-400">
                  Algorithms and Data Structures
                </span>
                . If you're looking for someone who can think deep, build fast, and deliver clean: 
                we should definitely{' '}
                <a 
                  href="#contact" 
                  className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 border-b border-yellow-400/30 hover:border-yellow-300/50"
                >
                  have a talk
                </a>
                .
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;