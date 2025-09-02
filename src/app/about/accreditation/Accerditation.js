'use client';
import Image from 'next/image';
import { useState } from 'react';

const AccreditationPage = () => {
  const regions = {
    Asia: [
      { id: 1, image: '/img/global-accreditations/Afghanistan.webp', alt: 'Afghanistan Certification' },
      // { id: 2, image: '/img/global-accreditations/Cambodia.webp', alt: 'Cambodia Certification' },
      // { id: 3, image: '/img/global-accreditations/Myanmar.webp', alt: 'Myanmar Certification' },
      // { id: 4, image: '/img/global-accreditations/Philippines.webp', alt: 'Philippines Certification' },
      // { id: 5, image: '/img/global-accreditations/Sri-lanka.webp', alt: 'Sri Lanka Certification' },
      { id: 6, image: '/img/global-accreditations/Yemen.webp', alt: 'Yemen Certification' }
    ],
    Africa: [
      // { id: 1, image: '/img/global-accreditations/Guinea.webp', alt: 'Guinea Certification' },
      { id: 2, image: '/img/global-accreditations/Kenya.webp', alt: 'Kenya Certification' },
      { id: 3, image: '/img/global-accreditations/Nigeria.webp', alt: 'Nigeria Certification' },
      { id: 4, image: '/img/global-accreditations/Ghana.webp', alt: 'Ghana Certification' },
      // { id: 5, image: '/img/global-accreditations/Madagascar1.webp', alt: 'Madagascar Certification' }
    ],
    // CIS: [
    //   { id: 1, image: '/img/global-accreditations/Kyrgyzstan.webp', alt: 'Kyrgyzstan Certification' },
    //   { id: 2, image: '/img/global-accreditations/Tajikistan.webp', alt: 'Tajikistan Certification' },
    //   { id: 3, image: '/img/global-accreditations/Turkmenistan.webp', alt: 'Turkmenistan Certification' },
    //   { id: 4, image: '/img/global-accreditations/Uzbekistan.webp', alt: 'Uzbekistan Certification' }
    // ],
    // FWA: [
    //   { id: 1, image: '/img/global-accreditations/Cameroon.webp', alt: 'Cameroon Certification' },
    //   { id: 2, image: '/img/global-accreditations/DRC.webp', alt: 'DRC Certification' },
    //   { id: 3, image: '/img/global-accreditations/Ivory-coast.webp', alt: 'Ivory Coast Certification' },
    //   { id: 4, image: '/img/global-accreditations/Mali.webp', alt: 'Mali Certification' }
    // ],
    // Latam: [
    //   { id: 1, image: '/img/global-accreditations/Bolivia.webp', alt: 'Bolivia Certification' },
    //   { id: 2, image: '/img/global-accreditations/Chile.webp', alt: 'Chile Certification' },
    //   { id: 3, image: '/img/global-accreditations/Costa-Rica.webp', alt: 'Costa Rica Certification' },
    //   { id: 4, image: '/img/global-accreditations/Ecuador.webp', alt: 'Ecuador Certification' },
    //   { id: 5, image: '/img/global-accreditations/Guatemala.webp', alt: 'Guatemala Certification' }
    // ]
  };

  const [activeRegion, setActiveRegion] = useState('Asia');

  return (
     <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Using primary and tertiary colors */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Global Accreditations</h1>
          <div className="w-24 h-1.5 bg-[var(--secondary)] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Recognized certifications across multiple regions
          </p>
        </div>
      </div>

      {/* Region Selector */}
      <div className="max-w-7xl mx-auto px-6 py-8 -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(regions).map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeRegion === region
                    ? 'bg-[var(--primary)] text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {region} ({regions[region].length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accreditation Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
              {activeRegion} Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 p-6 sm:p-8">
            {regions[activeRegion].map(cert => (
              <div 
                key={cert.id} 
                className="group flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Larger Image Container */}
                <div className="relative flex-1 min-h-[160px] sm:min-h-[200px] bg-gray-50 flex items-center justify-center p-4">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                    style={{
                      maxWidth: '160px',
                      maxHeight: '160px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>
                <div className="p-3 sm:p-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-sm sm:text-base text-gray-700 font-medium text-center">
                    {cert.alt.replace(' Certification', '')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationPage;