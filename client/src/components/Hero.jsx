import React from 'react';
import { Link } from 'react-router-dom';

const handleScroll = () => {
  // Scroll smoothly to the section with id 'discover-collection'
  document.getElementById('Products').scrollIntoView({
    behavior: 'smooth',
  });
};

const Hero = () => {
  return (
    <section className="relative bg-gray-100 text-gray-900 py-24 px-6 md:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 z-0" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
              Dropout Engineers: <span className="text-blue-600">Quality Clothing</span> for Every Generation
            </h1>
            <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto md:mx-0">
              We manufacture top-quality, on-trend apparel for men, women, and kids. Retailers can rely on us for fast turnarounds, reliable supply, and complete customization.
            </p>

            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <button onClick={handleScroll} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
                Explore Our Collection
              </button>
              <Link to="/about">
                <button className="bg-transparent border-2 border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Image or Graphic */}
          <div className="relative md:w-1/2">
            <img
              src="https://res.cloudinary.com/dvlh2e6d0/image/upload/v1743748792/i8x24orfgxe8cdqr1hpx.png"
              alt="Fashion Image"
              className="w-full mx-auto md:mx-0 transition duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>

        {/* Vertical Integration & Key Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Vertical Integration</h2>
            <p className="text-lg text-gray-600">
              From design to production, we control every step of the process, ensuring consistent quality and fast turnaround times.
            </p>
          </div>
          <div className="text-center md:text-left animate__animated animate__fadeIn animate__delay-3s">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Manufacturer Advantage</h2>
            <p className="text-lg text-gray-600">
              Cut out the middleman! Direct pricing and control, customized designs, and scalable production for large orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
