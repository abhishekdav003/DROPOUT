import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp Icon from React Icons

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/your-phone-number" // Replace with your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ease-in-out transform hover:rotate-12 flex justify-center items-center animate-bounce md:bottom-8 md:right-8"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppIcon;
