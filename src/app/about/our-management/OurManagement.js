import { FaLinkedin, FaBriefcase, FaUniversity, FaUsers, FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';

const OurManagement = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-tertiary text-white py-20 md:py-28 px-6">
                <div className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Our Leadership Team</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                        Pioneering Pharmaceutical Innovation and Quality
                    </p>
                    <div className="mt-6 md:mt-8 flex justify-center">
                        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary-light)] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Management Section - Founder & CEO */}
            <section className="py-16 md:py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Guided by visionaries with decades of experience in the pharmaceutical industry,
                        driving innovation and excellence in healthcare solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
                    {/* Founder Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="relative h-64 sm:h-72 bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-center items-center pt-6 md:pt-8 px-6 md:px-8">
                            <div className="absolute -top-2 -right-2 w-20 h-20 md:w-24 md:h-24 bg-[var(--primary)]/10 rounded-full"></div>
                            <div className="absolute -bottom-2 -left-2 w-20 h-20 md:w-24 md:h-24 bg-[var(--secondary)]/10 rounded-full"></div>

                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100 z-10">
                                <Image
                                    src="/img/our-management/rk-singh.webp"
                                    alt="Mr. R.K. Singh"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>

                        <div className="p-6 md:p-8 text-center flex-1 flex flex-col">
                            <div className="flex justify-center items-center gap-3 md:gap-4 mb-4">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Mr. R.K. Singh</h3>
                                <a
                                    href="#"
                                    className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors bg-gray-100 p-2 rounded-full hover:bg-[var(--primary)]/10"
                                    aria-label="Connect with Mr. R.K. Singh on LinkedIn"
                                >
                                    <FaLinkedin className="text-lg md:text-xl" />
                                </a>
                            </div>

                            <p className="text-[var(--primary)] font-semibold mb-3 md:mb-4">Founder & Visionary</p>

                            <div className="h-px w-14 md:w-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto mb-4 md:mb-5"></div>

                            <p className="text-gray-600 mb-5 md:mb-6 flex-1 text-sm md:text-base">
                                With over 10+ years of experience in pharmaceutical manufacturing,
                                Mr. Singh established Hygine Lifesciences with a vision to deliver
                                affordable, high-quality healthcare solutions.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Strategic Vision</span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Industry Expertise</span>
                                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Quality Focus</span>
                            </div>
                        </div>
                    </div>

                    {/* CEO Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="relative h-64 sm:h-72 bg-gradient-to-r from-amber-50 to-orange-50 flex justify-center items-center pt-6 md:pt-8 px-6 md:px-8">
                            <div className="absolute -top-2 -right-2 w-20 h-20 md:w-24 md:h-24 bg-[var(--secondary)]/10 rounded-full"></div>
                            <div className="absolute -bottom-2 -left-2 w-20 h-20 md:w-24 md:h-24 bg-[var(--primary)]/10 rounded-full"></div>

                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100 z-10">
                                <Image
                                    src="/img/our-management/ap-singh.webp"
                                    alt="Mr. A.P. Singh"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="p-6 md:p-8 text-center flex-1 flex flex-col">
                            <div className="flex justify-center items-center gap-3 md:gap-4 mb-4">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Mr. A.P. Singh</h3>
                                <a
                                    href="#"
                                    className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors bg-gray-100 p-2 rounded-full hover:bg-[var(--primary)]/10"
                                    aria-label="Connect with Mr. A.P. Singh on LinkedIn"
                                >
                                    <FaLinkedin className="text-lg md:text-xl" />
                                </a>
                            </div>

                            <p className="text-[var(--primary)] font-semibold mb-3 md:mb-4">Chief Executive Officer</p>

                            <div className="h-px w-14 md:w-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto mb-4 md:mb-5"></div>

                            <p className="text-gray-600 mb-5 md:mb-6 flex-1 text-sm md:text-base">
                                Bringing 40+ years of leadership in pharmaceutical operations,
                                Mr. A.P. Singh drives the company's mission to expand global reach
                                while maintaining uncompromising quality standards.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Operational Excellence</span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Global Strategy</span>
                                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Innovation</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional decorative element */}
                <div className="flex justify-center mt-12 md:mt-16">
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"></div>
                </div>
            </section>


            {/* Our Team Section - Single Group Photo */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Our <span className="text-primary">Dedicated Team</span>
                        </h2>
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-5 md:mb-6"></div>
                        <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            350+ professionals committed to delivering exceptional healthcare solutions
                        </p>
                    </div>

                    {/* Group Photo */}
                    <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-xl">
                        <div className="aspect-video relative bg-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <Image
                                    src="/img/our-management/team.webp"
                                    alt="Hygine Lifesciences Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6 md:p-8">
                                <div className="text-white">
                                    <FaUserFriends className="text-3xl md:text-4xl mb-3 md:mb-4" />
                                    <h3 className="text-xl md:text-2xl font-bold">Our Pharmaceutical Family</h3>
                                    <p className="text-white/90 text-sm md:text-base">United in our mission to improve global health</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                number: "350+",
                                title: "Team Members",
                                description: "Experts across research, manufacturing, and quality"
                            },
                            {
                                number: "30+",
                                title: "Years Experience",
                                description: "Collective pharmaceutical expertise"
                            },
                            {
                                number: "75+",
                                title: "Products",
                                description: "Developed and brought to market"
                            },
                            {
                                number: "25+",
                                title: "Countries",
                                description: "Where our medicines make an impact"
                            }
                        ].map((stat, index) => (
                            <div key={index} className="bg-gray-50 p-5 md:p-6 rounded-xl">
                                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</p>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{stat.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurManagement;