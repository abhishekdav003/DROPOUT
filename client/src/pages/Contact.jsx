import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsappIcon";

function Contact() {
  return (
    <>
    <Header />
    <section className="relative bg-gray-50 text-gray-900 py-22 px-6 md:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw65.png")' }}></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Contact Heading */}
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto md:mx-0 text-gray-600">
              We’re here to help! Drop us a message, and we’ll get back to you shortly. We’re excited to hear from you.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative md:w-1/2 w-full">
            <form className="bg-white shadow-lg rounded-lg p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  className="w-full h-36 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-110"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      </section>
      <WhatsAppIcon />
      <Footer />
      </>
  );
}

export default Contact;
