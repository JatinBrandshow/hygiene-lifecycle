"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function WhoWeAre() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* === Hero Section === */}
      <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        {/* Gradient using both primary (blue) and secondary (pink) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-tertiary/70 z-10" />
        <Image
          src="/img/Plant1.webp"
          alt="Who We Are"
          layout="fill"
          objectFit="cover"
          priority
          className="object-top"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            Who We Are
          </h1>
          <div className="w-24 h-1.5 bg-secondary mb-8" />
          <p className="text-xl md:text-2xl text-white max-w-2xl opacity-95 font-medium">
            Pioneering pharmaceutical excellence with global impact
          </p>
        </div>
      </section>

      {/* === Floating Info Card === */}
      <section className="relative z-30 -mt-20 md:-mt-32 px-4">
        <div
          className={`bg-white shadow-xl rounded-3xl px-8 py-12 md:px-16 md:py-16 max-w-6xl mx-auto transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-10">
            <span className="relative inline-block pb-2 text-gray-900">
              Empowering Global Health
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-secondary transform" />
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  <strong className="text-primary font-semibold">Hygine Lifesciences Pvt Ltd</strong> is a{" "}
                  <strong className="text-secondary font-semibold">WHO GMP</strong> certified pharmaceutical
                  company with a world-class manufacturing plant in{" "}
                  <strong className="text-primary font-semibold">Khasra no. 2011/471, Bhatoli Kalan, Baddi, Solan (H.P), 173205, India</strong>.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  We specialize in <strong className="text-secondary font-semibold">Dry Powder Injectables</strong> – 
                  Carbapenems & Cephalosporins, ensuring global standards, strict quality protocols, 
                  and high efficacy.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-secondary shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">Global Reach</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Exporting across <strong className="text-primary font-semibold">Nigeria</strong>,{" "}
                <strong className="text-secondary font-semibold">Kenya</strong>,{" "}
                   <strong className="text-secondary font-semibold">Ghana</strong>,{" "}
                <strong className="text-primary font-semibold">Afghanistan</strong>, and{" "}
                <strong className="text-secondary font-semibold">Yemen</strong> nations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Nigeria', 'Kenya', 'Afghanistan', 'Ghana', 'Yemen'].map((region) => (
                  <span key={region} className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Why Choose Us Section === */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hygine Lifesciences Pvt Ltd ?
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Accreditation",
                desc: "Certified by WHO GMP and trusted by international agencies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "25+ Countries",
                desc: "Exports across Kenya, Ghana, Afghanistan, Yemen and Nigeria.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Trusted Quality",
                desc: "Uncompromised safety and affordable pharmaceutical excellence.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-secondary/30 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-x-0 bottom-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  index % 2 === 0 ? 'bg-primary/10 text-primary group-hover:bg-primary' : 'bg-secondary/10 text-secondary group-hover:bg-secondary'
                } group-hover:text-white transition-colors`}>
                  {item.icon}
                </div>
                <h4 className={`text-xl font-bold mb-3 text-gray-800 group-hover:${
                  index % 2 === 0 ? 'text-primary' : 'text-secondary'
                } transition-colors`}>
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Global Presence Section === */}
      <section className="py-20 px-6 md:px-10 bg-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full opacity-20" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/10 rounded-full opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Presence
            </h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto" />
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Hygine Lifesciences Pvt Ltd proudly exports its products to over 25 countries,
              improving lives across multiple continents.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96 w-full">
              {/* Replace with actual world map with highlighted regions */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl text-gray-500 font-medium">Interactive World Map Visualization</p>
                  <p className="text-gray-400 mt-2">(Highlighting our export countries)</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-gray-50">
              {[
                { region: "Africa", countries: "15+ countries" },
                { region: "Latin America", countries: "8 countries" },
                { region: "Southeast Asia", countries: "12 countries" },
                { region: "CIS Nations", countries: "6 countries" },
              ].map((item, index) => (
                <div key={index} className="p-6 text-center group relative overflow-hidden hover:bg-gray-50 transition-colors">
                  <span className={`absolute inset-x-0 bottom-0 h-1 ${
                    index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                  } scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`} />
                  <h4 className={`text-xl font-bold mb-2 ${
                    index % 2 === 0 ? 'text-primary' : 'text-secondary'
                  } group-hover:${
                    index % 2 === 0 ? 'text-primary-dark' : 'text-secondary-dark'
                  } transition-colors`}>
                    {item.region}
                  </h4>
                  <p className="text-gray-600">{item.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Our Expertise Section === */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Expertise
            </h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary/5 to-white rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-white p-3 rounded-lg mr-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-primary">Manufacturing Excellence</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Specialized in Dry Powder Injectables (Carbapenems & Cephalosporins)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">State-of-the-art aseptic processing and lyophilization capabilities</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Strict quality control measures at every production stage</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-white rounded-xl p-8 border border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-secondary text-white p-3 rounded-lg mr-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-secondary">Research & Development</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dedicated R&D team focused on formulation development</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Continuous process optimization and technology upgrades</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Focus on bioequivalence and therapeutic effectiveness</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Collaborations with research institutions and industry experts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}