// components/ResearchDevelopment.js
import { FaMicroscope, FaFlask, FaChartLine, FaLightbulb, FaCogs, FaUsers, FaShieldAlt, FaRegClock } from 'react-icons/fa';
import Image from 'next/image';

const ResearchDevelopment = () => {
    const rndImages = [
        { src: '/img/r&d/Research--03.jpg', alt: 'Advanced Research Laboratory' },
        { src: '/img/r&d/Research--01.jpg', alt: 'Our Research Team' },
        { src: '/img/r&d/Research--02.jpg', alt: 'Cutting-edge Equipment' }
    ];

    const services = [
        {
            icon: <FaMicroscope className="text-blue-600 text-3xl" />,
            title: "Drug Discovery",
            description: "Accelerating the identification of new therapeutic compounds"
        },
        {
            icon: <FaFlask className="text-green-600 text-3xl" />,
            title: "Formulation Development",
            description: "Creating stable, effective pharmaceutical formulations"
        },
        {
            icon: <FaChartLine className="text-purple-600 text-3xl" />,
            title: "Market Analysis",
            description: "Identifying trends and unmet medical needs"
        },
        {
            icon: <FaLightbulb className="text-amber-600 text-3xl" />,
            title: "Innovation Management",
            description: "Overcoming research challenges across therapeutic areas"
        },
        {
            icon: <FaCogs className="text-red-600 text-3xl" />,
            title: "Process Optimization",
            description: "Streamlining from discovery to production"
        },
        {
            icon: <FaRegClock className="text-teal-600 text-3xl" />,
            title: "Expedited Development",
            description: "Reducing time-to-market for new therapies"
        }
    ];

    return (
        <div className="font-sans bg-white">
            {/* Hero Section */}
            <div className="relative h-[500px] bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/img/molecule-pattern.svg')] bg-[length:200px_200px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Pharmaceutical Innovation</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Accelerating drug discovery and bringing new medicines to market
                        </p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                    </div>
                </div>

                <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-end">
                    <div className="relative w-full h-full">
                        <Image
                            src="/img/r&d/Research--01.jpg"
                            alt="Research Laboratory"
                            fill
                            className="object-cover"
                            style={{ maskImage: 'linear-gradient(to left, white 0%, transparent 100%)' }}
                        />
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Accelerating <span className="text-blue-600">Drug Discovery</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                In India, we are committed to accelerating discovery of drugs and bringing new medicines to market. We offer our expertise in analyzing trends in the market, developing innovative products for research and managing the roadblocks that pharmaceutical researchers may face in laboratory research across diverse therapeutic areas.
                            </p>
                            <p className="text-xl text-gray-600">
                                Bringing new therapies to market is challenging and complex. At Shamshree we remain committed to accelerating drug discovery by powering innovation in pharmaceutical solutions. Our expertise in evaluating market trends, managing laboratory related challenges and developing state-of-the-art research products benefit our customers, who leverage our solutions across diverse therapeutic areas.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-6">
                                {rndImages.slice(0, 2).map((image, index) => (
                                    <div key={index} className="relative aspect-square rounded-md overflow-hidden shadow-lg">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg col-span-2">
                                    <Image
                                        src={rndImages[2].src}
                                        alt={rndImages[2].alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Simplified Design */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our <span className="text-blue-600">R&D Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive solutions to power your research and development
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all"
                            >
                                <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center ${index % 3 === 0 ? 'bg-blue-100' : index % 3 === 1 ? 'bg-green-100' : 'bg-purple-100'}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

              {/* Stats Section - Simplified */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            By The <span className="text-blue-300">Numbers</span>
                        </h2>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                            Quantifying our impact in pharmaceutical research
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { value: "50+", label: "Active Research Projects" },
                            { value: "100+", label: "Scientific Publications" },
                            { value: "30+", label: "Therapeutic Areas" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold mb-3">
                                    {stat.value}
                                </div>
                                <p className="text-xl text-blue-200">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our <span className="text-blue-600">Research Process</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach to pharmaceutical innovation
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-6"></div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
                        {[
                            {
                                title: "Market Analysis",
                                description: "Identifying unmet medical needs and market opportunities",
                                icon: <FaChartLine className="text-blue-600 text-2xl" />
                            },
                            {
                                title: "Target Identification",
                                description: "Selecting biological targets for therapeutic intervention",
                                icon: <FaMicroscope className="text-green-600 text-2xl" />
                            },
                            {
                                title: "Lead Discovery",
                                description: "Finding and optimizing potential drug candidates",
                                icon: <FaLightbulb className="text-purple-600 text-2xl" />
                            },
                            {
                                title: "Preclinical Research",
                                description: "Laboratory and animal testing for safety and efficacy",
                                icon: <FaFlask className="text-amber-600 text-2xl" />
                            },
                            {
                                title: "Clinical Development",
                                description: "Human trials to demonstrate safety and effectiveness",
                                icon: <FaUsers className="text-red-600 text-2xl" />
                            },
                            {
                                title: "Regulatory Approval",
                                description: "Navigating regulatory pathways for market authorization",
                                icon: <FaShieldAlt className="text-teal-600 text-2xl" />
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative pb-12 md:flex items-start">
                                <div className="hidden md:block absolute left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="md:ml-24">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default ResearchDevelopment;