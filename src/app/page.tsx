"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/back 11.png",
    "/back 12.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl my-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#2c1810]/50 to-[#0a0a0a]/80 z-10 rounded-3xl"></div>
        
        {/* Background image slideshow with enhanced styling */}
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform rounded-3xl ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ 
              backgroundImage: `url('${image}')`,
              backgroundAttachment: 'fixed'
            }}
          ></div>
        ))}
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#b8860b]">
            VIBYN
          </h1>
          <p className="text-lg md:text-2xl mb-10 tracking-wide font-light text-[#f0f0f0]/90">
            Your Vibe. Your Identity.
          </p>
          <Link 
            href="/shop" 
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#2c1810] px-10 py-4 text-lg font-medium rounded-full hover:from-[#b8860b] hover:to-[#8b4513] transition-all duration-300 transform hover:scale-105 tracking-wider shadow-2xl hover:shadow-3xl"
          >
            DISCOVER COLLECTION
          </Link>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce flex flex-col items-center">
          <span className="text-sm mb-2 tracking-widest text-[#d4af37]/80">EXPLORE</span>
          <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Core Concept Section - Beneath the Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0a0a0a] to-[#2c1810]/20 rounded-3xl my-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide text-[#d4af37]">THE VIBYN CONCEPT</h2>
            <p className="text-[#f0f0f0]/90 text-lg leading-relaxed">
              VIBYN is about catching your own vibe — not following the crowd. It{`'`}s for the young people who know that what you wear is the first chapter of your story. Every piece is designed to be worn loud, proud, and unapologetically you. We{`'`}re not just selling clothes; we{`'`}re curating confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-[#d4af37]">FEATURED COLLECTIONS</h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div 
                className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="/shop?category=tshirts" className="text-[#f0f0f0] text-2xl font-bold bg-[#0a0a0a] bg-opacity-50 px-8 py-4 rounded-full hover:bg-opacity-70 transition-all tracking-wider border border-[#d4af37] hover:border-[#b8860b] backdrop-blur-sm">
                  T-SHIRTS
                </Link>
              </div>
            </div>
            
            {/* Collection 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div 
                className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="/shop?category=hoodies" className="text-[#f0f0f0] text-2xl font-bold bg-[#0a0a0a] bg-opacity-50 px-8 py-4 rounded-full hover:bg-opacity-70 transition-all tracking-wider border border-[#d4af37] hover:border-[#b8860b] backdrop-blur-sm">
                  HOODIES
                </Link>
              </div>
            </div>
            
            {/* Collection 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div 
                className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="/dtf-design" className="text-[#f0f0f0] text-2xl font-bold bg-[#0a0a0a] bg-opacity-50 px-8 py-4 rounded-full hover:bg-opacity-70 transition-all tracking-wider border border-[#d4af37] hover:border-[#b8860b] backdrop-blur-sm">
                  DTF DESIGNS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gradient-to-r from-[#2c1810] to-[#0a0a0a] rounded-3xl my-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-[#d4af37]">OUR CORE VALUES</h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a]/50 p-8 rounded-2xl border border-[#333333]/30 hover:border-[#d4af37]/50 transition-all duration-300">
              <div className="text-4xl mb-6 text-[#d4af37]">✨</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-[#d4af37]">AUTHENTICITY</h3>
              <p className="text-[#f0f0f0]/80 leading-relaxed">
                We stay true to our roots and beliefs, creating genuine products that reflect our brand{`'`}s identity and your unique personality.
              </p>
            </div>
            
            <div className="bg-[#1a1a1a]/50 p-8 rounded-2xl border border-[#333333]/30 hover:border-[#d4af37]/50 transition-all duration-300">
              <div className="text-4xl mb-6 text-[#d4af37]">🏆</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-[#d4af37]">QUALITY</h3>
              <p className="text-[#f0f0f0]/80 leading-relaxed">
                Premium materials and craftsmanship ensure our pieces not only look good but feel amazing and last long.
              </p>
            </div>
            
            <div className="bg-[#1a1a1a]/50 p-8 rounded-2xl border border-[#333333]/30 hover:border-[#d4af37]/50 transition-all duration-300">
              <div className="text-4xl mb-6 text-[#d4af37]">🤝</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-[#d4af37]">CONNECTION</h3>
              <p className="text-[#f0f0f0]/80 leading-relaxed">
                Building meaningful relationships with our community through fashion that speaks to shared values and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-gradient-to-r from-[#0a0a0a] to-[#2c1810]/20 rounded-3xl my-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-2xl border border-[#d4af37]/30"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.4)" }}
              >
                <div className="w-full h-full rounded-2xl flex items-end justify-start">
                  <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl m-4">
                    <h3 className="text-xl font-bold text-[#d4af37] mb-1">The VIBYN Journey</h3>
                    <p className="text-white">From Sri Lanka to the streets of the UK</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide text-[#d4af37]">THE VIBYN STORY</h2>
              <p className="text-[#f0f0f0]/80 mb-6 text-lg leading-relaxed">
                Founded in the UK, VIBYN is more than just a clothing brand - it{`'`}s a lifestyle. We believe that what you wear 
                reflects who you are and how you feel. Our premium streetwear collection combines comfort, style, and 
                individuality to help you express your unique vibe.
              </p>
              <p className="text-[#f0f0f0]/80 mb-10 text-lg leading-relaxed">
                Each piece in our collection is crafted with attention to detail, using high-quality materials and innovative 
                DTF printing techniques that ensure our designs stay vibrant and last long.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#2c1810] px-8 py-4 font-medium rounded-full hover:from-[#b8860b] hover:to-[#8b4513] transition-all tracking-wider shadow-lg"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2c1810] to-[#0a0a0a] rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#d4af37]">OUR MISSION</h2>
            <p className="text-[#f0f0f0]/90 text-xl max-w-4xl mx-auto leading-relaxed">
              Our mission is to create affordable streetwear that helps young adults express their authentic vibe — with premium quality and ethical production.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#d4af37]">TRENDING NOW</h2>
              <div className="w-20 h-1 bg-[#d4af37] mt-2"></div>
            </div>
            <Link href="/shop" className="text-[#f0f0f0]/60 hover:text-[#d4af37] transition-colors font-medium tracking-wider flex items-center">
              VIEW ALL <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.2)" }}
                ></div>
                <div className="absolute top-4 right-4 bg-[#d4af37] text-[#2c1810] text-sm font-bold px-3 py-1 rounded-full">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 text-[#f0f0f0]">Premium Cotton Tee</h3>
                <p className="text-[#f0f0f0]/60 mb-4">Classic fit with premium fabric</p>
                <p className="text-[#f0f0f0] font-bold">£29.99</p>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.2)" }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 text-[#f0f0f0]">Urban Hoodie</h3>
                <p className="text-[#f0f0f0]/60 mb-4">Warm and comfortable</p>
                <p className="text-[#f0f0f0] font-bold">£59.99</p>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.2)" }}
                ></div>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Sale
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 text-[#f0f0f0]">DTF Graphic Tee</h3>
                <p className="text-[#f0f0f0]/60 mb-4">Limited edition design</p>
                <p className="text-[#f0f0f0] font-bold">
                  <span className="line-through text-[#f0f0f0]/40 mr-2">£34.99</span> £27.99
                </p>
              </div>
            </div>
            
            {/* Product 4 */}
            <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546439874-0cdea0a09631?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.2)" }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 text-[#f0f0f0]">Signature Hoodie</h3>
                <p className="text-[#f0f0f0]/60 mb-4">Our best-selling hoodie</p>
                <p className="text-[#f0f0f0] font-bold">£64.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}