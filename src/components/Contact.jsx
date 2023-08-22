import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="text-white p-10">
      <section className="contact  py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-indigo-300 font-semibold mb-6">Contact Us</h2>
        <p className="text-lg mb-8">
          Have a question or want to get in touch? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <div className="max-w-lg mx-auto">
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-blue-800 text-white px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-blue-800 text-white px-4 py-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="bg-blue-800 text-white px-4 py-2 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      </section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-white">+256 789-342-288</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-white">quickservice@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;