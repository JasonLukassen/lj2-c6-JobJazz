import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/JobJazzLogo.png';
import searchIcon from "../assets/icons/searchIcon.png";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full h-20 border-b border-gray-200 px-6 md:px-10">
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="JobJazz Logo" className="w-10 cursor-pointer mr-2" />
                    <span className="text-black font-semibold text-4xl">JobJazz</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center mr-[45vw] space-x-14">
                <Link to="/findwork" className="text-gray-600 hover:text-black text-xl">Find Work</Link>
                <Link to="/findfreelancers" className="text-gray-600 text-xl hover:text-black">Find Freelancers</Link>
            </div>

            <div className="relative flex items-center right-10 space-x-16">
                <div className="relative">
                    <img src={searchIcon} alt="Search Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    <input type="text" placeholder="Search" className="pl-10 pr-8 py-2 border border-gray-300 rounded-full focus:outline-none" />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 rounded-full py-2 px-4">Filter</button>
                </div>
                <button className='bg-purple-500 text-white px-7 py-2 rounded-full'>
                    <Link to="/login">Login</Link>
                </button>
                <button className="md:hidden ml-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-20 w-full z-50 bg-white border-b border-gray-200 px-6 py-4`}>
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
    );
}

export default Navbar;
