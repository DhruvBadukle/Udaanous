import React, { useState, useEffect } from 'react';
import logo1 from "../assets/logo-1.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = ["Home", "About", "Media", "Blog", "Contact"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
            {/* Top Contact Bar */}
            <nav className="bg-white border-b border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto px-4 py-2">
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
                        <a href="tel:7898012795" className="text-black">📞 +91-7898012795</a>
                        <a href="mailto:info@udaanous.com" className="text-black">📧 info@udaanous.com</a>
                    </div>
                </div>
            </nav>

            {/* Sticky Main Navbar */}
            <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
                <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <a href="https://udaanous.com" className="flex items-center space-x-3">
                        <img src={logo1} className="h-12" alt="Logo" />
                        <div className="flex flex-col leading-tight">
                            <span className="text-2xl font-semibold text-amber-500">UDAANOUS</span>
                            <span className="text-sm text-pink-700">SOCIAL FOUNDATION</span>
                        </div>
                    </a>

                    {/* Hamburger Icon (Mobile) */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-16">
                        <ul className="flex items-center space-x-30 font-medium text-sm">
                            {navItems.map((item) => (
                                <li key={item} className="group">
                                    <a href="#" className="text-base text-gray-700 transition hover:text-orange-600">
                                        {item}
                                    </a>
                                    <hr className="h-[2px] bg-pink-600 border-none hidden group-hover:block" />
                                </li>
                            ))}
                        </ul>
                        <a href="https://example.com/donate" rel="noopener noreferrer">
                            <button className="border-2 border-orange-600 bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition hover:bg-transparent hover:text-orange-600">
                                Join Us
                            </button>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white px-4 py-6 space-y-4 text-center">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="block text-base font-medium text-gray-900 transition duration-300 hover:text-white hover:bg-orange-600 px-4 py-2 rounded-md hover:scale-105"
                            >
                                {item}
                            </a>
                        ))}
                        <a href="https://example.com/donate" rel="noopener noreferrer">
                            <button className="border-2 border-orange-600 bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition hover:bg-transparent hover:text-orange-600">
                                Donate
                            </button>
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
