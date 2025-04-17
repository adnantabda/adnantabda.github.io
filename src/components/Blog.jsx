import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Latest <span className="text-primary-600 dark:text-primary-400">Blog</span> Posts
      </h2>
      
      <div 
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        onMouseMove={(e) => {
          // For the glow effect to follow mouse
          document.querySelectorAll('.glow-card').forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          });
        }}
      >
        <div className="glow-card">
          <BlogCard />
        </div>
        <div className="glow-card">
          <BlogCard 
            title="Building a Modern UI with TailwindCSS"
            description="Learn how to quickly design responsive, beautiful layouts using TailwindCSS."
            imageUrl="https://placehold.co/800x400/111/fff?text=Tailwind+UI"
            date="April 10, 2025"
            readTime="4 min read"
            link="https://yourblog.com/post/tailwind-ui"
          />
        </div>
        <div className="glow-card">
          <BlogCard 
            title="React Performance Tips"
            description="Speed up your React apps with these performance optimization techniques."
            imageUrl="https://placehold.co/800x400/333/eee?text=React+Tips"
            date="April 5, 2025"
            readTime="5 min read"
            link="https://yourblog.com/post/react-performance"
          />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          View All Articles
        </button>
      </div>
    </section>
  );
};

export default BlogSection;