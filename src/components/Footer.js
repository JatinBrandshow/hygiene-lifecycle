"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ChevronRight, Building2, Factory } from "lucide-react";

const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/carbapenem-injection" },
        { name: "Manufacturing", path: "/manufacturing" },
        { name: "R&D", path: "/research-and-development" },
        { name: "Domestic Customers", path: "/domestic-customers" },
        { name: "Career", path: "/career" },
        { name: "Contact Us", path: "/contact" }
    ];

    const headOfficeLocation = "Plot No - 736-C ,sector 37 , pace city 2, Gurugram, Haryana 122001";
    const manufacturingPlantLocation = "Plot No - 471/2011, Bhatoli Kalan, Baddi (H.P.), India";

    return (
        <footer className="relative bg-gradient-tertiary text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Quick Links */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                                <div className="w-12 h-0.5 bg-gradient-primary mb-6"></div>
                            </div>
                            <ul className="space-y-3">
                                {quickLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.path} className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm">
                                            <ChevronRight className="w-3 h-3 mr-2 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                                            <span className="group-hover:text-secondary">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Head Office */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Building2 className="w-5 h-5 mr-2 text-secondary" />
                                    <h3 className="text-xl font-bold text-white">Head Office</h3>
                                </div>
                                <div className="w-12 h-0.5 bg-gradient-primary mb-6"></div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-secondary/30 transition-colors">
                                <div className="aspect-video bg-primary/20 rounded-lg overflow-hidden mb-3">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76489.43593029918!2d76.95329759897987!3d28.39757455560722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d176ed2333603%3A0x92014dae0f82a3e3!2z4KS54KS-4KSH4KSc4KS_4KSoIOCkj-Ckr-CksOCkn-Clh-CklSDgpIfgpILgpKHgpL_gpK_gpL4g4KSq4KWA4KS14KWA4KSf4KWA4KWwIOCkj-CksuCkn-ClgOCkoeClgA!5e0!3m2!1shi!2sin!4v1756371500183!5m2!1shi!2sin"
                                           width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <p className="text-sm text-gray-300">
                                    {headOfficeLocation}
                                </p>
                            </div>
                        </div>

                        {/* Manufacturing Plant */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Factory className="w-5 h-5 mr-2 text-secondary" />
                                    <h3 className="text-xl font-bold text-white">Manufacturing Plant</h3>
                                </div>
                                <div className="w-12 h-0.5 bg-gradient-primary mb-6"></div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-secondary/30 transition-colors">
                                <div className="aspect-video bg-primary/20 rounded-lg overflow-hidden mb-3">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.755656179026!2d76.7934153151365!3d31.21590298145872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905a5a3a6e5a6a9%3A0x3b0d5e5e5e5e5e5e!2sBaddi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <p className="text-sm text-gray-300">
                                    {manufacturingPlantLocation}
                                </p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
                                <div className="w-12 h-0.5 bg-gradient-primary mb-6"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-secondary/30 transition-colors">
                                    <h4 className="font-semibold text-secondary mb-3">Hygiene Lifesciences Pvt Ltd</h4>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                                            <p className="text-gray-300">
                                                {manufacturingPlantLocation}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                                            <div className="text-gray-300">
                                                <p>+91 99103 09423</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                                            <div className="text-gray-300 space-y-1">
                                                <p>hygienelifesciences@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Globe className="w-4 h-4 text-secondary flex-shrink-0" />
                                            <Link 
                                                href="https://www.hygine-lifesciences.in" 
                                                className="text-secondary hover:text-primary transition-colors duration-300 underline decoration-dotted underline-offset-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                hygine-lifesciences.in
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 bg-primary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-300">
                                <p>© {new Date().getFullYear()} Hygine Lifesciences Pvt Ltd. All Rights Reserved.</p>
                                <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
                                <p>
                                    Website Designed & Developed by{" "}
                                    <Link 
                                        href="https://brandshow.in/" 
                                        className="text-secondary hover:text-white transition-colors duration-300 underline decoration-dotted underline-offset-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        BrandShow
                                    </Link>
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-xs text-gray-400 flex items-center">
                                    <span className="hidden sm:inline">Trusted Pharmaceutical Solutions</span>
                                    <span className="inline sm:hidden">Trusted Solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;