// src/components/Main.jsx
import React from 'react';

const Main = () => {
  return (
<div className="container mx-auto px-6" id="about">
  <div className="mb-12 text-center">
    <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-block mb-4">ABOUT ME</span>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
      Who I Am
    </h2>
  </div>
  <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
    <p className="mb-6">
      I'm <span className="font-bold text-blue-600 dark:text-blue-400">Adnan Tahir Abda</span>, a Full Stack Developer, System Designer, and now venturing into Mobile App Development. As the co-founder of <span className="font-semibold text-blue-600 dark:text-blue-400">Hulmi Tech</span>, I help bring complex ideas to life through clean architecture and smart code. I lead our team with a focus on quality, speed, and elegance in execution.
    </p>
    <p className="mb-6">
      My strength lies in rapidly understanding new technologies and designing scalable systems that just work. Whether it's front-end design, back-end APIs, mobile apps, or data integration — I enjoy solving hard problems and building products that matter.
    </p>
    <p className="mb-6">
      Outside of client work, I’m passionate about <span className="font-semibold text-purple-500">competitive programming</span>, contributing to the dev community, and mentoring others — often for free.
    </p>
    <p className="mb-6">
      If you're looking for someone who can think deep, build fast, and deliver clean — we should definitely talk.
    </p>
  </div>
</div>
  );
};

export default Main;
