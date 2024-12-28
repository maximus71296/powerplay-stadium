import React from 'react';
import Image from 'next/image';
import heroBg from '../assets/images/heroBg.jpg';

const Footer = () => {
    return (
        <div id="footer" className="relative py-16 text-white">
            {/* Background image with dark tint */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Powerplay Cricket Stadium Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                {/* Dark overlay for tint */}
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Adjust opacity for darker tint */}
            </div>

            {/* Footer content */}
            <div className="relative z-10 max-w-screen-lg mx-auto text-center">
                <p className="text-3xl font-semibold"><span className="text-green-500">Coach</span> Saif Ali</p>
                <p className='mb-6'>(Director)</p>
                <p className="text-xl mb-6">AG Khan Cricket Academy at Powerplay Cricket Stadium</p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-8 sm:space-y-0 mb-8">
                    <div>
                        <a href="tel:+918952931004" className="text-lg font-medium block sm:hidden">
                            +91-895-293-1004
                        </a>
                        <p className="text-lg font-medium hidden sm:block">+91-895-293-1004</p>
                    </div>
                    <div>
                        <a href="tel:+918385832283" className="text-lg font-medium block sm:hidden">
                            +91-838-583-2283
                        </a>
                        <p className="text-lg font-medium hidden sm:block">+91-838-583-2283</p>
                    </div>
                    <div>
                        <a href="tel:+919950030318" className="text-lg font-medium block sm:hidden">
                            +91-995-003-0318
                        </a>
                        <p className="text-lg font-medium hidden sm:block">+91-995-003-0318</p>
                    </div>
                </div>


                <p className="text-md mb-6 font-light">Strategic Partner: LocalKonnect, Bikaner</p>

                <p className="text-sm mb-6">Address: Near Manv Bharti School, Gharsisar, Rani Bazar Industrial Area, Bikaner, Rajasthan</p>

                <div className="border-t border-white pt-6">
                    <p className="text-sm">© {new Date().getFullYear()} Powerplay Cricket Stadium. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
