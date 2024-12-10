import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="py-20">
        <h1 className="text-center text-green-700 text-3xl font-bold pb-5">Login Form</h1>
        <form>
          <div className="flex flex-col">
            <label htmlFor="exampleInputEmail1" className="text-base">Email:</label>
            <input
              type="text"
              className="border border-black p-2.5 rounded-lg md:w-96 w-64 my-3"
            />
          </div>
          <div className="flex flex-col relative">
            <label className="text-base">Password:</label>
            <div className="relative  md:w-96 w-64">
              <input
                type={showPassword ? "text" : "password"}
                className="border border-black p-2.5 rounded-lg w-full pr-10"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
              >
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </span>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn my-5">Submit</button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 py-8">
          <hr className="border border-gray-300 w-32 opacity-50" />
          <span className="text-gray-500 text-sm font-medium">Or sign In with</span>
          <hr className="border border-gray-300 w-32 opacity-50" />
        </div>
        <div className="text-center text-gray-800 text-lg">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-green-700 font-bold text-base">
            Sign Up
          </Link>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
