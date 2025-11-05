"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-20">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-8xl font-bold mb-6 tracking-widest">404</h1>
        <h2 className="text-4xl font-bold mb-8 tracking-wider">PAGE NOT FOUND</h2>
        <p className="text-gray-400 mb-12 text-xl leading-relaxed">
          Sorry, the page you{`'`}re looking for doesn{`'`}t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link 
            href="/" 
            className="bg-white text-black px-8 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors tracking-wider"
          >
            GO HOME
          </Link>
          <Link 
            href="/shop" 
            className="border-2 border-white text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors tracking-wider"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
}