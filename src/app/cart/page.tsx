"use client";

import Link from "next/link";
import { useState } from "react";

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Premium Cotton Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200",
    size: "M",
    color: "Black",
    quantity: 1
  },
  {
    id: 2,
    name: "Urban Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=200",
    size: "L",
    color: "Grey",
    quantity: 2
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 5.99;
  const tax = subtotal * 0.2; // 20% VAT
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white text-black py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#0a0a0a] text-center">YOUR CART</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4 text-[#0a0a0a]">YOUR CART IS EMPTY</h2>
            <p className="text-gray-600 mb-8">Looks like you haven{`'`}t added anything to your cart yet</p>
            <Link 
              href="/shop" 
              className="inline-block bg-[#d4af37] text-black px-8 py-3 rounded-full font-bold hover:bg-[#b8860b] transition-colors"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex border-b border-gray-200 pb-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                    </div>
                    
                    <div className="flex-grow ml-6">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                          <p className="text-gray-600 text-sm">Size: {item.size} | Color: {item.color}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-[#d4af37] transition-colors"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <button 
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-[#d4af37] transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300 text-sm">
                            {item.quantity}
                          </span>
                          <button 
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-[#d4af37] transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="font-bold text-lg">£{(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-between">
                <Link 
                  href="/shop" 
                  className="inline-flex items-center text-[#d4af37] hover:text-[#b8860b] transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  CONTINUE SHOPPING
                </Link>
                <button 
                  onClick={() => setCartItems([])}
                  className="text-gray-600 hover:text-[#d4af37] transition-colors font-medium"
                >
                  CLEAR CART
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="border border-gray-200 rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-[#0a0a0a]">ORDER SUMMARY</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `£{shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>£{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  href="/checkout" 
                  className="block w-full bg-[#d4af37] text-black text-center py-3 rounded-full font-bold hover:bg-[#b8860b] transition-colors mb-6"
                >
                  PROCEED TO CHECKOUT
                </Link>
                
                <div className="text-center text-gray-600 text-sm">
                  <p className="mb-2">or</p>
                  <button className="mt-2 text-[#d4af37] hover:text-[#b8860b] transition-colors font-medium">
                    Pay with
                  </button>
                  <div className="flex justify-center space-x-4 mt-4">
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:border-[#d4af37] transition-colors" aria-label="PayPal">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.2 18c-.3-.3-.5-.7-.5-1.2V8.5c0-.4.3-.8.8-1 .4-.2.9-.1 1.2.2l8.2 8.2V7.8c0-.4.3-.8.8-1 .4-.2.9-.1 1.2.2.3.3.5.7.5 1.2v8.3c0 .4-.3.8-.8 1-.4.2-.9.1-1.2-.2z"/>
                      </svg>
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:border-[#d4af37] transition-colors" aria-label="Apple Pay">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.1 15.4c.1.9-.1 1.9-.7 2.7-.5.7-1.3 1.3-2.3 1.5-1 .2-2.1 0-3-.5-.9-.5-1.6-1.3-2-2.3-.4-1-.3-2.1.2-3 .5-.9 1.3-1.6 2.3-2 .4-.2.9-.3 1.3-.3.3 0 .6 0 .9.1.9.2 1.7.7 2.3 1.4.6.7.9 1.6.9 2.5zm-3.6-8c.3-.4.5-.9.5-1.5 0-.6-.2-1.1-.5-1.5-.3-.4-.8-.6-1.3-.6-.5 0-1 .2-1.3.6-.3.4-.5.9-.5 1.5 0 .6.2 1.1.5 1.5.3.4.8.6 1.3.6.5 0 1-.2 1.3-.6zm6.5 6.1c0-2.1-.6-3.9-1.8-5.4-1.2-1.5-2.8-2.3-4.8-2.3-1.2 0-2.3.3-3.3.9-1 .6-1.8 1.4-2.4 2.4-.6 1-.9 2.1-.9 3.3 0 .9.2 1.7.5 2.5.3.8.8 1.5 1.4 2 .6.5 1.3.9 2.1 1.2.8.3 1.6.4 2.5.4.9 0 1.7-.1 2.5-.4.8-.3 1.5-.7 2.1-1.2.6-.5 1.1-1.2 1.4-2 .3-.8.5-1.6.5-2.5zm-3.6 0c0 1.3-.3 2.3-.9 3.1-.6.8-1.4 1.2-2.4 1.2-.9 0-1.7-.4-2.4-1.2-.6-.8-.9-1.8-.9-3.1 0-1.3.3-2.3.9-3.1.6-.8 1.4-1.2 2.4-1.2.9 0 1.7.4 2.4 1.2.6.8.9 1.8.9 3.1z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-[#0a0a0a]">HAVE A DISCOUNT CODE?</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="flex-grow bg-white border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <button className="bg-gray-200 text-black px-4 py-2 rounded-r-lg font-bold hover:bg-gray-300 transition-colors">
                    APPLY
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}