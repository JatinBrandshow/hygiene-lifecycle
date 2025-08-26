"use client";

import { useEffect, useState } from "react";

const OurCustomers = () => {
    // Sample customer logos - you can replace these with actual customer logos
    const customerLogos = [
        { id: 1, name: "Customer 1", src: "/img/our-customers/customer-1.webp" },
        { id: 2, name: "Customer 2", src: "/img/our-customers/customer-2.webp" },
        { id: 3, name: "Customer 3", src: "/img/our-customers/customer-3.webp" },
        { id: 4, name: "Customer 4", src: "/img/our-customers/customer-4.webp" },
        { id: 5, name: "Customer 5", src: "/img/our-customers/customer-5.webp" },
        { id: 6, name: "Customer 6", src: "/img/our-customers/customer-6.webp" },
        { id: 7, name: "Customer 7", src: "/img/our-customers/customer-7.webp" },
        { id: 8, name: "Customer 8", src: "/img/our-customers/customer-8.webp" },
        { id: 9, name: "Customer 9", src: "/img/our-customers/customer-9.webp" },
        { id: 10, name: "Customer 10", src: "/img/our-customers/customer-10.webp" },
        { id: 11, name: "Customer 11", src: "/img/our-customers/customer-11.webp" },
    ];

    // Animated injection/vial component with different paths and speeds
    const AnimatedInjection = ({ delay = 0, duration = 20, size = "medium", pathType = "linear" }) => {
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [isAnimating, setIsAnimating] = useState(false);
        const [rotation, setRotation] = useState(0);

        useEffect(() => {
            const getRandomPosition = () => ({
                x: Math.random() * (window.innerWidth - 100),
                y: Math.random() * (window.innerHeight - 100),
            });

            const animateWithPath = () => {
                const startPos = getRandomPosition();
                setPosition(startPos);
                setRotation(Math.random() * 360); // Random rotation for variety

                setTimeout(() => {
                    setIsAnimating(true);

                    const animate = () => {
                        let endPos;

                        // Different path types for variety
                        switch (pathType) {
                            case "diagonal":
                                endPos = {
                                    x: startPos.x + (Math.random() - 0.5) * 800,
                                    y: startPos.y + (Math.random() - 0.5) * 600,
                                };
                                break;
                            case "circular":
                                const angle = Math.random() * Math.PI * 2;
                                const radius = 200 + Math.random() * 300;
                                endPos = {
                                    x: startPos.x + Math.cos(angle) * radius,
                                    y: startPos.y + Math.sin(angle) * radius,
                                };
                                break;
                            case "zigzag":
                                endPos = {
                                    x: Math.random() * window.innerWidth,
                                    y: startPos.y + (Math.random() - 0.5) * 400,
                                };
                                break;
                            default:
                                // linear
                                endPos = getRandomPosition();
                        }

                        // Keep within bounds
                        endPos.x = Math.max(0, Math.min(window.innerWidth - 100, endPos.x));
                        endPos.y = Math.max(0, Math.min(window.innerHeight - 100, endPos.y));

                        setPosition(endPos);
                    };

                    animate();
                }, delay * 1000);
            };

            animateWithPath();
            const interval = setInterval(animateWithPath, duration * 1000);

            return () => clearInterval(interval);
        }, [delay, duration, pathType]);

        const sizeClasses = {
            small: "w-8 h-16",
            medium: "w-10 h-20",
            large: "w-12 h-24",
        };

        return (
            <div
                className={`absolute ${sizeClasses[size]} opacity-20 transition-all ease-in-out pointer-events-none z-0`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
                    transitionDuration: isAnimating ? `${duration}s` : "0s",
                }}
            >
                {/* Improved Injection/Vial SVG */}
                <svg viewBox="0 0 100 200" className="w-full h-full">
                    {/* Syringe Body */}
                    <rect x="30" y="60" width="40" height="100" rx="5" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
                    
                    {/* Plunger */}
                    <rect x="35" y="40" width="30" height="20" rx="3" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />
                    
                    {/* Plunger Handle */}
                    <rect x="32" y="30" width="36" height="10" rx="2" fill="#9ca3af" />
                    
                    {/* Liquid inside syringe */}
                    <rect x="32" y="120" width="36" height="40" fill="#60a5fa" />
                    
                    {/* Measurement markings */}
                    <line x1="25" y1="80" x2="30" y2="80" stroke="#9ca3af" strokeWidth="1.5" />
                    <line x1="25" y1="100" x2="30" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
                    <line x1="25" y1="120" x2="30" y2="120" stroke="#9ca3af" strokeWidth="1.5" />
                    <line x1="25" y1="140" x2="30" y2="140" stroke="#9ca3af" strokeWidth="1.5" />
                    
                    {/* Needle Hub */}
                    <rect x="35" y="160" width="30" height="10" rx="2" fill="#9ca3af" />
                    
                    {/* Needle */}
                    <path d="M50 170 L50 190 L47 190 L50 195 L53 190 L50 190" fill="#6b7280" />
                    
                    {/* Needle Tip */}
                    <polygon points="50,195 47,200 53,200" fill="#6b7280" />
                </svg>
            </div>
        );
    };

    return (
        <>
            <section className="relative bg-blue-200 py-16 overflow-hidden max-lg:py-10 max-md:py-8 max-sm:py-6">
                {/* Animated Background Injections/Vials */}
                <div className="absolute inset-0 overflow-hidden">
                    <AnimatedInjection delay={0} duration={15} size="medium" pathType="linear" />
                    <AnimatedInjection delay={3} duration={15} size="small" pathType="diagonal" />
                    <AnimatedInjection delay={7} duration={15} size="large" pathType="circular" />
                    <AnimatedInjection delay={12} duration={15} size="medium" pathType="zigzag" />
                    <AnimatedInjection delay={18} duration={15} size="small" pathType="linear" />
                    <AnimatedInjection delay={25} duration={15} size="large" pathType="diagonal" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1400px] px-8 max-lg:px-6 max-md:px-4 max-sm:px-2">
                    <div className="flex flex-row lg:items-start gap-8 max-lg:flex-col max-md:flex-col max-sm:flex-col max-lg:gap-0 max-md:gap-0 max-sm:gap-0">
                        {/* First Column - 4/6 width - Heading and Paragraph */}
                        <div className="w-full lg:w-7/12 mb-0 max-lg:mb-8 max-md:mb-6 max-sm:mb-4">
                            {/* Heading */}
                            <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-6 max-md:text-3xl max-lg:text-4xl max-sm:text-2xl max-lg:mb-5 max-md:mb-4 max-sm:mb-3">Our Customers</h2>

                            {/* Description */}
                            <p className="max-w-4xl text-lg text-gray-800 leading-relaxed max-md:text-base max-sm:text-sm">
                                Hygine Lifesciences Pvt Ltd serves a diverse set of customers worldwide. Our customers include healthcare providers, hospitals, pharmaceutical distributors, and government healthcare agencies. With commitment to
                                quality and affordability, we ensure our Dry powder Injectable products meet the stringent requirements of our valued customers across various regions of India and the world.
                            </p>
                        </div>

                        {/* Second Column - 2/6 width - Customer Logos */}
                        <div className="w-full lg:w-5/12">
                            {/* Customer Logos Grid - 3 columns, multiple rows */}
                            <div className="grid grid-cols-4 gap-4 max-md:gap-3 max-sm:gap-2">
                                {customerLogos.map((customer) => (
                                    <div key={customer.id} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 p-2 max-sm:p-0.5">
                                        <img src={customer.src || "/placeholder.svg"} alt={customer.name} className="h-12 w-32 object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurCustomers;