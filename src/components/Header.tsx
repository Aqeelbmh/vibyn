"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useSidebar } from "@/context/SidebarContext";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isSidebarCollapsed, toggleSidebar } = useSidebar();
  
  return (
    <header className="bg-white/90 backdrop-blur-lg text-black sticky top-0 z-40 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with shipping info */}
        <div className="hidden md:flex justify-center py-2 text-sm bg-gray-100">
          <p className="text-gray-600">Free shipping on orders over £50</p>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Sidebar toggle button */}
          <button 
            className="text-black focus:outline-none"
            onClick={toggleSidebar}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarCollapsed ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
              <div className="relative rounded-full border-2 border-[#d4af37] p-1 shadow-lg">
                <Image 
                  src="/OUR.png" 
                  alt="VIBYN Logo" 
                  width={50} 
                  height={50} 
                  className="object-contain rounded-full"
                />
              </div>
              <span className="ml-3 text-2xl font-bold tracking-tight text-[#d4af37] hidden sm:block">VIBYN</span>
            </Link>
          </div>

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
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                aria-label="Search products"
              />
              <button className="bg-[#d4af37] text-black px-6 py-3 rounded-r-xl font-medium hover:bg-[#b8860b] transition-all duration-300 shadow-md hover:shadow-lg">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}