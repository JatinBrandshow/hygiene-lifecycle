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
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Quality <span className="text-teal-600">Management</span>
                        </h2>
                        <p className="mt-3 text-lg">
                            We are committed to the Highest Quality standards. At Shamshree we believe in excellence through Quality and are committed to Quality in all our operations.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className={`p-8 rounded-2xl shadow-sm transition-transform hover:scale-105 ${service.featured ? "bg-teal-600 text-white" : "bg-white text-gray-900"}`}>
                                    <div className="mb-6">
                                        <IconComponent className={`w-12 h-12 ${service.featured ? "text-white" : "text-teal-600"}`} />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                                    <p className={`text-sm leading-relaxed mb-6 ${service.featured ? "text-teal-50" : "text-gray-600"}`}>{service.description}</p>

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
