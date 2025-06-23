'use client';
import Image from 'next/image';

// Card 1
export function ProductCard1({ onAddToCart }) {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-lg overflow-hidden relative mb-6">
      {/* Top-right icons */}
      <div className="absolute top-3 right-3 flex space-x-2 z-10 text-xl text-gray-600">
        <i className="bi bi-heart hover:text-red-500 cursor-pointer transition" />
        <i className="bi bi-share-fill hover:text-blue-500 cursor-pointer transition" />
      </div>

      {/* Product Image */}
      <Image
        src="/product.jpg"
        alt="Product"
        width={288}
        height={400}
        className="object-cover w-full h-[400px]"
      />

      {/* Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">Lehenga Dress </h2>
        <p className="text-sm text-gray-600 mt-1">
          ₹1800 <s className="text-red-400 ml-2">₹3200</s>{' '}
          <span className="text-green-600 ml-1">50% off</span>
        </p>
        <button onClick={onAddToCart} className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg text-sm hover:bg-purple-600 transition-all">
            Add to Bag
        </button>
      </div>

      {/* In the Look */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-500 mb-2 font-medium">In the Look</p>
        <div className="flex space-x-3 overflow-x-auto">
          {['product.jpg', 'cc1.jpg', '743.jpg', '2.jpg'].map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src={`/${img}`}
                  alt={`look-${idx}`}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs mt-1">₹{1000 + idx * 100}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Card 2
export function ProductCard2({ onAddToCart }) {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-lg overflow-hidden relative mb-6">
      <div className="absolute top-3 right-3 flex space-x-2 z-10 text-xl text-gray-600">
        <i className="bi bi-heart hover:text-red-500 cursor-pointer transition" />
        <i className="bi bi-share-fill hover:text-blue-500 cursor-pointer transition" />
      </div>

      <Image
        src="/h.png"
        alt="Product"
        width={288}
        height={400}
        className="object-cover w-full h-[400px]"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">Red Frock</h2>
        <p className="text-sm text-gray-600 mt-1">
          ₹2100 <s className="text-red-400 ml-2">₹3800</s>{' '}
          <span className="text-green-600 ml-1">45% off</span>
        </p>
        <button onClick={onAddToCart} className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg text-sm hover:bg-purple-600 transition-all">
            Add to Bag
        </button>
      </div>

      <div className="px-4 pb-4">
        <p className="text-sm text-gray-500 mb-2 font-medium">In the Look</p>
        <div className="flex space-x-3 overflow-x-auto">
          {['743.jpg', 'cc1.jpg', '2.jpg', 'product.jpg'].map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src={`/${img}`}
                  alt={`look-${idx}`}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs mt-1">₹{1100 + idx * 120}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// Card 3
export function ProductCard3({ onAddToCart }) {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-lg overflow-hidden relative mb-6">
      <div className="absolute top-3 right-3 flex space-x-2 z-10 text-xl text-gray-600">
        <i className="bi bi-heart hover:text-red-500 cursor-pointer transition" />
        <i className="bi bi-share-fill hover:text-blue-500 cursor-pointer transition" />
      </div>

      <Image
        src="/b0.jpg"
        alt="Product"
        width={288}
        height={400}
        className="object-cover w-full h-[400px]"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900"> Body Con</h2>
        <p className="text-sm text-gray-600 mt-1">
          ₹2100 <s className="text-red-400 ml-2">₹3800</s>{' '}
          <span className="text-green-600 ml-1">45% off</span>
        </p>
        <button onClick={onAddToCart} className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg text-sm hover:bg-purple-600 transition-all">
            Add to Bag
        </button>

      </div>

      <div className="px-4 pb-4">
        <p className="text-sm text-gray-500 mb-2 font-medium">In the Look</p>
        <div className="flex space-x-3 overflow-x-auto">
          {['743.jpg', 'cc1.jpg', '2.jpg', 'product.jpg'].map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src={`/${img}`}
                  alt={`look-${idx}`}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs mt-1">₹{1100 + idx * 120}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
