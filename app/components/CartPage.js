'use client';
import { useState } from 'react';
import Image from 'next/image';

// Cart for Product 1
export function CartPage({ goBack }) {
  return (
    <CartLayout
      image="/product.jpg"
      title="Lehenga Dress"
      size="S"
      pricePerItem={1800}
      originalPrice={3200}
      goBack={goBack}
    />
  );
}

// Cart for Product 2
export function CartPage2({ goBack }) {
  return (
    <CartLayout
      image="/h.png"
      title="Red Frock"
      size="M"
      pricePerItem={2100}
      originalPrice={3800}
      goBack={goBack}
    />
  );
}

// Cart for Product 3
export function CartPage3({ goBack }) {
  return (
    <CartLayout
      image="/b0.jpg"
      title="Body Con"
      size="L"
      pricePerItem={2100}
      originalPrice={3800}
      goBack={goBack}
    />
  );
}

// Shared cart layout
function CartLayout({ image, title, size, pricePerItem, originalPrice, goBack }) {
  const [quantity, setQuantity] = useState(1);
  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const totalMRP = pricePerItem * quantity;
  const totalOriginal = originalPrice * quantity;
  const discount = totalOriginal - totalMRP;

  return (
    <div className="p-6 text-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="bg-gray-50 p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="w-24 h-24 rounded-lg overflow-hidden border">
          <Image
            src={image}
            alt={title}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-left flex-1">
          <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">Size: {size}</p>
          <p className="text-sm text-gray-600 mt-1">
            ₹{pricePerItem}{' '}
            <s className="text-red-400 ml-2">₹{originalPrice}</s>
          </p>
          <p className="text-sm text-green-600 mt-1">Delivery: FREE</p>

          {/* Quantity */}
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

      {/* Totals */}
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

      {/* Buttons */}
      <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
        Continue to Checkout
      </button>
      <br></br>
      <button
        onClick={goBack}
        className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">Back</button>
    </div>
  );
}
