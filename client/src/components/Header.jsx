import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const headerRef = useRef(null); // Ref to the header element
  const mobileMenuRef = useRef(null); // Ref to the mobile menu button
  const navRef = useRef(null); // Ref to the navigation menu

  // Function to handle clicks outside of the navbar and mobile menu
  const handleClickOutside = (event) => {
    if (
      headerRef.current && !headerRef.current.contains(event.target) && // Check if clicked outside the header
      mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && // Check if clicked outside mobile menu button
      navRef.current && !navRef.current.contains(event.target) // Check if clicked outside navigation menu
    ) {
      setActiveItem(null); // Reset active item if clicked outside
      setIsMenuOpen(false); // Close mobile menu if clicked outside
    }
  };

  // Add event listener on mount and remove on unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (item) => {
    setActiveItem(item); // Set active item to highlight the clicked item
    setIsMenuOpen(false); // Close the mobile menu when a button is clicked
  };

  return (
    <header ref={headerRef} className="bg-white shadow-lg top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <a
          href="/"
          className="text-4xl font-bold text-gray-900 tracking-wide hover:text-blue-500 transition duration-100"
        >
          BrandName
        </a>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex space-x-12">
          {['home', 'shop', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleClick(item)}
              className={`text-lg font-medium transition duration-100 ${
                activeItem === item ? 'text-blue-500' : 'text-gray-800'
              } hover:text-blue-500`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={mobileMenuRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 transition-colors duration-100 p-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white shadow-lg py-6">
          <nav className="flex flex-col items-center space-y-6">
            {['home', 'shop', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => handleClick(item)}
                className={`text-xl font-medium transition duration-100 ${
                  activeItem === item ? 'text-blue-500' : 'text-gray-800'
                } hover:text-blue-500`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
