import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import Poor from "../assets/poor.jpg";


const Landing = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 bg-[url('/Img/banner-bg-shape.svg')] bg-cover bg-center bg-no-repeat bg-blend-multiply text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 overflow-hidden">

      {/* Left Content */}
      <div className="max-w-2xl z-10 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <FaHeart className="text-red-500 text-lg" />
          <h6 className="text-lg text-orange-500 font-semibold uppercase tracking-wide">
            Change The World Together
          </h6>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          For The People & Cause You Care About
        </h1>

        <p className="text-gray-300 text-base leading-relaxed mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. Help us bring
          meaningful change to the lives that need it most.
        </p>

        <div>
          <a
            href="/explore"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-6 py-3 text-white font-semibold transition-all duration-300 border-2 border-orange-500 hover:bg-white hover:text-orange-500 group"
          >
            <span className="flex items-center gap-2 transition-transform duration-300 transform group-hover:-translate-x-2">
              <FaArrowRight className="text-sm" />
              <span>Make Donation</span>
            </span>
          </a>
        </div>
      </div>

      {/* Right Half Circle Image */}
      <div className="hidden lg:block absolute right-[-230px] top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full overflow-hidden shadow-2xl">
        <img
          src={Poor}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image (below content) */}
      <div className="mt-10 lg:hidden w-full max-w-md mx-auto rounded-full overflow-hidden shadow-lg">
        <img
          src={Poor}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Landing;
