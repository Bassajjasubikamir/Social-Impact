import React from 'react';


const ServicesSection2 = () => {
  return (
    <section className=" TrainingSection text-white py-16 h-screen">
      <div className="container thefirstServices mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Training School</h2>
        <p className="text-gray-300 mb-8">Explore the range of highly field-based trainings we offer to our students.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                className="h-60 w-60 rounded-full p-1"
                src='./src/assets/uberTraining.jpeg'
                alt=''
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Driver Training</h3>
            <p className="text-gray-300 mb-4">Become a certified professional driver or motorcycle rider and start earning.</p>
            <a href="/training" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                className="h-60 w-60 rounded-full p-1"
                src='./src/assets/securityTraining.jpeg'
                alt=''
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Security Training</h3>
            <p className="text-gray-300 mb-4">Learn the skills required to be a professional Security guard with our intense training</p>
            <a href="/training" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                className="h-60 w-60 rounded-full p-1"
                src='./src/assets/electricianTrainings.jpeg'
                alt=''
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Electricians Training</h3>
            <p className="text-gray-300 mb-4">Learn electrical repair and installation techniques.</p>
            <a href="/training" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

        </div>

        <div className="mt-8">
          <a href="/training" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
            View More Trainings
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection2;