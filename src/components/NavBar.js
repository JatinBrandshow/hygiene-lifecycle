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
                { name: "Who We Are", href: "/about#who-we-are" },
                { name: "Vision and Mission", href: "/about#vision-mission" },
                { name: "Our Management", href: "/about#management" },
                { name: "Global Accreditations", href: "/about#accreditations" },
                { name: "Quality Policy", href: "/about#quality-policy" },
                { name: "Quality Practices", href: "/about#quality-practices" },
                { name: "Our Strengths", href: "/about#strengths" },
            ],
        },
        {
            name: "Products",
            href: "/products",
            submenu: [
                { name: "Carbapenem Injections", href: "/products#carbapenem" },
                { name: "Cephalosporin Injections", href: "/products#cephalosporin" },
            ],
        },
        {
            name: "Manufacturing",
            href: "/manufacturing",
        },
        {
            name: "R&D",
            href: "/rd",
        },
        {
            name: "Market",
            href: "/market",
            submenu: [
                { name: "Domestic Customers", href: "/market#domestic" },
                { name: "Global Presence", href: "/market#global" },
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
            <nav className="sticky top-0 z-50 w-full border-b bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-14 w-14 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                                <Image src="/img/logo-hygiene-lifecycle.webp" alt="Logo" width={100} height={100} />
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {navigationItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link href={item.href} className="relative px-4 py-2 text-sm font-medium text-gray-500 hover:text-black transition group">
                                        {item.name}
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                    </Link>

                                    {item.submenu && (
                                        <div className="absolute top-full left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md z-50 w-56">
                                            {item.submenu.map((subItem) => (
                                                <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA - Desktop */}
                        <div className="hidden lg:flex">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md shadow-lg transition">Get Started</button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsOpen(true)} className="p-2 rounded-md hover:bg-gray-100 transition">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/50">
                    <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 flex flex-col space-y-4">
                        {/* Close Button */}
                        <button onClick={() => setIsOpen(false)} className="self-end text-gray-500 hover:text-black">
                            ✕
                        </button>

                        {/* Logo */}
                        <div className="flex items-center space-x-3 border-b pb-4">
                            <div className="h-14 w-14 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                                <Image src="/img/logo-hygiene-lifecycle.webp" alt="Logo" width={100} height={100} />
                            </div>
                            <div className="leading-tight">
                                <span className="block font-bold text-lg text-gray-800">Hygine</span>
                                <span className="block font-bold text-lg text-gray-800">Lifesciences</span>
                            </div>
                        </div>

                        {/* Mobile Links */}
                        {navigationItems.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="px-2 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-black transition">
                                {item.name}
                            </Link>
                        ))}

                        <div className="pt-4 mt-auto border-t">
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md shadow-lg transition">Get Started</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
