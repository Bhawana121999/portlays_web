'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import sports from '@/assets/images/sports.webp'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import sports1 from '@/assets/images/sports1.png'
import sports2 from '@/assets/images/sports2.png'
import { FaRegHeart } from 'react-icons/fa'
import JoinPortlaysForm from './JoinPortlaysForm'


export default function SportsCenter() {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(!isOpen)
    }

    const close = () => {
        setIsOpen(!isOpen)
    }


    const [sportsArr, setSportsArr] = useState([
        {
            imageArr: [
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
            ],
            name: 'Stanley Matthews Badminton Academy',
        },
        {
            imageArr: [
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
            ],
            name: 'Stanley Matthews Badminton Academy',
        },
        {
            imageArr: [
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
            ],
            name: 'Stanley Matthews Badminton Academy',
        },
        {
            imageArr: [
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
                {
                    image: sports,
                },
            ],
            name: 'Stanley Matthews Badminton Academy',
        },
    ])


    return (

        <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4 py-[60px]">
            <div className="text-center relative mb-12">
                <h2 className='text-mainHeading font-bold text-mainHeadingColor mb-2'>Portlays Sport Center Portfolio </h2>
                <div className="flex flex-col items-center">
                    <p className='w-[70%] text-2xl font-medium text-paraColor'>Explore sports centers like never before—dive into their unique facilities, meet their passionate coaches, and see their success stories come to life.</p>
                </div>

                <Link href='#' className='text-xl font-semibold text-mainHeadingColor absolute right-0 top-[5.75rem]'>See All</Link>
            </div>

            <div className="grid grid-cols-2 gap-7">
                {
                    sportsArr && sportsArr?.length > 0 && sportsArr?.map((el, i) => (
                        <div className="col-span-1 relative box_shadow sports_card" key={i}>
                            <div className="w-full h-[160px] bg-primaryBgColor absolute z-[1]"></div>
                            <div className="w-full h-full bg-white absolute -z-[1] sports_bgimg"></div>
            
                            <Swiper
                                slidesPerView={1}
                                pagination={true}
                                modules={[Pagination]}
                                className="sports_CenterSlider mt-[2.05rem]"
                            >
                                {
                                    el?.imageArr && el?.imageArr?.length > 0 && el?.imageArr?.map((ele, ind) => (
                                        <SwiperSlide key={ind}>
                                            <div className="w-full h-[400px] relative rounded-lg z-[2]">
                                                <Image src={ele?.image} alt='' fill className='object-contain rounded-lg' />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>

                            <div className="flex flex-row items-center justify-between mx-12 pt-5 pb-10">
                                <h4 className='w-[30rem] text-[46px] font-bold text-primaryColor leading-[3.5rem]'>{el?.name}</h4>
                                <div className="flex flex-col gap-8">
                                    <button className='text-primaryColor text-2xl pt-5 flex flex-row justify-end'><FaRegHeart /></button>
                                    <div className="flex flex-row item-center gap-4">
                                        <button>
                                            <Image src={sports1} alt='' className='w-[30px] h-[30px] object-contain' />
                                        </button>
                                        <button>
                                            <Image src={sports2} alt='' className='w-[30px] h-[30px] object-contain' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>


            <div className="flex flex-row items-center justify-center">
                <button onClick={() => setIsOpen(true)} className='text-xl font-medium text-white bg-secondaryBg rounded-full py-4 px-6 mt-10'>Join as Sport Center</button>
            </div>

            <JoinPortlaysForm isOpen={isOpen} setIsOpen={setIsOpen} close={close} open={open} />

        </div>
    )
}

