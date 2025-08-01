"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = ["/img/main-section/main-section.webp", "/img/main-section/main-section-1.webp", "/img/main-section/main-section-2.webp"];

const ContactUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="grid lg:grid-cols-2 bg-[#f5f6ee] text-slate-800 relative h-[75vh]">
            {/* Left Column */}
            <div className="relative h-full">
                {/* Black overlay */}
                {formVisible && <div className="absolute inset-0 bg-black/60 z-20 transition-opacity duration-500 pointer-events-none" />}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-8 md:p-12 lg:p-20">
                    <div className="flex-grow overflow-y-auto">
                        <div className="space-y-4 mb-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">Contact Us</h2>
                            <p className="text-lg text-slate-600 max-w-md">We're here to help with any questions or inquiries. Whether you're a consumer or a reseller, we've got you covered.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mb-16">
                            <div>
                                <h3 className="text-sm font-medium text-slate-500 mb-2">Head Office</h3>
                                <p>11, Industrial Area, Katha</p>
                                <p>Bhatoli khalan, Baddi</p>
                                <p>(H.P.), India</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-500 mb-2">Mail</h3>
                                <p>info@hyginelifesciences.com</p>
                                <h3 className="text-sm font-medium text-slate-500 mt-4 mb-2">Phone</h3>
                                <p>+91 99103 09423</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <button onClick={() => setFormVisible(true)} className="p-6 bg-white rounded-xl flex flex-col justify-between transition text-left w-full">
                                <div className="space-y-2">
                                    <p className="text-sm text-slate-400">Questions?</p>
                                    <h3 className="text-2xl font-semibold text-slate-900">Fill in the form</h3>
                                </div>
                                <ArrowRight className="w-6 h-6 self-end mt-4 text-indigo-600" />
                            </button>

                            <div className="p-6 bg-white rounded-xl flex flex-col justify-between transition">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-slate-900">Support</h3>
                                </div>
                                <Link href="#" className="self-end mt-4 text-indigo-600">
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Image Slider */}
            <div className="relative h-full overflow-hidden bg-slate-100">
                <div className="flex h-full w-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <div key={index} className="relative min-w-full h-full">
                            <Image src={img || "/placeholder.svg"} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === currentImageIndex} />
                        </div>
                    ))}
                </div>

                {/* Progress Bars */}
                <div className="absolute top-4 right-4 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <div key={index} onClick={() => setCurrentImageIndex(index)} className="w-10 h-1 bg-white/40 rounded overflow-hidden cursor-pointer">
                            {index === currentImageIndex && (
                                <div
                                    className="h-full bg-indigo-500"
                                    style={{
                                        animation: "progressBar 4s linear forwards",
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Slide-in Form */}
                <div className={`absolute top-0 right-0 h-full w-full z-30 bg-black bg-opacity-90 text-white p-8 transition-transform duration-700 ease-in-out flex flex-col ${formVisible ? "translate-x-0" : "translate-x-full"}`}>
                    {formVisible && (
                        <button
                            onClick={() => setFormVisible(false)}
                            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-black text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 z-50"
                        >
                            &times;
                        </button>
                    )}

                    <div className="max-w-3xl mx-auto mt-16 space-y-6 flex-grow overflow-y-auto">
                        <h3 className="text-4xl font-bold mb-6 leading-snug">
                            Leave a message <br /> and we will contact you soon
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="First name" className="bg-black border border-gray-600 p-3 rounded" />
                            <input type="text" placeholder="Last name" className="bg-black border border-gray-600 p-3 rounded" />
                            <input type="email" placeholder="example@mail.com" className="bg-black border border-gray-600 p-3 rounded md:col-span-2" />
                            <input type="tel" placeholder="+31 644 666 888" className="bg-black border border-gray-600 p-3 rounded md:col-span-2" />
                        </div>
                        <textarea placeholder="Type a message..." className="bg-black border border-gray-600 p-3 rounded w-full h-28" />
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="accent-indigo-500" />
                            <span>
                                Accept the{" "}
                                <a href="#" className="underline">
                                    Terms and Conditions
                                </a>
                            </span>
                        </label>
                        <button className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200">Send message →</button>
                    </div>
                </div>

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
    );
};

export default ContactUs;
