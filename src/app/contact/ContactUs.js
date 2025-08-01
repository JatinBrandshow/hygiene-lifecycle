"use client";
import Image from "next/image";
import deskImage from "../../../public/img/contact.webp";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      title: "CORPORATE OFFICE",
      location: "Chandigarh",
      address: "11, Industrial Area, Katha Bhatoli khalan, Baddi (H.P.), India",
      phone: "+91 99103 09423",
      icon: <FaBuilding />,
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      email: "info@hyginelifesciences.com"
    },
    {
      title: "MARKETING OFFICE",
      location: "Chandigarh",
      address: "11, Industrial Area, Katha Bhatoli khalan, Baddi (H.P.), India",
      phone: "+91 99103 09423",
      icon: <FaMapMarkerAlt />,
      hours: "Mon-Sat: 9:30 AM - 7:00 PM",
      email: "info@hyginelifesciences.com"
    },
    {
      title: "MANUFACTURING PLANT",
      location: "Baddi",
      address: "11, Industrial Area, Katha Bhatoli khalan, Baddi (H.P.), India",
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
      <div className="relative h-[500px] overflow-hidden bg-gradient-to-r from-tertiary to-primary">
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
            className="w-32 h-1.5 bg-secondary mb-8 mx-auto rounded-full"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed"
          >
            Reach out to our pharmaceutical experts across India for world-class solutions
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Image and General Info Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square border-2 border-primary/20">
              <Image
                src={deskImage}
                alt="Hygine Lifecycle Office"
                className="object-cover w-full h-full"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-primary/30">
                <p className="font-medium text-primary">Our Corporate Headquarters</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">Global Pharmaceutical Network</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-1.5 bg-secondary mb-6 rounded-full"
            ></motion.div>
            <p className="text-tertiary text-lg">
              At Hygine Lifecycle, we're committed to excellence in pharmaceutical solutions across India and globally.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/20">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-tertiary">General Inquiries</h3>
                  <a href="mailto:info@hyginelifecycle.com" className="text-primary hover:text-secondary font-medium">
                    info@hyginelifecycle.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/20">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-tertiary">Sales Department</h3>
                  <a href="mailto:sales@hyginelifecycle.com" className="text-primary hover:text-secondary font-medium">
                    sales@hyginelifecycle.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/20">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-tertiary">Export Inquiries</h3>
                  <a href="mailto:export@hyginelifecycle.com" className="text-primary hover:text-secondary font-medium">
                    export@hyginelifecycle.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/20"></div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="bg-white p-3 rounded-full shadow-md border border-primary/20">
              <FaGlobe className="text-primary text-2xl" />
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
              className="group relative overflow-hidden rounded-xl shadow-lg bg-primary border border-tertiary hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-tertiary">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-secondary text-sm">{item.location}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-tertiary text-white rounded-full mt-1">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <p className="text-white/90 text-sm">{item.address}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-tertiary text-white rounded-full">
                    <FaPhone className="text-xs" />
                  </div>
                  <div>
                    <a href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                      className="text-white hover:text-secondary text-sm font-medium">
                      {item.phone}
                    </a>
                    {item.phone2 && (
                      <a href={`tel:${item.phone2.replace(/[^0-9]/g, '')}`}
                        className="block text-white hover:text-secondary text-sm font-medium">
                        {item.phone2}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-tertiary text-white rounded-full">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <a href={`mailto:${item.email}`}
                    className="text-white hover:text-secondary text-sm font-medium break-all">
                    {item.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-tertiary text-white rounded-full">
                    <FaClock className="text-xs" />
                  </div>
                  <p className="text-secondary text-sm">{item.hours}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5">
                <motion.a
                  href={`mailto:${item.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block text-center py-2.5 px-4 rounded-lg bg-white text-primary font-medium text-sm shadow-sm hover:shadow-md transition-all"
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