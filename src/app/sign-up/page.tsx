'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import sign from '@/assets/images/sign.webp';
import logo from '@/assets/images/logo.webp';
import { PiUserBold } from 'react-icons/pi';
import { LuMail } from 'react-icons/lu';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Page() {

    const router = useRouter()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateName = (name: string) => {
        const nameRegex = /^[a-zA-Zà-žÀ-Ž' -]*$/;
        return nameRegex.test(name);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        const value = e.target.value;

        if (fieldName === "name") {
            if (validateName(value) || value === '') {
                setName(value); 
            }
        }

        if (fieldName === "email") {
            setEmail(value); 
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === '') {
            toast.error('Name is required.');
            return;
        } else if (!validateName(name)) {
            toast.error('Please enter a valid name without numbers or special characters.');
            return;
        }

        if (email === '') {
            toast.error('Email is required.');
            return;
        } else if (!validateEmail(email)) {
            toast.error('Please enter a valid email.');
            return;
        }

        toast.success('Form submitted successfully!');
        router.push('/login')
    };



    return (


        <div className="grid grid-cols-2">
            <div className="col-span-1 background_image flex flex-row items-center">
                <div className="w-full h-[100vh] relative">
                    <Image src={sign} alt='' fill className='object-contain' />
                </div>
            </div>

            <div className="col-span-1 py-[90px] px-[150px] flex flex-col items-start">
                <div className="w-[350px] h-28 relative">
                    <Image src={logo} alt='' fill className='object-contain' />
                </div>

                <h1 className='text-heading font-medium text-headingColor mt-6'>Sign-Up Your Account</h1>
                <p className='text-base font-normal text-paraColor mb-7'>Sign-Up Account Fields Marked With * are Required</p>

                <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 relative">
                        <label htmlFor="name" className="text-sm font-normal text-heading">
                            Name
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <input
                                id='name'
                                placeholder='Enter Your Full Name'
                                type="text"
                                value={name}
                                onChange={(e) => handleOnChange(e, "name")}
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />
                            <PiUserBold className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 relative">
                        <label htmlFor="email" className="text-sm font-normal text-heading">
                            Email/Phone No.
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <input
                                id="email"
                                placeholder='Phone Number or Email'
                                type="email"
                                value={email}
                                onChange={(e) => handleOnChange(e, "email")}
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />
                            <LuMail className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor" />
                        </div>
                    </div>

                    <button type="submit" className='text-2xl font-medium text-white bg-primaryBgColor rounded py-4 px-6'>Sign Up</button>
                    <p className='text-xl font-medium text-paraColor text-center'>Already have an Account? <Link href='/login' className='text-primaryColor underline'>Log-in here</Link></p>
                </form>
            </div>
        </div>
    );
}
