'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SplashScreen from './components/SplashScreen';
import { ProductCard1, ProductCard2, ProductCard3 } from './components/ProductCard';
import { CartPage, CartPage2, CartPage3 } from './components/CartPage';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [cartIndex, setCartIndex] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (index) => {
    setCartIndex(index);
  };

  const goBack = () => setCartIndex(null);

  return (
    <main className="flex flex-col items-center bg-[#fafafa] min-h-screen p-4">
      {showSplash ? (
        <SplashScreen />
      ) : cartIndex === 0 ? (
        <CartPage goBack={goBack} />
      ) : cartIndex === 1 ? (
        <CartPage2 goBack={goBack} />
      ) : cartIndex === 2 ? (
        <CartPage3 goBack={goBack} />
      ) : (
        <>
          <ProductCard1 onAddToCart={() => handleAddToCart(0)} />
          <ProductCard2 onAddToCart={() => handleAddToCart(1)} />
          <ProductCard3 onAddToCart={() => handleAddToCart(2)} />
        </>
      )}
    </main>
  );
}
