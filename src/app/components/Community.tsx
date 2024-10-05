'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import mid_banner1 from '@/assets/images/mid_banner1.webp'
import user from '@/assets/images/user.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { BiLike } from 'react-icons/bi'
import { BsChatLeftText } from 'react-icons/bs'
import { PiChatTextBold } from 'react-icons/pi'


export default function Community() {

    const [communityArr1, setCommunityArr1] = useState([
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
    ])


    const [communityArr2, setCommunityArr2] = useState([
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
        {
            img: user,
            name: 'Gregory Wallace',
            occupation: 'Circketer',
            date: '06 Aug 2024',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            likes: '10k',
            comments: '978',
        },
    ])



    return (


        <section>
            <div className="lg:px-16 bg-mainHeadingColor">
                <div className="grid grid-cols-12 gap-28 items-center">
                    <div className="col-span-5 py-16">
                        <h2 className='text-[34px] font-bold uppercase text-white mb-2'>Portlays Community</h2>
                        <p className='text-lg font-normal text-white'>Connect with athletes, coaches, and all sports enthusiasts—your go-to space for sharing tips, discussing games, and growing together in the sports world.</p>
                        <ul className='flex flex-col gap-1 list-disc pl-8 mt-5'>
                            <li className='text-lg font-normal text-white'>Vibrant Discussions</li>
                            <li className='text-lg font-normal text-white'>Cross-sport insights</li>
                            <li className='text-lg font-normal text-white'>Network and Grow</li>
                        </ul>

                        <button className='text-xl font-medium text-white bg-secondaryBg rounded-full py-4 px-6 mt-6'>Join the Discussion</button>
                    </div>

                    <div className="col-span-7">
                        <div className="grid grid-cols-12 justify-end gap-6 w-full h-full">
                            <div className="col-span-6">
                                <Swiper
                                    direction={'vertical'}
                                    spaceBetween={20}
                                    loop={true}
                                    slidesPerView={1.5}
                                    autoplay={{
                                        delay: 2700,
                                        disableOnInteraction: false,
                                    }}
                                    speed={3000}
                                    modules={[Autoplay]}
                                    className="mySwiper2 mt-14"
                                >
                                    {
                                        communityArr1 && communityArr1?.length > 0 && communityArr1?.map((el, i) => (
                                            <SwiperSlide key={i}>
                                                <div className='bg-[#2D2D2D] rounded-lg p-6'>
                                                    <div className="flex flex-row justify-between items-start">
                                                        <div className="flex flex-row items-center gap-2">
                                                            <Image src={el?.img} alt='' className='w-10 h-10 rounded-full object-cover' />
                                                            <div className="flex flex-col">
                                                                <h4 className='text-xl font-medium text-[#EEEEEE] mb-0'>{el?.name}</h4>
                                                                <p className='text-sm font-normal text-[#EEEEEE]'>{el?.occupation}</p>
                                                            </div>
                                                        </div>
                                                        <span className='text-[11px] font-normal text-[#EEEEEE]'>{el?.date}</span>
                                                    </div>
                                                    <p className='my-4 text-lg font-normal text-[#EEEEEE]'>{el?.para}</p>

                                                    <div className="flex flex-row gap-6">
                                                        <div className="flex flex-col gap-2">
                                                            <BiLike className='text-xl text-[#EEEEEE]' />
                                                            <span className='text-xs font-normal text-[#EEEEEE]'>{el?.likes}</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <PiChatTextBold className='text-xl text-[#EEEEEE]' />
                                                            <span className='text-xs font-normal text-[#EEEEEE]'>{el?.comments}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                            </div>

                            <div className="col-span-6">
                                <Swiper
                                    direction={'vertical'}
                                    loop={true}
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    autoplay={{
                                        delay: 2700,
                                        disableOnInteraction: false,
                                    }}
                                    speed={3000}
                                    modules={[Autoplay]}
                                    className="mySwiper3"
                                >
                                    {
                                        communityArr2 && communityArr2?.length > 0 && communityArr2?.map((ele, ind) => (
                                            <SwiperSlide key={ind}>
                                                <div className='bg-[#2D2D2D] rounded-lg p-6'>
                                                    <div className="flex flex-row justify-between items-start">
                                                        <div className="flex flex-row items-center gap-2">
                                                            <Image src={ele?.img} alt='' className='w-10 h-10 rounded-full object-cover' />
                                                            <div className="flex flex-col">
                                                                <h4 className='text-xl font-medium text-[#EEEEEE] mb-0'>{ele?.name}</h4>
                                                                <p className='text-sm font-normal text-[#EEEEEE]'>{ele?.occupation}</p>
                                                            </div>
                                                        </div>
                                                        <span className='text-[11px] font-normal text-[#EEEEEE]'>{ele?.date}</span>
                                                    </div>
                                                    <p className='my-4 text-lg font-normal text-[#EEEEEE]'>{ele?.para}</p>

                                                    <div className="flex flex-row gap-6">
                                                        <div className="flex flex-col gap-2">
                                                            <BiLike className='text-xl text-[#EEEEEE]' />
                                                            <span className='text-xs font-normal text-[#EEEEEE]'>{ele?.likes}</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <PiChatTextBold className='text-xl text-[#EEEEEE]' />
                                                            <span className='text-xs font-normal text-[#EEEEEE]'>{ele?.comments}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
