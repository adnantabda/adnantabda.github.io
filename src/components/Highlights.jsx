// src/components/Highlights.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const highlights = [
  {
    title: "Taught at Adama Science & Tech University",
    logos: ["/astu.png"],
    period: "2018-2020",
    description: "Lecturer in Computer Science Department"
  },
  {
    title: "Co-Founder at Tena Solutions",
    logos: ["/tena.png", "/nestjs.png", "/postgres.png"],
    period: "2020-Present",
    description: "Building scalable enterprise solutions"
  },
  {
    title: "Worked at OICT - Digital ID System",
    logos: ["/oict.png", "/figma.png", "/nodejs.png"],
    period: "2019-2020",
    description: "Lead Frontend Developer for national ID platform"
  },
  {
    title: "Freelancer on Fiverr, Freelancer.com, Contra",
    logos: ["/fiverr.png", "/freelancer.png", "/contra.png"],
    period: "2017-Present",
    description: "Completed 50+ projects with 100% satisfaction"
  },
];

const Highlights = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="highlights"
      className="relative max-w-7xl mx-auto px-4 py-20 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl font-bold mb-12"
      >
        <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">
          Highlights
        </span>
      </motion.h2>
      
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet"></span>`,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: { translate: [0, 0, 0], shadow: false },
            next: { translate: [0, 0, 0], shadow: false },
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: {
              slidesPerView: 2.5,
              creativeEffect: {
                prev: { translate: ["-120%", 0, -500] },
                next: { translate: ["120%", 0, -500] },
              },
            },
          }}
          modules={[Autoplay, Pagination, EffectCreative]}
          className="!pb-12"
        >
          {highlights.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full">
                <div
                  className={`h-64 rounded-2xl p-6 mx-2 border shadow-md transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-center gap-4 md:gap-6 h-1/2">
                    {item.logos.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="w-16 h-fit object-contain"
                      />
                    ))}
                  </div>
                  <div className="mt-4 text-center h-1/2 flex flex-col justify-between">
                    <h3
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                    <p
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div
          className={`hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-2 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          <button className="highlight-prev-btn p-2 rounded-full bg-opacity-80 backdrop-blur-sm border shadow-md hover:scale-110 transition-transform">
            <FaArrowLeft size={24} />
          </button>
          <button className="highlight-next-btn p-2 rounded-full bg-opacity-80 backdrop-blur-sm border shadow-md hover:scale-110 transition-transform">
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          width: 30px !important;
          border-radius: 5px !important;
        }
        .custom-bullet {
          background: rgba(0, 0, 0, 0.8);
        }
        .dark .custom-bullet {
          background: rgba(255, 255, 255, 0.8);
        }
        /* REMOVE ALL FILTERS/BLURS/COLOR OVERLAYS */
        .swiper-slide {
          filter: none !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Highlights;
