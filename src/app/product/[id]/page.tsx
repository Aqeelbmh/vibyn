"use client";

import { useState } from "react";
import Link from "next/link";

// Mock product data
const product = {
  id: 1,
  name: "Premium Cotton Tee",
  price: 29.99,
  originalPrice: 34.99,
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
    "https://images.unsplash.com/photo-1521572228106-753887670104?q=80&w=800",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800"
  ],
  description: "Elevate your streetwear game with our Premium Cotton Tee. Made from 100% premium cotton for ultimate comfort and durability. Features our signature VIBYN logo and a relaxed fit that works for any occasion.",
  features: [
    "100% Premium Cotton",
    "Relaxed Fit",
    "Signature VIBYN Logo",
    "Machine Washable",
    "Available in Multiple Colors"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Black", "White", "Grey"],
  inStock: true,
  rating: 4.8,
  reviewCount: 124,
  isOnSale: true
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log("Added to cart:", { 
      productId: product.id, 
      size: selectedSize, 
      color: selectedColor, 
      quantity 
    });
    alert("Product added to cart!");
  };

  return (
    <div className="min-h-screen bg-white text-black py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-[#d4af37] transition-colors">Home</Link> / 
          <Link href="/shop" className="text-gray-600 hover:text-[#d4af37] ml-2 transition-colors">Shop</Link> / 
          <span className="text-gray-900 ml-2">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square mb-6 rounded-lg overflow-hidden shadow-lg">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${product.images[selectedImage]}')` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === index ? "border-[#d4af37]" : "border-gray-200"} transition-all hover:opacity-80`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${image}')` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 text-[#0a0a0a]">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl font-bold">£{product.price.toFixed(2)}</div>
                {product.originalPrice && (
                  <div className="text-gray-500 line-through text-lg ml-3">£{product.originalPrice.toFixed(2)}</div>
                )}
                {product.isOnSale && (
                  <div className="ml-4 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                )}
              </div>
            </div>

            <p className="text-gray-700 mb-8">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#0a0a0a]">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? "border-[#d4af37]" : "border-gray-300"} transition-all hover:opacity-80`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color ${color}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#0a0a0a]">Size</h3>
                <Link href="#" className="text-sm text-[#d4af37] hover:text-[#b8860b] underline">
                  Size Guide
                </Link>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-3 px-2 border rounded font-medium transition-all ${selectedSize === size ? "bg-[#d4af37] text-black border-[#d4af37]" : "border-gray-300 hover:border-[#d4af37]"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#0a0a0a]">Quantity</h3>
              <div className="flex items-center">
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-[#d4af37] transition-all"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
                  {quantity}
                </span>
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-[#d4af37] transition-all"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                className="flex-1 bg-[#d4af37] text-black py-3 px-6 rounded-full font-bold text-lg hover:bg-[#b8860b] transition-colors"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
              </button>
              <button className="flex-1 border-2 border-[#d4af37] text-[#d4af37] py-3 px-6 rounded-full font-bold text-lg hover:bg-[#d4af37] hover:text-black transition-colors">
                ADD TO WISHLIST
              </button>
            </div>

            {/* Product Info Tabs */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex space-x-8 mb-6">
                <button 
                  className={`pb-2 font-medium ${activeTab === "description" ? "text-[#d4af37] border-b-2 border-[#d4af37]" : "text-gray-600"}`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button 
                  className={`pb-2 font-medium ${activeTab === "features" ? "text-[#d4af37] border-b-2 border-[#d4af37]" : "text-gray-600"}`}
                  onClick={() => setActiveTab("features")}
                >
                  Features
                </button>
                <button 
                  className={`pb-2 font-medium ${activeTab === "reviews" ? "text-[#d4af37] border-b-2 border-[#d4af37]" : "text-gray-600"}`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
              </div>
              
              {activeTab === "description" && (
                <p className="text-gray-700">{product.description}</p>
              )}
              
              {activeTab === "features" && (
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h4 className="font-bold">Alex Johnson</h4>
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <p className="text-gray-700">
                      The quality of this tee is exceptional! The fabric is soft and the fit is perfect. 
                      I{`'`}ve received so many compliments when wearing it. Highly recommend!
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h4 className="font-bold">Sam Wilson</h4>
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">1 week ago</span>
                    </div>
                    <p className="text-gray-700">
                      Fast shipping and the product arrived exactly as described. The print quality is 
                      excellent and hasn{`'`}t faded after multiple washes. Will definitely buy again!
                    </p>
                  </div>
                  
                  <button className="text-[#d4af37] hover:text-[#b8860b] font-medium">
                    Load more reviews
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-[#0a0a0a]">YOU MAY ALSO LIKE</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800')" }}
                ></div>
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  SALE
                </div>
              </div>
              <Link href="/product/2" className="block">
                <h3 className="font-bold mb-1">Urban Hoodie</h3>
                <p className="text-gray-700">
                  <span className="line-through text-gray-400 mr-2">£64.99</span>
                  £59.99
                </p>
              </Link>
            </div>
            
            {/* Product 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800')" }}
                ></div>
                <div className="absolute top-3 left-3 bg-[#d4af37] text-black text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </div>
              </div>
              <Link href="/product/3" className="block">
                <h3 className="font-bold mb-1">DTF Graphic Tee</h3>
                <p className="text-gray-700">
                  <span className="line-through text-gray-400 mr-2">£34.99</span>
                  £27.99
                </p>
              </Link>
            </div>
            
            {/* Product 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521572228106-753887670104?q=80&w=800')" }}
                ></div>
              </div>
              <Link href="/product/4" className="block">
                <h3 className="font-bold mb-1">Essential Crew Neck</h3>
                <p className="text-gray-700">£39.99</p>
              </Link>
            </div>
            
            {/* Product 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546439874-0cdea0a09631?q=80&w=800" }}
                ></div>
              </div>
              <Link href="/product/5" className="block">
                <h3 className="font-bold mb-1">Signature Hoodie</h3>
                <p className="text-gray-700">£64.99</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}