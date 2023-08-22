import React from 'react';

const trainingOptions = [
  {
    title: 'Driver Training',
    description: 'Become a certified Uber driver and start earning.',
    image: './src/assets/uberTraining.jpeg',
  },
  {
    title: 'Security Training',
    description: 'Learn the skills required to be a professional Security guard with our intense training.',
    image: './src/assets/securityTraining.jpeg',
  },
  {
    title: 'Cleaning Services Training',
    description: 'Get trained in providing top-notch cleaning services.',
    image: './src/assets/cleaningTraining.jpeg',
  },
  {
    title: 'Electricians Training',
    description: 'Learn electrical repair and installation techniques.',
    image: './src/assets/electricianTrainings.jpeg',
  },
  {
    title: 'Maid Services Training',
    description: 'Become a skilled maid or housekeeping professional.',
    image: './src/assets/maidtraining.jpeg',
  },
  {
    title: 'Builders Training',
    description: 'Get trained in construction and building techniques.',
    image: './src/assets/buildingTraining.jpeg',
  },
  {
    title: 'Excavator Drivers Training',
    description: 'Learn how to operate an excavator with safety and precision.',
    image: './src/assets/escavatorTraining.jpeg',
  },
  {
    title: 'Baking and Catering Training',
    description: 'Learn how to bake and do inside and outside catering with precision.',
    image: './src/assets/bakingandcateringtraining.jpeg',
  },
];

const TrainingsPage = () => {
  return (
    <div id='training' className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl text-center text-indigo-300 font-semibold tracking-wide uppercase">
            Trainings
          </h2>
          <p className="mt-2 text-3xl text-white leading-8 font-extrabold tracking-tight sm:text-4xl">
            Choose from our training options
          </p>
          <p className="mt-4 max-w-2xl text-white text-xl lg:mx-auto">
            Learn and enhance your skills to become a professional service provider.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {trainingOptions.map((training) => (
              <div
                key={training.title}
                className="group relative text-white darkBlue p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              >
                <div className="flex justify-center darkBlue">
                  <img
                    className="h-60 w-60 rounded-full bg-white p-1"
                    src={training.image}
                    alt={`${training.title} Training`}
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a className="focus:outline-none">
                      <span className="absolute inset-0" />
                      {training.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{training.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingsPage;