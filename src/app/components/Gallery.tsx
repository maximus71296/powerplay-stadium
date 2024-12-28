import React from 'react';
import pic1 from '../assets/images/gallery1.jpg';
import pic2 from '../assets/images/gallery2.jpg';
import pic3 from '../assets/images/gallery3.jpg';
import pic4 from '../assets/images/gallery4.jpg';
import pic5 from '../assets/images/gallery5.jpg';
import pic6 from '../assets/images/gallery6.jpg';
import pic7 from '../assets/images/gallery7.jpg';
import pic8 from '../assets/images/gallery8.jpg';

const Gallery = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8">
                    Explore Our <span className="text-green-500">PowerPlay</span> Cricket Stadium Gallery
                </h2>
                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3 mt-6">
                    {/* Image 1 */}
                    <div className="group relative">
                        <img
                            src={pic1.src}
                            alt="Gallery Image 1"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    {/* Image 2 */}
                    <div className="group relative">
                        <img
                            src={pic2.src}
                            alt="Gallery Image 2"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    {/* Image 3 */}
                    <div className="group relative">
                        <img
                            src={pic3.src}
                            alt="Gallery Image 3"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    {/* Image 4 */}
                    <div className="group relative">
                        <img
                            src={pic4.src}
                            alt="Gallery Image 4"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    {/* Image 5 */}
                    <div className="group relative">
                        <img
                            src={pic5.src}
                            alt="Gallery Image 5"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    {/* Image 6 */}
                    <div className="group relative">
                        <img
                            src={pic6.src}
                            alt="Gallery Image 6"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    {/* Image 7 */}
                    <div className="group relative">
                        <img
                            src={pic7.src}
                            alt="Gallery Image 7"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    {/* Image 8 */}
                    <div className="group relative">
                        <img
                            src={pic8.src}
                            alt="Gallery Image 8"
                            className="w-64 h-40 object-cover mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
