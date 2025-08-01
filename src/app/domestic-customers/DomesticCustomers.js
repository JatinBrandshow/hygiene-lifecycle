// components/DomesticCustomers.js
import Image from 'next/image';

const DomesticCustomers = () => {
  const companyLogos = [
    { src: '/img/domestic-customer/client-lo-1.webp', alt: 'Company 1' },
    { src: '/img/domestic-customer/client-lo-2.webp', alt: 'Company 2' },
    { src: '/img/domestic-customer/client-lo-3.webp', alt: 'Company 3' },
    { src: '/img/domestic-customer/client-lo-4.webp', alt: 'Company 4' },
    { src: '/img/domestic-customer/client-lo-5.webp', alt: 'Company 5' },
    { src: '/img/domestic-customer/client-lo-6.webp', alt: 'Company 6' },
    { src: '/img/domestic-customer/client-lo-7.webp', alt: 'Company 7' },
    { src: '/img/domestic-customer/client-lo-8.webp', alt: 'Company 8' },
    { src: '/img/domestic-customer/client-lo-9.webp', alt: 'Company 9' },
    { src: '/img/domestic-customer/client-lo-10.webp', alt: 'Company 10' },
    { src: '/img/domestic-customer/client-lo-11.webp', alt: 'Company 11' },
    { src: '/img/domestic-customer/client-lo-12.webp', alt: 'Company 12' }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-[#031B4E] to-[#173C96] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/img/dot-grid-pattern.svg')] bg-[size:100px_100px]"></div>
        </div>
        
        {/* Floating bubbles */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-20 bg-white"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`
            }}
          ></div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted By <span className="text-white">India's Top</span> Pharma Brands
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Partnering with India's most respected pharmaceutical companies to deliver exceptional healthcare solutions
            </p>
            <div className="w-32 h-1.5 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Enhanced Logo Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 relative z-10">
                Our <span className="text-[#173C96]">Valued Partners</span>
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#173C96]/10 z-0"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              Collaborating with India's most trusted pharmaceutical brands to advance healthcare innovation
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            {companyLogos.map((logo, index) => (
              <div 
                key={index} 
                className="group relative flex items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-[#173C96]/50 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg"
              >
                <div className="relative w-full h-16">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#173C96]/5 to-[#031B4E]/5 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/img/circle-pattern.svg')] bg-[size:150px_150px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Voices of <span className="text-[#173C96]">Trust</span>
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Hygine Lifecycle has been instrumental in helping us scale our production while maintaining uncompromising quality standards.",
                company: "Leading Pharma Company",
                role: "Production Head"
              },
              {
                quote: "Their R&D team's innovative solutions reduced our time-to-market by 30%, giving us a competitive edge.",
                company: "National Healthcare Brand",
                role: "Chief Technology Officer"
              },
              {
                quote: "Consistent quality and reliable deliveries make Hygine Lifecycle our preferred manufacturing partner.",
                company: "Established Medicine Manufacturer",
                role: "Procurement Manager"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-[#173C96] text-4xl mb-4">"</div>
                <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/domestic-customer/strength_img2.png"
                  alt="Pharmaceutical Partnership"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block mb-4 px-4 py-2 bg-[#173C96]/10 text-[#173C96] rounded-full text-sm font-medium">
                Partnership Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Grow With <span className="text-[#173C96]">Hygine Lifecycle</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join India's premier pharmaceutical network and leverage our expertise to accelerate your business growth.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "Competitive pricing models tailored for Indian market",
                  "Custom formulation development for domestic needs",
                  "Dedicated relationship managers for each partner",
                  "Industry-leading 98% on-time delivery rate",
                  "End-to-end regulatory compliance support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-[#173C96]/10 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-[#173C96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 bg-primary text-white rounded-lg font-medium hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Contact Sales Team
                </button>
                <button className="px-8 py-3.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomesticCustomers;