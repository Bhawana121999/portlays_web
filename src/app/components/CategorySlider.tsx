'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cate1 from '@/assets/images/cate1.webp'
import cate2 from '@/assets/images/cate2.webp'
import cate3 from '@/assets/images/cate3.webp'
import cate4 from '@/assets/images/cate4.webp'
import cate5 from '@/assets/images/cate5.webp'
import cate6 from '@/assets/images/cate6.webp'
import cate7 from '@/assets/images/cate7.webp'
import cate8 from '@/assets/images/cate8.webp'
import cate9 from '@/assets/images/cate9.webp'
import cate10 from '@/assets/images/cate10.webp'
import cate11 from '@/assets/images/cate11.webp'
import Image from 'next/image';



export default function CategorySlider() {

    const [categoryArr, setCategoryArr] = useState([
        {
            image: cate1,
            name: 'Cricket',
        },
        {
            image: cate2,
            name: 'Badminton',
        },
        {
            image: cate3,
            name: 'Lawn Tennis',
        },
        {
            image: cate4,
            name: 'Table Tennis',
        },
        {
            image: cate5,
            name: 'Wrestling',
        },
        {
            image: cate6,
            name: 'Shooting',
        },
        {
            image: cate7,
            name: 'Chess',
        },
        {
            image: cate8,
            name: 'Athletics',
        },
        {
            image: cate9,
            name: 'Boxing',
        },
        {
            image: cate10,
            name: 'Skating',
        },
        {
            image: cate11,
            name: 'Archery',
        },
    ])


    return (

        <div className="bg-primaryColor pt-[170px] pb-14">
            <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4">
                <Swiper
                    slidesPerView={7.6}
                    spaceBetween={40}
                    className="mySwiper"
                >
                    {
                        categoryArr && categoryArr?.length > 0 && categoryArr?.map((el, i) => (
                            <SwiperSlide className='w-[150px]' key={i}>
                                <div className='flex flex-row justify-center items-center w-[150px] h-[150px] rounded-full bg-white'>
                                    <div className="w-20 h-20 relative">
                                        <Image src={el?.image} alt='' fill />
                                    </div>
                                </div>
                                <h4 className='text-xl font-medium text-white mt-3 text-center'>{el?.name}</h4>
                            </SwiperSlide>

                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}
