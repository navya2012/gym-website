import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <>
      <section className="py-16">
        <h1 className="text-center text-green-700 text-3xl font-bold pb-5">SignUp Form</h1>
        <form>
          <div className="flex flex-col">
            <label className="text-base">Full Name:</label>
            <input type="text" className="border border-black p-2.5 rounded-lg md:w-96 w-64 my-3" />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Email:</label>
            <input type="text" className="border border-black p-2.5 rounded-lg md:w-96 w-64 my-3" />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Mobile Number:</label>
            <input type="tel" className="border border-black p-2.5 rounded-lg md:w-96 w-64 my-3" />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Date of Birth:</label>
            <input type="date" className="border border-black p-2.5 rounded-lg md:w-96 w-64 my-3" />
          </div>
          <div className="flex flex-col mb-4">
          <label className="text-base pb-3">Gender:</label>
          <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={handleGenderChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={handleGenderChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          <div className="flex flex-col relative pb-5">
            <label className="text-base pb-3">Password:</label>
            <div className="relative md:w-96 w-64">
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
            <button type="submit" className="btn my-5">Create a New Account</button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 py-8">
          <hr className="border border-gray-300 w-32 opacity-50" />
          <span className="text-gray-500 text-sm font-medium">Or sign up with</span>
          <hr className="border border-gray-300 w-32 opacity-50" />
        </div>
        <div className="text-center text-gray-800 text-lg">
          Already have an account?{' '}
          <Link to="/login" className="text-green-700 font-bold text-base">
            Login
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
