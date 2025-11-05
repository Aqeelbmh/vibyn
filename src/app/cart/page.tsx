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
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 tracking-widest">YOUR CART</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-32">
            <h2 className="text-3xl font-bold mb-6 tracking-wider">YOUR CART IS EMPTY</h2>
            <p className="text-gray-400 mb-12 text-xl">Looks like you haven{`'`}t added anything to your cart yet</p>
            <Link 
              href="/shop" 
              className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors tracking-wider"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
                    <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                    </div>
                    
                    <div className="flex-grow ml-8">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                          <p className="text-gray-400 text-lg">Size: {item.size} | Color: {item.color}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-white transition-colors"
                          aria-label="Remove item"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                          <button 
                            className="w-12 h-12 flex items-center justify-center border border-gray-600 hover:border-white transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="w-16 h-12 flex items-center justify-center border-t border-b border-gray-600 text-lg">
                            {item.quantity}
                          </span>
                          <button 
                            className="w-12 h-12 flex items-center justify-center border border-gray-600 hover:border-white transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="font-bold text-xl">£{(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-between">
                <Link 
                  href="/shop" 
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-medium tracking-wider"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  CONTINUE SHOPPING
                </Link>
                <button 
                  onClick={() => setCartItems([])}
                  className="text-gray-400 hover:text-white transition-colors font-medium tracking-wider"
                >
                  CLEAR CART
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="border border-gray-800 rounded-2xl p-8 sticky top-24 bg-gradient-to-b from-gray-900 to-black">
                <h2 className="text-3xl font-bold mb-8 tracking-wider">ORDER SUMMARY</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `£{shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Tax</span>
                    <span>£{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-800 pt-6 flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  href="/checkout" 
                  className="block w-full bg-white text-black text-center py-5 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors mb-6 tracking-wider"
                >
                  PROCEED TO CHECKOUT
                </Link>
                
                <div className="text-center text-gray-500">
                  <p className="mb-2">or</p>
                  <button className="mt-2 text-gray-400 hover:text-white transition-colors font-medium tracking-wider">
                    Pay with
                  </button>
                  <div className="flex justify-center space-x-6 mt-5">
                    <button className="flex items-center justify-center w-14 h-14 border border-gray-700 rounded-xl hover:border-white transition-colors" aria-label="PayPal">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.2 18c-.3-.3-.5-.7-.5-1.2V8.5c0-.4.3-.8.8-1 .4-.2.9-.1 1.2.2l8.2 8.2V7.8c0-.4.3-.8.8-1 .4-.2.9-.1 1.2.2.3.3.5.7.5 1.2v8.3c0 .4-.3.8-.8 1-.4.2-.9.1-1.2-.2L9 9.1v8.1c0 .4-.3.8-.8 1-.4.2-.9.1-1.2-.2z"/>
                      </svg>
                    </button>
                    <button className="flex items-center justify-center w-14 h-14 border border-gray-700 rounded-xl hover:border-white transition-colors" aria-label="Apple Pay">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.1 15.4c.1.9-.1 1.9-.7 2.7-.5.7-1.3 1.3-2.3 1.5-1 .2-2.1 0-3-.5-.9-.5-1.6-1.3-2-2.3-.4-1-.3-2.1.2-3 .5-.9 1.3-1.6 2.3-2 .4-.2.9-.3 1.3-.3.3 0 .6 0 .9.1.9.2 1.7.7 2.3 1.4.6.7.9 1.6.9 2.5zm-3.6-8c.3-.4.5-.9.5-1.5 0-.6-.2-1.1-.5-1.5-.3-.4-.8-.6-1.3-.6-.5 0-1 .2-1.3.6-.3.4-.5.9-.5 1.5 0 .6.2 1.1.5 1.5.3.4.8.6 1.3.6.5 0 1-.2 1.3-.6zm6.5 6.1c0-2.1-.6-3.9-1.8-5.4-1.2-1.5-2.8-2.3-4.8-2.3-1.2 0-2.3.3-3.3.9-1 .6-1.8 1.4-2.4 2.4-.6 1-.9 2.1-.9 3.3 0 .9.2 1.7.5 2.5.3.8.8 1.5 1.4 2 .6.5 1.3.9 2.1 1.2.8.3 1.6.4 2.5.4.9 0 1.7-.1 2.5-.4.8-.3 1.5-.7 2.1-1.2.6-.5 1.1-1.2 1.4-2 .3-.8.5-1.6.5-2.5zm-3.6 0c0 1.3-.3 2.3-.9 3.1-.6.8-1.4 1.2-2.4 1.2-.9 0-1.7-.4-2.4-1.2-.6-.8-.9-1.8-.9-3.1 0-1.3.3-2.3.9-3.1.6-.8 1.4-1.2 2.4-1.2.9 0 1.7.4 2.4 1.2.6.8.9 1.8.9 3.1z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
                <h3 className="font-bold text-xl mb-5 tracking-wider">HAVE A DISCOUNT CODE?</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="flex-grow bg-black border border-gray-800 rounded-l-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-white text-lg"
                  />
                  <button className="bg-white text-black px-6 py-4 rounded-r-xl font-bold hover:bg-gray-200 transition-colors tracking-wider">
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