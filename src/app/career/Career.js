'use client';
import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaFileMedical, FaFlask, FaMicroscope, FaPills, FaBrain, FaDna, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { GiChemicalDrop, GiMedicines } from 'react-icons/gi';
import Image from 'next/image';

const Careers = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const generateParticles = () => {
        return [...Array(30)].map((_, i) => {
            const size = Math.random() * 15 + 5;
            const duration = Math.random() * 15 + 15;
            const delay = Math.random() * 10;
            const distance = Math.random() * 100 + 50;

            return (
                <div
                    key={i}
                    className="absolute rounded-full bg-white/20 backdrop-blur-sm"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${duration}s ease-in-out infinite both`,
                        animationDelay: `${delay}s`,
                        boxShadow: `0 0 ${size}px ${size/2}px rgba(59, 130, 246, 0.2)`,
                        transform: `translate(${Math.random() * distance - distance/2}px, ${Math.random() * distance - distance/2}px)`
                    }}
                />
            );
        });
    };

    return (
        <div className="font-sans bg-white overflow-hidden">
            {/* Animated Hero Section */}
            <div className="relative h-[700px] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
                {/* Animated Particle Background - Only render on client */}
                {isClient && (
                    <div className="absolute inset-0 overflow-hidden">
                        {generateParticles()}
                    </div>
                )}

                {/* Rest of your component remains the same */}
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-600/20 blur-2xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
                    <div className="max-w-2xl relative">
                        {/* Animated tagline */}
                        <div className="flex items-center mb-6 animate-fadeIn">
                            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mr-4 animate-pulse">
                                <GiMedicines className="text-white text-2xl animate-bounce" />
                            </div>
                            <span className="text-blue-300 font-medium tracking-widest text-sm bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
                                INNOVATE WITH US
                            </span>
                        </div>
                        
                        {/* Main heading with gradient shine */}
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 relative inline-block">
                                <span className="relative z-10">Redefining</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                            </span>{' '}
                            <span className="relative">
                                Healthcare Through Science
                                <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
                            </span>
                        </h1>
                        
                        <p className="text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                            Join our team of passionate researchers and help develop the next generation of life-saving medications
                        </p>
                        
                        {/* Animated CTA button */}
                        <button className="px-8 py-3.5 bg-white text-blue-900 font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center group shadow-lg hover:shadow-xl">
                            <span className="relative overflow-hidden">
                                <span className="block group-hover:-translate-y-7 transition-transform duration-300">Explore Careers</span>
                                <span className="absolute left-0 top-7 block group-hover:-translate-y-7 transition-transform duration-300">Join Now →</span>
                            </span>
                            <IoMdRocket className="ml-2 group-hover:rotate-45 transition-transform duration-500" />
                        </button>
                    </div>
                </div>

                {/* Floating capsules decoration */}
                <div className="absolute right-20 top-1/4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float"></div>
                <div className="absolute right-40 bottom-1/3 w-10 h-16 rounded-full bg-indigo-400/20 backdrop-blur-sm border border-indigo-400/30 animate-float animation-delay-2000"></div>
            </div>

            {/* Enhanced Navigation Dots */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-50 space-y-5">
                {['hero', 'careers', 'form', 'benefits'].map((item, i) => (
                    <a 
                        key={i} 
                        href={`#${item}`}
                        className="block relative group"
                    >
                        <span className="block w-3 h-3 rounded-full bg-gray-400 group-hover:bg-blue-600 transition-colors duration-300"
                            style={{ backgroundColor: i === 0 ? '#2563eb' : '' }}
                        ></span>
                        <span className="absolute right-full pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium whitespace-nowrap">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                    </a>
                ))}
            </div>

            {/* Career Paths - 3D Card Effect */}
            <section id="careers" className="py-24 bg-white relative">
                <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Transformative</span> Career Paths
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Where your expertise meets cutting-edge pharmaceutical innovation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: <FaDna className="text-blue-600 text-4xl" />,
                                title: "Genomic Research",
                                description: "Pioneer personalized medicine through DNA analysis",
                                color: "from-blue-50 to-blue-100"
                            },
                            {
                                icon: <GiChemicalDrop className="text-green-600 text-4xl" />,
                                title: "Drug Formulation",
                                description: "Develop new chemical entities and delivery systems",
                                color: "from-green-50 to-green-100"
                            },
                            {
                                icon: <FaShieldAlt className="text-purple-600 text-4xl" />,
                                title: "Quality Control",
                                description: "Ensure safety and efficacy of all medications",
                                color: "from-purple-50 to-purple-100"
                            }
                        ].map((area, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 mb-6 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{area.title}</h3>
                                    <p className="text-gray-600 text-center">{area.description}</p>
                                    <div className="mt-6 text-center">
                                        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                            8 Open Positions
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                        {[
                            { number: "150+", label: "Clinical Trials", color: "bg-blue-100 text-blue-800" },
                            { number: "40+", label: "Countries", color: "bg-green-100 text-green-800" },
                            { number: "500+", label: "Scientists", color: "bg-purple-100 text-purple-800" },
                            { number: "25+", label: "Patents", color: "bg-indigo-100 text-indigo-800" }
                        ].map((stat, index) => (
                            <div key={index} className="p-6 rounded-xl text-center transition-all hover:shadow-lg">
                                <div className={`text-4xl font-bold mb-2 ${stat.color} p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium mt-4">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form - Glass Morphism Design */}
            <section id="form" className="py-24 bg-[url('/img/lab-bg.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                        <div className="p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-2">Join Our Scientific Team</h2>
                                <p className="text-blue-100 max-w-2xl mx-auto">
                                    Complete this form and our HR team will contact you about potential opportunities
                                </p>
                            </div>
                            
                            <form className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block text-blue-100 font-medium mb-2">Full Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaUser className="text-blue-300" />
                                            </div>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300" 
                                                placeholder="Dr. Jane Smith"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-blue-100 font-medium mb-2">Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaEnvelope className="text-blue-300" />
                                            </div>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300" 
                                                placeholder="jane@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="qualification" className="block text-blue-100 font-medium mb-2">Highest Qualification</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaGraduationCap className="text-blue-300" />
                                            </div>
                                            <input 
                                                type="text" 
                                                id="qualification" 
                                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300" 
                                                placeholder="Ph.D in Pharmacology"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="mb-6">
                                        <label htmlFor="specialization" className="block text-blue-100 font-medium mb-2">Specialization</label>
                                        <select 
                                            id="specialization" 
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 appearance-none bg-[url('/img/chevron-down-white.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]"
                                            required
                                        >
                                            <option value="">Select your field</option>
                                            <option value="Biochemistry">Biochemistry</option>
                                            <option value="Molecular Biology">Molecular Biology</option>
                                            <option value="Pharmaceutical Chemistry">Pharmaceutical Chemistry</option>
                                            <option value="Clinical Research">Clinical Research</option>
                                            <option value="Pharmacology">Pharmacology</option>
                                        </select>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="experience" className="block text-blue-100 font-medium mb-2">Years of Experience</label>
                                        <select 
                                            id="experience" 
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 appearance-none bg-[url('/img/chevron-down-white.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]"
                                            required
                                        >
                                            <option value="">Select experience</option>
                                            <option value="0-2">0-2 years</option>
                                            <option value="2-5">2-5 years</option>
                                            <option value="5-10">5-10 years</option>
                                            <option value="10+">10+ years</option>
                                        </select>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="resume" className="block text-blue-100 font-medium mb-2">Upload CV</label>
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/30 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <FaFileMedical className="text-blue-300 text-2xl mb-2" />
                                                    <p className="mb-2 text-sm text-blue-200">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </p>
                                                    <p className="text-xs text-blue-300">PDF, DOC, DOCX (Max. 5MB)</p>
                                                </div>
                                                <input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" required />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="md:col-span-2">
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-blue-100 font-medium mb-2">Research Interests</label>
                                        <textarea 
                                            id="message" 
                                            rows="4" 
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300" 
                                            placeholder="Describe your research interests and how they align with our work..."
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex items-start mb-8">
                                        <div className="flex items-center h-5">
                                            <input 
                                                id="terms" 
                                                type="checkbox" 
                                                className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-300" 
                                                required
                                            />
                                        </div>
                                        <label htmlFor="terms" className="ml-2 text-sm text-blue-100">
                                            I consent to processing my data according to the <a href="#" className="text-white hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center group"
                                    >
                                        <span>Submit Application</span>
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section - Card Grid */}
            <section id="benefits" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Choose Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We invest in our team's growth, wellbeing, and scientific ambitions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaBrain className="text-blue-600 text-3xl" />,
                                title: "Cutting-Edge Research",
                                description: "Access to state-of-the-art labs and equipment",
                                bg: "bg-blue-50"
                            },
                            {
                                icon: <FaChartLine className="text-green-600 text-3xl" />,
                                title: "Career Growth",
                                description: "Clear promotion paths and leadership training",
                                bg: "bg-green-50"
                            },
                            {
                                icon: <FaShieldAlt className="text-purple-600 text-3xl" />,
                                title: "Comprehensive Health",
                                description: "Medical, dental, and mental health coverage",
                                bg: "bg-purple-50"
                            },
                            {
                                icon: <IoMdRocket className="text-indigo-600 text-3xl" />,
                                title: "Innovation Time",
                                description: "20% time for independent research projects",
                                bg: "bg-indigo-50"
                            },
                            {
                                icon: <FaGraduationCap className="text-red-600 text-3xl" />,
                                title: "Education Sponsorship",
                                description: "Funding for advanced degrees and conferences",
                                bg: "bg-red-50"
                            },
                            {
                                icon: <GiChemicalDrop className="text-amber-600 text-3xl" />,
                                title: "Patent Bonuses",
                                description: "Financial rewards for filed patents",
                                bg: "bg-amber-50"
                            }
                        ].map((benefit, index) => (
                            <div 
                                key={index} 
                                className={`${benefit.bg} p-8 rounded-2xl border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                            >
                                <div className="w-14 h-14 mb-6 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animation styles */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out both;
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
};

export default Careers;