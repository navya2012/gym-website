import React from 'react';

const ContactUs = () => {
  return (
    <>
      <section className="bg-gray-400 bg-opacity-30 flex items-center justify-center w-full h-screen py-6 px-6 md:px-12">
        <div className="bg-white border border-green-700 w-full max-w-4xl py-8 px-6 md:px-12 rounded-lg shadow-md">
          <h1 className="text-center text-green-700 text-3xl font-bold mb-6">
            Contact Us
          </h1>
          <form>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-base">Name:</label>
              <input
                id="name"
                type="text"
                className="border border-black p-2.5 rounded-lg w-full my-3"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-base">Email:</label>
              <input
                id="email"
                type="email"
                className="border border-black p-2.5 rounded-lg w-full my-3"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="mobile" className="text-base">Mobile Number:</label>
              <input
                id="mobile"
                type="tel"
                className="border border-black p-2.5 rounded-lg w-full my-3"
                placeholder="Your Mobile Number"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn my-2 w-full md:w-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
