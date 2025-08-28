// components/QualityPolicy.js
import { FaMicroscope, FaCheckDouble, FaChartLine, FaAward, FaRegCheckCircle } from 'react-icons/fa';

const QualityPolicy = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero with Diagonal Split */}
      <div className="relative h-96 bg-[var(--primary)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--tertiary)] opacity-90" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }}></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quality is Our Compass</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Where science meets precision to deliver uncompromised healthcare solutions
          </p>
          <div className="mt-8 w-24 h-1 bg-[var(--secondary)]"></div>
        </div>
      </div>

      {/* Quality Mantra - Typographic Focus */}
      <section className="max-w-4xl mx-auto px-6 py-20 -mt-20 relative z-20">
        <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 text-center border border-gray-100">
          <FaRegCheckCircle className="text-6xl text-[var(--primary)] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            <span className="text-[var(--primary)]">Hygine Lifesciences Pvt Ltd</span> Quality Mantra
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
            <p className="text-xl leading-relaxed">
              "We are <span className="font-bold text-[var(--primary)]">obsessed with quality</span>. Our experience proves that when we prioritize exceptional medicines for patients, success follows organically. We choose to be <span className="font-bold">the best</span>, not necessarily the biggest."
            </p>
          </div>
        </div>
      </section>

    {/* Pillars of Quality - Vertical Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            The <span className="text-[var(--primary)]">Four Pillars</span> of Our Quality Policy
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Pillar 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-1">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                      <FaMicroscope className="text-[var(--primary)] text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">High Quality Products</h3>
                  </div>
                  <p className="text-gray-600">
                    We take considerable pride in developing and consistently delivering high quality, safe and effective pharmaceutical products to meet customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-2">
                <div className="w-24 h-24 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-3xl font-bold shadow-md">
                  01
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 flex justify-center order-2 md:order-1">
                <div className="w-24 h-24 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-3xl font-bold shadow-md">
                  02
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-[var(--secondary)]/10 p-3 rounded-full mr-4">
                      <FaCheckDouble className="text-[var(--secondary)] text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Quality Management Systems</h3>
                  </div>
                  <p className="text-gray-600">
                    We stringently adhere to implementing Quality Management Systems and are committed to making continual improvements in all our processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-1">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-[var(--tertiary)]/10 p-3 rounded-full mr-4">
                      <FaChartLine className="text-[var(--tertiary)] text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Continuous Improvement</h3>
                  </div>
                  <p className="text-gray-600">
                    We are dedicated to enhancing quality and customer satisfaction through continuous improvement in our Quality Management System.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-2">
                <div className="w-24 h-24 rounded-full bg-[var(--tertiary)] text-white flex items-center justify-center text-3xl font-bold shadow-md">
                  03
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center order-2 md:order-1">
                <div className="w-24 h-24 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-3xl font-bold shadow-md">
                  04
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-[var(--secondary)]/10 p-3 rounded-full mr-4">
                      <FaAward className="text-[var(--secondary)] text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Health, Safety & Environment</h3>
                  </div>
                  <p className="text-gray-600">
                    We treat Health, Safety & Environment protection as an integral part of our Quality Strategy, ensuring responsible manufacturing practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics - Infographic Style */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our <span className="text-[var(--secondary)]">Quality by Numbers</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Quality Compliance", icon: "✓" },
              { value: "0", label: "Product Recalls", icon: "🏆" },
              { value: "99.8%", label: "Customer Satisfaction", icon: "⭐" },
              { value: "24/7", label: "Quality Monitoring", icon: "🔍" }
            ].map((metric, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                <span className="text-3xl mb-3 block">{metric.icon}</span>
                <p className="text-4xl font-bold text-white mb-2">{metric.value}</p>
                <p className="text-blue-100 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The <span className="text-[var(--primary)]">Hygine Lifesciences Pvt Ltd Promise</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
          </div>
          
          <div className="bg-[var(--primary)]/5 rounded-2xl p-8 md:p-12 border border-[var(--primary)]/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="w-40 h-40 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <FaAward className="text-5xl text-white" />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Excellence</h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700">
                    At Hygine Lifesciences, quality is the foundation of everything we do. We are committed to developing and delivering high quality, safe, and effective pharmaceutical products that meet the highest standards of excellence.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Our dedicated team implements rigorous Quality Management Systems and continuously improves our processes to ensure we not only meet but exceed customer expectations. We integrate Health, Safety, and Environmental protection into every aspect of our operations, because we believe that quality healthcare is a right, not a privilege.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;