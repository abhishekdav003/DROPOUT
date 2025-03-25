import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsAppIcon from '../components/WhatsappIcon';
import CustomScrollbar from '../components/CustomScrollBar';
import ProductCard from '../components/ProductCard';
import QueryModal from '../components/QueryModel';
import ScrollToTopButton from "../components/ScrollToTopButton";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    // Clothes Section Products
    {
      id: 1,
      category: 'Clothes',
      name: 'Streetwear Hoodie',
      description: 'Premium cotton, unisex design.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 2,
      category: 'Clothes',
      name: 'Casual T-Shirt',
      description: 'Soft cotton, perfect for everyday wear.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 3,
      category: 'Clothes',
      name: 'Denim Jacket',
      description: 'Stylish and timeless, made from high-quality denim.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    // Cosmetics Section Products
    {
      id: 4,
      category: 'Cosmetics',
      name: 'Lipstick',
      description: 'Long-lasting and vibrant color.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 5,
      category: 'Cosmetics',
      name: 'Face Cream',
      description: 'Hydrating and nourishing for all skin types.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
    {
      id: 6,
      category: 'Cosmetics',
      name: 'Eye Shadow Palette',
      description: 'Vibrant colors for every occasion.',
      image: 'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1742733598/izpgmrsmgt8m9ypbenos.jpg',
    },
  ];

  const handleQuery = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="flex-1">
        {/* Why Shop With Us Section */}
        <section className="py-24 px-6 bg-gray-100">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Why Shop With Us?</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Quality Products</h3>
              <p className="text-gray-600">We carefully select high-quality items, ensuring your satisfaction with every purchase.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Fast & Reliable Shipping</h3>
              <p className="text-gray-600">Our reliable shipping service ensures that your order will arrive quickly and safely.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Support</h3>
              <p className="text-gray-600">Our dedicated team is always available to help you with any questions or concerns.</p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-24 text-center relative">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to Our Shop</h1>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Explore premium clothes and cosmetics crafted to perfection.
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out">
            Start Shopping
          </button>
        </section>

        {/* Featured Products Section */}
        <section className="py-24 px-6 bg-white">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Featured Products</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {groupedProducts.Clothes?.map((product) => (
              <ProductCard key={product.id} product={product} onQuery={handleQuery} />
            ))}
          </div>
        </section>

        {/* Cosmetics Section */}
        <section className="py-24 px-6 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Cosmetics</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {groupedProducts.Cosmetics?.map((product) => (
              <ProductCard key={product.id} product={product} onQuery={handleQuery} />
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedProduct && <QueryModal product={selectedProduct} onClose={handleCloseModal} />}

      <Footer />
      <CustomScrollbar />
      <WhatsAppIcon />
      <ScrollToTopButton />
    </div>
  );
};

export default Shop;
