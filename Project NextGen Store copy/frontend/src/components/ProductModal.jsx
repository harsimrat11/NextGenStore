import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-white mb-4">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
        <div className="text-white space-y-2">
          <p><strong>Model:</strong> {product.model}</p>
          <p><strong>Color:</strong> {product.color}</p>


          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Specs:</strong> {product.specs}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
