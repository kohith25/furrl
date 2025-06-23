'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'Kohith@123') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label className="block mb-2 text-sm text-gray-700">Email</label>
        <input
          type="email"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm text-gray-700">Password</label>
        <input
          type="password"
          className="w-full mb-6 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
