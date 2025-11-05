"use client";

import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";

export default function Sidebar() {
  const { isSidebarCollapsed, toggleSidebar } = useSidebar();

  return (
    <aside className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-lg z-50 transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo and Toggle Button */}
        <div className={`flex items-center ${isSidebarCollapsed ? 'justify-center py-6' : 'justify-between p-6'}`}>
          {!isSidebarCollapsed && (
            <Link href="/" className="flex items-center">
              <div className="relative rounded-full border-2 border-[#d4af37] p-1">
                <Image 
                  src="/OUR.png" 
                  alt="VIBYN Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain rounded-full"
                />
              </div>
              <span className="ml-3 text-xl font-bold tracking-tight text-[#d4af37]">VIBYN</span>
            </Link>
          )}
          
          {isSidebarCollapsed ? (
            <button 
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-[#d4af37] p-2"
              aria-label="Expand sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button 
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-[#d4af37] p-2"
              aria-label="Collapse sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-grow mt-8">
          <ul className="space-y-2 px-4">
            <li>
              <Link 
                href="/" 
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-4 font-medium">Home</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/shop" 
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-4 font-medium">Shop</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/shop?category=tshirts" 
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-4 font-medium">T-Shirts</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/shop?category=hoodies" 
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-4 font-medium">Hoodies</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/dtf-design" 
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-4 font-medium">DTF Designs</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-4 font-medium">About</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-4 font-medium">Contact</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom Icons */}
        <div className="p-4 border-t border-gray-200">
          <div className={`flex ${isSidebarCollapsed ? 'flex-col space-y-4' : 'space-x-4'}`}>
            <Link href="/cart" className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors relative" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {!isSidebarCollapsed && <span className="ml-4 font-medium">Cart</span>}
              <span className="absolute -top-1 -right-1 bg-[#d4af37] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Link>
            
            <button className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {!isSidebarCollapsed && <span className="ml-4 font-medium">Account</span>}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}