// components/QualityPractices.js
import { FaFlask, FaCheckCircle, FaClipboardCheck, FaChartLine, FaRegLightbulb, FaUserShield, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

const QualityPractices = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Lab Background */}
      <div className="relative h-[500px] bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/Plant1.jpg')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Precision Crafted <span className="text-cyan-300">Quality</span>
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Where scientific rigor meets uncompromising standards in pharmaceutical excellence
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Quality Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The <span className="text-blue-600">Four Pillars</span> of Quality
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaFlask className="text-blue-500 text-3xl" />,
                title: "Material Excellence",
                description: "200+ quality checks on all incoming raw materials",
                color: "blue"
              },
              {
                icon: <FaChartLine className="text-green-500 text-3xl" />,
                title: "Process Control",
                description: "Real-time monitoring at 50+ production checkpoints",
                color: "green"
              },
              {
                icon: <FaCheckCircle className="text-purple-500 text-3xl" />,
                title: "Product Verification",
                description: "Comprehensive finished product analysis",
                color: "purple"
              },
              {
                icon: <FaClipboardCheck className="text-amber-500 text-3xl" />,
                title: "Stability Assurance",
                description: "ICH-compliant environmental testing",
                color: "amber"
              }
            ].map((pillar, index) => (
              <div key={index} className={`bg-gradient-to-br from-${pillar.color}-50 to-white p-8 rounded-2xl shadow-md border-t-4 border-${pillar.color}-500 hover:shadow-lg transition-all`}>
                <div className={`w-16 h-16 bg-${pillar.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Master Plan */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/img/quality-practices/quality-practices.jpg"
                alt="Validation Process"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                VALIDATION FRAMEWORK
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Comprehensive <span className="text-blue-600">Validation Master Plan</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <FaCheckCircle className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Systematic Qualification</h3>
                    <p className="text-gray-600">
                      Coordinates all validation activities across facilities and systems
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <FaCheckCircle className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Critical System Validation</h3>
                    <p className="text-gray-600">
                      Ensures all critical manufacturing systems meet global standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <FaCheckCircle className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Stability Protocols</h3>
                    <p className="text-gray-600">
                      ICH guideline-compliant environmental testing procedures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                OUR TEAM
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">Quality Guardians</span> at Work
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-700">
                  Our 50+ quality specialists bring unmatched expertise in pharmaceutical compliance, with certifications in Six Sigma, Lean Manufacturing, and Regulatory Affairs.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <FaUserShield className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-lg font-semibold">24/7 Monitoring</h3>
                    </div>
                    <p className="text-gray-600">
                      Round-the-clock quality oversight across all operations
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <FaGlobe className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-lg font-semibold">Global Standards</h3>
                    </div>
                    <p className="text-gray-600">
                      Expertise in WHO-GMP, ICH, and FDA regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/img/quality-practices/quality-practices2.jpg"
                alt="Quality Assurance Team"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              RECOGNITIONS
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Globally <span className="text-cyan-300">Recognized</span> Excellence
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "WHO-GMP Certified",
                description: "Global pharmaceutical standards",
                icon: "🌐"
              },
              {
                name: "ISO 9001:2015",
                description: "Quality management systems",
                icon: "🏅"
              },
              {
                name: "USFDA Compliant",
                description: "United States regulations",
                icon: "🇺🇸"
              },
              {
                name: "EU-GMP",
                description: "European standards",
                icon: "🇪🇺"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all text-center">
                <span className="text-4xl mb-4 block">{cert.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-blue-200">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 shadow-inner">
            <FaCheckCircle className="text-5xl text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Unwavering</span> Commitment
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              "At Shamshree, we believe quality isn't just measured in test results, but in the trust we build with every dose we produce. We would rather be the best than the biggest."
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
              Download Quality Policy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPractices;