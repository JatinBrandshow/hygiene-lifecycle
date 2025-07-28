"use client";

import React from "react";
import { Target, Lightbulb, Scale } from "lucide-react";

const VisionMissionValues = () => {
    const items = [
        {
            title: "MISSION",
            description: "Committed to the pursuit of excellence through world-class products, innovative processes and empowered employees to provide the highest level of satisfaction to its customers.",
            icon: <Target className="w-10 h-10 text-red-500" />,
            ringColor: "border-red-500",
        },
        {
            title: "VISION",
            description: "To provide the best possible, range of international quality products at competitive prices through integration, research, innovation & development. We are responsible to the society.",
            icon: <Lightbulb className="w-10 h-10 text-cyan-500" />,
            ringColor: "border-cyan-500",
        },
        {
            title: "VALUES",
            description: "We take care of our employees, of patients and consumers. The respect of the highest ethical standards is the basis of all our actions and our decisions are oriented by a long-term perspective.",
            icon: <Scale className="w-10 h-10 text-yellow-500" />,
            ringColor: "border-yellow-900",
        },
    ];

    return (
        <>
            <section className="py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-center">
                            {/* Outer semi-circle ring */}
                            <div className={`w-96 h-96 rounded-full border-[10px] ${item.ringColor} border-t-transparent border-b-transparent rotate-[135deg] absolute`}></div>

                            {/* Inner white circle content */}
                            <div className="w-80 h-80 bg-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center text-center px-4">
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default VisionMissionValues;
