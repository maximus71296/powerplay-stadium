import React from 'react';
import Image from 'next/image';  // Import Image from next/image
import training from '../assets/images/Training.png';  // Import your image

const Training = () => {
  return (
    <div className="w-full">
      <Image 
        src={training} 
        alt="Training" 
        layout="responsive"  // Ensures the image is responsive
        width={1920}  // Set a width for the image
        height={1080}  // Set a height for the image
        className="object-cover"  // Optional: To maintain aspect ratio while covering the area
      />
    </div>
  );
}

export default Training;
