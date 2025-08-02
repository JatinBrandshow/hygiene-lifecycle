'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const OurProductRange = () => {
  const productCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    if (productCardsRef.current) {
      productCardsRef.current.forEach((card, index) => {
        if (card) {
          card.style.transitionDelay = `${index * 150}ms`;
          observer.observe(card);
        }
      });
    }

    return () => {
      if (productCardsRef.current) {
        productCardsRef.current.forEach(card => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, []);

  const products = [
    {
      title: "Carbapenem Injections",
      description: "Potent, broad-spectrum antibiotics reserved for severe infections and resistant strains",
      image: "/img/product-range/product-1.webp",
      features: ["Hospital-grade formulations", "Strict quality control", "Global certifications"],
      bgColor: "bg-blue-50"
    },
    {
      title: "Cephalosporin Injections",
      description: "Effective against various bacteria with multiple generation options",
      image: "/img/product-range/product-2.webp",
      features: ["Broad-spectrum coverage", "Proven clinical efficacy", "Precision dosing"],
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 bg-background">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .product-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          min-height: 380px;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.1);
        }
        .product-image-container {
          transition: all 0.5s ease;
        }
        .product-card:hover .product-image-container {
          transform: scale(1.03);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
            Pharmaceutical Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--tertiary)] mb-4">
            Our <span className="text-[var(--primary)]">Product Range</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality niche pharmaceuticals developed for specialized therapeutic areas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={el => productCardsRef.current[index] = el}
              className={`product-card opacity-0 ${product.bgColor} rounded-xl shadow-sm border border-gray-200/50 overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section - Full height with no empty space */}
                <div className="md:w-2/5 relative product-image-container">
                  <div className="absolute inset-0 flex items-center justify-center p-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectPosition: 'left center'
                      }}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[var(--tertiary)] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{product.description}</p>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5 mr-3">
                          <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-gray-200/50">
                    <button className="text-sm font-medium text-[var(--primary)] hover:text-[var(--secondary)] transition-colors flex items-center group">
                      View specifications
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3.5 bg-tertiary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
            Download Full Product Catalog
            <svg className="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProductRange;