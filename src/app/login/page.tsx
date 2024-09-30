'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import login from '@/assets/images/login.webp';
import logo from '@/assets/images/logo.webp';
import { LuMail } from 'react-icons/lu';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { MdOutlineRemoveRedEye } from 'react-icons/md';


export default function page() {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const value = e.target.value;

        if (name === 'email') {
            if (validateEmail(value) || value === '') {
                setEmail(value);
            }
        }

        if (name === 'password') {
            setPassword(value);
        }
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === '') {
            toast.error('Email is required.');
            return;
        } else if (!validateEmail(email)) {
            toast.error('Please enter a valid email.');
            return;
        }

        if (password === '') {
            toast.error('Password is required.');
            return;
        } 

        toast.success('Form submitted successfully!')
        router.push('/sign-up')
    }

    return (

        <div className="grid grid-cols-2">
            <div className="col-span-1 background_image flex flex-row items-center">
                <div className="w-full h-[75vh] relative">
                    <Image src={login} alt='' fill className='object-contain' />
                </div>
            </div>

            <div className="col-span-1 py-[75px] px-[150px] flex flex-col items-start">
                <div className="w-[350px] h-28 relative">
                    <Image src={logo} alt='' fill className='object-contain' />
                </div>

                <h1 className='text-heading font-medium text-headingColor mt-6'>Log-In Your Account </h1>
                <p className='text-base font-normal text-paraColor mb-7'>Welcome back to Portlays Please log in to  access your account.</p>

                <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 relative">
                        <label htmlFor="name" className="text-sm font-normal text-heading">
                            Email/Phone No/Portlays ID*
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <input
                                id='email'
                                value={email}
                                placeholder='Phone Number or Email'
                                type="text"
                                onChange={(e) => handleChange(e, "email")}
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />
                            <LuMail className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 relative">
                        <label htmlFor="email" className="text-sm font-normal text-heading">
                            Password
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <input
                                id='password'
                                value={password}
                                placeholder='Enter Your Password'
                                type="password"
                                onChange={(e) => handleChange(e, "password")}
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />
                            <MdOutlineRemoveRedEye className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor" />
                        </div>
                        <Link href='/forgetPass' className='text-base font-normal text-[#D72626] flex justify-end'>Forgot Password?</Link>
                    </div>


                    <button type="submit" className='text-2xl font-medium text-white bg-primaryBgColor rounded py-4 px-6'>Login</button>
                    <p className='text-xl font-medium text-paraColor text-center'>Don’t Have an Account Yet?  <Link href='/sign-up' className='text-primaryColor underline'>Sign-up here</Link></p>
                </form>
            </div>
        </div>
    )
}
