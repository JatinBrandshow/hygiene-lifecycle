// components/Manufacturing.js
import { FaIndustry, FaFlask, FaShieldAlt, FaCogs, FaChartLine, FaLeaf, FaGlobe, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

const Manufacturing = () => {
  const manufacturingImages = [
    { src: '/img/Plant1.webp', alt: 'Manufacturing Plant 1' },
    { src: '/img/manufacturing/Vial-Filling-Machine.webp', alt: 'Vial Filling Machine' },
    { src: '/img/manufacturing/Vial-Inspection.webp', alt: 'Vial Inspection Process' },
    { src: '/img/manufacturing/Vial-Washing-Machine.webp', alt: 'Vial Washing Machine' },
    { src: '/img/manufacturing/Warehouse.webp', alt: 'Warehouse Facility' },
    { src: '/img/manufacturing/Water-System.webp', alt: 'Purified Water System' },
    { src: '/img/manufacturing/RM-Store.webp', alt: 'Raw Material Store' },
    { src: '/img/manufacturing/Auto-Cartoning-Machine1.webp', alt: 'Automated Cartoning Machine' }
  ];

  const capabilities = [
    {
      icon: <FaIndustry className="text-[#173C96] text-3xl" />,
      title: "State-of-the-Art Facilities",
      description: "Modern manufacturing units equipped with cutting-edge technology"
    },
    {
      icon: <FaFlask className="text-[#EB006F] text-3xl" />,
      title: "R&D Integration",
      description: "Seamless transition from research to production"
    },
    {
      icon: <FaShieldAlt className="text-[#173C96] text-3xl" />,
      title: "Quality Assurance",
      description: "Stringent quality control at every production stage"
    },
    {
      icon: <FaCogs className="text-[#031B4E] text-3xl" />,
      title: "Automation",
      description: "Advanced automation for precision and efficiency"
    },
    {
      icon: <FaChartLine className="text-[#EB006F] text-3xl" />,
      title: "Process Optimization",
      description: "Continuous improvement for maximum productivity"
    },
    {
      icon: <FaLeaf className="text-[#173C96] text-3xl" />,
      title: "Sustainable Practices",
      description: "Eco-friendly manufacturing processes"
    },
    {
      icon: <FaGlobe className="text-[#031B4E] text-3xl" />,
      title: "Global Standards",
      description: "Compliance with international regulatory requirements"
    },
    {
      icon: <FaUsers className="text-[#EB006F] text-3xl" />,
      title: "Skilled Workforce",
      description: "Highly trained professionals ensuring excellence"
    }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section - Redesigned */}
      <div className="relative h-[600px] bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] bg-[size:50px_50px] opacity-5"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#EB006F]/10 text-[#EB006F] rounded-full text-sm font-medium">
                Hygine Lifesciences Pvt Ltd Manufacturing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Precision <span className="text-[#173C96]">Manufacturing</span> Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Delivering world-class pharmaceutical products through cutting-edge technology and uncompromising quality standards.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#173C96] text-white rounded-lg font-medium hover:bg-[#031B4E] transition-all">
                Explore Capabilities
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all">
                Watch Facility Tour
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="relative h-full w-full">
            <Image 
              src="/img/manufacturing/Vial-Inspection.webp"
              alt="Manufacturing Facility"
              fill
              className="object-cover object-left"
              style={{ maskImage: 'linear-gradient(to left, white 70%, transparent 100%)' }}
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#173C96]">Manufacturing</span> Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A visual journey through our state-of-the-art production facilities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#173C96] to-[#EB006F] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufacturingImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-medium text-lg">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-[#173C96]/10 to-[#031B4E]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Manufacturing <span className="text-[#173C96]">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical manufacturing solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#173C96] to-[#EB006F] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#173C96]/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md"
              >
                <div className="w-16 h-16 bg-[#173C96]/10 rounded-xl flex items-center justify-center mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#031B4E] to-[#173C96] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "100,000+", label: "Square Feet Facility", icon: "🏭" },
              { value: "24/7", label: "Production Capacity", icon: "⏳" },
              { value: "99.5%", label: "Quality Compliance", icon: "✅" },
              { value: "50+", label: "Countries Served", icon: "🌎" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-3 flex items-center justify-center">
                  <span className="mr-2">{stat.icon}</span>
                  {stat.value}
                </div>
                <p className="text-xl text-[#EB006F]/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/img/quality-practices/quality-practices.webp"
                  alt="Manufacturing Process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-[#173C96]">Quality-Centric</span> Process
              </h2>
              <div className="space-y-6">
                {[
                  "Raw Material Testing",
                  "Precision Formulation",
                  "Automated Production",
                  "In-Process Quality Checks",
                  "Final Product Testing",
                  "Packaging & Labeling",
                  "Stability Studies",
                  "Distribution"
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#173C96]/10 p-2 rounded-full mr-4 mt-1">
                      <div className="w-5 h-5 bg-[#173C96] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{step}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;