import React from 'react'

const Header = () => {
  return (
    <>
      <div 
        className="relative w-full h-[550px] bg-gray-700 bg-opacity-30 mt-[10vh]" 
        style={{ 
          backgroundImage: `url(${require("../../../assets/header.jpg")})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 text-center pt-10 md:pt-20 text-white">
          <div className="flex items-center flex-col px-16">
            <h1 className=" md:text-6xl text-4xl font-bold text-green-500 mb-6 md:mb-8">Track Your Fitness <span className='block'>Journey</span>
            </h1>
            <p className="text-base mb-5">Discover the ultimate fitness companion with GymFluencer.<span className='block text-base'> Effortlessly log your workouts,  count reps, and track </span>calories burned. Stay motivated and achieve  <span className='block text-base '>your goals with our user-friendly interfaces.</span></p>
            <button type="submit" className="btn  w-full md:w-auto">
                Read More...
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
