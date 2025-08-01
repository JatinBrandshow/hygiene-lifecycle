"use client";
import { FaGlobe, FaClipboardList, FaHandshake } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FluidStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <FaGlobe />,
      number: "25+",
      label: "Global Presence",
      color: "text-primary",
      bg: "bg-primary"
    },
    {
      icon: <FaClipboardList />,
      number: "125+",
      label: "Products Registered",
      color: "text-secondary",
      bg: "bg-secondary"
    },
    {
      icon: <FaHandshake />,
      number: "100+",
      label: "Satisfied Clients",
      color: "text-primary",
      bg: "bg-primary"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gray-50">
      {/* Floating fluid background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <motion.div 
          animate={isInView ? { 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          } : {}}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Impact</span> in Motion
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Fluid stats container */}
        <div ref={ref} className="relative">
          {/* Animated connecting lines base */}
          <svg 
            className="absolute w-full h-full top-0 left-0 pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2 }}
              d="M20,50 Q50,20 80,50 T140,50"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="0 1"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="50%" stopColor="var(--secondary)" />
                <stop offset="100%" stopColor="var(--primary)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Stats as floating elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="relative">
                  {/* Floating indicator */}
                  <motion.div
                    animate={isInView ? { 
                      y: [0, -15, 0],
                      opacity: [0.8, 1, 0.8]
                    } : {}}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className={`absolute -top-6 -left-6 w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center text-white shadow-lg`}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Stat number with animated underline */}
                  <div className="pl-16 pt-2">
                    <h3 className="text-5xl font-bold text-gray-800 mb-2">
                      {stat.number}
                    </h3>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className={`h-1 w-24 ${stat.color} origin-left`}
                    />
                    <p className="text-lg text-gray-600 mt-4 max-w-xs">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}