import { Code2, BugPlay, Globe2, BarChart4, Database, Cloud, Users } from "lucide-react";

const features = [
  { icon: <Code2 />, title: "Full-Stack Development", tag:"Good" },
  { icon: <BugPlay />, title: "System Design" },
  { icon: <Globe2 />, title: "Mobile App Development", },
  { icon: <BarChart4 />, title: "Designing" },
  { icon: <Users />, title: "Communication" },
  { icon: <Database />, title: "Database"},
  { icon: <Cloud />, title: "Deployment" },
];

export default function WhatIOffer() {
  return (
    <section className="py-16 bg-">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center" style={{ color: `rgb(var(--text-primary))`}}>
          What I am Good at.
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white p-6 rounded-2xl hover:shadow-xl transition duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-white w-8 h-8">{feature.icon}</div>
                {feature.tag && (
                  <span className="text-xs bg-white text-black px-2 py-0.5 rounded font-semibold">
                    {feature.tag}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
