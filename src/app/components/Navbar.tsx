'use client'; // Mark this as a client component

import React, { useState } from 'react';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-green-500 text-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <div className="text-xl font-bold">PowerPlay Cricket Stadium</div>

                    {/* Desktop Links */}
                    <ul className="hidden lg:flex space-x-6">
                        {['Home', 'About Us', 'Facilities', 'Training', 'Gallery', 'Coach & Arena'].map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                                    className="relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-white before:rounded-full before:bottom-[-10px] before:left-1/2 before:transform before:-translate-x-1/2 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Button */}
                    <div className="hidden lg:block">
                        <button className="relative bg-white border text-green-500 font-semibold px-4 py-2 rounded-md overflow-hidden group">
                            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                            <span className="relative z-10 text-green-500 group-hover:text-white">Book Now</span>
                        </button>

                    </div>

                    {/* Mobile & Tablet Hamburger Icon */}
                    <button
                        className="lg:hidden text-white focus:outline-none"
                        onClick={toggleDrawer}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white text-green-500 transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex flex-col p-6 space-y-6">
                    {/* Close Button */}
                    <button
                        className="self-end text-green-500 focus:outline-none"
                        onClick={toggleDrawer}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Drawer Links */}
                    <ul className="space-y-4">
                        {['Home', 'About Us', 'Facilities', 'Gallery', 'Events', 'Contact Us'].map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                                    className="hover:text-gray-300"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Book Now Button */}
                    <button className="bg-green-500 lg:bg-white text-white lg:text-green-500 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 w-full">
                        Book Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
