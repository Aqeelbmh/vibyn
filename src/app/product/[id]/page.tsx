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
  reviewCount: 124
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log("Added to cart:", { 
      productId: product.id, 
      size: selectedSize, 
      color: selectedColor, 
      quantity 
    });
  };

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-12 text-sm tracking-wider">
          <Link href="/" className="text-gray-600 hover:text-[#d4af37] transition-colors">HOME</Link> / 
          <Link href="/shop" className="text-gray-600 hover:text-[#d4af37] ml-2 transition-colors">SHOP</Link> / 
          <span className="text-[#d4af37] ml-2">{product.name.toUpperCase()}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${product.images[selectedImage]}')` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-2 ${selectedImage === index ? "border-[#d4af37]" : "border-gray-200"} transition-all hover:opacity-80`}
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
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-4 tracking-wider text-[#d4af37]">{product.name.toUpperCase()}</h1>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-6 h-6 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-3 text-gray-600">({product.reviewCount} REVIEWS)</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold">£{product.price.toFixed(2)}</div>
                {product.originalPrice && (
                  <div className="text-gray-500 line-through text-lg">£{product.originalPrice.toFixed(2)}</div>
                )}
              </div>
            </div>

            <p className="text-gray-700 mb-10 text-lg leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 tracking-wider text-[#d4af37]">COLOR: {selectedColor.toUpperCase()}</h3>
              <div className="flex space-x-4">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-12 h-12 rounded-full border-2 ${selectedColor === color ? "border-[#d4af37]" : "border-gray-300"} transition-all hover:opacity-80`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color ${color}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 tracking-wider text-[#d4af37]">SIZE</h3>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-4 px-2 border rounded-lg font-medium transition-all ${selectedSize === size ? "bg-[#d4af37] text-white border-[#d4af37]" : "border-gray-300 hover:border-[#d4af37]"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link href="#" className="inline-block mt-4 text-sm text-[#d4af37] hover:text-[#b8860b] underline tracking-wider">
                SIZE GUIDE
              </Link>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-4 tracking-wider text-[#d4af37]">QUANTITY</h3>
              <div className="flex items-center">
                <button 
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-[#d4af37] transition-all"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-16 h-12 flex items-center justify-center border-t border-b border-gray-300 text-lg">
                  {quantity}
                </span>
                <button 
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-[#d4af37] transition-all"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                className="flex-1 bg-[#d4af37] text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-[#b8860b] transition-colors tracking-wider"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
              </button>
              <button className="flex-1 border-2 border-[#d4af37] text-[#d4af37] py-4 px-8 rounded-full font-bold text-lg hover:bg-[#d4af37] hover:text-white transition-colors tracking-wider">
                ADD TO WISHLIST
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xl font-semibold mb-6 tracking-wider text-[#d4af37]">PRODUCT FEATURES</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold mb-12 tracking-wider text-[#d4af37]">CUSTOMER REVIEWS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Review 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-[#d4af37] transition-colors">
              <div className="flex justify-between mb-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Alex Johnson</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-gray-500">2 DAYS AGO</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The quality of this tee is exceptional! The fabric is soft and the fit is perfect. 
                I{`'`}ve received so many compliments when wearing it. Highly recommend!
              </p>
            </div>
            
            {/* Review 2 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-[#d4af37] transition-colors">
              <div className="flex justify-between mb-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Sam Wilson</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-gray-500">1 WEEK AGO</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Fast shipping and the product arrived exactly as described. The print quality is 
                excellent and hasn{`'`}t faded after multiple washes. Will definitely buy again!
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full font-medium hover:bg-[#d4af37] hover:text-white transition-colors tracking-wider">
              LOAD MORE REVIEWS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}