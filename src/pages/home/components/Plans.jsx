import React from 'react';

const Plans = () => {
  return (
    <>
      <div className="md:px-32 px-6 h-auto py-14">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-16 cursor-pointer">
          <div className="flex justify-center flex-col items-center group hover:scale-125 transition-transform duration-500">
            <img
              src={require("../../../assets/classes.png")}
              className="object-center group-hover:rotate-12 transition-transform duration-300"
              alt=""
              width="100px"
              height="100px"
            />
            <h1 className="font-bold text-xl text-green-700 py-4 group-hover:text-green-500 transition-colors duration-300">
              Group Classes
            </h1>
            <p className="text-sm text-gray-500 pb-6 group-hover:text-gray-700 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan auctor pulvinar proin.
            </p>
          </div>
          <div className="flex justify-center flex-col items-center group hover:scale-125 transition-transform duration-500">
            <img
              src={require("../../../assets/coaching.png")}
              className="object-center group-hover:rotate-12 transition-transform duration-300"
              alt=""
              width="100px"
              height="100px"
            />
            <h1 className="font-bold text-xl text-green-700 py-4 group-hover:text-green-500 transition-colors duration-300">
              Personal Coaching
            </h1>
            <p className="text-sm text-gray-500 pb-6 group-hover:text-gray-700 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan auctor pulvinar proin.
            </p>
          </div>
          <div className="flex justify-center flex-col items-center group hover:scale-125 transition-transform duration-500">
            <img
              src={require("../../../assets/nutrition.png")}
              className="object-center group-hover:rotate-12 transition-transform duration-300"
              alt=""
              width="100px"
              height="100px"
            />
            <h1 className="font-bold text-xl text-green-700 py-4 group-hover:text-green-500 transition-colors duration-300">
              Nutrition Plans
            </h1>
            <p className="text-sm text-gray-500 pb-6 group-hover:text-gray-700 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan auctor pulvinar proin.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
