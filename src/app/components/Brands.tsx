import React from 'react'
import brands from '@/assets/images/brands.webp'
import Image from 'next/image'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import Link from 'next/link'


export default function Brands() {

    return (

        <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4 py-[60px]">
            <div className="grid grid-cols-5 gap-20 items-center">
                <div className="col-span-3">
                    <h2 className='text-mainHeading font-bold text-mainHeadingColor mb-2'>Brands</h2>
                    <p className='text-2xl font-medium text-paraColor'>Discover top sports gear manufacturers and connect with brands to explore their latest offerings and innovations</p>

                    <ul className="flex flex-col mt-8">
                        <li className='flex flex-row items-center gap-3 text-2xl font-medium text-mainHeadingColor'><IoCheckmarkCircleOutline className='text-2xl text-[#1AA652]' /> Boost brand’s presence to a dedicated sports audience</li>
                        <li className='flex flex-row items-center gap-3 text-2xl font-medium text-mainHeadingColor'><IoCheckmarkCircleOutline className='text-2xl text-[#1AA652]' /> Connect with sports enthusiasts and industry leaders</li>
                        <li className='flex flex-row items-center gap-3 text-2xl font-medium text-mainHeadingColor'><IoCheckmarkCircleOutline className='text-2xl text-[#1AA652]' /> Highlight brand’s unique identity and values</li>
                    </ul>

                    <Link href='#' className='text-xl font-medium text-white bg-secondaryBg rounded-full py-4 px-6 mt-10'>Explore Brands</Link>
                </div>
                <div className="col-span-2">
                    <div className="w-full h-[480px] relative rounded">
                        <Image src={brands} alt='' fill className='rounded object-contain' />
                    </div>
                </div>
            </div>

        </div>
    )
}
