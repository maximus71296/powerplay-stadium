import React from 'react';
import coach from '../assets/images/coach.png';
import arena from '../assets/images/arena.jpg';

const CoachArena = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 text-center mb-12">
          Meet Our <span className="text-green-500">Coach</span> & Explore the <span className="text-green-500">Arena</span>
        </h2>

        {/* Coach Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={coach.src} 
              alt="Coach"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Coach Saif Ali</h3>
            <p className="text-gray-600 leading-relaxed">
            <span className='font-bold'>Coach Saif Ali</span> brings over 7 years of experience in cricket coaching, having mentored aspiring cricketers to achieve their full potential. He is the Director of <span className="font-bold">AG Khan Cricket Academy</span> and a national cricket player, with a passion for developing players at all levels. As a <span className="font-bold">NIS Certified Coach</span> and <span className="font-bold">MSDCA Level 1 Cricket Coach</span>, Rizwan combines a wealth of knowledge and hands-on experience to provide exceptional training at <span className="font-bold text-green-500">PowerPlay Cricket Stadium</span>. Under his expert guidance, players can elevate their skills and strategies, reaching new heights in their cricketing journey.            </p>
          </div>
        </div>

        {/* Arena Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Explore the Arena</h3>
          <div className="relative">
            {/* Replace with a 360-degree interactive view embed or image */}
            <img
              src={arena.src} 
              alt="Arena"
              className="rounded-lg shadow-lg w-full"
            />
            
          </div>
          <p className="text-gray-600 leading-relaxed text-center mt-6">
            Our world-class arena is equipped with premium facilities, providing a perfect environment for players and spectators alike. <span className="font-bold text-green-500">AG Khan Cricket Academy</span>, Bikaner's first <span className="font-bold text-green-500">360-Degree Turf</span>, offers a cutting-edge experience with a 360° view and high-tech training setups. As Bikaner's first high-tech cricket academy, it combines modern technology with a vibrant atmosphere, making the <span className="font-bold text-green-500">PowerPlay Cricket Stadium</span> the ultimate destination for cricket enthusiasts.          </p>
        </div>
      </div>
    </div>
  );
};

export default CoachArena;
