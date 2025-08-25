// components/OurStrengths.js
import { FaLeaf, FaUsers, FaHandshake, FaRocket, FaHeadphones, FaBoxOpen, FaFlask, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

const OurStrengths = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative h-[600px] bg-gradient-to-br from-[var(--primary)] to-[var(--tertiary)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">Core Strengths</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The pillars that make Hygine Lifecycle a trusted partner in global healthcare
            </p>
            <div className="w-32 h-1.5 bg-secondary rounded-full" />
          </div>
        </div>

        <div className="absolute right-4 top-0 bottom-0 w-2/2 hidden lg:flex items-center justify-end-safe">
          <div className="relative w-full max-w-[500px] h-[500px]">
            <Image 
              src="/img/our-strength/Strength1.webp"
              alt="Pharmaceutical Strengths"
              fill
              className="object-contain"
              style={{ objectPosition: 'right center' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Strengths Grid with Solid Colors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaRocket className="text-3xl" />,
                title: "Vision Driven",
                description: "Committed to providing quality, accessible healthcare through strict GMP compliance",
                color: "bg-[var(--primary)]",
                text: "text-white"
              },
              {
                icon: <FaFlask className="text-3xl" />,
                title: "Innovation Focused",
                description: "Research-driven company creating novel solutions for global health challenges",
                color: "bg-[var(--secondary)]",
                text: "text-white"
              },
              {
                icon: <FaHeadphones className="text-3xl" />,
                title: "Customer-Centric",
                description: "We listen and deliver bespoke solutions tailored to customer needs",
                color: "bg-[var(--tertiary)]",
                text: "text-white"
              },
              {
                icon: <FaBoxOpen className="text-3xl" />,
                title: "Reliable Delivery",
                description: "Nearly 100% on-time delivery performance across all orders",
                color: "bg-[var(--primary)]",
                text: "text-white"
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: "Value Creation",
                description: "High-quality, cost-effective formulations across therapeutic categories",
                color: "bg-[var(--secondary)]",
                text: "text-white"
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "People First",
                description: "Team of experts committed to quality and mutual growth",
                color: "bg-[var(--tertiary)]",
                text: "text-white"
              },
              {
                icon: <FaHandshake className="text-3xl" />,
                title: "Partnership Approach",
                description: "Long-term client relationships with exceptional retention",
                color: "bg-[var(--primary)]",
                text: "text-white"
              },
              {
                icon: <FaLeaf className="text-3xl" />,
                title: "Eco-Conscious",
                description: "Minimal environmental footprint with sustainable practices",
                color: "bg-[var(--secondary)]",
                text: "text-white"
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: "Operational Excellence",
                description: "Lean, efficient model with cutting-edge technologies",
                color: "bg-[var(--tertiary)]",
                text: "text-white"
              }
            ].map((strength, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`absolute inset-0 ${strength.color} opacity-95`} />
                <div className="relative p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-lg ${strength.text} bg-white/20`}>
                    {strength.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${strength.text} mb-3`}>{strength.title}</h3>
                  <p className={`${strength.text} opacity-90 text-sm leading-relaxed`}>{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tertiary)] mb-4">
              Why <span className="text-[var(--primary)]">Hygine Lifesciences</span> Stands Out
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden h-full min-h-[400px] shadow-lg">
                <Image
                  src="/img/our-strength/strength_img2.png"
                  alt="Hygiene Team"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--tertiary)]/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">People-Powered Excellence</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Our greatest strength lies in our team of passionate professionals who bring together scientific expertise and operational excellence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['GMP Experts', 'Research Scientists', 'Quality Specialists', 'Logistics Pros'].map((role, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-6">
                {[
                  {
                    icon: <FaFlask className="text-xl" />,
                    title: "Innovation Engine",
                    description: "Our R&D investment drives continuous improvement and novel formulations that address unmet medical needs.",
                    color: "text-[var(--secondary)]",
                    border: "border-[var(--secondary)]"
                  },
                  {
                    icon: <FaHandshake className="text-xl" />,
                    title: "Partnership Philosophy",
                    description: "We view every client relationship as a long-term partnership, evidenced by our 95%+ customer retention rate.",
                    color: "text-[var(--primary)]",
                    border: "border-[var(--primary)]"
                  },
                  {
                    icon: <FaLeaf className="text-xl" />,
                    title: "Sustainable Operations",
                    description: "Our green initiatives reduce environmental impact while maintaining product quality and efficiency.",
                    color: "text-[var(--tertiary)]",
                    border: "border-[var(--tertiary)]"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-xl bg-white shadow-sm border-l-4 ${item.border} hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full mr-4 ${item.color} bg-[${item.color}]/10`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--primary)] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "GMP Compliance", icon: "✓" },
              { value: "95%+", label: "Customer Retention", icon: "🤝" },
              { value: "99.7%", label: "On-Time Delivery", icon: "⏱️" },
              { value: "200+", label: "Quality Checks", icon: "🔍" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-blue-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--tertiary)] mb-4">
            Ready to Experience the <span className="text-[var(--primary)]">Hygine Lifesciences Difference</span>?
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Partner with a pharmaceutical company that combines quality, innovation, and reliability.
          </p>
          <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurStrengths;