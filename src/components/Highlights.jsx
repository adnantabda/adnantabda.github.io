import { Code, Database, Server, Zap, Users, Award } from 'lucide-react';

const Highlights = () => {
const Highlights = [
  {
    icon: ({ size = 48 }) => (
      <img 
        src="/a2sv-logo2.png" 
        alt="A2SV logo" 
        width={size} 
        height={size} 
        style={{ objectFit: 'contain' }} 
      />
    ),
    number: "2024 – Present",
    label: "Software Engineering Trainee at A2SV",
    description: "Undergoing intensive DSA training as part of A2SV’s elite engineering program."
  },
  {
    icon: ({ size = 48 }) => (
      <img 
        src="/HU-logo.png" 
        alt="Haramaya University logo" 
        width={size} 
        height={size} 
        style={{ objectFit: 'contain' }} 
      />
    ),
    number: "2022 – Present",
    label: "Software Engineering Student at Haramaya University",
    description: "Studying at one of Ethiopia’s top universities, majoring in Software Engineering."
  },
  {
    icon: ({ size = 48 }) => (
      <img 
        src="/hucisa-logo.png" 
        alt="HUCISA logo" 
        width={size} 
        height={size} 
        style={{ objectFit: 'contain' }} 
      />
    ),
    number: "2024 – Present",
    label: "Co-Founder of HUCISA at Haramaya University",
    description: "Helped launch and lead one of the largest tech clubs at the university."
  },
  {
    icon: ({ size = 48 }) => (
      <img 
        src="/hulmi-logo.png" 
        alt="Hulmi Tech Solutions logo" 
        width={size} 
        height={size} 
        style={{ objectFit: 'contain' }} 
      />
    ),
    number: "2023 – Present",
    label: "Full-Stack Developer at Hulmi Tech Solutions",
    description: "Contributing to major projects part-time, across both frontend and backend."
  },
  {
    icon: ({ size = 48 }) => (
      <img 
        src="/iteck-logo2.png" 
        alt="Iteck School of Programming logo" 
        width={size} 
        height={size} 
        style={{ objectFit: 'contain' }} 
      />
    ),
    number: "2019 – 2021",
    label: "Graduate – Iteck School of Programming",
    description: "Completed a foundational web development program at a young age, building a strong technical base early on."
  },
];


  const skills = [
    { name: "Node.js", level: 95 },
    { name: "PostgreSQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React", level: 90 },
    { name: "System Design", level: 85 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
      {/* Achievements */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Highlights</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
{Highlights.map((achievement, index) => {
  const IconComponent = achievement.icon;
  return (
    <div key={achievement.label} className="group p-6 ...">
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
        <IconComponent size={48} />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
      <div className="text-sm font-semibold text-slate-300 mb-2">{achievement.label}</div>
      <div className="text-xs text-slate-400 leading-relaxed">{achievement.description}</div>
    </div>
  );
})}


        </div>
      </div>

      {/* Core Skills */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Core Expertise</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
        </div>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group"
              style={{ 
                animation: `fade-in 0.6s ease-out ${index * 150}ms forwards`,
                opacity: 0 
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-300 font-medium">{skill.name}</span>
                <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    animation: `skill-bar 1.5s ease-out ${index * 200}ms forwards`,
                    transform: 'translateX(-100%)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Server size={16} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white">Primary Stack</h4>
          </div>
          <div className="text-slate-300 text-sm leading-relaxed">
            <span className="text-cyan-400 font-semibold">PERN Stack</span> specialist with expertise in 
            <span className="text-blue-400 font-semibold"> PostgreSQL</span>, 
            <span className="text-purple-400 font-semibold"> Express.js</span>, 
            <span className="text-cyan-400 font-semibold"> React</span>, and 
            <span className="text-green-400 font-semibold"> Node.js</span>. 
            Enhanced with <span className="text-yellow-400 font-semibold">Python</span> for data processing and system automation.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes skill-bar {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Highlights;
