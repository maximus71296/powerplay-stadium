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
                let startValue = 1;
                const duration = 1000; // 2 seconds
                const steps = counter.endValue - startValue;
                const incrementPerFrame = steps / (duration / 16); // 16ms per frame (~60 FPS)
                let currentValue = startValue;
    
                const updateCounter = () => {
                    currentValue += incrementPerFrame;
    
                    if (currentValue >= counter.endValue) {
                        currentValue = counter.endValue;
                    }
    
                    element.textContent = Math.round(currentValue).toString();
    
                    if (currentValue < counter.endValue) {
                        requestAnimationFrame(updateCounter); // Continue until target is reached
                    }
                };
    
                requestAnimationFrame(updateCounter); // Start the animation
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
                            At Powerplay Cricket Stadium, we are committed to transforming the cricketing landscape by offering an unmatched experience for players of every skill level, from passionate beginners to seasoned professionals. Our mission is to redefine what it means to play, practice, and compete in cricket by creating a world-class environment designed to inspire and elevate the love for the game. We provide top-notch facilities that include meticulously maintained, professional-grade turf wickets, state-of-the-art training tools, and modern amenities that ensure players perform at their absolute best.

                            With a deep focus on nurturing talent, fostering teamwork, and building unforgettable memories, Powerplay Cricket Stadium stands as a beacon for cricket enthusiasts. Beyond just a venue, we aim to be a catalyst for growth, offering a space where dreams are nurtured, skills are honed, and camaraderie thrives. Whether you’re a young cricketer with aspirations to reach the pinnacle of the sport or a team searching for the ultimate ground to showcase your prowess, we promise an experience that goes above and beyond expectations. Powerplay Cricket Stadium is not just a facility—it’s a journey of cricketing excellence that leaves a lasting legacy.
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
