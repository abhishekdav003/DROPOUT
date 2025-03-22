import React from 'react';

const Contact = () => {
  return (
    <div className="font-nunito">
      <div className="container mx-auto">
        {/* Contact Form Section */}
        <div className="relative w-full md:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg mt-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-500 text-lg mb-6">We'd love to hear from you.</p>
            <form action="#" method="POST">
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-blue-500 text-white font-semibold text-lg py-3 rounded-md hover:bg-blue-600 transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full bg-gray-200 mt-8 p-8">
          <div
            className="map-box bg-cover bg-center"
            style={{ backgroundImage: "url('https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/sc23.png')" }}
          >
            {/* Additional content can go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
