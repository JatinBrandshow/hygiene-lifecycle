"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = ["/img/main-section/main-section.webp", "/img/main-section/main-section-1.webp", "/img/main-section/main-section-2.webp"];

const ContactUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="grid lg:grid-cols-2">
                {/* Left Column */}
                <div className="bg-palmer-beige p-8 md:p-12 lg:p-20 flex flex-col justify-between">
                    <div>
                        <div className="space-y-8 mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-palmer-dark">Contact Us</h2>

                            <p className="text-lg text-palmer-dark max-w-md">We're here to help with any questions or inquiries. Whether you're a consumer or a reseller, we've got you covered.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 text-palmer-dark mb-16">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Head office</h3>
                                <p>Deventerstraat 11</p>
                                <p>7575 EM, Oldenzaal</p>
                                <p>The Netherlands</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Mail</h3>
                                <p>info@palmer-dinnerware.com</p>
                                <h3 className="text-sm font-medium text-gray-500 mt-4 mb-2">Phone</h3>
                                <p>+31 541 581 600</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-palmer-dark text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-400">Questions?</p>
                                <h3 className="text-2xl font-bold">Fill in the form</h3>
                            </div>
                            <Link href="#" className="self-end mt-4">
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="bg-palmer-light text-palmer-dark p-6 rounded-xl shadow-md flex flex-col justify-between">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Support</h3>
                            </div>
                            <Link href="#" className="self-end mt-4">
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column - Slide animation with progress bar */}
                <div className="relative min-h-[400px] lg:min-h-screen overflow-hidden">
                    {/* Sliding container */}
                    <div className="flex h-full w-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                        {images.map((img, index) => (
                            <div key={index} className="relative min-w-full h-full">
                                <Image src={img} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === currentImageIndex} />
                            </div>
                        ))}
                    </div>

                    {/* Progress Bars */}
                    <div className="absolute top-4 right-4 flex space-x-2 z-10">
                        {images.map((_, index) => (
                            <div key={index} onClick={() => setCurrentImageIndex(index)} className="w-10 h-1 bg-white/30 rounded overflow-hidden cursor-pointer">
                                {index === currentImageIndex && (
                                    <div
                                        className="h-full bg-white"
                                        style={{
                                            animation: "progressBar 4s linear forwards",
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Keyframes for progress bar */}
                    <style jsx>{`
                        @keyframes progressBar {
                            0% {
                                width: 0%;
                            }
                            100% {
                                width: 100%;
                            }
                        }
                    `}</style>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
