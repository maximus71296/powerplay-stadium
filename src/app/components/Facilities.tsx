import Image from 'next/image';
import turf from '../assets/images/turf.jpg';
import precision from '../assets/images/precision.jpg';
import dugout from '../assets/images/dugout.jpeg';
import canteen from '../assets/images/canteen.jpeg';

const Facilities = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Explore Our <span className='text-green-500'>Premium</span> Facilities
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Feature 1 */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <Image
              src={turf}
              alt="Artificial Turf Wickets"
              width={300}
              height={200}
              className="object-cover mb-6 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              5 Artificial TURF <span className='text-green-500'>(ASTRO)</span> Wickets
            </h3>
            <p className="text-gray-600">
              Play on world-class artificial turf wickets, offering a superior surface for training and matches. Our ASTRO wickets are designed for top-notch performance and durability, ensuring you always have the best playing experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <Image
              src={precision}
              alt="Advanced Tools"
              width={300}
              height={200}
              className="object-cover mb-6 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Advanced Tools for <span className='text-green-500'>PRECISION</span> Training
            </h3>
            <p className="text-gray-600">
              Elevate your skills with our state-of-the-art training tools. From the bowling machine to the speed radar gun and video analysis, we provide the latest technology to help you improve your performance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <Image
              src={dugout}
              alt="Dedicated Dugout Area"
              width={300}
              height={200}
              className="object-cover mb-6 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Relax in Our Dedicated <span className="text-green-500">DUGOUT</span>
            </h3>
            <p className="text-gray-600">
              Our dugout area is designed for comfort and convenience, offering players a space to rest, hydrate, and prepare for their next session. Equipped with essential amenities, it’s the perfect spot for downtime between matches.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <Image
              src={canteen}
              alt="Canteen Facilities"
              width={300}
              height={200}
              className="object-cover mb-6 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Fuel Up in Our <span className="text-green-500">CANTEEN</span>
            </h3>
            <p className="text-gray-600">
              After an intense game, head over to our canteen for a variety of tasty snacks and meals. We also provide RO filtered drinking water to keep you refreshed and hydrated throughout your visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
