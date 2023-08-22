import React from 'react';

const TrustSection = () => {
  return (
    <section className="flex trust items-center justify-center h-screen text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-blue-600 font-semibold mb-4">Why Trust Us</h2>
        <p className="text-lg mb-8">
          Trust is the cornerstone of any successful partnership, and at QuickService, we've built our foundation upon it. When you choose us, you're not just choosing a service provider; you're choosing a reliable collaborator that is committed to your success. Our unwavering dedication to earning and maintaining your trust is at the heart of everything we do:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="text-2xl mb-2 text-blue-400">Expert Professionals</div>
            <p>
              Our team is comprised of industry experts, each bringing a unique set of skills and experiences to the table. From seasoned veterans to emerging talents, we have cultivated a diverse group of professionals who share a common goal: to deliver exceptional results. Our experts are not just adept at what they do; they're also passionate about staying at the forefront of industry trends and innovations.
            </p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2 text-blue-400">Customer Satisfaction</div>
            <p>
              Your satisfaction is our ultimate measure of success. We take the time to listen to your unique needs, challenges, and aspirations. This customer-centric approach allows us to craft tailored solutions that not only meet your expectations but surpass them. We understand that true satisfaction is more than delivering a product; it's about creating an experience that leaves you delighted..
            </p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2 text-blue-400">Proven Track Record</div>
            <p>
              Our journey is defined by a history of successful collaborations. From startups to enterprises, we've partnered with clients across various industries to achieve remarkable outcomes. Our track record is not just a collection of projects; it's a testament to our dedication, expertise, and the trust that clients like you have placed in us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;