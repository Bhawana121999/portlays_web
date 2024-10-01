import React from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.webp'
import Link from 'next/link'
import icon1 from '@/assets/images/icon1.png'
import icon2 from '@/assets/images/icon2.png'
import icon3 from '@/assets/images/icon3.png'
import icon4 from '@/assets/images/icon4.png'
import icon5 from '@/assets/images/icon5.png'


export default function Topbar() {

    return (

        <div className="bg-white py-3">
        <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4 flex flex-row lg:justify-between justify-end items-center">
            <a href="/" className="items-center relative h-[4.75rem] w-[230px] space-x-3 rtl:space-x-reverse hidden lg:flex ">
                <Image src={logo} fill priority alt="Logo" />
            </a>
    
            <div className="flex flex-row items-center gap-7">
                <div className="flex flex-row items-center gap-4">
                    <Link href=''>
                        <Image src={icon1} alt='' className='w-6 h-6 object-contain' />
                    </Link>
                    <Link href=''>
                        <Image src={icon2} alt='' className='w-6 h-6 object-contain' />
                    </Link>
                    <Link href=''>
                        <Image src={icon3} alt='' className='w-6 h-6 object-contain' />
                    </Link>
                    <Link href=''>
                        <Image src={icon4} alt='' className='w-6 h-6 object-contain' />
                    </Link>
                    <Link href=''>
                        <Image src={icon5} alt='' className='w-6 h-6 object-contain' />
                    </Link>
                </div>
    
                <Link href='' className='bg-secondaryBg rounded-full px-4 py-2 xl:py-3 xl:px-6 xl:text-xl text-base font-semibold text-white hidden lg:block'>Login / Sign Up</Link>
            </div>
        </div>
    </div>
    )
}
