"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation"; // Import the router

const slides = [
    {
        id: 1,
        image: "/img/main-section/main-section.webp",
        title: "We Provide Promising Better Health for Everyone",
        description: "Your health comes first. You expect medicines, we give you personal care. We are a manufacturer, offering more than just medicines.",
        Primarybutton: "Get in Touch",
        Secondarybutton: "Learn More",
        primaryLink: "/contact", // Added link for primary button
        secondaryLink: "/about", // Added link for secondary button
    },
    {
        id: 2,
        image: "/img/main-section/main-section-1.webp",
        title: "Healing the World with Best-in-Class Injectable Products",
        description: "We focus on delivering quality, innovative products in the injectables market, with the aim of improving the lives of our customers and patients worldwide.",
        Primarybutton: "Get in Touch",
        Secondarybutton: "Learn More",
        primaryLink: "/contact", // Added link for primary button
        secondaryLink: "/about", // Added link for secondary button
    },
    {
        id: 3,
        image: "/img/main-section/main-section-2.webp",
        title: "Obsessed with Quality",
        description: "Committed to improving the lives of patients worldwide.",
        Primarybutton: "Get in Touch",
        Secondarybutton: "Learn More",
        primaryLink: "/contact", // Added link for primary button
        secondaryLink: "/about", // Added link for secondary button
    },
];

const MainSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const contentRef = useRef(null);
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current.children,
                { x: -560, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );
        }
    }, [currentSlide]);

    // Function to handle button clicks
    const handleButtonClick = (path) => {
        router.push(path);
    };

    return (
        <section className="relative w-full h-[85vh] overflow-hidden">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Centered Content */}
                        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                            <div className="w-full max-w-[1500px] mx-auto">
                                <div className="w-full md:w-6/12 text-white px-2.5" ref={index === currentSlide ? contentRef : null}>
                                    <h1 className="text-4xl font-bold mb-6 leading-tight max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:mb-5 max-md:mb-4 max-sm:mb-3">{slide.title}</h1>
                                    <p className="text-xl mb-6 opacity-90 max-lg:text-lg max-md:text-base max-sm:text-sm max-lg:mb-5 max-md:mb-4 max-sm:mb-3">{slide.description}</p>
                                    <div className="flex flex-wrap gap-4 max-md:gap-3 max-sm:gap-2.5">
                                        <button 
                                            onClick={() => handleButtonClick(slide.primaryLink)} 
                                            className="group relative overflow-hidden text-[17px] tracking-[1px] uppercase font-semibold px-6 py-3 max-lg:px-5 max-md:px-4 max-sm:px-3 max-md:text-base max-sm:text-sm border-2 border-black text-black rounded-xl transition-all duration-300 ease-in-out hover:text-white focus:text-white active:scale-90"
                                        >
                                            {slide.Primarybutton}
                                            <span className="absolute top-0 bottom-0 left-1/2 right-1/2 bg-black opacity-0 z-[-1] transition-all duration-500 ease-in-out group-hover:left-0 group-hover:right-0 group-hover:opacity-100 group-focus:left-0 group-focus:right-0 group-focus:opacity-100"></span>
                                        </button>

                                        <button 
                                            onClick={() => handleButtonClick(slide.secondaryLink)} 
                                            className="group relative overflow-hidden text-[17px] tracking-[1px] uppercase font-semibold px-6 py-3 max-lg:px-5 max-md:px-4 max-sm:px-3 max-md:text-base max-sm:text-sm border-2 border-gray-800 text-black rounded-xl transition-all duration-300 ease-in-out hover:text-white focus:text-white active:scale-90"
                                        >
                                            {slide.Secondarybutton}
                                            <span className="absolute top-0 bottom-0 left-1/2 right-1/2 bg-gray-800 opacity-0 z-[-1] transition-all duration-500 ease-in-out group-hover:left-0 group-hover:right-0 group-hover:opacity-100 group-focus:left-0 group-focus:right-0 group-focus:opacity-100"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

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