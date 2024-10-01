'use client'

import React, { useState } from 'react'
import logo from '@/assets/images/logo.webp'
import Image from 'next/image';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import Topbar from './Topbar';

export default function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    return (

        <>
            <Topbar />
            <nav className="sticky top-0 bg-primaryBgColor w-full z-20">
                <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto flex items-center justify-between md:py-6 p-2">
                    <a href="/" className="flex items-center relative h-14 w-[204.636px] space-x-3 rtl:space-x-reverse lg:hidden">
                        <Image src={logo} fill priority alt="Logo" />
                    </a>

                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={navbarOpen ? "true" : "false"}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <RiMenu3Fill className='text-3xl text-white' />
                    </button>

                    <div className={`items-center justify-between ${navbarOpen ? "block fixed top-0 left-0 w-full h-full bg-[#34959c]" : "hidden"} lg:flex lg:w-auto lg:order-1`}>
                        <div className="lg:hidden flex flex-row justify-between items-center bg-[#34959c] py-4 px-2">
                            <a href="/" className="flex items-center relative h-14 w-[204.636px] space-x-3 rtl:space-x-reverse">
                                <Image src={logo} fill priority alt="Logo" />
                            </a>
                            <IoClose className='text-3xl text-white' onClick={() => setNavbarOpen(!navbarOpen)} />
                        </div>

                        <ul className="px-[1.875rem] flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:mt-0 gap-4 xl:gap-12 xl:text-base text-[13px] font-normal uppercase">
                            <li>
                                <a href="/" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `} aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className={`block ${navbarOpen ? 'text-white' : 'text-white'}`}>Athletes</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `}>Coaches</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `}>Sport Center</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'}`}>About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `}>Community</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `}>Sports Calendar</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `}>Sports IQ</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `}>Sports Buzz</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'} `}>Brands</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block ${navbarOpen ? 'text-white' : 'text-white'}`}>Fan Zone</a>
                            </li>
                            <li className='lg:hidden block'>
                                <a href="/login" className={`block ${navbarOpen ? 'text-white' : 'text-white'}`}>Login / Sign Up</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
