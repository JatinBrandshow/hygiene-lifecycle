'use client';
import Image from 'next/image';

const GlobalPresence = () => {
    const stats = [
        { value: '25+', label: 'Countries' },
        { value: '100+', label: 'Products' },
        { value: '15+', label: 'Years Experience' },
        { value: '500+', label: 'Healthcare Partners' }
    ];

    const regions = [
        {
            name: 'Asia',
            countries: ['India', 'China', 'Japan', 'South Korea', 'Vietnam'],
            description: 'Strong presence across major Asian markets with local distribution networks'
        },
        {
            name: 'Africa',
            countries: ['South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco'],
            description: 'Growing footprint supporting healthcare infrastructure development'
        },
        {
            name: 'Europe',
            countries: ['Germany', 'France', 'UK', 'Italy', 'Spain'],
            description: 'Strategic partnerships with leading European pharmaceutical distributors'
        },
        {
            name: 'Americas',
            countries: ['USA', 'Brazil', 'Mexico', 'Canada', 'Argentina'],
            description: 'Expanding reach across North and South American markets'
        },
        {
            name: 'Middle East',
            countries: ['UAE', 'Saudi Arabia', 'Turkey', 'Iran', 'Iraq'],
            description: 'Trusted supplier to government healthcare programs'
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Presence</h1>
                    <div className="w-24 h-1.5 bg-blue-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Serving healthcare needs worldwide with quality pharmaceutical solutions
                    </p>
                </div>
            </div>

            {/* World Map Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-[650px] w-auto">
                        <Image
                            src="/img/global-presence/global-presence1111.webp"
                            alt="Global Presence Map"
                            fill
                            className="object-contain p-4"
                            quality={100}
                            priority
                        />
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-gray-200">
                        <p className="text-center text-gray-700">
                            Our worldwide distribution network ensures timely delivery to healthcare providers across continents
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Stats */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Worldwide Reach
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Regional Presence */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
                        <span className="relative z-10 px-4 bg-gray-50 inline-block">
                            Regional Operations
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        </span>
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 z-0"></div>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regions.map((region, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                {/* Header with gradient */}
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 bg-[url('/img/dots-pattern.svg')] bg-center"></div>
                                    <h3 className="text-xl font-bold text-white relative z-10 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {region.name}
                                    </h3>
                                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    <p className="text-gray-600 mb-5 group-hover:text-gray-800 transition-colors duration-300">
                                        {region.description}
                                    </p>

                                    {/* Countries with animated checkmarks */}
                                    <div className="flex flex-wrap gap-2">
                                        {region.countries.map((country, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:shadow-sm"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-1.5 text-purple-600 transition-transform duration-300 group-hover:rotate-[-360deg]"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {country}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Floating decoration */}
                                    <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                                        <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default GlobalPresence;