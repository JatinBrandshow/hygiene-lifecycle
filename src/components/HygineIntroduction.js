"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import the router

const HygineIntroduction = () => {
    const router = useRouter(); // Initialize the router

    return (
        <>
            <section className="py-16 px-4 sm:px-6 lg:py-24 bg-[var(--primary)]/5">
                <div className="max-w-7xl mx-auto">
                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        {/* Left Column - Image with Certifications below */}
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[300px] h-full">
                                {" "}
                                {/* Further reduced min-height */}
                                <Image src="/img/building.webp" alt="Pharmaceutical Manufacturing Facility" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--tertiary)]/90 via-[var(--tertiary)]/30 to-transparent flex items-end p-6">
                                    {" "}
                                    {/* Reduced padding */}
                                    <h3 className="text-xl font-bold text-white drop-shadow-lg">WHO GMP Certified Facility</h3> {/* Reduced text size */}
                                </div>
                            </div>

                            {/* Certifications moved below image */}
                            {/* <div className="animate-fadeIn delay-800">
                                    <h4 className="text-lg font-semibold text-[var(--tertiary)] mb-4 text-center lg:text-left">Certifications & Approvals:</h4>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                        {['WHO GMP', 'ISO 13485', 'CE Certified', 'Global Markets'].map((cert, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 font-medium animate-bounceIn"
                                                style={{ animationDelay: `${900 + index * 100}ms` }}
                                            >
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div> */}
                        </div>

                        {/* Right Column - Content */}
                        <div className="lg:w-1/2 space-y-6 animate-fadeInUp flex flex-col justify-center">
                            <div className="animate-slideInRight">
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--tertiary)] mb-4">
                                    <span className="text-[var(--primary)]">Welcome to</span> Hygine Lifesciences Pvt Ltd
                                </h2>
                                <p className="text-lg text-gray-600 border-l-4 border-[var(--primary)] pl-4 py-1 animate-pulse">Comprehensive quality management from raw materials to finished products</p>
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 animate-fadeIn delay-100">
                                <p className="text-gray-700 leading-relaxed animate-slideInUp">Founded in 2022, Hygine Lifesciences Pvt Ltd has State-of-the-Art World Class WHO GMP Certified Manufacturing facilities.</p>

                                <p className="text-gray-700 leading-relaxed animate-slideInUp delay-200">We specialize in advanced sterile manufacturing processes for pharmaceutical products with focus on quality and compliance.</p>

                                <p className="text-gray-700 leading-relaxed animate-slideInUp delay-300">
                                    Our facilities have been audited and approved by many International Accreditation Agencies and we currently serve clients across Kenya, Ghana, Nigeria, Yemen, and Afghanistan.
                                </p>

                                <p className="text-gray-700 leading-relaxed font-medium animate-slideInUp delay-400">
                                    Hygine Lifesciences Pvt Ltd is one of the fastest growing quality solutions providers in healthcare - Focused on Delivering Global Standard Systems at Competitive Prices.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 animate-fadeIn delay-500">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-lg animate-bounce">🧼</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--tertiary)] mb-1">Aseptic Processing</h3>
                                        <p className="text-gray-600 text-sm">Sterile manufacturing environment meeting WHO GMP standards</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-lg animate-pulse">🌡️</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--tertiary)] mb-1">Environmental Control</h3>
                                        <p className="text-gray-600 text-sm">Grade A/B cleanrooms with continuous monitoring</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-lg animate-spin">📋</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--tertiary)] mb-1">Quality Systems</h3>
                                        <p className="text-gray-600 text-sm">Comprehensive documentation and validation</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-lg animate-pulse">🌐</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--tertiary)] mb-1">Global Reach</h3>
                                        <p className="text-gray-600 text-sm"> Hygine Lifesciences Pvt Ltd.Serving clients across multiple continents</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fadeIn delay-1000">
                                <button 
                                    onClick={() => router.push('/manufacturing')}
                                    className="px-5 py-2.5 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--tertiary)] transition-all font-medium transform hover:scale-105 text-sm sm:text-base"
                                >
                                    Learn About Our Processes
                                </button>
                                <button 
                                    onClick={() => router.push('/contact')}
                                    className="px-5 py-2.5 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-secondary hover:text-white transition-all font-medium transform hover:scale-105 text-sm sm:text-base"
                                >
                                    Contact Quality Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HygineIntroduction;