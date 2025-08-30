"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigationItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about", 
            submenu: [
                { name: "Who We Are", href: "/about" },
                { name: "Vision and Mission", href: "/about/vision-and-mission" },
                { name: "Our Management", href: "/about/our-management" },
                { name: "Global Accreditations", href: "/about/accreditation" },
                { name: "Quality Policy", href: "/about/quality-policy" },
                { name: "Quality Practices", href: "/about/quality-practices" },
                { name: "Our Strengths", href: "/about/our-strength" },
            ],
        },
        {
            name: "Products",
            href: "/carbapenem-injection", 
            submenu: [
                { name: "Carbapenem Injections", href: "/carbapenem-injection" },
                { name: "Cephalosporin Injections", href: "/cephalosporin-injection" },
            ],
        },
        {
            name: "Manufacturing",
            href: "/manufacturing",
        },
        {
            name: "R&D",
            href: "/research-and-devlopment",
        },
        {
            name: "Market",
            href: "/global-presence",
            submenu: [
                { name: "Domestic Customers", href: "/domestic-customers" },
                { name: "Global Presence", href: "/global-presence" },
            ],
        },
        {
            name: "Career",
            href: "/career",
        },
        {
            name: "Contact Us",
            href: "/contact",
        },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-16 w-40 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                                <Image 
                                    src="/img/hygine-lifesciences.webp" 
                                    alt="hygiene-lifeSciences-logo" 
                                    width={400} 
                                    height={240} 
                                    className="object-contain w-32 h-16"
                                />
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {navigationItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.submenu ? (
                                        <>
                                            <Link 
                                                href={item.href} 
                                                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-secondary transition group"
                                            >
                                                {item.name}
                                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                            </Link>
                                            <div className="absolute top-full left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md z-50 w-56 border border-gray-200">
                                                {item.submenu.map((subItem) => (
                                                    <Link 
                                                        key={subItem.name} 
                                                        href={subItem.href} 
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link 
                                            href={item.href} 
                                            className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-secondary transition group"
                                        >
                                            {item.name}
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA - Desktop */}
                        <div className="hidden lg:flex">
                            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md shadow transition-all">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <button 
                                onClick={() => setIsOpen(true)} 
                                className="p-2 rounded-md hover:bg-gray-50 transition text-gray-600 hover:text-primary"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/50">
                    <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 flex flex-col space-y-4">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="self-end text-gray-500 hover:text-primary"
                        >
                            ✕
                        </button>

                        {/* Logo */}
                        <div className="flex items-center space-x-3 border-b pb-4">
                            <div className="h-14 w-14 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                                <Image 
                                    src="/img/logo-hygiene-lifecycle.webp" 
                                    alt="Logo" 
                                    width={100} 
                                    height={100} 
                                    className="object-contain"
                                />
                            </div>
                            <div className="leading-tight">
                                <span className="block font-bold text-lg text-gray-800">Hygine</span>
                                <span className="block font-bold text-lg text-gray-800">Lifesciences</span>
                            </div>
                        </div>

                        {/* Mobile Links */}
                        {navigationItems.map((item) => (
                            <div key={item.name} className="flex flex-col">
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-2 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-primary transition"
                                >
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <div className="ml-4 mt-1 flex flex-col space-y-1">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                onClick={() => setIsOpen(false)}
                                                className="px-2 py-1 rounded-md text-gray-500 hover:bg-gray-50 hover:text-primary transition text-sm"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 mt-auto border-t border-gray-200">
                            <button className="w-full bg-primary hover:bg-primary text-white px-4 py-2 rounded-md shadow transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;