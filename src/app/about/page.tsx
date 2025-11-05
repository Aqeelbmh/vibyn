"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-28">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-widest">ABOUT VIBYN</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            More than just clothing - we{`'`}re a lifestyle brand that celebrates individuality, creativity, and authentic expression.
          </p>
        </div>

        {/* Origin Story - As the main body content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-wider text-[#d4af37]">THE VIBYN STORY</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Clothes That Carry Your Energy
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              The VIBYN story started in 2025 when we realized a simple truth about fashion: every brand talked about trends, but no one talked about energy.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              We believe the clothes we wear should be more than just fabric. They should be a canvas reflecting our mood, our ambition, and our story. We wanted to create clothes for people who feel a current running through them and refuse to silence it.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              VIBYN began with a few hoodies, printed back home in Sri Lanka. They were high-quality pieces, made for people who carry their vibe wherever they go.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From our roots in Sri Lanka to connecting with the streets of the UK, VIBYN exists to remind you to feel your fire, stay authentic, and always own the energy you walk with.
            </p>
          </div>
          <div>
            <div 
              className="h-96 bg-cover bg-center rounded-2xl shadow-2xl border border-[#d4af37]/30 backdrop-blur-sm"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.4)" }}
            >
              <div className="w-full h-full rounded-2xl flex items-center justify-center">
                <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-xl">
                  <h3 className="text-2xl font-bold text-[#d4af37] mb-2">From Sri Lanka to the UK</h3>
                  <p className="text-white">Our journey of energy and authenticity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
          <div className="order-2 lg:order-1">
            <div 
              className="h-96 bg-cover bg-center rounded-2xl shadow-2xl border border-[#d4af37]/30 backdrop-blur-sm"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800')", backgroundBlendMode: "overlay", backgroundColor: "rgba(44, 24, 16, 0.4)" }}
            >
              <div className="w-full h-full rounded-2xl flex items-center justify-center">
                <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-xl">
                  <h3 className="text-2xl font-bold text-[#d4af37] mb-2">Our Mission</h3>
                  <p className="text-white">Empowering authentic self-expression</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-8 tracking-wider text-[#d4af37]">OUR MISSION</h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              Our mission is to create affordable streetwear that helps young adults express their authentic vibe — with premium quality and ethical production. We empower individuals to express their unique identity through premium streetwear that combines comfort, style, and authenticity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We strive to create pieces that not only look good but also make our customers feel confident in their own skin. We envision a world where fashion is a form of art, where clothing serves as a canvas for personal expression, and where everyone has the freedom to showcase their vibe without compromise.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center py-20 mb-28">
          <h2 className="text-4xl font-bold mb-20 tracking-wider text-[#d4af37]">OUR CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-[#d4af37] transition-colors">
              <div className="text-6xl mb-6 text-[#d4af37]">✨</div>
              <h3 className="text-2xl font-bold mb-5 tracking-wider">AUTHENTICITY</h3>
              <p className="text-gray-400 leading-relaxed">
                We stay true to our roots and beliefs, creating genuine products that reflect our brand{`'`}s identity and your unique personality.
              </p>
            </div>
            <div className="p-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-[#d4af37] transition-colors">
              <div className="text-6xl mb-6 text-[#d4af37]">🏆</div>
              <h3 className="text-2xl font-bold mb-5 tracking-wider">QUALITY</h3>
              <p className="text-gray-400 leading-relaxed">
                Premium materials and craftsmanship ensure our pieces not only look good but feel amazing and last long.
              </p>
            </div>
            <div className="p-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-[#d4af37] transition-colors">
              <div className="text-6xl mb-6 text-[#d4af37]">🤝</div>
              <h3 className="text-2xl font-bold mb-5 tracking-wider">CONNECTION</h3>
              <p className="text-gray-400 leading-relaxed">
                Building meaningful relationships with our community through fashion that speaks to shared values and experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center mb-20 tracking-wider">MEET OUR TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-48 h-48 rounded-full mx-auto mb-8 bg-cover bg-center border-4 border-gray-800 group-hover:border-[#d4af37] transition-colors" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400')" }}></div>
              <h3 className="text-2xl font-bold mb-2">James Wilson</h3>
              <p className="text-gray-400 mb-4">Founder & Creative Director</p>
              <p className="text-gray-500 leading-relaxed">Visionary leader with a passion for streetwear culture and design innovation.</p>
            </div>
            <div className="text-center group">
              <div className="w-48 h-48 rounded-full mx-auto mb-8 bg-cover bg-center border-4 border-gray-800 group-hover:border-[#d4af37] transition-colors" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400')" }}></div>
              <h3 className="text-2xl font-bold mb-2">Michael Chen</h3>
              <p className="text-gray-400 mb-4">Head of Design</p>
              <p className="text-gray-500 leading-relaxed">Creative genius transforming concepts into wearable art with attention to detail.</p>
            </div>
            <div className="text-center group">
              <div className="w-48 h-48 rounded-full mx-auto mb-8 bg-cover bg-center border-4 border-gray-800 group-hover:border-[#d4af37] transition-colors" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400')" }}></div>
              <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-gray-400 mb-4">Marketing Director</p>
              <p className="text-gray-500 leading-relaxed">Connecting our brand with our community through authentic storytelling.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}