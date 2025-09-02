'use client';
import Image from 'next/image';

const GlobalPresence = () => {
    const stats = [
        { value: '10+', label: 'Countries' },
        { value: '100+', label: 'Products' },
        { value: '5+', label: 'Years Experience' },
        { value: '500+', label: 'Healthcare Partners' }
    ];

   const regions = [
    {
      name: 'Africa',
      countries: ['Kenya', 'Ghana', 'Nigeria'],
      description: 'Growing footprint supporting healthcare infrastructure development'
    },
    {
      name: 'Middle East',
      countries: ['Yemen', 'Afghanistan'],
      description: 'Trusted supplier to government healthcare programs'
    }
  ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-[#031B4E] to-[#173C96] text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Global Presence</h1>
                    <div className="w-24 h-1.5 bg-[#EB006F] mx-auto mb-4 md:mb-6 rounded-full"></div>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        Serving healthcare needs worldwide with quality pharmaceutical solutions
                    </p>
                </div>
            </div>

            {/* World Map Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="relative h-[400px] sm:h-[500px] md:h-[650px] w-auto">
                        <Image
                            src="/img/global-presence/world-map.webp"
                            alt="Global Presence Map"
                            fill
                            className="object-contain"
                            quality={100}
                            priority
                        />
                    </div>
                    <div className="p-4 md:p-6 bg-gradient-to-r from-[#173C96]/5 to-[#031B4E]/5 border-t border-gray-200">
                        <p className="text-center text-gray-700 font-medium text-sm md:text-base">
                            Our worldwide distribution network ensures timely delivery to healthcare providers across continents
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Stats */}
            <div className="bg-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
                        Our Worldwide Reach
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 md:p-6 text-center border border-gray-100 hover:border-[#173C96]/50 transition-all hover:-translate-y-1">
                                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Regional Presence */}
           <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12 relative">
            <span className="relative z-10 px-4 bg-gray-50 inline-block">
              Regional Operations
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#173C96] to-[#EB006F] rounded-full"></div>
            </span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 z-0"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {regions.map((region, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header with solid primary color */}
                <div className="bg-[#173C96] p-4 md:p-5 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('/img/dots-pattern.svg')] bg-center"></div>
                  <h3 className="text-lg md:text-xl font-bold text-white relative z-10 flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#EB006F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {region.name}
                  </h3>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#EB006F]"></div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 relative">
                  <p className="text-gray-600 mb-4 md:mb-5 group-hover:text-gray-800 transition-colors duration-300 text-sm md:text-base">
                    {region.description}
                  </p>

                  {/* Countries with animated checkmarks */}
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center bg-[#173C96]/10 text-[#173C96] px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 group-hover:bg-[#EB006F]/10 group-hover:text-[#EB006F] group-hover:shadow-sm"
                      >
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5 text-[#EB006F] transition-transform duration-300 group-hover:rotate-[-360deg]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {country}
                      </span>
                    ))}
                  </div>

                  {/* Floating decoration - using secondary color */}
                  <div className="absolute right-3 bottom-3 md:right-4 md:bottom-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#EB006F]" fill="currentColor" viewBox="0 0 20 20">
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