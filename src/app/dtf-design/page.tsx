"use client";

import Link from "next/link";

export default function DTFDesignPage() {
  return (
    <div className="min-h-screen bg-white text-black py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-28">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-widest text-[#d4af37]">DTF DESIGNS</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            Express your unique style with our custom Direct-to-Film printed apparel. 
            Turn your ideas into wearable art.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/shop?category=dtf" 
              className="inline-block bg-[#d4af37] text-white px-10 py-4 text-lg font-bold rounded-full hover:bg-[#b8860b] transition-all tracking-wider"
            >
              SHOP DTF COLLECTION
            </Link>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold text-center mb-20 tracking-wider text-[#d4af37]">HOW OUR DTF PROCESS WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mx-auto mb-8 border-2 border-gray-200 group-hover:border-[#d4af37] transition-colors">
                <span className="text-3xl font-bold text-[#d4af37]">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider text-[#d4af37]">DESIGN CONCEPT</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your vision or choose from our designer templates
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mx-auto mb-8 border-2 border-gray-200 group-hover:border-[#d4af37] transition-colors">
                <span className="text-3xl font-bold text-[#d4af37]">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider text-[#d4af37]">PRINT PREPARATION</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experts prepare your design for DTF printing
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mx-auto mb-8 border-2 border-gray-200 group-hover:border-[#d4af37] transition-colors">
                <span className="text-3xl font-bold text-[#d4af37]">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider text-[#d4af37]">QUALITY PRINTING</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced DTF technology for vibrant, durable prints
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mx-auto mb-8 border-2 border-gray-200 group-hover:border-[#d4af37] transition-colors">
                <span className="text-3xl font-bold text-[#d4af37]">4</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider text-[#d4af37]">DELIVERY</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium garment delivered to your doorstep
              </p>
            </div>
          </div>
        </div>

        {/* Featured DTF Designs */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-wider text-[#d4af37] mb-6">FEATURED DESIGNS</h2>
            <div className="flex justify-center">
              <Link href="/shop?category=dtf" className="text-[#d4af37] hover:text-[#b8860b] transition-colors font-medium tracking-wider luxury-link">
                VIEW ALL →
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Design 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 border border-gray-200">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800')" }}
                ></div>
                <div className="absolute top-4 right-4 bg-[#d4af37] text-white text-sm font-bold px-4 py-2 rounded-full tracking-wider">
                  POPULAR
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Abstract Geometric</h3>
              <p className="text-gray-600">From £29.99</p>
            </div>
            
            {/* Design 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 border border-gray-200">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606109008399-150715617d12?q=80&w=800')" }}
                ></div>
              </div>
              <h3 className="font-bold text-xl mb-1">Urban Graffiti</h3>
              <p className="text-gray-600">From £29.99</p>
            </div>
            
            {/* Design 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 border border-gray-200">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529361139303-cee701574c2d?q=80&w=800')" }}
                ></div>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full tracking-wider">
                  NEW
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Minimalist Logo</h3>
              <p className="text-gray-600">From £29.99</p>
            </div>
          </div>
        </div>

        {/* Custom Design Section */}
        <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-12 mb-28 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-wider text-[#d4af37] text-center lg:text-left">PRINT ON YOUR TEE</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Have your own design? We can bring it to life on our premium garments using our advanced DTF printing technology. 
                Whether it{`'`}s a personal logo, artwork, or custom text, we{`'`}ll ensure the highest quality print that lasts.
              </p>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">High-resolution printing for crisp details</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Vibrant colors that won{`'`}t fade</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Fast turnaround time</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Free design consultation</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block bg-[#d4af37] text-white px-10 py-4 font-bold rounded-full hover:bg-[#b8860b] transition-all tracking-wider"
              >
                GET STARTED
              </Link>
            </div>
            <div>
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-2xl border border-gray-200"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?q=80&w=800')" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Design Gallery */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-wider text-[#d4af37]">DESIGN INSPIRATION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square rounded-2xl overflow-hidden group border border-gray-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-${item === 1 ? '1523381140794-a1eef18a37c7' : item === 2 ? '1604671801908-6f0c6a092c05' : item === 3 ? '1606109008399-150715617d12' : item === 4 ? '1529361139303-cee701574c2d' : item === 5 ? '1521572163474-6864f9cf17ab' : item === 6 ? '1576566588028-4147f3842f27' : item === 7 ? '1591047139829-d91aecb6caea' : '1546439874-0cdea0a09631'}?q=80&w=400')` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}