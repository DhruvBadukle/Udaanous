import React from "react";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import heartImage from "../assets/about-img.png"; // Heart-shaped image

const AboutPage = () => {
  return (
    <div className="bg-[#f7f7f7] py-16 px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">

      {/* LEFT SECTION - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[90%] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto">
          <img
            src={heartImage}
            alt="Heart Visual"
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>

      {/* RIGHT SECTION - Text */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        {/* Section Title */}
        <h4 className="text-orange-600 font-semibold flex items-center justify-center lg:justify-start gap-2 text-lg">
          <span role="img" aria-label="heart">❤️</span> About Us
        </h4>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
          Welcome to Udaanous
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          Udaanous strongly believes that every person, regardless of their circumstances, deserves compassion, care, and the opportunity to live a fulfilling life. Our mission is to support the most vulnerable—those who are neglected, abandoned, or forgotten. We focus on helping beggars, elderly individuals without family, pregnant women in distress, children with disabilities, and anyone in desperate need. Every day, we encounter people lacking food, shelter, healthcare, and emotional support—and we are here to help.
        </p>

        {/* Helping Team Badge */}
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-8 h-8"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF96_arIiGH4CDaw6Jbjc6MEShEuGR1tExig&s"
              alt="Helping Icon"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div>
            <p className="text-orange-600 font-semibold">Start Helping Team</p>
            <p className="text-sm text-gray-500">There are many variations of solutions</p>
          </div>
        </div>

        {/* CTA & Contact */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-6">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-md w-full sm:w-auto">
            Explore More
          </button>

          <div className="flex items-center gap-4">
            <div className="p-3 border border-orange-600 rounded-full">
              <FaPhone className="text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call Any Time</p>
              <p className="font-bold text-gray-800">+91-7898012795</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animated Hearts */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 right-6 lg:right-10 opacity-50"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="heart"
          className="w-10 h-10"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, delay: 1 }}
        className="absolute bottom-24 right-12 lg:right-20 opacity-50"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="heart"
          className="w-8 h-8"
        />
      </motion.div>
    </div>
  );
};

export default AboutPage;
