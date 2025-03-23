import React, { useState } from 'react';
import ProductCard from './ProductCard';
import QueryModal from './QueryModel';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Streetwear Hoodie',
      description: 'Premium cotton, unisex design.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 2,
      name: 'Streetwear Hoodie',
      description: 'Premium cotton, unisex design.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 3,
      name: 'Streetwear Hoodie',
      description: 'Premium cotton, unisex design.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 4,
      name: 'Streetwear Hoodie',
      description: 'Premium cotton, unisex design.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 5,
      name: 'Streetwear Hoodie',
      description: 'Premium cotton, unisex design.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 6,
      name: 'Streetwear Hoodie',
      description: 'Premium cotton, unisex design.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    // Add more products as needed
  ];

  const handleQuery = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4">
            Discover <span className="text-blue-600">Our Collection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked pieces crafted with quality and comfort in mind — designed for every generation.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onQuery={handleQuery} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            View Full Catalog
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <QueryModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Products;
