import React from 'react';


const ServicesSection2 = () => {
  return (
    <section className=" servicesSection text-white py-16 h-screen">
      <div className="container thefirstServices mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 mb-8">Explore the range of services we offer to our clients.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                className="h-60 w-60 rounded-full p-1"
                src='./src/assets/truck.jpeg'
                alt=''
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Heavy Duty Services</h3>
            <p className="text-gray-300 mb-4">Provision of heavy duty professionals with high quality machinery to get the job done.</p>
            <a href="/services" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                className="h-60 w-60 rounded-full p-1"
                src='./src/assets/car driver.jpeg'
                alt=''
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Motorcycle and Car Servises</h3>
            <p className="text-gray-300 mb-4">Provision of professional drivers with high quality machinery to enhance your transport experience.</p>
            <a href="/services" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                className="h-60 w-60 rounded-full p-1"
                src='./src/assets/cleaning.jpeg'
                alt=''
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cleaning and Disinfection Services</h3>
            <p className="text-gray-300 mb-4">Access to well trained professionals with high quality machinery to make your home or office sparkling clean.</p>
            <a href="/services" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

        </div>

        <div className="mt-8">
          <a href="/services" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
            View More Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection2;