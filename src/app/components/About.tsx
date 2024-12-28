'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import aboutImg from '../assets/images/about.jpg'; 

const About = () => {
    useEffect(() => {
        const counters = [
            { id: 'years', endValue: 10 },
            { id: 'turf', endValue: 5 },
            { id: 'players', endValue: 500 },
            { id: 'satisfaction', endValue: 100 }
        ];

        counters.forEach(counter => {
            const element = document.getElementById(counter.id);

            if (element) {
                const startValue = 1; // Changed `let` to `const`
                const duration = 1500; // Animation duration in ms
                const incrementPerFrame = (counter.endValue - startValue) / (duration / 16); // 16ms/frame (~60FPS)
                let currentValue = startValue;

                const updateCounter = () => {
                    currentValue += incrementPerFrame;

                    if (currentValue >= counter.endValue) {
                        currentValue = counter.endValue;
                    }

                    element.textContent = Math.round(currentValue).toString();

                    if (currentValue < counter.endValue) {
                        requestAnimationFrame(updateCounter);
                    }
                };

                requestAnimationFrame(updateCounter);
            }
        });
    }, []);

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Section */}
                    <div className="w-full lg:w-7/12">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                            Our Vision for <span className="text-green-500">Cricket Excellence</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Powerplay Cricket Stadium, we’re redefining cricket in Bikaner with our 360-degree turf and premier high-tech facilities, powered by <span className="text-green-500 font-semibold">AG Khan Cricket Academy</span>. Whether you’re an aspiring cricketer or a seasoned player, experience unmatched training tools, meticulously maintained grounds, and professional-grade amenities. Beyond a venue, we are committed to nurturing talent, fostering camaraderie, and creating lasting memories for cricket enthusiasts.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-5/12 flex justify-center">
                        <Image
                            src={aboutImg}
                            alt="About Us Image"
                            width={400}
                            height={250}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div className="text-center">
                        <h2 id="years" className="text-3xl font-bold text-gray-800">1</h2>
                        <p className="text-sm text-gray-600">Years of Excellence</p>
                    </div>
                    <div className="text-center">
                        <h2 id="turf" className="text-3xl font-bold text-gray-800">1</h2>
                        <p className="text-sm text-gray-600">Premium Turf</p>
                    </div>
                    <div className="text-center">
                        <h2 id="players" className="text-3xl font-bold text-gray-800">1</h2>
                        <p className="text-sm text-gray-600">Players Hosted</p>
                    </div>
                    <div className="text-center">
                        <h2 id="satisfaction" className="text-3xl font-bold text-gray-800">1</h2>
                        <p className="text-sm text-gray-600">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
