'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CephalosporinInjection = () => {
    const products = [
        {
            name: "HYCEFU",
            presentation: "Vial",
            image: "/img/ceophalosporin/img_6.webp"
        },
        {
            name: "HYTAXIME",
            presentation: "Vial",
            image: "/img/ceophalosporin/img_7.webp"
        },
        {
            name: "HYCEFTA",
            presentation: "Vial",
            image: "/img/ceophalosporin/img_8.webp"
        },
        {
            name: "HYTAZO",
            presentation: "Vial",
            image: "/img/ceophalosporin/img_9.webp"
        },
        {
            name: "HYGICEFE",
            presentation: "Vial",
            image: "/img/ceophalosporin/img_10.webp"
        },
    ];

    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] text-white py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                            Cephalosporin <span className="text-[var(--secondary)]">Injections</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 mb-4 md:mb-8 max-w-lg">
                            Comprehensive range of cephalosporin antibiotics
                        </p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary-light)] rounded-full mb-4 md:mb-8"></div>
                        <p className="text-sm sm:text-base text-blue-100 max-w-xl">
                            Hygine Lifesciences complete cephalosporin portfolio includes specialized formulations for
                            treating a wide spectrum of bacterial infections.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center w-full mt-8 md:mt-0">
                        <div className="relative w-full h-58 sm:h-64 md:h-80 aspect-video">
                            <Image
                                src="/img/Carbapenem1.webp"
                                alt="Cephalosporin Injection Range"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 770px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Showcase */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Complete <span className="text-[var(--primary)]">Product Range</span>
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Seven specialized cephalosporin formulations for diverse clinical needs
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative"
                                initial={{ y: 0 }}
                                whileHover={{
                                    y: -20,
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10
                                    }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15
                                }}
                            >
                                {/* Floating effect container */}
                                <motion.div
                                    className="relative h-64 bg-gray-50 overflow-hidden"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {/* Blue overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-[var(--primary)]/10 opacity-0 z-10"
                                        whileHover={{ opacity: 0.2 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Product image with parallax effect */}
                                    <motion.div
                                        className="relative w-full h-full"
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.4 }
                                        }}
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-6"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Content with enhanced hover effects */}
                                <motion.div
                                    className="p-6 border-t border-gray-100"
                                    whileHover={{
                                        backgroundColor: "rgba(249, 250, 251, 0.8)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="relative inline-block mb-3">
                                        <h3 className="text-xl font-bold text-gray-800 relative z-10">
                                            {product.name}
                                        </h3>
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-1.5 bg-[var(--primary)] origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{
                                                scaleX: 1,
                                                backgroundColor: "var(--primary)",
                                                transition: { duration: 0.4 }
                                            }}
                                        />
                                    </div>

                                    <motion.div
                                        className="flex items-center text-sm text-[var(--primary)] font-medium"
                                        whileHover={{
                                            x: 8,
                                            color: "var(--primary-dark)",
                                            transition: { type: "spring", stiffness: 300 }
                                        }}
                                    >
                                        <motion.svg
                                            className="w-4 h-4 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            whileHover={{ rotate: 90 }}
                                            transition={{ type: "spring", stiffness: 500 }}
                                        >
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </motion.svg>
                                        <span>{product.presentation}</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Strengths */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Product <span className="text-[var(--primary)]">Specifications</span>
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <div className="relative w-full h-auto">
                            <Image
                                src="/img/ceophalosporin/Cephalosporin-product-List111.jpg"
                                alt="Cephalosporin Product Strengths"
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-lg hover:scale-[1.01] transition-transform duration-300"
                                priority
                            />
                        </div>
                        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Broad Spectrum",
                                    description: "Effective against resistant Gram-negative and Gram-positive organisms"
                                },
                                {
                                    title: "β-lactamase Stability",
                                    description: "Resistant to most β-lactamase enzymes"
                                },
                                {
                                    title: "Dosing Flexibility",
                                    description: "Multiple strengths for tailored therapy"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[var(--primary)]/5 p-4 rounded-lg border border-[var(--primary)]/10 hover:shadow-lg hover:border-[var(--primary)]/20 transition-all duration-300"
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                        backgroundColor: "rgba(var(--primary-rgb), 0.08)"
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 10
                                    }}
                                >
                                    <h3 className="font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--primary-dark)] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Applications */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Clinical <span className="text-[var(--primary)]">Applications</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "Respiratory Infections",
                                description: "Pneumonia, bronchitis, and other respiratory tract infections"
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "Skin Infections",
                                description: "Cellulitis, abscesses, and wound infections"
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "UTI",
                                description: "Urinary tract infections including pyelonephritis"
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "Surgical Prophylaxis",
                                description: "Prevention of surgical site infections"
                            }
                        ].map((app, index) => (
                            <motion.div
                                key={index}
                                className="bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/10"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                                    {app.icon}
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">{app.title}</h3>
                                <p className="text-sm text-gray-600">{app.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CephalosporinInjection;