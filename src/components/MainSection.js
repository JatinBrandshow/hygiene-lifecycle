"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/img/main-section/main-section.webp",
        title: "Transform Your Workspace",
        subtitle: "Modern Solutions for Modern Teams",
        description: "Discover innovative tools and technologies that revolutionize how your team collaborates and creates amazing products together.",
        buttonText: "Get Started",
    },
    {
        id: 2,
        image: "/img/main-section/main-section-1.webp",
        title: "Unleash Your Creativity",
        subtitle: "Design Without Limits",
        description: "Explore endless possibilities with our creative platform that empowers designers and artists to bring their wildest ideas to life.",
        buttonText: "Explore Now",
    },
    {
        id: 3,
        image: "/img/main-section/main-section-2.webp",
        title: "Future-Ready Technology",
        subtitle: "Innovation at Your Fingertips",
        description: "Stay ahead of the curve with cutting-edge technology solutions that adapt to your needs and scale with your business growth.",
        buttonText: "Learn More",
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

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="relative w-full h-[93vh] overflow-hidden">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                            <div className="text-white w-full max-w-[1500px] mx-auto text-center px-4">
                                <h2 className="text-sm sm:text-base font-medium tracking-wide uppercase mb-4 opacity-90">{slide.subtitle}</h2>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
                                <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">{slide.description}</p>
                                <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">{slide.buttonText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm" aria-label="Previous slide">
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm" aria-label="Next slide">
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
