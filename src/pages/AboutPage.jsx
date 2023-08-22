import React from 'react';

const AboutPage = () => {
  return (
    <section id='about' className="text-white py-16">
      <div className="words container px-10 mx-auto text-center">
        <h2 className="text-3xl text-indigo-600 font-semibold mb-6">What We Do</h2>
        <p className="text-lg mb-8">
          We are a dedicated team of professionals providing a wide range of services to cater to all your needs. With years of experience and expertise, we aim to deliver the best solutions to our clients.
        </p>
        <p className="text-lg">
          Whether it's home improvement, repairs, or any other service, we've got you covered. Our commitment to quality and customer satisfaction sets us apart in the industry.
        </p>
      </div>
      <div className='image'></div>
    </section>
  );
};

export default AboutPage;