import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import logo1 from "../assets/logo-1.png";
import Child from "../assets/Child.png";
import Water from "../assets/water.png";


const ContactPage = () => {
    return (
        <div className="bg-[#1E252f] text-white">
            {/* Top Highlight Strip */}
            {/* <div className="bg-[#f0541d] flex flex-col md:flex-row justify-around items-center text-white py-6 gap-6">
        <div className="flex items-center gap-3">
          <div className="bg-white text-[#f0541d] p-3 rounded-full">
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">Address</p>
            <p className="font-bold text-lg">4648 Rocky Road Philadelphia PA, 1920</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white text-[#f0541d] p-3 rounded-full">
            <FaEnvelope size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">Send Email</p>
            <p className="font-bold text-lg">info@example.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white text-[#f0541d] p-3 rounded-full">
            <FaPhoneAlt size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">Call Emergency</p>
            <p className="font-bold text-lg">+88 0123 654 99</p>
          </div>
        </div>
      </div> */}

            {/* Footer Main Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <img src={logo1} alt="Logo" className="w-8 h-8 object-contain" />
                        Udaanous
                    </h2>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Together we rise, lifting hearts and hopes.
                        Your kindness today builds a brighter tomorrow.
                    </p>
                    <div className="flex gap-3 mt-6">
                        <a href="#" className="bg-[#1e2633] hover:bg-[#f0541d] p-2 rounded text-white">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-[#1e2633] hover:bg-[#f0541d] p-2 rounded text-white">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-[#1e2633] hover:bg-[#f0541d] p-2 rounded text-white">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="bg-[#1e2633] hover:bg-[#f0541d] p-2 rounded text-white">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b-2 border-[#f0541d] w-fit">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <a href="/about" className="hover:text-white transition-all duration-200">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-white transition-all duration-200">
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="/blogs" className="hover:text-white transition-all duration-200">
                                Our Blogs
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-white transition-all duration-200">
                                FAQ'S
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition-all duration-200">
                                Contact Us
                            </a>
                        </li>
                    </ul>

                </div>

                {/* Recent Posts */}
                <div>
                    <h3 className="text-xl font-bold mb-6 border-b-2 border-[#f0541d] w-fit">Recent Posts</h3>

                    {/* Post 1 */}
                    <div className="flex items-start gap-4 mb-6">
                        <img src={Child} alt="Post" className="w-20 h-20 object-cover rounded shadow-md" />
                        <div className="text-sm text-gray-300">
                            <p className="text-xs mb-1 text-gray-400">📅 July 01, 2025</p>
                            <p className="font-medium text-white">Bringing smiles to underprivileged children through care and support.</p>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="flex items-start gap-4">
                        <img src={Water} alt="Post" className="w-20 h-20 object-cover rounded shadow-md" />
                        <div className="text-sm text-gray-300">
                            <p className="text-xs mb-1 text-gray-400">📅 June 30, 2025</p>
                            <p className="font-medium text-white">Clean water changes lives — drop by drop.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b-2 border-[#f0541d] w-fit">Contact Us</h3>
                    <div className="text-sm text-gray-300 space-y-2">
                        <p>📧 info@udaanous.com</p>
                        <p>📞 +91-7898012795</p>
                    </div>
                    {/* <div className="mt-4 flex items-center gap-2 bg-white p-2 rounded">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="outline-none flex-grow text-black px-2"
                        />
                        <button className="bg-[#f0541d] text-white p-2 rounded">
                            <MdArrowForward />
                        </button>
                    </div> */}
                    <label className="flex items-center mt-4 text-xs text-gray-400 gap-2">
                        <input type="checkbox" className="accent-[#f0541d]" />
                        I agree with the <a href="#" className="underline text-white">Privacy Policy</a>
                    </label>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-[#f0541d] text-white text-sm px-4 py-4">
                <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <p>© 2025 Udaanous. All rights reserved</p>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
