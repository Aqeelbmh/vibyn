"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useSidebar } from "@/context/SidebarContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSidebarCollapsed, toggleSidebar } = useSidebar();
  
  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 text-[#d4af37] focus:outline-none bg-[#2c1810] p-2 rounded-lg shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Sidebar for desktop and mobile navigation */}
      <header className={`bg-[#0a0a0a] text-[#f0f0f0] fixed top-0 left-0 h-full z-40 border-r border-[#333333] shadow-2xl hidden md:block transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="flex flex-col h-full p-6">
          {/* Logo and toggle button */}
          <div className="mb-8 mt-4">
            <div className="flex items-center justify-between">
              {!isSidebarCollapsed && (
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                  <div className="relative rounded-full border-2 border-[#d4af37] p-1">
                    <Image 
                      src="/OUR.png" 
                      alt="VIBYN Logo" 
                      width={60} 
                      height={60} 
                      className="object-contain rounded-full"
                    />
                  </div>
                  <span className="ml-3 text-2xl font-bold tracking-wider text-[#d4af37]">VIBYN</span>
                </Link>
              )}
              <button 
                onClick={toggleSidebar}
                className="text-[#d4af37] hover:text-[#b8860b] transition-colors focus:outline-none"
                aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-grow">
            <ul className="space-y-6">
              <li>
                <Link href="/" className={`flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className={`${isSidebarCollapsed ? 'hidden' : 'ml-3 font-medium'}`}>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/shop" className={`flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className={`${isSidebarCollapsed ? 'hidden' : 'ml-3 font-medium'}`}>Shop</span>
                </Link>
              </li>
              <li>
                <Link href="/dtf-design" className={`flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className={`${isSidebarCollapsed ? 'hidden' : 'ml-3 font-medium'}`}>DTF Designs</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={`flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={`${isSidebarCollapsed ? 'hidden' : 'ml-3 font-medium'}`}>About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className={`${isSidebarCollapsed ? 'hidden' : 'ml-3 font-medium'}`}>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Icons */}
          <div className={`flex ${isSidebarCollapsed ? 'flex-col items-center space-y-6 py-4' : 'justify-center space-x-6'} pt-6 border-t border-[#333333]`}>
            <button className="hover:text-[#d4af37] transition-colors" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/cart" className="hover:text-[#d4af37] transition-colors relative" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#d4af37] text-[#2c1810] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Link>
            <button className="hover:text-[#d4af37] transition-colors" aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-[#0a0a0a] bg-opacity-75" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-0 left-0 h-full w-64 bg-[#0a0a0a] text-[#f0f0f0] z-40 border-r border-[#333333] shadow-2xl">
            <div className="flex flex-col h-full p-6">
              {/* Logo */}
              <div className="mb-12 mt-4">
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative rounded-full border-2 border-[#d4af37] p-1">
                    <Image 
                      src="/OUR.png" 
                      alt="VIBYN Logo" 
                      width={60} 
                      height={60} 
                      className="object-contain rounded-full"
                    />
                  </div>
                  <span className="ml-3 text-2xl font-bold tracking-wider text-[#d4af37]">VIBYN</span>
                </Link>
              </div>
              
              {/* Navigation */}
              <nav className="flex-grow">
                <ul className="space-y-6">
                  <li>
                    <Link href="/" className="flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group" onClick={() => setIsMenuOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="font-medium">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group" onClick={() => setIsMenuOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span className="font-medium">Shop</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dtf-design" className="flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group" onClick={() => setIsMenuOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                      <span className="font-medium">DTF Designs</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group" onClick={() => setIsMenuOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="flex items-center py-3 px-4 rounded-lg hover:bg-[#2c1810] transition-all duration-300 group" onClick={() => setIsMenuOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37] group-hover:text-[#f0f0f0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}