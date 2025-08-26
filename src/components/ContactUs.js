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

    useEffect(() => {
        const isMobile = window.innerWidth <= 640; // Tailwind's lg breakpoint

        if (formVisible && isMobile) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [formVisible]);

    return (
        <section className="flex max-lg:flex-col max-md:flex-col max-sm:flex-col text-slate-800 relative h-[75vh] max-lg:h-[120vh] max-md:h-screen max-sm:h-screen">
            {/* Left Column */}
            <div className="flex-1 relative bg-[#f5f6ee] h-full max-sm:h-fit">
                {/* Black overlay */}
                {formVisible && <div className="absolute inset-0 bg-black/60 z-20 transition-opacity duration-500 pointer-events-none" />}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-16 max-xl:p-10 max-lg:p-12 max-md:p-9 max-sm:p-6">
                    <div className="flex-grow">
                        <div className="space-y-4 mb-8 max-md:space-y-3 max-sm:space-y-2 max-lg:mb-6 max-md:mb-4 max-sm:mb-3">
                            <h2 className="text-5xl font-bold text-slate-900 leading-tight max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">Contact Us</h2>
                            <p className="text-lg text-slate-600 max-w-md max-md:text-base max-sm:text-sm">We're here to help with any questions or inquiries. Whether you're a consumer or a reseller, we've got you covered.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-7 mb-12 max-sm:grid-cols-1 max-lg:gap-6 max-md:gap-5 max-sm:gap-3 max-lg:mb-10 max-md:mb-8 max-sm:mb-6">
                            <div>
                                <h3 className="text-sm font-medium text-slate-500 mb-2 max-sm:text-xs">Head Office</h3>
                                <p className="text-base max-sm:text-sm">11, Industrial Area, Katha</p>
                                <p className="text-base max-sm:text-sm">Bhatoli khalan, Baddi</p>
                                <p className="text-base max-sm:text-sm">(H.P.), India</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-500 mb-2 max-sm:text-xs">Mail</h3>
                                <p className="text-base max-sm:text-sm">hygienelifesciences@gmail.com</p>
                                <h3 className="text-sm font-medium text-slate-500 mt-4 mb-2 max-sm:text-xs">Phone</h3>
                                <p className="text-base max-sm:text-sm">+91 99103 09423</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 max-xl:gap-3 max-lg:gap-4 max-md:gap-4 max-sm:gap-3">
                            <button onClick={() => setFormVisible(true)} className="p-6 bg-white rounded-xl flex flex-col justify-between transition text-left w-full max-xl:p-3.5 max-lg:p-5 max-md:p-3.5 max-sm:p-2.5">
                                <div className="space-y-2">
                                    <p className="text-sm text-slate-400 max-sm:text-xs">Questions?</p>
                                    <h3 className="text-2xl font-semibold text-slate-900 max-lg:text-xl max-md:text-lg max-sm:text-lg">Fill in the form</h3>
                                </div>
                                <ArrowRight className="w-6 h-6 self-end mt-4 text-indigo-600" />
                            </button>

                            <button onClick={() => setFormVisible(true)} className="p-6 bg-white rounded-xl flex flex-col justify-between transition text-left w-full max-xl:p-3.5 max-lg:p-5 max-md:p-3.5 max-sm:p-2.5">
                                <div className="space-y-2">
                                    <p className="text-sm text-slate-400 max-sm:text-xs">Need help?</p>
                                    <h3 className="text-2xl font-semibold text-slate-900 max-lg:text-xl max-md:text-lg max-sm:text-lg">Support</h3>
                                </div>
                                <ArrowRight className="w-6 h-6 self-end mt-4 text-indigo-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {formVisible && (
                <button
                    onClick={() => setFormVisible(false)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 z-[60] max-lg:hidden max-md:hidden max-sm:hidden"
                >
                    &times;
                </button>
            )}

            {/* Right Column - Image Slider */}
            <div className="flex-1 relative bg-slate-100 h-full overflow-hidden">
                <div className="flex w-full h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <div key={index} className="relative min-w-full h-full">
                            <Image src={img || "/placeholder.svg"} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === currentImageIndex} />
                        </div>
                    ))}
                </div>

                {/* Progress Bars */}
                <div className="absolute top-4 right-4 flex space-x-2 z-10">
                    {images.map((img, index) => (
                        <div key={index} className="relative min-w-full h-full">
                            <Image src={img || "/placeholder.svg"} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === currentImageIndex} />
                        </div>
                    ))}
                </div>

                {/* Slide-in Form */}
                <div
                    className={`${
                        formVisible ? "right-0 translate-x-0" : "translate-x-full"
                    } absolute top-0 h-full w-full z-30 bg-black bg-opacity-90 text-white p-8 transition-transform duration-700 ease-in-out flex flex-col max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-screen max-sm:h-full max-lg:p-7 max-md:p-6 max-sm:p-5`}
                >
                    <div className="max-w-3xl mx-auto space-y-6 flex-grow flex flex-col justify-center overflow-y-auto">
                        <h3 className="text-4xl font-bold mb-6 leading-snug max-lg:text-3xl max-md:text-2xl max-sm:text-2xl max-lg:mb-5 max-md:mb-4 max-sm:mb-3">
                            Leave a message <br /> and we will contact you soon
                        </h3>
                        {/* Close button for mobile screens */}
                        <button onClick={() => setFormVisible(false)} className="absolute max-sm:top-20 right-4 text-white text-2xl z-50 border border-white max-lg:top-4 max-lg:block hidden max-md:top-10 px-2">
                            &times;
                        </button>

                        <div className="grid grid-cols-2 gap-4 max-md:gap-3 max-sm:gap-2.5">
                            <input type="text" placeholder="First name" className="bg-black border border-gray-600 p-3 rounded" />
                            <input type="text" placeholder="Last name" className="bg-black border border-gray-600 p-3 rounded" />
                            <input type="email" placeholder="example@mail.com" className="bg-black border border-gray-600 p-3 rounded md:col-span-2" />
                            <input type="tel" placeholder="+31 644 666 888" className="bg-black border border-gray-600 p-3 rounded md:col-span-2" />
                        </div>
                        <textarea placeholder="Type a message..." className="bg-black border border-gray-600 p-3 rounded w-full h-28 max-sm:h-72" />
                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2 text-sm max-sm:text-xs">
                                <input type="checkbox" className="accent-indigo-500" />
                                <span>
                                    Accept the{" "}
                                    <a href="#" className="underline">
                                        Terms and Conditions
                                    </a>
                                </span>
                            </label>
                            <button className="text-base bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 max-md:text-sm max-sm:text-xs max-sm:py-1.5 max-lg:px-5 max-md:px-4 max-sm:px-3">Send message →</button>
                        </div>
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