import { useState, useEffect, useRef } from 'react';
import myPhoto from '../assets/my-photo.png';
import myPhoto2 from '../assets/my-photo2.png'
import LoopingRoles from './LoopingRooles';
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Highlights from './Highlights';


const HighlightGreeting = () => {
  return (
    <div className="inline-block rounded-3xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-4">
      <div className="rounded-2xl bg-white dark:bg-black px-4 py-2 text-sm font-medium text-black dark:text-white shadow-md">
        Welcome, this is Adnan.
      </div>
    </div>
  );
};


const FloatingWord = ({ text, colorClass, style }) => {
  return (
    <div
      className={`absolute ${colorClass} px-4 py-2 rounded-lg shadow-lg 
        transform transition-all duration-300 hover:shadow-xl`}
      style={{
        ...style,
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      <span className="text-white font-bold text-sm md:text-base">{text}</span>
    </div>
  );
};

const Hero = () => {
  const skills = [
    { name: "Linux", icon: "logos:linux-tux", level: 90 },
    { name: "Kotlin", icon: "logos:kotlin", level: 85 },
    { name: "TypeScript", icon: "logos:typescript-icon", level: 88 },
    { name: "NestJS", icon: "logos:nestjs", level: 82 },
    { name: "PostgreSQL", icon: "logos:postgresql", level: 80 },
    { name: "Docker", icon: "logos:docker-icon", level: 78 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 95 },
    { name: "Next.js", icon: "logos:nextjs-icon", level: 90 },
    { name: "Expo", icon: "logos:expo-icon", level: 75 },
    { name: "React", icon: "logos:react", level: 92 },
    { name: "Node.js", icon: "logos:nodejs-icon", level: 85 },
    { name: "GraphQL", icon: "logos:graphql", level: 70 },
  ];

  const [isDarkMode, setIsDarkMode] = useState(true);
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [words, setWords] = useState([
    { id: 1, text: 'Code', color: 'bg-amber-500', x: 20, y: 30, vx: 0.5, vy: 0.3 },
    { id: 2, text: 'Develop', color: 'bg-pink-500', x: 60, y: 50, vx: -0.4, vy: 0.2 },
    { id: 3, text: 'Design', color: 'bg-blue-500', x: 40, y: 70, vx: 0.3, vy: -0.5 },
    { id: 4, text: 'Debug', color: 'bg-green-500', x: 80, y: 20, vx: -0.2, vy: 0.4 },
    { id: 5, text: 'Deploy', color: 'bg-purple-500', x: 30, y: 60, vx: 0.6, vy: -0.3 },
    { id: 6, text: 'Maintain', color: 'bg-red-500', x: 70, y: 40, vx: -0.5, vy: -0.2 },
  ]);

  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const damping = 0.98;

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

  // Cursor tracking
  // const handleMouseMove = (e) => {
  //   if (!containerRef.current) return;
  //   const rect = containerRef.current.getBoundingClientRect();
  //   setMousePos({
  //     x: ((e.clientX - rect.left) / rect.width) * 100,
  //     y: ((e.clientY - rect.top) / rect.height) * 100
  //   });
  // };

  // Animation logic
  // const updatePositions = (deltaTime) => {
  //   setWords(prevWords => 
  //     prevWords.map(word => {
  //       const dx = mousePos.x - word.x;
  //       const dy = mousePos.y - word.y;
  //       const distance = Math.sqrt(dx * dx + dy * dy);

  //       const force = distance < 15 ? -0.002 : 0;
  //       const ax = (dx / distance) * force * deltaTime || 0;
  //       const ay = (dy / distance) * force * deltaTime || 0;

  //       const newVx = (word.vx + ax) * damping;
  //       const newVy = (word.vy + ay) * damping;

  //       let newX = word.x + newVx;
  //       let newY = word.y + newVy;

  //       // Boundary wrapping
  //       if (newX < 0) newX += 100;
  //       if (newX > 100) newX -= 100;
  //       if (newY < 0) newY += 100;
  //       if (newY > 100) newY -= 100;

  //       return { 
  //         ...word, 
  //         x: newX, 
  //         y: newY, 
  //         vx: newVx, 
  //         vy: newVy 
  //       };
  //     })
  //   );
  // };
  const SPEED = 0.02; // Feel free to tweak this for slower or faster movement
  const updatePositions = (deltaTime) => {
    setWords(prevWords =>
      prevWords.map(word => {
        let { x, y, vx, vy } = word;

        // Normalize the velocity vector (direction)
        const magnitude = Math.sqrt(vx * vx + vy * vy);
        const dirX = vx / magnitude;
        const dirY = vy / magnitude;

        // Use deltaTime to keep movement framerate-independent
        const moveX = dirX * SPEED * deltaTime;
        const moveY = dirY * SPEED * deltaTime;

        x += moveX;
        y += moveY;

        // Wrap around bounds (0-100%)
        if (x < 0) x = 100;
        if (x > 100) x = 0;
        if (y < 0) y = 100;
        if (y > 100) y = 0;

        return { ...word, x, y, vx: dirX, vy: dirY }; // Store normalized direction for consistency
      })
    );
  };


  const animate = (timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const deltaTime = timestamp - lastTimeRef.current;

    if (deltaTime > 16) {
      updatePositions(deltaTime);
      lastTimeRef.current = timestamp;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col py-12 px-4 relative overflow-hidden"
      ref={containerRef}
      // onMouseMove={handleMouseMove}
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
      {/* Floating Words */}
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

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm z-50"
        style={{
          backgroundColor: `rgba(var(--bs-primary-rgb), 0.2)`,
          color: `rgb(var(--text-primary))`
        }}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      {/* Content Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 mt-12">


        {/* Left content */}
        <div className="w-full md:w-1/2 pl-6">
          <HighlightGreeting></HighlightGreeting>
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight" style={{ color: `rgb(var(--text-primary))` }}>
            Software Engineer <span className='text-red-600'>.</span>
          </h2>
          {/* <h2 className="text-3xl font-extrabold mb-4" style={{ color: `rgb(var(--text-primary))` }}>
            Full-Stack Developer
          </h2> */}
          <LoopingRoles />
          <p className="text-sm sm:text-base text-gray-300 mt-2 py-1 max-w-xl" style={{ color: `rgb(var(--text-primary))` }}>
            I craft clean, scalable, and efficient digital solutions with a deep understanding of system architecture,
            <span className='text-yellow-600 font-bold'> full-stack development </span>, and mobile apps. Whether it's building responsive UIs,
            <span className='text-yellow-600 font-bold'> architecting backend logic</span>, or designing intuitive user flows I bring clarity, speed,
            and precision to every project I touch.
          </p>

          <a
            href="#contact"
            className="inline-block my-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
          <div className="flex justify-start space-x-6 mt-6">
            {/* Telegram */}
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              style={{ color: `rgb(var(--text-primary))` }}>
              <i className="fab fa-telegram fa-2x"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              <i className="fab fa-github fa-2x"></i>
            </a>

            {/* Instagram */}
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
        {/* Right content */}
        <div className="hidden sm:block w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src={myPhoto2}
            alt="Your Name"
            className="w-full h-full object-cover my-6"
          />
        </div>
        {/* Highlights Section Inside Hero */}
        

        
      </section>
      <section className="container mx-auto px-6 mt-12 z-10">
  <Highlights />
</section>
    </div>

  );
};

export default Hero;
