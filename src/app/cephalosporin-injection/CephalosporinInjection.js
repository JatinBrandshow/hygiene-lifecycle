'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSyringe  } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";

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
        {
            name: "HYGIPIP",
            presentation: "Vial",
            image: "/img/carbapenem/img_2.webp"
        },
        {
            name: "Hygicef-SB",
            presentation: "Vial",
            image: "/img/carbapenem/img_3.webp"
        },
        {
            name: "Hyceftra",
            presentation: "Vial",
            image: "/img/carbapenem/img_4.webp"
        },
        {
            name: "HYCEFU",
            description: "Ertapenem sodium IP equivalent to Ertapenem 1g",
            presentation: "Vial",
            image: "/img/carbapenem/img_5.webp"
        }
    ];

    const data = [
        { product: "Ceftriaxone", strengths: ["2000 mg / 500 mg", "1000 mg / 250 mg"] },
        { product: "Ceftriaxone + Sulbactam", strengths: ["2000 mg + 1000 mg / 500 mg + 250 mg", "1000 mg + 500 mg / 250 mg + 125 mg"] },
        { product: "Ceftriaxone + Tazobactam", strengths: ["1000 mg + 125 mg / 250 mg + 31.25 mg", "500 mg + 62.5 mg "] },
        { product: "Ceftazidime", strengths: ["2000 mg / 500 mg", "1000 mg / 250 mg"] },
        { product: "Cefuroxime", strengths: ["1500 mg / 250 mg", "750 mg "] },
        { product: "Cefazolin", strengths: ["1000 mg", "500 mg"] },
        { product: "Cefoperazone + Sulbactam", strengths: ["1000 mg + 1000 mg / 500 mg + 500 mg", "1000 mg + 500 mg / 250 mg + 250 mg"] },
        { product: "Cefepime", strengths: ["2000 mg / 500 mg", "1000 mg / 250 mg"] },
        { product: "Cefepime + Tazobactam", strengths: ["2000 mg + 250 mg / 500 mg + 62.5 mg", "1000 mg + 125 mg / 250 mg + 31.25 mg"] },
        { product: "Cefotaxime", strengths: ["2000 mg / 500 mg", "1000 mg / 250 mg"] }
    ];

    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section with responsive text */}
            <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] text-white py-8 md:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                            Cephalosporin <span className="text-[var(--secondary)]">Injections</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-3 md:mb-6 max-w-lg">
                            Comprehensive range of cephalosporin antibiotics
                        </p>
                        <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary-light)] rounded-full mb-3 md:mb-6"></div>
                        <p className="text-sm sm:text-base text-blue-100 max-w-xl">
                            Hygine Lifesciences Pvt Ltd complete cephalosporin portfolio includes specialized formulations for
                            treating a wide spectrum of bacterial infections.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center w-full mt-6 md:mt-0">
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 aspect-video">
                            <Image
                                src="/img/Carbapenem1.webp"
                                alt="Cephalosporin Injection Range"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Showcase with responsive text */}
            <section className="py-12 sm:py-14 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-4">
                        Complete <span className="text-[var(--primary)]">Product Range</span>
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Nine specialized cephalosporin formulations for diverse clinical needs
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden border border-gray-100 relative"
                                initial={{ y: 0 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
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
                                <motion.div
                                    className="relative h-44 sm:h-52 md:h-60 bg-gray-50 overflow-hidden"
                                    whileHover={{
                                        scale: 1.03,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-[var(--primary)]/10 opacity-0 z-10"
                                        whileHover={{ opacity: 0.2 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        className="relative w-full h-full"
                                        whileHover={{
                                            y: -5,
                                            transition: { duration: 0.4 }
                                        }}
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-4 sm:p-5 md:p-6"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className="p-4 sm:p-5 md:p-6 border-t border-gray-100"
                                    whileHover={{
                                        backgroundColor: "rgba(249, 250, 251, 0.8)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="relative inline-block mb-2 md:mb-3">
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 relative z-10">
                                            {product.name}
                                        </h3>
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-1 bg-[var(--primary)] origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{
                                                scaleX: 1,
                                                backgroundColor: "var(--primary)",
                                                transition: { duration: 0.4 }
                                            }}
                                        />
                                    </div>

                                    <motion.div
                                        className="flex items-center text-xs sm:text-sm text-[var(--primary)] font-medium"
                                        whileHover={{
                                            x: 5,
                                            color: "var(--primary-dark)",
                                            transition: { type: "spring", stiffness: 300 }
                                        }}
                                    >
                                        <motion.svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
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

            {/* Product Strengths with responsive table */}
            <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-10">
                        Product <span className="text-[var(--primary)]">Specifications</span>
                    </h2>

                    {/* Responsive table container */}
                    <div className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-xs sm:text-sm md:text-base">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] text-white">
                                        <th className="p-2 sm:p-3 md:p-4 text-left font-semibold whitespace-nowrap">
                                            <div className="flex items-center gap-1 sm:gap-2">
                                                <FaSyringe  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> 
                                                <span className="text-xs sm:text-sm md:text-base">Products</span>
                                            </div>
                                        </th>
                                        <th className="p-2 sm:p-3 md:p-4 text-left font-semibold whitespace-nowrap">
                                            <div className="flex items-center gap-1 sm:gap-2">
                                                <GiWeight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> 
                                                <span className="text-xs sm:text-sm md:text-base">Strength 1</span>
                                            </div>
                                        </th>
                                        <th className="p-2 sm:p-3 md:p-4 text-left font-semibold whitespace-nowrap">
                                            <div className="flex items-center gap-1 sm:gap-2">
                                                <GiWeight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> 
                                                <span className="text-xs sm:text-sm md:text-base">Strength 2</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gradient-to-r from-[var(--primary)]/10 to-[var(--tertiary)]/10 transition-colors"
                                        >
                                            <td className="p-2 sm:p-3 md:p-4 font-medium text-gray-800 text-xs sm:text-sm md:text-base whitespace-nowrap">
                                                {item.product}
                                            </td>
                                            <td className="p-2 sm:p-3 md:p-4 text-gray-700">
                                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                                    {item.strengths[0].split(" / ").map((str, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium whitespace-nowrap"
                                                        >
                                                            {str}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="p-2 sm:p-3 md:p-4 text-gray-700">
                                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                                    {item.strengths[1] && item.strengths[1].split(" / ").map((str, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium whitespace-nowrap"
                                                        >
                                                            {str}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Features below table */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                                className="bg-[var(--primary)]/5 p-3 sm:p-4 rounded-lg border border-[var(--primary)]/10 hover:shadow-md hover:border-[var(--primary)]/20 transition-all duration-300"
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                    backgroundColor: "rgba(var(--primary-rgb), 0.08)"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                }}
                            >
                                <h3 className="font-bold text-[var(--primary)] mb-1 sm:mb-2 text-sm sm:text-base">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinical Applications with responsive text */}
            <section className="py-12 sm:py-14 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-10">
                        Clinical <span className="text-[var(--primary)]">Applications</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "Respiratory Infections",
                                description: "Pneumonia, bronchitis, and other respiratory tract infections"
                            },
                            {
                                icon: (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "Skin Infections",
                                description: "Cellulitis, abscesses, and wound infections"
                            },
                            {
                                icon: (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "UTI",
                                description: "Urinary tract infections including pyelonephritis"
                            },
                            {
                                icon: (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: "Surgical Prophylaxis",
                                description: "Prevention of surgical site infections"
                            }
                        ].map((app, index) => (
                            <motion.div
                                key={index}
                                className="bg-[var(--primary)]/5 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-[var(--primary)]/10"
                                whileHover={{
                                    y: -3,
                                    boxShadow: "0 8px 12px -4px rgba(0, 0, 0, 0.1)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                    {app.icon}
                                </div>
                                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{app.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-600">{app.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CephalosporinInjection;