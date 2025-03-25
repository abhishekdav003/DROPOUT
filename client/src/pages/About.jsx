import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsappIcon';
import ScrollToTopButton from '../components/ScrollToTopButton';

const About = () => {
  return (
    <>
      <Header />
      <section className="relative bg-white text-gray-900 py-24 px-6 md:px-12">
        {/* Section Background */}

        <div className="max-w-screen-xl mx-auto relative z-10">
          {/* Title & Intro Section */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-12 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              About Dropout Engineers: <span className="text-blue-600">Revolutionizing Apparel Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto text-gray-700">
              Dropout Engineers isn’t just a clothing brand; we are a vertically integrated apparel manufacturer. We control every step of the process, ensuring high-quality products, fast production, and custom designs for men, women, and kids.
            </p>
          </div>

          {/* Our Process Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="text-center md:text-left space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">Our Process</h2>
              <p className="text-lg text-gray-600">
                From design to production, we oversee every stage of the manufacturing process. This hands-on approach ensures consistency, quality, and swift delivery times.
              </p>
              <p className="text-lg text-gray-600">
                Our team of skilled professionals is dedicated to creating fashion-forward, durable clothing that meets the demands of today’s market.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-full h-full overflow-hidden transform transition-all hover:scale-105 duration-300">
                <img
                  src="/src/assets/factory.png"
                  alt="Factory Process"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Manufacturer Advantages Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center shadow-lg transform transition-all hover:scale-110">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Direct Manufacturer</h3>
              <p className="text-gray-600">
                Cut out the middleman! We’re the manufacturers, so you get the best pricing, quicker turnaround, and more control over the design.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full mx-auto flex items-center justify-center shadow-lg transform transition-all hover:scale-110">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Customization at Scale</h3>
              <p className="text-gray-600">
                Private labeling, custom designs, and large-scale production—whatever you need, we offer flexible solutions that fit your brand.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full mx-auto flex items-center justify-center shadow-lg transform transition-all hover:scale-110">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Fast Turnaround</h3>
              <p className="text-gray-600">
                Time is money. With our streamlined process, we guarantee faster delivery times without compromising on quality.
              </p>
            </div>
          </div>

          {/* Sustainable & Ethical Manufacturing Section */}
          <div className="mt-24 py-12 px-6 bg-gray-50 rounded-xl shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ethical Manufacturing & Sustainability</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We are committed to sustainability and ethical manufacturing practices. From sourcing premium fabrics to reducing waste, we prioritize the well-being of our planet and the people involved in our production process.
              </p>
              <div className="mt-8 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transform transition duration-300 ease-in-out hover:scale-110">
                  Learn More About Our Values
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ScrollToTop Button */}
      <ScrollToTopButton />
      
      {/* WhatsApp Icon */}
      {/* Add custom styles to ensure no overlap with other content */}
      <div className="fixed bottom-4 right-4 z-50">
        <WhatsAppIcon />
      </div>

      <Footer />
    </>
  );
};

export default About;
