"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const OurProductRange = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    // Sample product data
    const products = [
        {
            title: "Carbapenem Injections",
            description: "Potent, Broad-Spectrum Antibiotics, Reserved For Severe Infections",
            image: "/img/product-range/product-1.webp",
            features: ["Effective against resistant strains", "Hospital-grade formulations", "Strict quality control"],
        },
        {
            title: "Cephalosporin Injections",
            description: "Effective Against Various Bacteria, Used For Diverse Infections",
            image: "/img/product-range/product-2.webp",
            features: ["Multiple generation options", "Broad-spectrum coverage", "Proven clinical efficacy"],
        },
    ];
    return (
        <>
            <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Product Range</h2>
                        <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Shamshree develops high-quality niche pharmaceuticals for specialized markets, meeting current needs and anticipating future demand.</p>
                    </div>

                    {/* Products Grid */}
                    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {products.map((product, index) => (
                            <div key={index} className="product-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Image Section */}
                                    <div className="md:w-2/5 relative h-64 md:h-auto bg-gray-100">
                                        <div className="absolute inset-0 flex items-center justify-center p-6">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={300}
                                                height={300}
                                                className="object-contain w-full h-full"
                                                style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "100%",
                                                    width: "auto",
                                                    height: "auto",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                                        <p className="text-gray-700 mb-4">{product.description}</p>

                                        <ul className="space-y-2 mb-6">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="h-5 w-5 text-[var(--primary)] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="text-sm text-gray-500 border-t pt-4">Requires medical supervision | FDA approved formulations</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurProductRange;
