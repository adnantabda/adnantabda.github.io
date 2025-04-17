// src/components/Main.jsx
import React from 'react';

const Main = () => {
  return (
<div className="container mx-auto px-6" id="about">
  <div className="mb-12 text-center">
    <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-block mb-4">ABOUT ME</span>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" style={{ color: `rgb(var(--text-primary))`}}>
      Who I Am
    </h2>
  </div>
  <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
    <p className="mb-6" style={{ color: `rgb(var(--text-primary))`}}>
      I'm <span className="font-bold text-blue-600 dark:text-blue-400">Adnan Tahir Abda</span>, a Full Stack Developer, System Designer, and now venturing into Mobile App Development I help bring complex ideas to life through clean architecture and smart code.
    </p>

    <p className="mb-6" style={{ color: `rgb(var(--text-primary))`}}>
      Outside of client work, I’m passionate about <span className="font-semibold text-purple-500">Algorithms and Data Structures</span>      If you're looking for someone who can think deep, build fast, and deliver clean: we should definitely <a className='font-bold text-yellow-400 cursor-pointer'>have a talk talk.</a>  
    </p>
    <p className="mb-6">
    </p>
  </div>
</div>
  );
};

export default Main;
