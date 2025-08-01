// components/QualityPractices.js
import { FaFlask, FaCheckCircle, FaClipboardCheck, FaChartLine, FaRegLightbulb, FaUserShield, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

const QualityPractices = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Lab Background */}
      <div className="relative h-[500px] bg-[var(--primary)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/Plant1.jpg')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/95 to-[var(--tertiary)]/90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Precision Crafted <span className="text-[var(--secondary)]">Quality</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Where scientific rigor meets uncompromising standards in pharmaceutical excellence
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary-light)] rounded-full"></div>
          </div>
        </div>
      </div>

     {/* Quality Pillars */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold mb-4">
        OUR APPROACH
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        The <span className="text-[var(--primary)]">Four Pillars</span> of Quality
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: <FaFlask className="text-white text-3xl" />,
          title: "Material Excellence",
          description: "200+ quality checks on all incoming raw materials",
          bg: "bg-[var(--primary)]",
          border: "border-[var(--primary)]"
        },
        {
          icon: <FaChartLine className="text-white text-3xl" />,
          title: "Process Control",
          description: "Real-time monitoring at 50+ production checkpoints",
          bg: "bg-[var(--secondary)]",
          border: "border-[var(--secondary)]"
        },
        {
          icon: <FaCheckCircle className="text-white text-3xl" />,
          title: "Product Verification",
          description: "Comprehensive finished product analysis",
          bg: "bg-[var(--tertiary)]",
          border: "border-[var(--tertiary)]"
        },
        {
          icon: <FaClipboardCheck className="text-white text-3xl" />,
          title: "Stability Assurance",
          description: "ICH-compliant environmental testing",
          bg: "bg-[var(--primary)]",
          border: "border-[var(--primary)]"
        }
      ].map((pillar, index) => (
        <div key={index} className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${pillar.border} hover:shadow-md transition-all h-full`}>
          <div className={`w-14 h-14 ${pillar.bg} rounded-lg flex items-center justify-center mb-4`}>
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
                src="/img/quality-practices/quality-practices.webp"
                alt="Validation Process"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold mb-4">
                VALIDATION FRAMEWORK
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Comprehensive <span className="text-[var(--primary)]">Validation Master Plan</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Systematic Qualification",
                    description: "Coordinates all validation activities across facilities and systems"
                  },
                  {
                    title: "Critical System Validation",
                    description: "Ensures all critical manufacturing systems meet global standards"
                  },
                  {
                    title: "Stability Protocols",
                    description: "ICH guideline-compliant environmental testing procedures"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[var(--primary)]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <FaCheckCircle className="text-[var(--primary)] text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
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
              <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold mb-4">
                OUR TEAM
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-[var(--primary)]">Quality Guardians</span> at Work
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-700">
                  Our 50+ quality specialists bring unmatched expertise in pharmaceutical compliance, with certifications in Six Sigma, Lean Manufacturing, and Regulatory Affairs.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <FaUserShield className="text-[var(--primary)] text-2xl mr-3" />,
                      title: "24/7 Monitoring",
                      description: "Round-the-clock quality oversight across all operations"
                    },
                    {
                      icon: <FaGlobe className="text-[var(--primary)] text-2xl mr-3" />,
                      title: "Global Standards",
                      description: "Expertise in WHO-GMP, ICH, and FDA regulations"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex items-center mb-3">
                        {feature.icon}
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/img/quality-practices/quality-practices2.webp"
                alt="Quality Assurance Team"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              RECOGNITIONS
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Globally <span className="text-[var(--secondary)]">Recognized</span> Excellence
            </h2>
            <div className="w-20 h-1 bg-[var(--secondary)] mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-center">
                <span className="text-3xl mb-3 block">{cert.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-blue-100">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[var(--primary)]/5 rounded-2xl p-8 md:p-12 border border-[var(--primary)]/20">
            <FaCheckCircle className="text-5xl text-[var(--primary)] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our <span className="text-[var(--primary)]">Unwavering</span> Commitment
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              "At Hygiene Lifesciences, we believe quality isn't just measured in test results, but in the trust we build with every dose we produce. We would rather be the best than the biggest."
            </p>
            <button className="px-8 py-3 bg-[var(--primary)] text-white font-medium rounded-full hover:bg-[var(--primary-dark)] transition-colors">
              Download Quality Policy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPractices;