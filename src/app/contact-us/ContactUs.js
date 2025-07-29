"use client";
import Image from "next/image";
import deskImage from "../../../public/img/contact.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
 const contactInfo = [
    {
      title: "CORPORATE OFFICE",
      location: "Chandigarh",
      address: "Sco 1136-37, Sector 22-B, Chandigarh, India",
      phone: "+91 172 271 2039",
      phone2: "+91 92 1615 5412",
      icon: <FaBuilding />,
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      email: "corporate@shamshree.com"
    },
    {
      title: "MARKETING OFFICE",
      location: "Gurugram",
      address: "Plot No. 88, Sector 44, Gurugram, India",
      phone: "+91 99 1520 1441",
      icon: <FaMapMarkerAlt />,
      hours: "Mon-Sat: 9:30 AM - 7:00 PM",
      email: "marketing@shamshree.com"
    },
    {
      title: "MANUFACTURING PLANT",
      location: "Baddi",
      address: "11, Industrial Area, Katha Bhatolikhalan, Baddi (H.P.), India",
      phone: "+91 99152 52244",
      icon: <FaMapMarkerAlt />,
      hours: "Mon-Sat: 8:00 AM - 5:00 PM",
      email: "operations@shamshree.com"
    }
];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-800">
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
  
  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
    >
      Connect With Us
    </motion.h1>
    
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 mx-auto rounded-full"
    ></motion.div>
    
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed"
    >
      Reach out to our pharmaceutical experts across India for world-class solutions
    </motion.p>
  </div>
</div>

     {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Image and General Info Section - Moved to top */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square border-2 border-blue-100">
              <Image
                src={deskImage}
                alt="Shamshree Pharmaceuticals Office"
                className="object-cover w-full h-full"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-blue-200">
                <p className="font-medium text-blue-900">Our Corporate Headquarters</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900">Global Pharmaceutical Network</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"
            ></motion.div>
            <p className="text-blue-800 text-lg">
              At Shamshree Pharmaceuticals, we're committed to excellence in pharmaceutical solutions across India and globally.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">General Inquiries</h3>
                  <a href="mailto:info@shamshree.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    info@shamshree.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Sales Department</h3>
                  <a href="mailto:sales@shamshree.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    sales@shamshree.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Export Inquiries</h3>
                  <a href="mailto:export@shamshree.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    export@shamshree.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-200"></div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="bg-white p-3 rounded-full shadow-md border border-blue-200">
              <FaGlobe className="text-blue-600 text-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Contact Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-blue-900 border border-blue-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-blue-600">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-700 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-blue-200 text-sm">{item.location}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-700 text-white rounded-full mt-1">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <p className="text-blue-100 text-sm">{item.address}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-700 text-white rounded-full">
                    <FaPhone className="text-xs" />
                  </div>
                  <div>
                    <a href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                      className="text-white hover:text-blue-200 text-sm font-medium">
                      {item.phone}
                    </a>
                    {item.phone2 && (
                      <a href={`tel:${item.phone2.replace(/[^0-9]/g, '')}`}
                        className="block text-white hover:text-blue-200 text-sm font-medium">
                        {item.phone2}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-700 text-white rounded-full">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <a href={`mailto:${item.email}`}
                    className="text-white hover:text-blue-200 text-sm font-medium break-all">
                    {item.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-700 text-white rounded-full">
                    <FaClock className="text-xs" />
                  </div>
                  <p className="text-blue-200 text-sm">{item.hours}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5">
                <motion.a
                  href={`mailto:${item.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block text-center py-2.5 px-4 rounded-lg bg-white text-blue-800 font-medium text-sm shadow-sm hover:shadow-md transition-all"
                >
                  Contact Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
    </div>
  );
}