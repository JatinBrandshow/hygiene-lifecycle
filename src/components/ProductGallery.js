"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProductGallery = () => {
  const products = [
    { id: 1, name: "HYGIMER", image: "img/products/img_1.webp", url: "/carbapenem-injection" },
    { id: 2, name: "HYGIPIP", image: "img/products/img_2.webp", url: "/carbapenem-injection" },
    { id: 3, name: "Hygicef-SB", image: "img/products/img_3.webp", url: "/carbapenem-injection" },
    { id: 4, name: "Hyceftra", image: "img/products/img_4.webp", url: "/carbapenem-injection" },
    { id: 5, name: "HYCEFU", image: "img/products/img_5.webp", url: "/carbapenem-injection" },
    { id: 6, name: "HYCEFU - 1.5gm", image: "img/products/img_6.webp", url: "/carbapenem-injection" },
    { id: 7, name: "HYTAXIME 1gm", image: "img/products/img_7.webp", url: "/cephalosporin-injection" },
    { id: 8, name: "HYCEFTA 1gm", image: "img/products/img_8.webp", url: "/cephalosporin-injection" },
    { id: 9, name: "HYTAZO 1.125gm", image: "img/products/img_9.webp", url: "/cephalosporin-injection" },
    { id: 10, name: "HYGICEFE 1g", image: "img/products/img_10.webp", url: "/cephalosporin-injection" },
  ];

  // Particles.js effect
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS("particles-js-gallery", {
          particles: {
            number: { value: 290, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "triangle", polygon: { nb_sides: 10 } },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, random: true, bounce: true },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-8 bg-gradient-to-br from-primary to-tertiary max-md:py-6 max-sm:py-4 relative overflow-hidden">
      {/* Particles Background */}
      <div id="particles-js-gallery" className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 max-md:px-0 max-sm:px-2">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            Product Gallery
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },      // mobile
            641: { slidesPerView: 2 },
            941: { slidesPerView: 3.2},    // tablet
            1025: { slidesPerView: 4.2 },   // laptop & desktop
          }}
          className="rounded-2xl"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 max-lg:p-4 max-md:p-3.5 max-sm:p-2.5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2 max-lg:text-lg max-md:text-base max-sm:text-base">
                    {product.name}
                  </h3>
                  <Link href={product.url} passHref>
                    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 cursor-pointer">
                      View More
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination (below slider) */}
        <div className="custom-swiper-pagination flex justify-center gap-2 mt-8"></div>
      </div>

      {/* Pagination styles */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 5px;
          height: 3px;
          background-color: #e5e7eb; /* gray-200 */
          opacity: 1;
          transition: background-color 0.3s;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #ffffff; /* bright white */
          width: 15px;
        }
      `}</style>
    </section>
  );
};

export default ProductGallery;
