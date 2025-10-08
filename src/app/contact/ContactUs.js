"use client";
import Image from "next/image";
import deskImage from "../../../public/img/contact.webp";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      title: "CORPORATE OFFICE",
      location: "Haryana",
      address: "Plot No - 736-C ,sector 37 , pace city 2, Gurugram, Haryana 122001",
      phone: "+91 99103 09423",
      icon: <FaBuilding />,
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      email: "info@hyginelifesciences.com"
    },
    {
      title: "MARKETING OFFICE",
      location: "Haryana",
      address: "Plot No - 736-C ,sector 37 , pace city 2, Gurugram, Haryana 122001",
      phone: "+91 99103 09423",
      icon: <FaMapMarkerAlt />,
      hours: "Mon-Sat: 9:30 AM - 7:00 PM",
      email: "info@hyginelifesciences.com"
    },
    {
      title: "MANUFACTURING PLANT",
      location: "Baddi",
      address: "Khasra no. 2011/471, Bhatolikalan, Baddi, Solan (H.P), 173205, India",
      phone: "+91 99103 09423",
      icon: <FaMapMarkerAlt />,
      hours: "Mon-Sat: 8:00 AM - 5:00 PM",
      email: "info@hyginelifesciences.com"
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
      {/* Add CSS variables at the root level */}
      <style jsx global>{`
        :root {
          --primary: #173C96;
          --secondary: #EB006F;
          --tertiary: #031B4E;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-tertiary to-primary">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
          >
            Connect With Us
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 md:w-32 h-1.5 bg-secondary mb-6 md:mb-8 mx-auto rounded-full"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
          >
            Reach out to our pharmaceutical experts across India for world-class solutions
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Image and General Info Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl aspect-square border-2 border-primary/20">
              <Image
                src={deskImage}
                alt="hygine-lifesciences-office"
                className="object-cover w-full h-full"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-sm border border-primary/30">
                <p className="font-medium text-primary text-sm md:text-base">Our Corporate Headquarters</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Global Pharmaceutical Network</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-12 md:w-16 h-1.5 bg-secondary mb-4 md:mb-6 rounded-full"
            ></motion.div>
            <p className="text-tertiary text-base md:text-lg">
              At Hygine Lifesciences Pvt Ltd, we're committed to excellence in pharmaceutical solutions across India and globally.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/20">
                <div className="p-2 md:p-3 bg-primary/10 rounded-full text-primary">
                  <FaEnvelope className="text-sm md:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold text-tertiary text-sm md:text-base">General Inquiries</h3>
                  <a href="mailto:hyginelifesciences@gmail.com" className="text-primary hover:text-secondary font-medium text-sm md:text-base">
                    hyginelifesciences@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/20">
                <div className="p-2 md:p-3 bg-primary/10 rounded-full text-primary">
                  <FaEnvelope className="text-sm md:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold text-tertiary text-sm md:text-base">Sales Department</h3>
                  <a href="mailto:hyginelifesciences@gmail.com" className="text-primary hover:text-secondary font-medium text-sm md:text-base">
                    info@hyginelifesciences.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/20">
                <div className="p-2 md:p-3 bg-primary/10 rounded-full text-primary">
                  <FaEnvelope className="text-sm md:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold text-tertiary text-sm md:text-base">Support</h3>
                  <a href="mailto:customercare@hyginelifesciences.com" className="text-primary hover:text-secondary font-medium text-sm md:text-base">
                    customercare@hyginelifesciences.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Divider */}
        <div className="relative py-8 md:py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/20"></div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="bg-white p-2 md:p-3 rounded-full shadow-md border border-primary/20">
              <FaGlobe className="text-primary text-xl md:text-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Contact Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg bg-primary border border-tertiary hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-4 md:p-5 border-b border-tertiary">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="p-1.5 md:p-2 bg-secondary rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-secondary text-xs md:text-sm">{item.location}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className="p-1.5 md:p-2 bg-tertiary text-white rounded-full mt-0.5">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <p className="text-white/90 text-xs md:text-sm">{item.address}</p>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="p-1.5 md:p-2 bg-tertiary text-white rounded-full">
                    <FaPhone className="text-xs" />
                  </div>
                  <div>
                    <a href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                      className="text-white hover:text-secondary text-xs md:text-sm font-medium">
                      {item.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="p-1.5 md:p-2 bg-tertiary text-white rounded-full">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <a href={`mailto:${item.email}`}
                    className="text-white hover:text-secondary text-xs md:text-sm font-medium break-all">
                    {item.email}
                  </a>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="p-1.5 md:p-2 bg-tertiary text-white rounded-full">
                    <FaClock className="text-xs" />
                  </div>
                  <p className="text-secondary text-xs md:text-sm">{item.hours}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 md:px-5 pb-4 md:pb-5">
                <motion.a
                  href={`mailto:${item.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block text-center py-2 px-3 md:py-2.5 md:px-4 rounded-lg bg-white text-primary font-medium text-xs md:text-sm shadow-sm hover:shadow-md transition-all"
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