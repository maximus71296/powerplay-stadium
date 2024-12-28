import React from 'react';
import Image from 'next/image';
import heroBg from '../assets/images/heroBg.jpg'

const HeroSection = () => {
    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen">
            {/* Background image using Next.js Image component */}
            <Image
                src={heroBg} // Path to the image in the public folder
                alt="Powerplay Cricket Stadium"
                layout="fill" // Makes the image cover the entire div
                objectFit="cover" // Ensures the image covers the div fully without stretching
                objectPosition="center" // Centers the image
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-6">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                        Welcome to <span className='text-green-500'>PowerPlay</span> Cricket Stadium
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl">
Experience world-class facilities and play your favorite game on Bikaner’s first 360-degree turf. Powered by AG KHAN CRICKET ACADEMY, Bikaner’s premier and first high-tech cricket academy, join us for a day of fun, excitement, and expert training!                    </p>
                    <button className="relative bg-white text-green-500 font-semibold px-8 py-3 rounded-md overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-500 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                        <span className="relative z-10 text-green-500 group-hover:text-white">Book Your Game</span>
                    </button>



                </div>
            </div>
        </div>
    );
};

export default HeroSection;
