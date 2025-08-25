"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const ProductGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const startX = useRef(0);
    const isDragging = useRef(false);
    const deltaX = useRef(0);
    const autoplayRef = useRef(null);

    const products = [
        {
            id: 1,
            name: "HYGIMER",
            image: "img/products/img_1.webp",
            url: "/carbapenem-injection",
        },
        {
            id: 2,
            name: "HYGIPIP",
            image: "img/products/img_2.webp",
            url: "/carbapenem-injection",
        },
        {
            id: 3,
            name: "Hygicef-SB",
            image: "img/products/img_3.webp",
            url: "/carbapenem-injection",
        },
        {
            id: 4,
            name: "Hyceftra",
            image: "img/products/img_4.webp",
            url: "/carbapenem-injection",
        },
        {
            id: 5,
            name: "HYCEFU",
            image: "img/products/img_5.webp",
            url: "/carbapenem-injection",
        },
        {
            id: 6,
            name: "HYCEFU - 1.5gm",
            image: "img/products/img_6.webp",
            url: "/carbapenem-injection",
        },

        {
            id: 7,
            name: "HYTAXIME 1gm",
            image: "img/products/img_7.webp",
            url: "/cephalosporin-injection",
        },
        {
            id: 8,
            name: "HYCEFTA 1gm",
            image: "img/products/img_8.webp",
            url: "/cephalosporin-injection",
        },
        {
            id: 9,
            name: "HYTAZO 1.125gm",
            image: "img/products/img_9.webp",
            url: "/cephalosporin-injection",
        },
        {
            id: 10,
            name: "HYGICEFE 1g",
            image: "img/products/img_10.webp",
            url: "/cephalosporin-injection",
        },
        // {
        //     id: 11,
        //     name: "CEFTRASH-1000",
        //     image: "img/products/cephalosporin-product--06.webp",
        //     url: "/cephalosporin-injection",
        // },
        // {
        //     id: 12,
        //     name: "CEFTRIBACTAM",
        //     image: "img/products/cephalosporin-product--07.webp",
        //     url: "/cephalosporin-injection",
        // },
    ];

    const getItemsPerView = () => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;
            if (width <= 640) return 1; // max-sm
            if (width <= 768) return 2; // max-md
            if (width <= 1024) return 3; // max-lg
        }
        return 4; // default (xl and beyond)
    };

    const [itemsVisible, setItemsVisible] = useState(1);

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
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const startAutoplay = () => {
        autoplayRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayRef.current);
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [itemsVisible]);

    // Drag/swipe handlers
    const handleTouchStart = (e) => {
        stopAutoplay();
        isDragging.current = true;
        startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        deltaX.current = currentX - startX.current;
    };

    const handleTouchEnd = () => {
        if (Math.abs(deltaX.current) > 50) {
            if (deltaX.current > 0) {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            } else {
                setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
            }
        }
        isDragging.current = false;
        deltaX.current = 0;
        startAutoplay();
    };

    return (
        <section className="py-8 bg-gradient-to-br from-slate-50 to-gray-100 max-md:py-6 max-sm:py-4">
            <div className="max-w-7xl mx-auto px-4 max-md:px-0 max-sm:px-2">
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-bold text-gray-900 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                        Product Gallery
                    </h2>
                </div>

                <div className="overflow-hidden rounded-2xl relative">
                    <div
                        ref={sliderRef}
                        className="flex gap-x-4 transition-transform duration-500 ease-in-out select-none"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                        }}
                        onMouseDown={handleTouchStart}
                        onMouseMove={handleTouchMove}
                        onMouseUp={handleTouchEnd}
                        onMouseLeave={handleTouchEnd}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0"
                                style={{ width: `${100 / itemsVisible}%` }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                    <div className="relative overflow-hidden p-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-60 object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg bg-white"
                                        />
                                    </div>

                                    <div className="p-6 max-lg:p-4 max-md:p-3.5 max-sm:p-2.5">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2 max-lg:text-lg max-md:text-base max-sm:text-base max-md:mb-3 max-sm:mb-2">
                                            {product.name}
                                        </h3>
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

                <div className="text-center mt-10 max-sm:hidden">
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
