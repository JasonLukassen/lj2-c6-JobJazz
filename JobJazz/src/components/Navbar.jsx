import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/JobJazzLogo.png';
import searchIcon from "../assets/icons/searchIcon.png";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed flex w-full m-0 p-0 text-black text-2xl font-poppins h-20 max-h-20 items-center justify-between">
                <div className="flex items-center p-10">
                    <img src={Logo} alt="JobJazz Logo" className="w-10 cursor-pointer" />
                    <span className="ml-4 md:flex hidden text-black font-semibold">JobJazz</span>
                </div>

                {/* Hamburger Menu Button (visible on tablet and smaller screens) */}
                <div className="md:hidden flex justify-center items-center ">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black focus:outline-none">
                        {/* Hamburger Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Links (hidden on tablet and smaller screens) */}
                <ul className={`md:flex hidden items-center justify-center flex-grow`}>
                    <li className="w-max">
                        <Link to="/findwork" className="hover:text-blue-600 mx-10">Find Work</Link>
                    </li>
                    <li className="w-max">
                        <Link to="/findfreelancers" className="hover:text-blue-600 mx-10">Find Freelancers</Link>
                    </li>
                </ul>

                {/* Search Field */}
                <div className="relative flex items-center pl-6">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <img src={searchIcon} alt="Search Icon" className=" ml-7 w-5 h-5" />
                    </div>
                    <input type="text" placeholder="Search" className="pl-10 border border-gray-300 rounded-full px-2 py-1 mx-2 focus:outline-none" />
                    <div className="absolute left-8 h-8 bg-gray-300" />
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black px-2 py-1 rounded-md text-xs mr-2">Filter</button>
                </div>

                {/* Signup Button */}
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full mx-2">Login</button>

                {/* Mobile Menu (visible when hamburger menu is clicked) */}
                <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-20 w-full z-10`}>
                    <ul className="flex flex-col items-center w-full">
                        <li className="w-full text-center py-2 hover:bg-blue-200">
                            <Link to="/findwork" className="" onClick={() => setIsMobileMenuOpen(false)}>Find Work</Link>
                        </li>
                        <li className="w-full text-center py-2 hover:bg-blue-200">
                            <Link to="/findfreelancers" className="" onClick={() => setIsMobileMenuOpen(false)}>Find Freelancers</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
