"use client";

import { useSidebar } from "@/context/SidebarContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isSidebarCollapsed } = useSidebar();
  
  return (
    <div className="flex min-h-screen w-full bg-white">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'} mt-0 md:mt-0`}>
          <main className="flex-grow p-4 md:p-8 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}