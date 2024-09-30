
import React from 'react';
import Image from 'next/image';
import forget from '@/assets/images/forget.webp';
import logo from '@/assets/images/logo.webp';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function page() {

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

                <form className="flex flex-col w-full gap-6" >
                    <div className="flex flex-col gap-3 relative">
                        <label htmlFor="email" className="text-sm font-normal text-heading">
                            New Password
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <input
                                id='password'
                                placeholder='Enter New Password'
                                type="password"
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />
                            <MdOutlineRemoveRedEye className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 relative">
                        <label htmlFor="email" className="text-sm font-normal text-heading">
                            Confirm Password
                            <span className="text-sm font-normal text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <input
                                id='password'
                                placeholder='Enter Confirm Password'
                                type="password"
                                className="py-[1.1rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                            />
                            <MdOutlineRemoveRedEye className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor" />
                        </div>
                    </div>

                    <button type="submit" className='text-2xl font-medium text-white bg-primaryBgColor rounded py-4 px-6'>Set Password</button>

                </form>
            </div>
        </div>
    )
}
