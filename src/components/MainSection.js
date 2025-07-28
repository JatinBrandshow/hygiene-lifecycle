"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/img/main-section/main-section.webp",
    title: "We Provide Promising Better Health for Everyone",
    description:
      "Your health comes first. You expect medicines, we give you personal care. We are a manufacturer, offering more than just medicines.",
    Primarybutton: "Get in Touch",
    Secondarybutton: "Learn More",
  },
  {
    id: 2,
    image: "/img/main-section/main-section-1.webp",
    title: "Healing the World with Best-in-Class Injectable Products",
    description:
      "We focus on delivering quality, innovative products in the injectables market, with the aim of improving the lives of our customers and patients worldwide.",
    Primarybutton: "Get in Touch",
    Secondarybutton: "Learn More",
  },
  {
    id: 3,
    image: "/img/main-section/main-section-2.webp",
    title: "Obsessed with Quality",
    description: "Committed to improving the lives of patients worldwide.",
    Primarybutton: "Get in Touch",
    Secondarybutton: "Learn More",
  },
];

const MainSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-[1500px] mx-auto">
                <div className="w-full md:w-6/12 text-white px-4">
                  <h2 className="text-sm sm:text-base font-medium tracking-wide uppercase mb-4 opacity-90">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                      {slide.Primarybutton}
                    </button>
                    <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                      {slide.Secondarybutton}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default MainSection;
