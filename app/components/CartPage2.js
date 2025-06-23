'use client';
import { useState } from 'react';
import Image from 'next/image';

export  function CartPage2() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 2100;
  const originalPrice = 3800;
  const deliveryFee = 0;

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const totalMRP = pricePerItem * quantity;
  const totalOriginal = originalPrice * quantity;
  const discount = totalOriginal - totalMRP;

  return (
    <div className="p-6 text-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="bg-gray-50 p-4 rounded-lg shadow flex items-center space-x-4">
        {/* Product Image */}
        <div className="w-24 h-24 rounded-lg overflow-hidden border">
          <Image
            src="/product.jpg"
            alt="Lehenga Dress"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="text-left flex-1">
          <h2 className="font-semibold text-lg text-gray-800"> Red Frock</h2>
          <p className="text-sm text-gray-600">Size: S</p>
          <p className="text-sm text-gray-600 mt-1">
            ₹{pricePerItem} <s className="text-red-400 ml-2">₹{originalPrice}</s>
          </p>
          <p className="text-sm text-green-600 mt-1">Delivery: FREE</p>

          {/* Quantity Control */}
          <div className="mt-2 flex items-center space-x-2">
            <button
              onClick={decreaseQty}
              className="px-2 py-1 text-lg font-bold bg-gray-200 rounded"
            >
              −
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-2 py-1 text-lg font-bold bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="mt-6 text-left bg-gray-50 p-4 rounded-lg shadow-sm text-sm">
        <div className="flex justify-between mb-2">
          <span>Total MRP</span>
          <span>₹{totalOriginal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount on MRP</span>
          <span className="text-green-600">−₹{discount}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-base">
          <span>Total Amount</span>
          <span>₹{totalMRP}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
        Continue to Checkout
      </button>
    </div>
  );
}
