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
            className="w-full py-16 bg-gray-50 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/img/why-choose-us.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/80 lg:bg-white/70 backdrop-blur-sm z-0" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
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

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all">
                                Contact Now
                            </button>
                            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* No Right Side Image anymore */}
                    <div className="hidden lg:block">
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
