"use client";

import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  colors: string[];
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  
  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Cotton Tee",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      category: "tshirts",
      isNew: true,
      colors: ["Black", "White", "Grey"]
    },
    {
      id: 2,
      name: "Urban Hoodie",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
      category: "hoodies",
      colors: ["Black", "Grey"]
    },
    {
      id: 3,
      name: "DTF Graphic Tee",
      price: 27.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800",
      category: "dtf",
      isOnSale: true,
      colors: ["Black", "White"]
    },
    {
      id: 4,
      name: "Signature Hoodie",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1546439874-0cdea0a09631?q=80&w=800",
      category: "hoodies",
      colors: ["Black", "Grey", "Brown"]
    },
    {
      id: 5,
      name: "Minimalist Tee",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800",
      category: "tshirts",
      colors: ["Black", "White"]
    },
    {
      id: 6,
      name: "Oversized Hoodie",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=800",
      category: "hoodies",
      isNew: true,
      colors: ["Black", "Grey"]
    },
    {
      id: 7,
      name: "Custom DTF Print",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1606109008399-150715617d12?q=80&w=800",
      category: "dtf",
      colors: ["Black", "White", "Grey"]
    },
    {
      id: 8,
      name: "Essential Crew Neck",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800",
      category: "tshirts",
      colors: ["Black", "White", "Grey"]
    }
  ];

  // Get unique categories and colors
  const categories = ["all", ...new Set(products.map(product => product.category))];
  const colors = ["all", ...new Set(products.flatMap(product => product.colors))];

  // Filter products based on selected category and color
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const colorMatch = selectedColor === "all" || product.colors.includes(selectedColor);
    return categoryMatch && colorMatch;
  });

  return (
    <div className="min-h-screen bg-white text-black py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-[#0a0a0a]">ALL PRODUCTS</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium streetwear collection featuring high-quality tees, hoodies, and custom DTF designs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-10 gap-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="font-medium text-gray-700">Category:</span>
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  selectedCategory === category 
                    ? "bg-[#d4af37] text-black" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="font-medium text-gray-700">Color:</span>
            {colors.map((color) => (
              <button 
                key={color}
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  selectedColor === color 
                    ? "bg-[#d4af37] text-black" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select 
              className="bg-white text-black border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-medium text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products by"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4 text-[#0a0a0a]">NO PRODUCTS FOUND</h3>
            <p className="text-gray-600 mb-8">Try selecting different filters</p>
            <button 
              className="bg-[#d4af37] text-black px-6 py-3 rounded-full font-bold hover:bg-[#b8860b] transition-colors mx-auto"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedColor("all");
              }}
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  
                  {/* Badges */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                  {product.isOnSale && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      SALE
                    </div>
                  )}
                  
                  {/* Quick Add to Cart */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-30">
                    <button className="bg-[#d4af37] text-black px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      QUICK ADD
                    </button>
                  </div>
                </div>
                
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="font-bold text-lg mb-1 text-black">{product.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.colors.map((color) => (
                      <span key={color} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color.toLowerCase() }}></span>
                    ))}
                  </div>
                  <p className="text-gray-700">
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
        )}

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full font-bold hover:bg-[#d4af37] hover:text-black transition-colors">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}