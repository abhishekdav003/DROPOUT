import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const brands = [
  "Lakme", "Maybelline", "Nykaa", "Colorbar", "Sugar", "Lotus", "Biotique", "Himalaya Herbal",
  "Mac Cosmetics", "Plum", "Moms Co", "Wow Skin", "Dot Key", "My Glamm", "Minimalist",
  "Re Equal", "Juicy Chemistry", "Caffeine", "Faces Canada"
];

const BrandSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);3

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">Brands We Deal In</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={`/images/${brand.toLowerCase().replace(" ", "-")}-logo.png`} // Adjust path to your logo images
                alt={brand}
                className="max-h-16 object-contain transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
