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
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  
  // Sample products data
  const products: Product[] = [
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
    },
    {
      id: 5,
      name: "Minimalist Tee",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800",
      category: "tshirts"
    },
    {
      id: 6,
      name: "Oversized Hoodie",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=800",
      category: "hoodies",
      isNew: true
    },
    {
      id: 7,
      name: "Custom DTF Print",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1606109008399-150715617d12?q=80&w=800",
      category: "dtf"
    },
    {
      id: 8,
      name: "Essential Crew Neck",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800",
      category: "tshirts"
    }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">SHOP COLLECTION</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover our premium streetwear collection featuring high-quality tees, hoodies, and custom DTF designs.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            <button 
              className={`px-6 py-3 rounded-full font-medium tracking-wider ${selectedCategory === "all" ? "bg-white text-black" : "bg-gray-900 text-white hover:bg-gray-800"}`}
              onClick={() => setSelectedCategory("all")}
            >
              ALL
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium tracking-wider ${selectedCategory === "tshirts" ? "bg-white text-black" : "bg-gray-900 text-white hover:bg-gray-800"}`}
              onClick={() => setSelectedCategory("tshirts")}
            >
              T-SHIRTS
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium tracking-wider ${selectedCategory === "hoodies" ? "bg-white text-black" : "bg-gray-900 text-white hover:bg-gray-800"}`}
              onClick={() => setSelectedCategory("hoodies")}
            >
              HOODIES
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium tracking-wider ${selectedCategory === "dtf" ? "bg-white text-black" : "bg-gray-900 text-white hover:bg-gray-800"}`}
              onClick={() => setSelectedCategory("dtf")}
            >
              DTF DESIGNS
            </button>
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 font-medium">SORT BY:</span>
            <select 
              className="bg-gray-900 text-white border border-gray-800 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-white font-medium"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products by"
            >
              <option value="featured">FEATURED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="newest">NEWEST ARRIVALS</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-32">
            <h3 className="text-2xl font-bold mb-6">NO PRODUCTS FOUND</h3>
            <p className="text-gray-400 mb-10">Try selecting a different category</p>
            <button 
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors tracking-wider"
              onClick={() => setSelectedCategory("all")}
            >
              VIEW ALL PRODUCTS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  
                  {/* Badges */}
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-white text-black text-sm font-bold px-4 py-2 rounded-full tracking-wider">
                      NEW
                    </div>
                  )}
                  {product.isOnSale && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full tracking-wider">
                      SALE
                    </div>
                  )}
                  
                  {/* Quick Add to Cart */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-40">
                    <button className="bg-white text-black px-8 py-3 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 tracking-wider">
                      QUICK ADD
                    </button>
                  </div>
                </div>
                
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-400">
                    {product.originalPrice && (
                      <>
                        <span className="line-through text-gray-600 mr-2">£{product.originalPrice.toFixed(2)}</span>
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
        <div className="text-center mt-20">
          <button className="border-2 border-white text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-colors tracking-wider">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}