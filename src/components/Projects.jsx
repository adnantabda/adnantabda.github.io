export default function ProjectsSection() {
    return (
      <section className="relative py-20 overflow-hidden">
        {/* Glowing background blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-100/60 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        </div>
  
        {/* Section container */}
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center rounded-full text-xs mb-3 px-4 py-1.5 bg-primary-50/50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium">
              MY WORK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-2">
              Latest Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
            </h2>
          </div>
  
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["All Projects", "Web Development", "Bot Development", "Automation"].map((filter, i) => (
              <button
                key={i}
                className={`inline-flex items-center justify-center gap-2 text-sm font-medium h-9 px-3 rounded-full transition-colors ${
                  i === 0
                    ? "bg-primary-500 hover:bg-primary-600 text-white"
                    : "border bg-background hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
  
          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 text-lg">
                    Image Placeholder
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white text-sm font-medium mb-1">Category</span>
                    <h3 className="text-white text-xl font-bold">Project Name</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-primary-500 transition-colors">
                      Project Name
                    </h3>
                    <div className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5">
                      Category
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                    Short project description goes here to explain what it is about...
                  </p>
                </div>
                <div className="p-6 px-5 py-3 flex justify-between items-center">
                  <button className="text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 text-sm font-medium flex items-center gap-1">
                    View Details
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }