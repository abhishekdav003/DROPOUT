import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const headerRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      mobileMenuButtonRef.current &&
      !mobileMenuButtonRef.current.contains(event.target) &&
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="bg-white shadow-lg fixed top-0 w-full z-50 playfair-400">
      
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-bold text-gray-900 tracking-wide hover:text-blue-500 transition duration-100"
        >
          Dropout Engineers
        </Link>

        {/* Mobile Toggle Button (Only Visible in Mobile View) */}
        <button
          ref={mobileMenuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 transition duration-200 p-2 rounded focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation (Hidden in Mobile View) */}
      <div className="hidden md:flex space-x-12">
  {['home', 'shop', 'about', 'contact'].map((item) => (
    <Link
      key={item}
      to={`/${item}`}
      onClick={() => handleClick(item)}
      className={`text-lg font-medium transition duration-200 ${
        activeItem === item ? 'text-blue-500' : 'text-gray-800'
      } hover:text-blue-500`}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Link>
  ))}
</div>


      </div>

      {/* Mobile Menu (Hidden by Default, Shows When Toggle is Active) */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white shadow-lg py-6 transition-all duration-300"
        >
          <nav className="flex flex-col items-center space-y-6">
            {['home', 'shop', 'about', 'contact'].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={() => handleClick(item)}
                className={`text-xl font-medium transition duration-200 ${
                  activeItem === item ? 'text-blue-500' : 'text-gray-800'
                } hover:text-blue-500`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;



