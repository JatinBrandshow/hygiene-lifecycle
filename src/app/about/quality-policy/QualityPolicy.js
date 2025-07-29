// components/QualityPolicy.js
import { FaMicroscope, FaCheckDouble, FaChartLine, FaAward, FaRegCheckCircle } from 'react-icons/fa';

const QualityPolicy = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero with Diagonal Split */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-90" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }}></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quality is Our Compass</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Where science meets precision to deliver uncompromised healthcare solutions
          </p>
          <div className="mt-8 w-24 h-1 bg-cyan-400"></div>
        </div>
      </div>

      {/* Quality Mantra - Typographic Focus */}
      <section className="max-w-4xl mx-auto px-6 py-20 -mt-20 relative z-20">
        <div className="bg-white shadow-2xl rounded-lg p-8 md:p-12 text-center">
          <FaRegCheckCircle className="text-6xl text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">Shamshree's</span> Quality Mantra
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
            <p className="text-xl leading-relaxed">
              "We are <span className="font-bold text-blue-700">obsessed with quality</span>. Our experience proves that when we prioritize exceptional medicines for patients, success follows organically. We choose to be <span className="font-bold">the best</span>, not necessarily the biggest."
            </p>
          </div>
        </div>
      </section>

      {/* Pillars of Quality - Vertical Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            The <span className="text-blue-600">Four Pillars</span> of Our Quality Policy
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Pillar 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-1">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaMicroscope className="text-blue-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Scientific Rigor</h3>
                  </div>
                  <p className="text-gray-600">
                    Implementation of stringent cGMP, cGLP standards with ERP systems for traceability and continuous process improvements.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-2">
                <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  01
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 flex justify-center order-2 md:order-1">
                <div className="w-24 h-24 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  02
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <FaCheckDouble className="text-green-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Uncompromising Standards</h3>
                  </div>
                  <p className="text-gray-600">
                    Every product undergoes 200+ quality checks from raw material to finished goods, exceeding WHO-GMP requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-1">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <FaChartLine className="text-purple-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Continuous Evolution</h3>
                  </div>
                  <p className="text-gray-600">
                    Our quality systems evolve through 50+ annual process optimization initiatives and employee training programs.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-2">
                <div className="w-24 h-24 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  03
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center order-2 md:order-1">
                <div className="w-24 h-24 rounded-full bg-amber-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  04
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <FaAward className="text-amber-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Patient-Centric Excellence</h3>
                  </div>
                  <p className="text-gray-600">
                    We measure our success by patient outcomes, not just compliance metrics. Quality that you can trust in every dose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics - Infographic Style */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our <span className="text-cyan-300">Quality by Numbers</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "99.97%", label: "Quality Compliance Rate", icon: "✓" },
              { value: "200+", label: "Quality Checks per Product", icon: "🔍" },
              { value: "0", label: "Critical Regulatory Findings", icon: "🏆" },
              { value: "50+", label: "Annual Process Improvements", icon: "🔄" }
            ].map((metric, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl text-center backdrop-blur-sm border border-white/20">
                <span className="text-4xl mb-4 block">{metric.icon}</span>
                <p className="text-4xl font-bold text-cyan-300 mb-3">{metric.value}</p>
                <p className="text-blue-100">{metric.label}</p>
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
              The <span className="text-blue-600">Shamshree Promise</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 shadow-inner border border-blue-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <FaAward className="text-6xl text-white" />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Quality Matters to Us</h3>
                <div className="prose prose-blue max-w-none">
                  <p className="text-gray-700">
                    In pharmaceuticals, quality isn't just a metric—it's a moral imperative. Each product we create carries the weight of someone's health, someone's trust. That's why we've built a culture where quality is everyone's responsibility, from the lab to logistics.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Our manufacturing facilities implement Six Sigma methodologies, real-time monitoring systems, and AI-driven quality prediction models to stay ahead of standards. Because when it comes to health, good enough never is.
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