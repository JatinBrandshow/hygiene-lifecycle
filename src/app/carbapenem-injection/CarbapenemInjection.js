'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

const CarbapenemInjection = () => {
    const products = [
        {
            name: "HYGIMER",
            presentation: "Vial",
            image: "/img/carbapenem/img_1.webp"
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
    ];

    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] text-white py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Carbapenem <span className="text-[var(--secondary)]">Injections</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-lg">
                            Comprehensive range of high-potency carbapenem antibiotics
                        </p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary-light)] rounded-full mb-8"></div>
                        <p className="text-blue-100 max-w-xl">
                            Hygiene Lifesciences Pvt Ltd complete carbapenem portfolio includes seven specialized formulations for
                            treating serious infections with enhanced efficacy and safety profiles.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center w-full">
                        <div className="relative w-full h-48 md:h-80">
                            <Image
                                src="/img/Carbapenem1.webp"
                                alt="Carbapenem Injection Range"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Showcase */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Complete <span className="text-primary">Product Range</span>
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Seven specialized carbapenem formulations for diverse clinical needs
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 0 }}
                                whileHover={{
                                    y: -10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 10
                                    }
                                }}
                                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 relative hover:-translate-y-3"
                            >
                                {/* Image Container */}
                                <motion.div
                                    className="relative h-64 bg-gray-50 overflow-hidden"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-2 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </motion.div>

                                {/* Content Container */}
                                <div className="p-6 border-t border-gray-100">
                                    <div className="relative inline-block mb-3">
                                        <h3 className="text-xl font-bold text-gray-800 relative z-10">
                                            {product.name}
                                        </h3>
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-1.5 bg-primary/20 w-0 group-hover:w-full"
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <div className="flex items-center text-sm text-primary font-medium">
                                        <motion.svg
                                            className="w-4 h-4 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            whileHover={{ x: 2 }}
                                        >
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </motion.svg>
                                        <motion.span
                                            className="transition-all duration-300 group-hover:text-primary-dark"
                                            whileHover={{ x: 2 }}
                                        >
                                            {product.presentation}
                                        </motion.span>
                                    </div>
                                </div>
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
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 border border-gray-100">
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
                        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-[var(--primary)]/5 p-4 rounded-lg border border-[var(--primary)]/10">
                                <h3 className="font-bold text-[var(--primary)] mb-2">Broad Spectrum</h3>
                                <p className="text-sm text-gray-600">Effective against resistant Gram-negative and Gram-positive organisms</p>
                            </div>
                            <div className="bg-[var(--primary)]/5 p-4 rounded-lg border border-[var(--primary)]/10">
                                <h3 className="font-bold text-[var(--primary)] mb-2">β-lactamase Stability</h3>
                                <p className="text-sm text-gray-600">Resistant to most β-lactamase enzymes</p>
                            </div>
                            <div className="bg-[var(--primary)]/5 p-4 rounded-lg border border-[var(--primary)]/10">
                                <h3 className="font-bold text-[var(--primary)] mb-2">Dosing Flexibility</h3>
                                <p className="text-sm text-gray-600">Multiple strengths for tailored therapy</p>
                            </div>
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
                        <div className="bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Intra-abdominal Infections</h3>
                            <p className="text-sm text-gray-600">Complicated intra-abdominal infections in adults</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">UTI & Pyelonephritis</h3>
                            <p className="text-sm text-gray-600">Complicated urinary tract infections including pyelonephritis</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Pneumonia</h3>
                            <p className="text-sm text-gray-600">Hospital-acquired and ventilator-associated pneumonia</p>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/10">
                            <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Bacteremia</h3>
                            <p className="text-sm text-gray-600">Bacteremia and septicemia caused by susceptible organisms</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarbapenemInjection;