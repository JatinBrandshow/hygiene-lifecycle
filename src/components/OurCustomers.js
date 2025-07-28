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

    // Animated capsule component with different paths and speeds
    const AnimatedCapsule = ({ delay = 0, duration = 20, size = "medium", pathType = "linear" }) => {
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [isAnimating, setIsAnimating] = useState(false);

        useEffect(() => {
            const getRandomPosition = () => ({
                x: Math.random() * (window.innerWidth - 100),
                y: Math.random() * (window.innerHeight - 100),
            });

            const animateWithPath = () => {
                const startPos = getRandomPosition();
                setPosition(startPos);

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
            small: "w-12 h-4",
            medium: "w-14 h-6",
            large: "w-16 h-8",
        };

        return (
            <div
                className={`absolute ${sizeClasses[size]} opacity-20 transition-all ease-in-out pointer-events-none z-0`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transitionDuration: isAnimating ? `${duration}s` : "0s",
                }}
            >
                {/* Rectangle capsule with rounded corners, blue border, and half gray/half blue background */}
                <div className="w-full h-full rounded-full border-2 border-blue-700 overflow-hidden">
                    <div className="w-full h-full flex">
                        <div className="w-1/2 h-full bg-gray-300"></div>
                        <div className="w-1/2 h-full bg-blue-700"></div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <section className="relative bg-blue-200 py-16 md:py-24 overflow-hidden">
                {/* Animated Background Capsules */}
                <div className="absolute inset-0 overflow-hidden">
                    <AnimatedCapsule delay={0} duration={15} size="medium" pathType="linear" />
                    <AnimatedCapsule delay={3} duration={15} size="small" pathType="diagonal" />
                    <AnimatedCapsule delay={7} duration={15} size="large" pathType="circular" />
                    <AnimatedCapsule delay={12} duration={15} size="medium" pathType="zigzag" />
                    <AnimatedCapsule delay={18} duration={15} size="small" pathType="linear" />
                    <AnimatedCapsule delay={25} duration={15} size="large" pathType="diagonal" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                        {/* First Column - 4/6 width - Heading and Paragraph */}
                        <div className="w-full lg:w-7/12 mb-12 lg:mb-0">
                            {/* Heading */}
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">Our Customers</h2>

                            {/* Description */}
                            <p className="max-w-4xl text-lg text-gray-600 leading-relaxed">
                                Shamshree Lifesciences serves a diverse set of customers worldwide. Our customers include healthcare providers, hospitals, pharmaceutical distributors, and government healthcare agencies. With commitment to
                                quality and affordability, we ensure our Dry powder Injectable products meet the stringent requirements of our valued customers across various regions of India and the world.
                            </p>
                        </div>

                        {/* Second Column - 2/6 width - Customer Logos */}
                        <div className="w-full lg:w-5/12">
                            {/* Customer Logos Grid - 3 columns, multiple rows */}
                            <div className="grid grid-cols-4 gap-4 lg:gap-3">
                                {customerLogos.map((customer) => (
                                    <div key={customer.id} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 p-2">
                                        <img src={customer.src || "/placeholder.svg"} alt={customer.name} className="h-12 lg:h-10 w-32 object-contain" />
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
