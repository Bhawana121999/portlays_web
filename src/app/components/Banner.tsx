'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp'


export default function Banner() {


  const [bannerArr, setBannerArr] = useState([
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
  ])



  return (

    <Swiper
      slidesPerView={1}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="banner_slide"
    >
      {
        bannerArr && bannerArr?.length > 0 && bannerArr?.map((el, i) => (
          <SwiperSlide key={i}>
            <div className='banner_bg flex flex-row justify-center items-center'>
              <div className="w-full h-[240px] relative">
                <Image src={el?.image} alt='' fill className='object-contain' />
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
