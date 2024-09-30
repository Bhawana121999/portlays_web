'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import otpimg from '@/assets/images/otp.webp';
import logo from '@/assets/images/logo.webp';
import { PiUserBold } from 'react-icons/pi';
import { LuMail } from 'react-icons/lu';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import OtpInput from 'react-otp-input';


export default function page() {

    const [otp, setOtp] = useState('');


    return (


        <div className="grid grid-cols-2 h-[100vh]">
            <div className="col-span-1 background_image flex flex-row items-center">
                <div className="w-full h-[500px] relative">
                    <Image src={otpimg} alt='' fill className='object-contain' />
                </div>
            </div>

            <div className="col-span-1 py-[90px] px-[150px] flex flex-col items-start justify-center">
                <div className="w-[350px] h-28 relative">
                    <Image src={logo} alt='' fill className='object-contain' />
                </div>

                <h1 className='text-heading font-medium text-headingColor mt-6'>Enter OTP</h1>
                <p className='text-base font-medium text-paraColor mb-7'>We Will Sent a Verification to <span className='text-headingColor'>9759795964</span></p>

                <form className="flex flex-col w-full gap-6">

                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={''}
                        renderInput={(props) => <input {...props} className='input_otp' />}
                    />

                    <div className="flex flex-row items-center justify-between text-base font-medium ">
                        <Link href='' className='text-headingColor underline'>Change Phone Number</Link>
                        <button className='text-[#D72626] underline'>Resend OTP</button>
                    </div>

                    <button type="submit" className='text-2xl font-medium text-white bg-primaryBgColor rounded py-4 px-6'>Register</button>
                </form>
            </div>
        </div>
    )
}
