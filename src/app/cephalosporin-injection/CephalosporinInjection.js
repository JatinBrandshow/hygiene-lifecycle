'use client';
import Image from 'next/image';
import { useEffect } from 'react';


const CephalosporinInjection = () => {
    const products = [
        {
            name: "CEFPASH-100",
            presentation: "Vial",
            image: "/img/ceophalosporin/cephalosporin-product--01.webp"
        },
        {
            name: "FOTAX-1000",
            presentation: "Vial",
            image: "/img/ceophalosporin/cephalosporin-product--02.webp"
        },
        {
            name: "SHAMCEF-750",
            presentation: "Vial",
            image: "/img/ceophalosporin/cephalosporin-product--03.webp"
        },
        {
            name: "CEFEPASH-TZ 1125",
            presentation: "Vial",
            image: "/img/ceophalosporin/cephalosporin-product--04.webp"
        },
        {
            name: "CEFSULASH-1000",
            presentation: "Vial",
            image: "/img/ceophalosporin/cephalosporin-product--05.webp"
        },
        {
            name: "CEFTRASH-1000",
            presentation: "Injection",
            image: "/img/ceophalosporin/cephalosporin-product--06.webp"
        },
        {
            name: "CEFRIBACTAM",
            presentation: "Capsule",
            image: "/img/ceophalosporin/cephalosporin-product--07.webp"
        }
    ];



    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                            Cephalosporin <span className="text-blue-300">Injections</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 mb-4 md:mb-8 max-w-lg">
                            Comprehensive range of cephalosporin antibiotics
                        </p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-4 md:mb-8"></div>
                        <p className="text-sm sm:text-base text-blue-100 max-w-xl">
                            Our complete cephalosporin portfolio includes specialized formulations for
                            treating a wide spectrum of bacterial infections.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center w-full mt-8 md:mt-0">
                        <div className="relative w-full h-48 sm:h-64 md:h-80 aspect-video">
                            <Image
                                src="/img/Carbapenem1.webp"
                                alt="Cephalosporin Injection Range"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Showcase */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Complete <span className="text-blue-600">Product Range</span>
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Seven specialized cephalosporin formulations for diverse clinical needs
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                            >
                                <div className="relative h-64 bg-gray-50 overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 border-t border-gray-100">
                                    <div className="relative inline-block mb-3">
                                        <h3 className="text-xl font-bold text-gray-800 relative z-10">
                                            {product.name}
                                        </h3>
                                        <div className="absolute bottom-0 left-0 h-1.5 bg-blue-100 w-0 group-hover:w-full transition-all duration-300 z-0"></div>
                                    </div>
                                    <div className="flex items-center text-sm text-blue-600 font-medium">
                                        <svg
                                            className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="transition-all duration-300 group-hover:text-blue-700">
                                            {product.presentation}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Strengths */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Product <span className="text-blue-600">Specifications</span>
                    </h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div className="relative w-full h-auto">
                            <Image
                                src="/img/ceophalosporin/Cephalosporin-product-List111.jpg"
                                alt="Carbapenem Product Strengths"
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-lg"
                                priority
                            />
                        </div>
                        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-800 mb-2">Broad Spectrum</h3>
                                <p className="text-sm text-gray-600">Effective against resistant Gram-negative and Gram-positive organisms</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-800 mb-2">β-lactamase Stability</h3>
                                <p className="text-sm text-gray-600">Resistant to most β-lactamase enzymes</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-800 mb-2">Dosing Flexibility</h3>
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
                        Clinical <span className="text-blue-600">Applications</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-indigo-50 p-6 rounded-xl">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Respiratory Infections</h3>
                            <p className="text-sm text-gray-600">Pneumonia, bronchitis, and other respiratory tract infections</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-xl">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Skin Infections</h3>
                            <p className="text-sm text-gray-600">Cellulitis, abscesses, and wound infections</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-xl">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">UTI</h3>
                            <p className="text-sm text-gray-600">Urinary tract infections including pyelonephritis</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-xl">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Surgical Prophylaxis</h3>
                            <p className="text-sm text-gray-600">Prevention of surgical site infections</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CephalosporinInjection;