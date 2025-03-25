import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const socialLinks = [
  { href: '#', icon: <FaFacebook className="text-2xl" /> },
  { href: '#', icon: <FaTwitter className="text-2xl" /> },
  { href: '#', icon: <FaInstagram className="text-2xl" /> },
  { href: '#', icon: <FaLinkedin className="text-2xl" /> },
];

const Footer = () => {
  const [email, setEmail] = useState(''); // State for the email input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission which causes page reload

    // Show success message using Toastify
    toast.success('Subscription successful!', {
      position: "bottom-left",
      autoClose: 3000, // Close after 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });

    // Clear the email input after form submission
    setEmail('');
  };

  return (
    <div className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">About Us</h2>
            <ul>
              {['Our Story', 'Careers', 'Press', 'Blog'].map((item) => (
                <li key={item} className="mb-2 hover:text-gray-400">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Contact</h2>
            <ul>
              <li className="mb-2 hover:text-gray-400">
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li className="mb-2 hover:text-gray-400 text-sm montserrat">
                <a href="tel:+123456789">+123 456 7899</a>
              </li>
              <li className="mb-2 hover:text-gray-400">
                <a href="#">123 Street Name, City, Country</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Follow Us</h2>
            <div className="flex justify-center sm:justify-start space-x-6">
              {socialLinks.map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`text-2xl transition duration-150 ease-in-out 
                    ${icon.type === FaFacebook ? 'hover:text-blue-600' : ''}
                    ${icon.type === FaInstagram ? 'hover:text-pink-500' : ''}
                    ${icon.type === FaTwitter ? 'hover:text-sky-500' : ''}
                    ${icon.type === FaLinkedin ? 'hover:text-blue-500' : ''}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Stay Updated</h2>
            <p className="mb-6 text-gray-300">Join our newsletter and never miss an update!</p>
            {/* Google Form for Newsletter Subscription */}
            <form
              onSubmit={handleSubmit} // Handle form submission with custom function
              className="flex flex-col sm:flex-row"
            >
              <input
                type="email"
                name="entry.123456789" // This is the Google Form entry point for the email field
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                placeholder="Enter your email"
                className="w-full sm:w-3/4 px-4 py-3 text-gray-800 bg-white border border-gray-400 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60 placeholder-gray-400 mb-4 sm:mb-0"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-1/3 bg-blue-600 text-white py-3 rounded-r-xl hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 text-sm text-gray-400">
          <p>Trade Marks belong to the respective owners. Copyright © 2025 FebTech IT Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>

      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
};

export default Footer;
