import React from 'react';

const BlogCard = ({
  title = "Blog Post Title Placeholder",
  description = "This is a short preview or excerpt of the blog post that gives readers a quick idea of what to expect before clicking.",
  imageUrl = "https://placehold.co/800x400/webp?text=Blog+Image",
  date = "March 25, 2025",
  readTime = "6 min read",
  link = "#"
}) => {
  return (
    <div className="relative rounded-xl bg-white dark:bg-gray-900 h-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group isolate">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      {/* Image container with parallax effect */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="object-cover transition-all duration-700 group-hover:scale-110 absolute h-full w-full inset-0"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-medium shadow-sm backdrop-blur-sm">
          {date}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
        {/* Animated title underline */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 relative inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-500"></span>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-200">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <polyline points="12 6 12 12 16 14" strokeWidth="2" />
            </svg>
            {readTime}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline group/readmore"
          >
            Read Post
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 transition-transform group-hover/readmore:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 12h14" strokeWidth="2" />
              <path d="m12 5 7 7-7 7" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15),transparent_80%)]"></div>
    </div>
  );
};

export default BlogCard;