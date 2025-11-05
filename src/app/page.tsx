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
  }, [backgroundImages.length]);

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Tee",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      category: "tshirts",
      isNew: true
    },
    {
      id: 2,
      name: "Urban Hoodie",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
      category: "hoodies"
    },
    {
      id: 3,
      name: "DTF Graphic Tee",
      price: 27.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800",
      category: "dtf",
      isOnSale: true
    },
    {
      id: 4,
      name: "Signature Hoodie",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1546439874-0cdea0a09631?q=80&w=800",
      category: "hoodies"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section - Full width banner */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10"></div>
        
        {/* Background image slideshow */}
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ 
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        ))}
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            VIBYN
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-10 tracking-wide font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your Vibe. Your Identity.
          </p>
          <Link 
            href="/shop" 
            className="inline-block luxury-button px-10 py-5 text-lg sm:text-xl font-bold rounded-full tracking-wider shadow-2xl text-lg"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#0a0a0a]">NEW ARRIVALS</h2>
            <div className="mt-4">
              <Link href="/shop?category=new" className="text-[#d4af37] hover:text-[#b8860b] font-medium tracking-wider flex items-center justify-center luxury-link">
                VIEW ALL <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group card">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  
                  {/* Badges */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full tracking-wider shadow-md">
                      NEW
                    </div>
                  )}
                  {product.isOnSale && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider shadow-md">
                      SALE
                    </div>
                  )}
                </div>
                
                <Link href={`/product/${product.id}`} className="block px-2 text-center">
                  <h3 className="font-bold text-lg mb-1 text-black group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                  <p className="text-gray-700 font-medium">
                    {product.originalPrice && (
                      <>
                        <span className="line-through text-gray-400 mr-2">£{product.originalPrice.toFixed(2)}</span>
                      </>
                    )}
                    £{product.price.toFixed(2)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#0a0a0a]">BEST SELLERS</h2>
            <div className="mt-4">
              <Link href="/shop?category=bestsellers" className="text-[#d4af37] hover:text-[#b8860b] font-medium tracking-wider flex items-center justify-center luxury-link">
                VIEW ALL <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group card">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  
                  {/* Badges */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full tracking-wider shadow-md">
                      NEW
                    </div>
                  )}
                  {product.isOnSale && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider shadow-md">
                      SALE
                    </div>
                  )}
                </div>
                
                <Link href={`/product/${product.id}`} className="block px-2 text-center">
                  <h3 className="font-bold text-lg mb-1 text-black group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                  <p className="text-gray-700 font-medium">
                    {product.originalPrice && (
                      <>
                        <span className="line-through text-gray-400 mr-2">£{product.originalPrice.toFixed(2)}</span>
                      </>
                    )}
                    £{product.price.toFixed(2)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center tracking-wide text-[#0a0a0a]">SHOP BY CATEGORY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card">
              <div 
                className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <Link href="/shop?category=tshirts" className="luxury-button px-8 py-4 text-xl font-bold tracking-wider">
                  T-SHIRTS
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card">
              <div 
                className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <Link href="/shop?category=hoodies" className="luxury-button px-8 py-4 text-xl font-bold tracking-wider">
                  HOODIES
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card">
              <div 
                className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <Link href="/dtf-design" className="luxury-button px-8 py-4 text-xl font-bold tracking-wider">
                  DTF DESIGNS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-2xl card"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800')" }}
              ></div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-wide text-[#d4af37]">THE VIBYN STORY</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Founded in the UK, VIBYN is more than just a clothing brand - it{`'`}s a lifestyle. We believe that what you wear 
                reflects who you are and how you feel. Our premium streetwear collection combines comfort, style, and 
                individuality to help you express your unique vibe.
              </p>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Each piece in our collection is crafted with attention to detail, using high-quality materials and innovative 
                DTF printing techniques that ensure our designs stay vibrant and last long.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link 
                  href="/about" 
                  className="luxury-button px-8 py-4 font-bold tracking-wider"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-wide text-[#0a0a0a]">STAY IN THE LOOP</h2>
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and new drops.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg shadow-sm"
              aria-label="Email for newsletter"
            />
            <button 
              type="submit"
              className="luxury-button px-8 py-4 font-bold tracking-wider whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}