"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 tracking-widest text-[#d4af37]">PRIVACY POLICY</h1>
        <p className="text-gray-700 mb-16 text-lg">Last updated: {new Date().toLocaleDateString(`en-GB`)}</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8 leading-relaxed">
            VIBYN ({`"`}we{`"`}, {`"`}our{`"`}, or {`"`}us{`"`}) is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website vibyn.co.uk (the {`"`}Site{`"`}) and make purchases 
            from us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the Site or use our services.
          </p>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">INFORMATION WE COLLECT</h2>
          
          <h3 className="text-2xl font-bold mt-10 mb-6 tracking-wider text-[#d4af37]">PERSONAL INFORMATION</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We may collect personally identifiable information, such as your:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Shipping address</li>
            <li>Billing address</li>
            <li>Payment information</li>
            <li>Order history</li>
          </ul>
          
          <h3 className="text-2xl font-bold mt-10 mb-6 tracking-wider text-[#d4af37]">NON-PERSONAL INFORMATION</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We may also collect non-personal information about you automatically when you visit our Site, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Internet service provider</li>
            <li>IP address</li>
            <li>Clickstream data</li>
            <li>Time and date of visit</li>
            <li>Pages viewed</li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">HOW WE USE YOUR INFORMATION</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We may use the information we collect from you for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3">
            <li>To process and fulfill your orders</li>
            <li>To send you order confirmations and shipping notifications</li>
            <li>To communicate with you about your account or orders</li>
            <li>To improve our website and customer service</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To personalize your experience on our Site</li>
            <li>To detect and prevent fraud</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">HOW WE PROTECT YOUR INFORMATION</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We implement a variety of security measures to maintain the safety of your personal information. Your personal 
            information is contained behind secured networks and is only accessible by a limited number of persons who have 
            special access rights to such systems, and are required to keep the information confidential. All payment 
            transactions are processed through secure payment gateways and are never stored on our servers.
          </p>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">COOKIES</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our Site and hold certain information. 
            Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct 
            your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept 
            cookies, you may not be able to use some portions of our Site.
          </p>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">THIRD-PARTY SERVICES</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We may employ third-party companies and individuals to facilitate our services, to provide the services on our 
            behalf, to perform site-related services, or to assist us in analyzing how our service is used. These third 
            parties have access to your personal information only to perform these tasks on our behalf and are obligated 
            not to disclose or use it for any other purpose.
          </p>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">DATA RETENTION</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We will retain your personal information only for as long as is necessary for the purposes set out in this 
            Privacy Policy. We will retain and use your personal information to the extent necessary to comply with our 
            legal obligations, resolve disputes, and enforce our policies.
          </p>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">YOUR RIGHTS</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Under the UK General Data Protection Regulation (UK GDPR), you have the following rights:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3">
            <li>The right to access, update or delete the information we have on you</li>
            <li>The right of rectification</li>
            <li>The right to object</li>
            <li>The right of restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">CHANGES TO THIS PRIVACY POLICY</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the {`"`}Last updated{`"`} date. You are advised to review this Privacy Policy 
            periodically for any changes.
          </p>
          
          <h2 className="text-3xl font-bold mt-16 mb-8 tracking-wider text-[#d4af37]">CONTACT US</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3">
            <li>By email: privacy@vibyn.co.uk</li>
            <li>By phone: +44 20 7123 4567</li>
            <li>By mail: VIBYN Privacy Officer, 123 Fashion Street, London, UK E1 6LT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}