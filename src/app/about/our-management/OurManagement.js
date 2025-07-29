// components/OurManagement.js
import { FaLinkedin, FaBriefcase, FaUniversity, FaUsers, FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';

const OurManagement = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-28 px-6">
                <div className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Leadership Team</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                        Driving Innovation in Pharmaceutical Excellence
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Management Section - Modern Layout */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                    {/* Founder - Left Side */}
                    <div className="lg:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                        <div className="flex justify-center pt-8 px-8">
                            <div className="relative w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                                <Image
                                    src="/img/our-management/jatinder_kumar.jpg"
                                    alt="Mr. Jatinder Kumar Jain"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <div className="flex justify-center items-center gap-4 mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">Mr. Jatinder Kumar Jain</h3>
                                <a href="#" className="text-blue-500 hover:text-blue-700">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                            </div>
                            <p className="text-blue-600 font-medium mb-6">Founder & CEO</p>

                            <div className="space-y-4 text-gray-600 text-left max-w-md mx-auto">
                                <div className="flex items-start">
                                    <FaBriefcase className="mt-1 mr-3 text-blue-500 flex-shrink-0" />
                                    <p>25+ years in pharmaceutical industry, founded Shamshree Lifesciences</p>
                                </div>
                                <div className="flex items-start">
                                    <FaUniversity className="mt-1 mr-3 text-blue-500 flex-shrink-0" />
                                    <p>B.Com from Punjab University, Chartered Accountant</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-gray-700 italic">
                                    "Our vision is to redefine healthcare standards through ethical practices and innovation."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Other Leaders - Right Side */}
                    <div className="lg:w-1/2 space-y-8">
                        {/* Mrs. Alka Jain */}
                        <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="sm:w-1/3 h-full min-h-[200px] relative">
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="relative w-full h-full max-w-[150px] max-h-[150px] rounded-full border-4 border-white shadow-md overflow-hidden">
                                        <Image
                                            src="/img/our-management/alka.jpg"
                                            alt="Mrs. Alka Jain"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-2/3 p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Mrs. Alka Jain</h3>
                                        <p className="text-purple-600 font-medium">Director, HR & Admin</p>
                                    </div>
                                    <a href="#" className="text-purple-500 hover:text-purple-700">
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                </div>
                                <div className="mt-4 text-gray-600 space-y-2">
                                    <p className="flex items-start">
                                        <FaBriefcase className="mt-1 mr-2 text-purple-500 flex-shrink-0" />
                                        <span>16+ years with Shamshree, oversees human capital</span>
                                    </p>
                                    <p className="flex items-start">
                                        <FaUniversity className="mt-1 mr-2 text-purple-500 flex-shrink-0" />
                                        <span>B.A. & L.L.B from Punjab University</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mr. Akhil Jain */}
                        <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="sm:w-1/3 h-full min-h-[200px] relative">
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="relative w-full h-full max-w-[150px] max-h-[150px] rounded-full border-4 border-white shadow-md overflow-hidden">
                                        <Image
                                            src="/img/our-management/akhil.jpg"
                                            alt="Mr. Akhil Jain"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-2/3 p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Mr. Akhil Jain</h3>
                                        <p className="text-green-600 font-medium">VP, Operations</p>
                                    </div>
                                    <a href="#" className="text-green-500 hover:text-green-700">
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                </div>
                                <div className="mt-4 text-gray-600 space-y-2">
                                    <p className="flex items-start">
                                        <FaBriefcase className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                                        <span>Ex-Goldman Sachs, handles production planning</span>
                                    </p>
                                    <p className="flex items-start">
                                        <FaUniversity className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                                        <span>B.E. (IT) & MBA (Finance)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section - Single Group Photo */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our <span className="text-blue-600">Dedicated Team</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                            200+ professionals united in our mission to deliver exceptional healthcare solutions
                        </p>
                    </div>

                    {/* Group Photo */}
                    <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
                        <div className="aspect-video relative">
                            <Image
                                src="/img/our-management/team1111.jpg"
                                alt="Shamshree Pharmaceuticals Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <FaUserFriends className="text-4xl mb-4" />
                                    <h3 className="text-2xl font-bold">The Shamshree Family</h3>
                                    <p className="text-white/90">Working together for better healthcare</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Stats */}
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                number: "200+",
                                title: "Team Members",
                                description: "Dedicated professionals across all departments"
                            },
                            {
                                number: "25+",
                                title: "Years Experience",
                                description: "Collective industry knowledge"
                            },
                            {
                                number: "50+",
                                title: "Products",
                                description: "Developed and manufactured"
                            },
                            {
                                number: "10+",
                                title: "Countries",
                                description: "Where our products reach patients"
                            }
                        ].map((stat, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl">
                                <p className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.title}</h3>
                                <p className="text-gray-600">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OurManagement;