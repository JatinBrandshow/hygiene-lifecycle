"use client";
import { motion } from "framer-motion";
import { FaSyringe } from "react-icons/fa";
import Image from "next/image";

const CarbapenemInjection = () => {
    const products = [
        {
            name: "HYGIMER",
            presentation: "Vial",
            image: "/img/carbapenem/img_1.webp",
        },
        // {
        //     name: "CEFTRASH-1000",
        //     description: "Meropenem 1g + Vaborbactam 1g",
        //     presentation: "Vial",
        //     image: "/img/ceophalosporin/cephalosporin-product--06.webp"
        // },
        // {
        //     name: "IMIPENEM + CILASTATIN + RELEBACTAM",
        //     description: "Imipenem 500mg + Cilastatin 500mg + Relebactam 250mg",
        //     presentation: "Vial",
        //     image: "/img/ceophalosporin/cephalosporin-product--07.webp"
        // }
        ,
    ];

    return (
       <div className="font-sans bg-gray-50">
            {/* Hero Section with responsive text sizes */}
            <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] text-white py-8 md:py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                            Carbapenem <span className="text-[var(--secondary)]">Injections</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-lg">Comprehensive range of high-potency carbapenem antibiotics</p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary-light)] rounded-full mb-8"></div>
                        <p className="text-blue-100 max-w-xl">Hygine Lifesciences Pvt Ltd complete carbapenem portfolio includes specialized formulations for treating serious infections with enhanced efficacy and safety profiles.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center w-full">
                        <div className="relative w-full h-48 md:h-80">
                            <Image src="/img/Carbapenem1.webp" alt="Carbapenem Injection Range" fill className="object-contain" priority sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Product Showcase with responsive text */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-4">
                        Complete <span className="text-primary">Product Range</span>
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">One specialized carbapenem formulations for diverse clinical needs</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 0 }}
                                whileHover={{
                                    y: -10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 10,
                                    },
                                }}
                                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 relative hover:-translate-y-3"
                            >
                                {/* Image Container */}
                                <motion.div
                                    className="relative h-48 sm:h-56 md:h-64 bg-gray-50 overflow-hidden"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <Image src={product.image} alt={product.name} fill className="object-contain p-2 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                                </motion.div>

                                {/* Content Container */}
                                <div className="p-6 border-t border-gray-100">
                                    <div className="relative inline-block mb-3">
                                        <h3 className="text-xl font-bold text-gray-800 relative z-10">{product.name}</h3>
                                        <motion.div className="absolute bottom-0 left-0 h-1.5 bg-primary/20 w-0 group-hover:w-full" transition={{ duration: 0.3 }} />
                                    </div>
                                    <div className="flex items-center text-sm text-primary font-medium">
                                        <motion.svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" whileHover={{ x: 2 }}>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </motion.svg>
                                        <motion.span className="transition-all duration-300 group-hover:text-primary-dark" whileHover={{ x: 2 }}>
                                            {product.presentation}
                                        </motion.span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Strengths with responsive text */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
                        Product <span className="text-[var(--primary)]">Specifications</span>
                    </h2>

                    {/* Image optional */}
                    {/* <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 border border-gray-100 mb-10">
                        <div className="relative w-full h-auto">
                            <Image
                                src="/img/carbapenem/Carbapenem-product-List1.webp"
                                alt="Carbapenem Product Strengths"
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-lg"
                                priority
                            />
                        </div>
                    </div> */}

                    {/* Table */}
                    <div className="overflow-x-auto bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-xl md:hover:shadow-2xl text-sm md:text-base">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] text-white">
                                    <th className="p-3 md:p-5 text-left font-bold text-base md:text-lg uppercase tracking-wider">
                                        <div className="flex items-center">
                                            <FaSyringe className="w-5 h-5" />
                                            Products
                                        </div>
                                    </th>
                                    <th className="p-3 md:p-5 text-left font-bold text-base md:text-lg uppercase tracking-wider">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                />
                                            </svg>
                                            Strengths
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { product: "Meropenem", strengths: "2000 mg, 1000 mg, 500 mg, 250 mg, 125 mg" },
                                ].map((item, index) => (
                                    <tr key={index} className="group hover:bg-gradient-to-r from-[var(--primary)]/10 to-[var(--tertiary)]/10 transition-colors duration-300 ease-in-out">
                                        <td className="p-5 font-semibold text-gray-800 group-hover:text-[var(--primary)] transition-colors duration-300">
                                            <div className="flex items-center">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--primary)] rounded-full mr-2 md:mr-3 group-hover:animate-pulse"></div>
                                                {item.product}
                                            </div>
                                        </td>
                                        <td className="p-5 text-gray-700 group-hover:text-[var(--tertiary)] transition-colors duration-300">
                                            <div className="flex flex-wrap gap-2">
                                                {item.strengths.split(", ").map((strength, i) => (
                                                    <span key={i} className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-medium group-hover:bg-[var(--primary)]/20 transition-all duration-300">
                                                        {strength}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Features */}
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-[var(--primary)]/5 p-4 rounded-lg border border-[var(--primary)]/10">
                            <h3 className="font-bold text-[var(--primary)] mb-2">Broad Spectrum</h3>
                            <p className="text-sm text-gray-600">Effective against resistant Gram-negative and Gram-positive organisms</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-3 md:p-4 rounded-lg border border-[var(--primary)]/10">
                            <h3 className="font-bold text-[var(--primary)] mb-1 md:mb-2 text-sm md:text-base">β-lactamase Stability</h3>
                            <p className="text-xs md:text-sm text-gray-600">Resistant to most β-lactamase enzymes</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-3 md:p-4 rounded-lg border border-[var(--primary)]/10">
                            <h3 className="font-bold text-[var(--primary)] mb-1 md:mb-2 text-sm md:text-base">Dosing Flexibility</h3>
                            <p className="text-xs md:text-sm text-gray-600">Multiple strengths for tailored therapy</p>
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-[var(--primary)]/5 p-4 md:p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Intra-abdominal Infections</h3>
                            <p className="text-xs md:text-sm text-gray-600">Complicated intra-abdominal infections in adults</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-4 md:p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">UTI & Pyelonephritis</h3>
                            <p className="text-xs md:text-sm text-gray-600">Complicated urinary tract infections including pyelonephritis</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-4 md:p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Pneumonia</h3>
                            <p className="text-xs md:text-sm text-gray-600">Hospital-acquired and ventilator-associated pneumonia</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-4 md:p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Bacteremia</h3>
                            <p className="text-xs md:text-sm text-gray-600">Bacteremia and septicemia caused by susceptible organisms</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarbapenemInjection;
