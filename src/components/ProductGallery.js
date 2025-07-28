"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

const ProductGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const products = [
        {
            id: 1,
            name: "Zetro-1000",
            image: "img/products/carbapenem-product--01.webp",
            url: "https://www.shamshree.com/carbapenem-injection.php",
        },
        {
            id: 2,
            name: "DorPen-500",
            image: "img/products/carbapenem-product--02.webp",
            url: "https://www.shamshree.com/carbapenem-injection.php",
        },
        {
            id: 3,
            name: "IMICILASH-500",
            image: "img/products/carbapenem-product--03.webp",
            url: "https://www.shamshree.com/carbapenem-injection.php",
        },
        {
            id: 4,
            name: "MERONASH-1000",
            image: "img/products/carbapenem-product--04.webp",
            url: "https://www.shamshree.com/carbapenem-injection.php",
        },
        {
            id: 5,
            name: "MERONASH-S",
            image: "img/products/carbapenem-product--05.webp",
            url: "https://www.shamshree.com/carbapenem-injection.php",
        },
        {
            id: 6,
            name: "CEFEPASH-1000",
            image: "img/products/cephalosporin-product--01.webp",
            url: "https://www.shamshree.com/cephalosporin-injection.php",
        },

        {
            id: 7,
            name: "FOTAX-1000",
            image: "img/products/cephalosporin-product--02.webp",
            url: "https://www.shamshree.com/cephalosporin-injection.php",
        },
        {
            id: 8,
            name: "SHAMCEF-750",
            image: "img/products/cephalosporin-product--03.webp",
            url: "https://www.shamshree.com/cephalosporin-injection.php",
        },
        {
            id: 9,
            name: "CEFEPASH-TZ 1125",
            image: "img/products/cephalosporin-product--04.webp",
            url: "https://www.shamshree.com/cephalosporin-injection.php",
        },
        {
            id: 10,
            name: "CEFSULASH-1000",
            image: "img/products/cephalosporin-product--05.webp",
            url: "https://www.shamshree.com/cephalosporin-injection.php",
        },
        {
            id: 11,
            name: "CEFTRASH-1000",
            image: "img/products/cephalosporin-product--06.webp",
            url: "https://www.shamshree.com/cephalosporin-injection.php",
        },
        {
            id: 12,
            name: "CEFTRIBACTAM",
            image: "img/products/cephalosporin-product--07.webp",
            url: "https://www.shamshree.com/cephalosporin-injection.php",
        },
    ];

    const itemsPerView = {
        mobile: 1,
        tablet: 2,
        desktop: 3,
        large: 4,
    };

    const getItemsPerView = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth >= 1280) return itemsPerView.large;
            if (window.innerWidth >= 1024) return itemsPerView.desktop;
            if (window.innerWidth >= 768) return itemsPerView.tablet;
        }
        return itemsPerView.mobile;
    };

    const [itemsVisible, setItemsVisible] = useState(1); // Safe default

    useEffect(() => {
        const handleResize = () => {
            setItemsVisible(getItemsPerView());
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, products.length - itemsVisible);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    return (
        <section className="py-8 bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Gallery</h2>
                    {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of premium products designed to enhance your lifestyle</p> */}
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed -ml-6"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed -mr-6"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Slider */}
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            ref={sliderRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                            }}
                        >
                            {products.map((product) => (
                                <div key={product.id} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsVisible}%` }}>
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                        {/* Product Image */}
                                        <div className="relative overflow-hidden">
                                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                                            {/* Quick Action */}
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                                                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">{product.name}</h3>

                                            {/* View More Button */}
                                            <Link href={product.url} passHref>
                                                <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 cursor-pointer">
                                                    View More
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">View All Products</button>
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
