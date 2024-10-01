'use client'


import React, { useState } from 'react';
import Image from 'next/image';
import forget from '@/assets/images/forget.webp';
import logo from '@/assets/images/logo.webp';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FaRegEyeSlash } from 'react-icons/fa';


export default function page() {

    const router = useRouter()
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const value = e.target.value

        if (name == 'newPass') {
            setNewPass(value)
        }
        else {
            setConfirmPass(value)
        }
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!newPass || !confirmPass) {
            toast.error('Please enter both passwords.');
            return;
        }

        if (newPass !== confirmPass) {
            toast.error('Passwords do not match.');
            return;
        }

        toast.success('Password changed successfully!');
        router.push('/login');
    }


    return (

        <div className="grid grid-cols-2">
            <div className="col-span-1 background_image flex flex-row items-center">
                <div className="w-full h-[80vh] relative">
                    <Image src={forget} alt='' fill className='object-contain' />
                </div>
            </div>

            <div className="col-span-1 py-[90px] px-[150px] flex flex-col items-start">
                <div className="w-[350px] h-28 relative">
                    <Image src={logo} alt='' fill className='object-contain' />
                </div>

                <h1 className='text-heading font-medium text-headingColor mt-6'>Forgot Password</h1>
                <p className='text-base font-normal text-paraColor mb-7'>Sign- Up Account Fields Marked With * are Required</p>

                <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 relative">
                        <label className="text-sm font-normal text-heading">
                            New Password
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>

                        <div className="relative">
                            <input
                                value={newPass}
                                onChange={(e) => handleChange(e, 'newPass')}
                                placeholder='Enter New Password'
                                type={showPass ? 'text' : 'password'}
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />

                            <button type='button' onClick={() => setShowPass(!showPass)} className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor'>
                                {
                                    showPass ?
                                        <MdOutlineRemoveRedEye />
                                        :
                                        <FaRegEyeSlash />
                                }
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 relative">
                        <label htmlFor="email" className="text-sm font-normal text-heading">
                            Confirm Password
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>

                        <div className="relative">
                            <input
                                value={confirmPass}
                                onChange={(e) => handleChange(e, 'confirmPass')}
                                placeholder='Enter Confirm Password'
                                type={showConfirmPass ? 'text' : 'password'}
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />
                            <button type='button' onClick={() => setShowConfirmPass(!showConfirmPass)} className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor'>
                                {
                                    showConfirmPass ?
                                        <MdOutlineRemoveRedEye />
                                        :
                                        <FaRegEyeSlash />
                                }
                            </button>
                        </div>
                    </div>

                    <button type="submit" className='text-2xl font-medium text-white bg-primaryBgColor rounded py-4 px-6'>Set Password</button>

                </form>
            </div>
        </div>
    )
}
