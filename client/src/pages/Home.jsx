// home.jsx
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsAppIcon from '../components/WhatsappIcon';
import Hero from '../components/Hero';
import CustomScrollbar from '../components/CustomScrollBar';
import Products from '../components/Products';
import ScrollToTopButton from "../components/ScrollToTopButton";
import BrandSection from '../components/BrandSection';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen playfair-400">
      <Header />
      <main className="flex-1 mt-10 md:mt-1">
        <Hero />
        {/* Your main content here */}
        <div className="text-center p-10">
          <Products />
          <BrandSection />
          <WhatsAppIcon />
          <ScrollToTopButton />
        </div>
      </main>
      <Footer />
      <CustomScrollbar />
    </div>
  );
};

export default Home;
