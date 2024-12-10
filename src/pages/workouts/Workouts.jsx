import React from 'react';
import { WorkoutsData } from './workoutsData';

const Workouts = () => {
    return (
        <section className="py-24 md:px-32 px-6 bg-gray-400 bg-opacity-30">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                Workouts
            </h2>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-16 cursor-pointer">
                {WorkoutsData.map((item, index) => (
                    <div className="relative group w-96 h-96 overflow-hidden transform transition-transform duration-500 hover:scale-110"
                        key={index}>
                        <img
                            src={item.image}
                            alt="Avatar"
                            className="block w-full h-full object-cover"
                        />
                        <h1 className="capitalize absolute bottom-4 left-4 text-2xl font-bold text-white">
                            {item.heading}
                        </h1>
                        <div className="absolute inset-0 bg-green-500 h-0 w-full overflow-hidden transition-all duration-500 ease-in-out group-hover:h-full flex flex-col items-center justify-center">
                            <h1 className="text-white text-2xl font-bold capitalize mb-4 text-center">
                                {item.heading}
                            </h1>
                            <p className="text-white text-lg text-center px-4">
                                {item.para}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Workouts;
