"use client";

import React from "react";
import { ShieldCheck, Microscope, BadgeCheck, ScrollText, ArrowRight  } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "We implement strict quality assurance protocols at every step of the manufacturing process to ensure our products meet the highest safety and efficacy standards.",
    featured: false,
  },
  {
    icon: Microscope,
    title: "Quality Control",
    description: "Our dedicated QC team conducts rigorous testing and analysis to verify that all products comply with regulatory and client specifications before reaching the market.",
    featured: false,
  },
  {
    icon: BadgeCheck,
    title: "Quality Certifications",
    description: "We are certified by leading global regulatory bodies, demonstrating our commitment to quality, safety, and continuous improvement in our processes.",
    featured: true,
  },
  {
    icon: ScrollText,
    title: "Quality Policy",
    description: "Our quality policy is rooted in transparency, accountability, and continuous innovation to ensure patient safety and customer satisfaction.",
    featured: false,
  },
];

const QualityManagement = () => {
    return (
        <>
            <section className="py-14 px-4 bg-gray-100 max-lg:py-12 max-md:py-10 max-sm:py-8 max-md:px-3 max-sm:px-2">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 max-w-3xl mx-auto">
                        <h2 className="text-5xl font-bold text-gray-900 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                            Quality <span className="text-teal-600">Management</span>
                        </h2>
                        <p className="mt-3 text-lg max-md:text-base max-sm:text-sm">
                            We are committed to the Highest Quality standards. At Shamshree we believe in excellence through Quality and are committed to Quality in all our operations.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className={`p-8 rounded-2xl shadow-sm transition-transform hover:scale-105 max-lg:p-7 max-md:p-6 max-sm:p-5 ${service.featured ? "bg-teal-600 text-white" : "bg-white text-gray-900"}`}>
                                    <div className="mb-6 max-lg:mb-5 max-md:mb-4 max-sm:mb-3">
                                        <IconComponent className={`w-12 h-12 ${service.featured ? "text-white" : "text-teal-600"}`} />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 max-lg:text-lg max-md:text-base max-sm:text-base max-md:mb-3 max-sm:mb-2.5">{service.title}</h3>

                                    <p className={`text-sm leading-relaxed mb-6 max-sm:text-xs max-lg:mb-5 max-md:mb-4 max-sm:mb-3 ${service.featured ? "text-teal-50" : "text-gray-600"}`}>{service.description}</p>

                                    <button className={`flex items-center gap-2 text-sm font-medium transition-colors ${service.featured ? "text-white hover:text-teal-100" : "text-teal-600 hover:text-teal-700"}`}>
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default QualityManagement;
