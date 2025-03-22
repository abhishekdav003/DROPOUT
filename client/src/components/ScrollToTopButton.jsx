import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-30 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gray-300 text-gray-800 shadow-md hover:shadow-lg  hover:bg-gray-400 hover:text-white"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
