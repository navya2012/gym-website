import React, { useState } from 'react';
import { SiOpenaigym } from 'react-icons/si';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white md:px-12 px-6 fixed top-0 h-[10vh] z-20 flex justify-between items-center mx-auto w-full">
            <Link to='/' className="flex items-center gap-2 cursor-pointer">
                <SiOpenaigym size={36} />
                <p className="text-2xl font-bold">GymFluencer</p>
            </Link>
            <div className={` ${isMenuOpen ? 'top-[10vH]' : 'top-[-100vH] '}  md:static absolute bg-black md:min-h-fit min-h-[40vh] left-0 md:w-auto w-full flex items-start px-6`}
            >
                <div className='flex md:items-center md:flex-row flex-col md:gap-[4vw]  gap-8'>
                    <NavLink
                        to="/home-Page"
                        style={{ fontWeight: 'bold' }}
                        className={({ isActive }) =>
                            isActive ? "text-green-700 font-bold" : "text-white"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/workouts"
                        style={{ fontWeight: 'bold' }}
                        className={({ isActive }) =>
                            isActive ? "text-green-700 font-bold" : "text-white"
                        }
                    >
                        Workout
                    </NavLink>
                    <NavLink
                        to="/faq"
                        style={{ fontWeight: 'bold' }}
                        className={({ isActive }) =>
                            isActive ? "text-green-700 font-bold" : "text-white"
                        }
                    >
                        FAQ
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        style={{ fontWeight: 'bold' }}
                        className={({ isActive }) =>
                            isActive ? "text-green-700 font-bold" : "text-white"
                        }
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <button
                    onClick={() => {
                        navigate('/login');
                    }}
                    className="btn"
                >
                    Login
                </button>
                <button
                    onClick={() => {
                        navigate('/sign-up');
                    }}
                    className="btn">
                    Sign Up
                </button>
            </div>

            <div
                className="block md:hidden cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
            </div>
        </nav>
    );
};

export default Navbar;
