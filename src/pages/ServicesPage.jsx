import React from 'react';

const serviceProviders = [
  {
    name: 'Heavy Duty Services',
    description: 'Ride-hailing service',
    image: './src/assets/truck.jpeg',
  },
  {
    name: 'Motorcycle and Car Servises',
    description: 'Motorcycle ride-hailing service',
    image: './src/assets/car driver.jpeg',
  },
  {
    name: 'Cleaning Services',
    description: 'Professional cleaning services',
    image: './src/assets/cleaning.jpeg',
  },
  {
    name: 'Electricians',
    description: 'Skilled electricians for electrical repairs',
    image: './src/assets/electrician.jpeg',
  },
  {
    name: 'Maid Services',
    description: 'Housekeeping and maid services',
    image: './src/assets/maid.jpeg',
  },
  {
    name: 'Security Services',
    description: 'Body Guard and Security services',
    image: './src/assets/023456.jpeg',
  },
  {
    name: 'Photography Services',
    description: 'Photography and Video Editing services',
    image: './src/assets/photographer.jpeg',
  },
  {
    name: 'Coding Services',
    description: 'Web/App development and Artificial Intelligence services',
    image: './src/assets/coding.jpeg',
  },
  {
    name: 'Baking and Catering Services',
    description: 'Fresh Baking and Catering services',
    image: './src/assets/baking.jpeg',
  },
  
];

const ServicesPage = () => {
  return (
    <div id='services' className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl text-indigo-300 text-center font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl text-white leading-8 font-extrabold tracking-tight sm:text-4xl">
            Choose from a wide range of service providers
          </p>
          <p className="mt-4 text-white max-w-2xl text-xl lg:mx-auto">
            Find the best service providers for your needs.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceProviders.map((provider) => (
              <div
                key={provider.name}
                className="group relative text-white darkBlue p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              >
                <div className="flex justify-center">
                  <img
                    className="h-60 w-60 rounded-full bg-white p-1"
                    src={provider.image}
                    alt={`${provider.name} Logo`}
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a className="focus:outline-none">
                      <span className="absolute inset-0" />
                      {provider.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {provider.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;