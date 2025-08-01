"use client";

import { CheckCircle, ShieldCheck, Award } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
            title: "High-Quality Products",
            description: "We provide tested, effective, and high-standard pharmaceutical products.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
            title: "Ethical Business Practices",
            description: "Transparency and honesty are at the core of our operations.",
        },
        {
            icon: <Award className="w-6 h-6 text-blue-600" />,
            title: "Trusted by Clients",
            description: "Our clients rely on us for consistency and dedication.",
        },
    ];

    return (
        <section
            className="w-full py-14 bg-gray-50 bg-cover bg-center relative max-lg:py-10 max-md:py-8 max-sm:py-6"
            style={{ backgroundImage: "url('/img/why-choose-us.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/80 lg:bg-white/70 backdrop-blur-sm z-0" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 max-md:px-3 max-sm:px-3">
                {/* Section Heading Centered */}
                <h2 className="text-5xl font-bold text-gray-900 text-center mb-12 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-lg:mb-10 max-md:mb-8 max-sm:mb-6">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Content */}
                    <div className="space-y-6 flex flex-col max-sm:space-y-3">
                        <p className="text-lg text-gray-700 leading-relaxed max-lg:text-base max-md:text-base max-sm:text-sm">
                            We work towards making this world a healthier place. Working over the years in the pharmaceutical sector, we understand the requirements of our clients and hence deliver an exclusive range of medicine. Our clients trust us for quality, ethical business practices and our commitment.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div>{feature.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all">
                                Contact Now
                            </button>
                            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Image Matching Height */}
                    <div className="hidden lg:block h-full">
                        <img
                            src="/img/why-choose-us.webp"
                            alt="Why Choose Us"
                            className="rounded-xl shadow-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
