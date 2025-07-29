'use client';
import Image from 'next/image';
import { useState } from 'react';

const AccreditationPage = () => {
  const regions = {
    Asia: [
      { id: 1, image: '/img/global-accreditations/Afghanistan.png', alt: 'Afghanistan Certification' },
      { id: 2, image: '/img/global-accreditations/Cambodia.png', alt: 'Cambodia Certification' },
      { id: 3, image: '/img/global-accreditations/Myanmar.png', alt: 'Myanmar Certification' },
      { id: 4, image: '/img/global-accreditations/Philippines.png', alt: 'Philippines Certification' },
      { id: 5, image: '/img/global-accreditations/Sri-lanka.png', alt: 'Sri Lanka Certification' },
      { id: 6, image: '/img/global-accreditations/Yemen.png', alt: 'Yemen Certification' }
    ],
    Africa: [
      { id: 1, image: '/img/global-accreditations/Guinea.png', alt: 'Guinea Certification' },
      { id: 2, image: '/img/global-accreditations/Kenya.png', alt: 'Kenya Certification' },
      { id: 3, image: '/img/global-accreditations/Nigeria.png', alt: 'Nigeria Certification' },
      { id: 4, image: '/img/global-accreditations/Zambia.png', alt: 'Zambia Certification' },
      { id: 5, image: '/img/global-accreditations/Madagascar1.png', alt: 'Madagascar Certification' }
    ],
    CIS: [
      { id: 1, image: '/img/global-accreditations/Kyrgyzstan.png', alt: 'Kyrgyzstan Certification' },
      { id: 2, image: '/img/global-accreditations/Tajikistan.png', alt: 'Tajikistan Certification' },
      { id: 3, image: '/img/global-accreditations/Turkmenistan.png', alt: 'Turkmenistan Certification' },
      { id: 4, image: '/img/global-accreditations/Uzbekistan.png', alt: 'Uzbekistan Certification' }
    ],
    FWA: [
      { id: 1, image: '/img/global-accreditations/Cameroon.png', alt: 'Cameroon Certification' },
      { id: 2, image: '/img/global-accreditations/DRC.png', alt: 'DRC Certification' },
      { id: 3, image: '/img/global-accreditations/Ivory-coast.png', alt: 'Ivory Coast Certification' },
      { id: 4, image: '/img/global-accreditations/Mali.png', alt: 'Mali Certification' }
    ],
    Latam: [
      { id: 1, image: '/img/global-accreditations/Bolivia.png', alt: 'Bolivia Certification' },
      { id: 2, image: '/img/global-accreditations/Chile.png', alt: 'Chile Certification' },
      { id: 3, image: '/img/global-accreditations/Costa-Rica.png', alt: 'Costa Rica Certification' },
      { id: 4, image: '/img/global-accreditations/Ecuador.png', alt: 'Ecuador Certification' },
      { id: 5, image: '/img/global-accreditations/Guatemala.png', alt: 'Guatemala Certification' }
    ]
  };

  const [activeRegion, setActiveRegion] = useState('Asia');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Accreditations</h1>
          <div className="w-24 h-1.5 bg-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Recognized certifications across multiple regions
          </p>
        </div>
      </div>

      {/* Region Selector */}
      <div className="max-w-7xl mx-auto px-6 py-8 -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(regions).map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeRegion === region
                    ? 'bg-blue-600 text-white shadow-md'
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
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {activeRegion} Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8">
            {regions[activeRegion].map(cert => (
              <div 
                key={cert.id} 
                className="group flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Larger Image Container */}
                <div className="relative flex-1 min-h-[200px] bg-gray-50 flex items-center justify-center p-4">
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
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-gray-700 font-medium text-center">
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