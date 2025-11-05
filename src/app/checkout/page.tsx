"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
    phone: "",
    saveInfo: false,
    createAccount: false,
    password: "",
    newsletter: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Checkout submitted:", formData);
    alert("Order placed successfully!");
  };

  // Order summary data
  const orderItems = [
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

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 5.99;
  const tax = subtotal * 0.2; // 20% VAT
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white text-black py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#0a0a0a]">CHECKOUT</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0a0a0a]">CONTACT INFORMATION</h2>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg font-medium mb-2 text-[#0a0a0a]">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mr-3 h-5 w-5 text-[#d4af37] bg-white border-gray-300 rounded focus:ring-[#d4af37]"
                  />
                  <label htmlFor="newsletter" className="text-gray-700">
                    Email me with news and offers
                  </label>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0a0a0a]">SHIPPING ADDRESS</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-lg font-medium mb-2 text-[#0a0a0a]">FIRST NAME *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-lg font-medium mb-2 text-[#0a0a0a]">LAST NAME *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="address" className="block text-lg font-medium mb-2 text-[#0a0a0a]">ADDRESS *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                    placeholder="Street address"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-lg font-medium mb-2 text-[#0a0a0a]">CITY *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="postcode" className="block text-lg font-medium mb-2 text-[#0a0a0a]">POSTCODE *</label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                      placeholder="Postcode"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="country" className="block text-lg font-medium mb-2 text-[#0a0a0a]">COUNTRY *</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-lg font-medium mb-2 text-[#0a0a0a]">PHONE (OPTIONAL)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                    placeholder="Phone number"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    className="mr-3 h-5 w-5 text-[#d4af37] bg-white border-gray-300 rounded focus:ring-[#d4af37]"
                  />
                  <label htmlFor="saveInfo" className="text-gray-700">
                    Save this information for next time
                  </label>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0a0a0a]">PAYMENT METHOD</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      defaultChecked
                      className="mr-3 h-5 w-5 text-[#d4af37] bg-white border-gray-300 focus:ring-[#d4af37]"
                    />
                    <label htmlFor="card" className="flex items-center">
                      <span className="mr-3">Credit/Debit Card</span>
                      <div className="flex space-x-1">
                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                      </div>
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      className="mr-3 h-5 w-5 text-[#d4af37] bg-white border-gray-300 focus:ring-[#d4af37]"
                    />
                    <label htmlFor="paypal" className="flex items-center">
                      <span className="mr-3">PayPal</span>
                      <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs">P</span>
                      </div>
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="apple"
                      name="payment"
                      className="mr-3 h-5 w-5 text-[#d4af37] bg-white border-gray-300 focus:ring-[#d4af37]"
                    />
                    <label htmlFor="apple" className="flex items-center">
                      <span className="mr-3">Apple Pay</span>
                      <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs">A</span>
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* Card Details */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="cardNumber" className="block text-lg font-medium mb-2 text-[#0a0a0a]">CARD NUMBER</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="expiry" className="block text-lg font-medium mb-2 text-[#0a0a0a]">EXPIRY DATE</label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        placeholder="MM/YY"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-lg font-medium mb-2 text-[#0a0a0a]">CVC</label>
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="123"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Account Creation */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="createAccount"
                    name="createAccount"
                    checked={formData.createAccount}
                    onChange={handleChange}
                    className="mr-3 h-5 w-5 text-[#d4af37] bg-white border-gray-300 rounded focus:ring-[#d4af37]"
                  />
                  <label htmlFor="createAccount" className="text-gray-700">
                    Create an account?
                  </label>
                </div>
                
                {formData.createAccount && (
                  <div className="mt-6">
                    <label htmlFor="password" className="block text-lg font-medium mb-2 text-[#0a0a0a]">PASSWORD</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-lg"
                      placeholder="Create a password"
                    />
                  </div>
                )}
              </div>
              
              {/* Checkout Button */}
              <button
                type="submit"
                className="w-full bg-[#d4af37] text-black py-4 rounded-full font-bold text-lg hover:bg-[#b8860b] transition-colors"
              >
                COMPLETE ORDER
              </button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="border border-gray-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-[#0a0a0a]">ORDER SUMMARY</h2>
              
              {/* Order Items */}
              <div className="space-y-6 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-gray-600 text-sm">Size: {item.size} | Color: {item.color}</p>
                      <p className="font-bold">£{item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <div className="font-bold">£{(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
              
              {/* Order Totals */}
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
              
              {/* Return to Cart */}
              <Link 
                href="/cart" 
                className="inline-flex items-center text-[#d4af37] hover:text-[#b8860b] transition-colors mb-6 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                RETURN TO CART
              </Link>
              
              {/* Secure Checkout */}
              <div className="text-center text-gray-600 text-sm">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 mr-1 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span>SECURE CHECKOUT</span>
                </div>
                <p>Powered by Stripe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}