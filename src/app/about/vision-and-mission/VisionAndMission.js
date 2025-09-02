import { 
  FaGlobe, FaHeartbeat, FaFlask, FaAward, FaRegHandshake, FaChartLine, 
  FaLeaf, FaUsers, FaShieldAlt, FaHandsHelping, FaMicroscope 
} from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary to-tertiary text-white py-20 px-6 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/medical-pattern.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Hygine Lifesciences Pvt Ltd
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Pioneering Ethical Healthcare Innovation Worldwide
          </p>
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="w-16 md:w-24 h-1 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3">
            Our Vision
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Redefining Healthcare Standards <span className="text-primary">Globally</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 md:mb-6"></div>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            To establish ethical business practices that elevate healthcare through innovation and compassion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <FaRegHandshake className="text-3xl sm:text-4xl text-primary" />,
              title: "Ethical Foundation",
              desc: "Frame a Business Model leading to most Ethical practices",
              bg: "bg-gradient-to-br from-primary/5 to-primary/10",
              borderColor: "border-primary"
            },
            {
              icon: <FaAward className="text-3xl sm:text-4xl text-secondary" />,
              title: "Unmatched Quality",
              desc: "Change patient expectations through premium health products",
              bg: "bg-gradient-to-br from-secondary/5 to-secondary/10",
              borderColor: "border-secondary"
            },
            {
              icon: <FaHeartbeat className="text-3xl sm:text-4xl text-primary" />,
              title: "Value Human Life",
              desc: "Add Value to Human Life through our products",
              bg: "bg-gradient-to-br from-primary/5 to-primary/10",
              borderColor: "border-primary"
            },
            {
              icon: <FaFlask className="text-3xl sm:text-4xl text-secondary" />,
              title: "Continuous Innovation",
              desc: "Preserve and Improve Human life through Innovation",
              bg: "bg-gradient-to-br from-secondary/5 to-secondary/10",
              borderColor: "border-secondary"
            },
            {
              icon: <FaShieldAlt className="text-3xl sm:text-4xl text-primary" />,
              title: "Operational Excellence",
              desc: "Ensure product Quality, Safety, Reliability in everything we do",
              bg: "bg-gradient-to-br from-primary/5 to-primary/10",
              borderColor: "border-primary"
            },
            {
              icon: <FaGlobe className="text-3xl sm:text-4xl text-secondary" />,
              title: "Global Presence",
              desc: "Reach every corner of the world with effective medicines",
              bg: "bg-gradient-to-br from-secondary/5 to-secondary/10",
              borderColor: "border-secondary"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`${item.bg} p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-[6px] ${item.borderColor} hover:-translate-y-1`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission 2030 Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Strategic Roadmap for <span className="text-primary">2030</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 md:mb-6"></div>
            <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Our decade-long vision for growth and impact in healthcare innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { value: "50+", label: "Countries Registered", color: "text-primary", icon: <FaGlobe className="text-3xl sm:text-4xl mb-3" />, bg: "bg-primary/5" },
              { value: "250", label: "Products Registered", color: "text-secondary", icon: <FaFlask className="text-3xl sm:text-4xl mb-3" />, bg: "bg-secondary/5" },
              { value: "2X", label: "Production Capacity", color: "text-primary", icon: <FaChartLine className="text-3xl sm:text-4xl mb-3" />, bg: "bg-primary/5" },
              { value: "₹250 Cr", label: "Total Turnover", color: "text-secondary", icon: <FaAward className="text-3xl sm:text-4xl mb-3" />, bg: "bg-secondary/5" },
              { value: "₹50 Cr", label: "Export Turnover", color: "text-primary", icon: <FaLeaf className="text-3xl sm:text-4xl mb-3" />, bg: "bg-primary/5" },
              { value: "Global", label: "Regulated Markets", color: "text-secondary", icon: <FaUsers className="text-3xl sm:text-4xl mb-3" />, bg: "bg-secondary/5" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${item.bg} p-6 sm:p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`${item.color} mb-3`}>{item.icon}</div>
                <p className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 ${item.color}`}>{item.value}</p>
                <p className="text-gray-700 text-sm sm:text-base font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-tertiary text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium mb-3">
            Our Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Advancing <span className="text-secondary">Global Health</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto">
            At Hygine Lifesciences Pvt Ltd, we are dedicated to making quality healthcare 
            accessible worldwide through innovative medicines, education, and community partnerships.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {[
              { icon: <FaHeartbeat className="text-3xl sm:text-4xl text-secondary" />, title: "Patient Wellbeing", desc: "Our primary focus in all endeavors", bg: "bg-primary/20" },
              { icon: <FaFlask className="text-3xl sm:text-4xl text-secondary" />, title: "Research Driven", desc: "Innovating for better outcomes", bg: "bg-primary/20" },
              { icon: <FaHandsHelping className="text-3xl sm:text-4xl text-secondary" />, title: "Global Partnerships", desc: "Collaborating for greater impact", bg: "bg-primary/20" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${item.bg} p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3">
            Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Principles That <span className="text-primary">Guide Us</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 md:mb-6"></div>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            The foundation of every decision we make at Hygine Lifesciences Pvt Ltd
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {[
            {
              icon: <FaHeartbeat className="text-primary text-xl sm:text-2xl" />,
              title: "Patient-Centric Approach",
              desc: "Hygine Lifesciences Pvt Ltd products are designed for maximum efficiency in treating patients, with their well-being as our ultimate benchmark for success. We prioritize patient outcomes in every formulation and delivery system.",
              color: "primary"
            },
            {
              icon: <FaLeaf className="text-secondary text-xl sm:text-2xl" />,
              title: "Sustainable Growth",
              desc: "We combine business growth with ethical responsibility, ensuring our expansion benefits all stakeholders - from patients to partners. Our environmental initiatives reduce waste and promote green chemistry.",
              color: "secondary"
            },
            {
              icon: <FaShieldAlt className="text-primary text-xl sm:text-2xl" />,
              title: "Integrity & Transparency",
              desc: "We maintain the highest ethical standards in all our operations, from research to distribution. Our transparent practices build trust with healthcare providers and patients alike.",
              color: "primary"
            },
            {
              icon: <FaMicroscope className="text-secondary text-xl sm:text-2xl" />,
              title: "Scientific Excellence",
              desc: "Our R&D team combines cutting-edge science with practical healthcare solutions. We invest significantly in research to develop novel formulations that address unmet medical needs.",
              color: "secondary"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-${item.color} hover:-translate-y-1`}
            >
              <div className="flex items-start mb-4">
                <div className={`bg-${item.color}/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
