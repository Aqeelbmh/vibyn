"use client";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 tracking-widest text-[#d4af37]">TERMS AND CONDITIONS</h1>
        <p className="text-gray-700 mb-16 text-lg">Last updated: {new Date().toLocaleDateString(`en-GB`)}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">1. INTRODUCTION</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Welcome to VIBYN. These terms and conditions outline the rules and regulations for the use of VIBYN{`'`}s Website, 
            located at vibyn.co.uk. By accessing this website we assume you accept these terms and conditions. Do not continue 
            to use VIBYN if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">2. INTELLECTUAL PROPERTY</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Unless otherwise stated, VIBYN and/or its licensors own the intellectual property rights for all material on VIBYN. 
            All intellectual property rights are reserved. You may access this from VIBYN for your own personal use subjected 
            to restrictions set in these terms and conditions.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">3. USER RESPONSIBILITIES</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            As a user of our website, you agree not to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3">
            <li>Republish material from VIBYN</li>
            <li>Sell, rent or sub-license material from VIBYN</li>
            <li>Reproduce, duplicate or copy material from VIBYN</li>
            <li>Redistribute content from VIBYN</li>
            <li>Engage in any data mining, data harvesting, data extracting or any other similar activity</li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">4. ORDERS AND PAYMENTS</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            By placing an order through our website, you are making an offer to purchase products. All orders are subject to 
            acceptance and availability. We reserve the right to refuse any order for any reason. Payment must be received 
            in full before goods are dispatched. We accept major credit cards, PayPal, and Apple Pay.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">5. PRICING AND AVAILABILITY</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            All prices are in GBP and include VAT where applicable. We make every effort to display accurate pricing 
            information, but errors may occur. We reserve the right to correct any pricing errors and cancel orders where 
            necessary. Product availability is subject to change without notice.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">6. SHIPPING AND DELIVERY</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We offer shipping within the UK and internationally. Delivery times are estimates and not guaranteed. Risk of 
            loss and title for items purchased from us pass to you upon our delivery of the items to the carrier. We are 
            not responsible for delays caused by customs, weather, or other factors beyond our control.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">7. RETURNS AND REFUNDS</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We offer a 30-day return policy for unworn, unwashed items with original tags attached. Items must be in 
            resalable condition. Sale items may be subject to different return policies. Shipping costs are non-refundable. 
            To initiate a return, please contact our customer service team.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">8. LIMITATION OF LIABILITY</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            In no event shall VIBYN, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for 
            any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of 
            profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability 
            to access or use the service.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">9. GOVERNING LAW</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard 
            to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be 
            considered a waiver of those rights.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">10. CHANGES TO TERMS</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
            material, we will provide at least 30 days{`'`} notice prior to any new terms taking effect. What constitutes a 
            material change will be determined at our sole discretion.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wider text-[#d4af37]">11. CONTACT INFORMATION</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3">
            <li>By email: terms@vibyn.co.uk</li>
            <li>By phone: +44 20 7123 4567</li>
            <li>By mail: VIBYN Terms Officer, 123 Fashion Street, London, UK E1 6LT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}