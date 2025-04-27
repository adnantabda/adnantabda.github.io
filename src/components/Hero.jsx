import React, { useState, useEffect, useRef } from 'react';
import myPhoto from '../assets/my-photo.png';
import myPhoto2 from '../assets/my-photo2.png';
import LoopingRoles from './LoopingRooles';
import Highlights from './Highlights';
import { Sun, Moon } from 'lucide-react';

const HighlightGreeting = () => {
  return (
    <div className="inline-block rounded-full border-2 border-gray-800 dark:border-gray-200 px-4 py-1 mb-4"         style={{
      color: `rgb(var(--text-primary))`, 
      borderColor : `rgba(var(--text-primary-rgb)`
    }}>
      <p className="text-sm font-medium text-gray-800 dark:text-gray-200"         style={{
          color: `rgb(var(--text-primary))`
        }}>
        Welcome, this is Adnan.
      </p>
    </div>
  );
};

const ContactCTA = () => {
  return (
    <div className="relative group my-4">
      <a
        href="#contact"
        className="inline-block relative z-10 px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md transition-all duration-300 overflow-hidden"
      >
        <span className="relative flex items-center justify-center gap-2">
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </a>
      <style jsx>{`
        a:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

const FloatingWord = React.memo(({ text, colorClass, style }) => {
  return (
    <div
      className={`absolute ${colorClass} px-4 py-2 rounded-lg shadow-lg transform transition-transform duration-300`}
      style={{
        ...style,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d'
      }}
    >
      <span className="text-white font-bold text-sm md:text-base">{text}</span>
    </div>
  );
});

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const wordsRef = useRef([
    { id: 1, text: 'Code', color: 'bg-amber-500', x: 20, y: 30, vx: 0.5, vy: 0.3 },
    { id: 2, text: 'Develop', color: 'bg-pink-500', x: 60, y: 50, vx: -0.4, vy: 0.2 },
    { id: 3, text: 'Design', color: 'bg-blue-500', x: 40, y: 70, vx: 0.3, vy: -0.5 },
    { id: 4, text: 'Debug', color: 'bg-green-500', x: 80, y: 20, vx: -0.2, vy: 0.4 },
    { id: 5, text: 'Deploy', color: 'bg-purple-500', x: 30, y: 60, vx: 0.6, vy: -0.3 },
    { id: 6, text: 'Maintain', color: 'bg-red-500', x: 70, y: 40, vx: -0.5, vy: -0.2 },
  ]);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const containerRef = useRef(null);
  const [words, setWords] = useState(wordsRef.current);

  // Dynamic background colors
  useEffect(() => {
    const generateColor = () => Math.floor(Math.random() * 255);
    const updateColors = () => {
      document.documentElement.style.setProperty(
        '--bs-primary-rgb',
        `${generateColor()},${generateColor()},${generateColor()}`
      );
      document.documentElement.style.setProperty(
        '--bd-accent-rgb',
        `${generateColor()},${generateColor()},${generateColor()}`
      );
      document.documentElement.style.setProperty(
        '--bd-violet-rgb',
        `${generateColor()},${generateColor()},${generateColor()}`
      );
      document.documentElement.style.setProperty(
        '--bd-pink-rgb',
        `${generateColor()},${generateColor()},${generateColor()}`
      );
    };
    const interval = setInterval(updateColors, 2000);
    return () => clearInterval(interval);
  }, []);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bs-body-bg-rgb', isDarkMode ? '25, 25, 25' : '255, 255, 255');
    root.style.setProperty('--text-primary', isDarkMode ? '255, 255, 255' : '15, 15, 15');
    root.style.setProperty('--text-secondary', isDarkMode ? '180, 178, 178' : '80, 80, 80');
  }, [isDarkMode]);

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = Math.min(time - previousTimeRef.current, 100) / 1000;
      
      wordsRef.current = wordsRef.current.map(word => {
        let { x, y, vx, vy } = word;
        
        x = (x + vx * deltaTime * 60) % 100;
        y = (y + vy * deltaTime * 60) % 100;
        if (x < 0) x += 100;
        if (y < 0) y += 100;

        return { ...word, x, y };
      });
      
      setWords([...wordsRef.current]);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col py-12 px-4 relative overflow-hidden"
      ref={containerRef}
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(var(--bs-body-bg-rgb), 0.01), rgba(var(--bs-body-bg-rgb), 1) 85%),
          radial-gradient(ellipse at top left, rgba(var(--bs-primary-rgb), 0.5), transparent 50%),
          radial-gradient(ellipse at top right, rgba(var(--bd-accent-rgb), 0.5), transparent 50%),
          radial-gradient(ellipse at center right, rgba(var(--bd-violet-rgb), 0.5), transparent 50%),
          radial-gradient(ellipse at center left, rgba(var(--bd-pink-rgb), 0.5), transparent 50%)
        `,
        transition: 'background-image 0.5s ease'
      }}
    >
      {words.map(word => (
        <FloatingWord
          key={word.id}
          text={word.text}
          colorClass={word.color}
          style={{
            top: `${word.y}%`,
            left: `${word.x}%`,
            transform: `rotate(${word.vx * 5}deg)`
          }}
        />
      ))}

<button
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm z-50"
  style={{
    backgroundColor: `rgba(var(--bs-primary-rgb), 0.2)`,
    color: `rgb(var(--text-primary))`
  }}
>
  {isDarkMode ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
</button>

      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 mt-12">
        <div className="w-full md:w-1/2 pl-6">
          <HighlightGreeting />
          <h2
            className="text-5xl sm:text-6xl font-extrabold tracking-tight"
            style={{
              color: `rgb(var(--text-primary))`,
              fontFamily: `'Inter', sans-serif`,
            }}
          >
            Software Engineer <span className="text-red-600">.</span>
          </h2>
          <LoopingRoles />
          <p className="text-sm sm:text-base text-gray-300 mt-2 py-1 max-w-xl" style={{ color: `rgb(var(--text-primary))` }}>
            I craft clean, scalable, and efficient digital solutions with a deep understanding of system architecture,
            <span className='text-yellow-600 font-bold'> full-stack development </span>, and mobile apps. Whether it's building responsive UIs,
            <span className='text-yellow-600 font-bold'> architecting backend logic</span>, or designing intuitive user flows I bring clarity, speed,
            and precision to every project I touch.
          </p>
          <ContactCTA />
          <div className="flex justify-start space-x-6 mt-6">
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              style={{ color: `rgb(var(--text-primary))` }}>
              <i className="fab fa-telegram fa-2x"></i>
            </a>
  
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/adnantabda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="hidden sm:block w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src={myPhoto2}
            alt="Your Name"
            className="w-full h-full object-cover my-6"
          />
        </div>
      </section>
      <section className="container mx-auto px-6 mt-12 z-10">
        <Highlights />
      </section>
    </div>
  );
};

export default Hero;