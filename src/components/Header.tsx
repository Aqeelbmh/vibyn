"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with shipping info */}
        <div className="hidden md:flex justify-center py-2 text-sm bg-gray-100">
          <p className="text-gray-600">Free shipping on orders over £50</p>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
              <div className="relative rounded-full border-2 border-[#d4af37] p-1">
                <Image 
                  src="/OUR.png" 
                  alt="VIBYN Logo" 
                  width={50} 
                  height={50} 
                  className="object-contain rounded-full"
                />
              </div>
              <span className="ml-2 text-2xl font-bold tracking-wider text-[#d4af37] hidden sm:block">VIBYN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="font-medium hover:text-[#d4af37] transition-colors">SHOP</Link>
            <Link href="/shop?category=tshirts" className="font-medium hover:text-[#d4af37] transition-colors">T-SHIRTS</Link>
            <Link href="/shop?category=hoodies" className="font-medium hover:text-[#d4af37] transition-colors">HOODIES</Link>
            <Link href="/dtf-design" className="font-medium hover:text-[#d4af37] transition-colors">DTF DESIGNS</Link>
            <Link href="/about" className="font-medium hover:text-[#d4af37] transition-colors">ABOUT</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button 
              className="text-black hover:text-[#d4af37] transition-colors hidden sm:block"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <Link href="/cart" className="text-black hover:text-[#d4af37] transition-colors relative" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#d4af37] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Link>
            
            <button className="text-black hover:text-[#d4af37] transition-colors hidden sm:block" aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                aria-label="Search products"
              />
              <button className="bg-[#d4af37] text-black px-6 py-2 rounded-r-lg font-medium hover:bg-[#b8860b] transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white text-black z-50 shadow-2xl">
            <div className="flex flex-col h-full p-6">
              {/* Logo */}
              <div className="mb-10 mt-4">
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative rounded-full border-2 border-[#d4af37] p-1">
                    <Image 
                      src="/OUR.png" 
                      alt="VIBYN Logo" 
                      width={50} 
                      height={50} 
                      className="object-contain rounded-full"
                    />
                  </div>
                  <span className="ml-2 text-2xl font-bold tracking-wider text-[#d4af37]">VIBYN</span>
                </Link>
              </div>
              
              {/* Navigation */}
              <nav className="flex-grow">
                <ul className="space-y-6">
                  <li>
                    <Link href="/" className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop?category=tshirts" className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      T-Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop?category=hoodies" className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      Hoodies
                    </Link>
                  </li>
                  <li>
                    <Link href="/dtf-design" className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      DTF Designs
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              
              {/* Mobile Icons */}
              <div className="pt-6 border-t border-gray-200 mt-6">
                <div className="flex justify-between">
                  <button className="text-black hover:text-[#d4af37] transition-colors" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <Link href="/cart" className="text-black hover:text-[#d4af37] transition-colors relative" aria-label="Cart" onClick={() => setIsMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-[#d4af37] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
                  </Link>
                  <button className="text-black hover:text-[#d4af37] transition-colors" aria-label="Account">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}