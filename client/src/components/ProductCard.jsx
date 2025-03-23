import React from 'react';

const ProductCard = ({ product, onQuery }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden transition hover:scale-105 duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
        <button
          onClick={() => onQuery(product)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition"
        >
          Query Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
