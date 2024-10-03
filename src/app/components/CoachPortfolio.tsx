'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import card1 from '@/assets/images/card1.png'
import card2 from '@/assets/images/card2.png'
import { FaRegHeart } from 'react-icons/fa'
import coach from '@/assets/images/coach.webp'
import JoinPortlaysForm from './JoinPortlaysForm'

export default function CoachPortfolio() {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(!isOpen)
    }

    const close = () => {
        setIsOpen(!isOpen)
    }

    const [coachArr, setCoachArr] = useState([
        {
            coachName: 'Arjun Singh Rathore',
            image: coach,
        },
        {
            coachName: 'Arjun Singh Rathore',
            image: coach,
        },
        {
            coachName: 'Arjun Singh Rathore',
            image: coach,
        },
        {
            coachName: 'Arjun Singh Rathore',
            image: coach,
        },
        {
            coachName: 'Arjun Singh Rathore',
            image: coach,
        },
        {
            coachName: 'Arjun Singh Rathore',
            image: coach,
        },
    ])


    return (

        <div className="bg-[#EEEEEE]">
            <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4 py-[60px]">
                <div className="text-center relative mb-12">
                    <div className="flex flex-col items-center">
                        <h2 className='text-mainHeading font-bold text-mainHeadingColor mb-2'>Portlays Coach Portfolio</h2>
                        <p className='w-[70%] text-2xl font-medium text-paraColor'>Highlight of coaching expertise and impact to engage with the global sports community, enhancing recognition, professional growth, and networking opportunities.</p>
                    </div>

                    <Link href='#' className='text-xl font-semibold text-mainHeadingColor absolute right-0 top-[5.75rem]'>See All</Link>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {
                        coachArr && coachArr?.length > 0 && coachArr?.map((el, i) => (
                            <div className="col-span-1 box_shadow rounded-t-[10px]" key={i}>
                                <div className="grid grid-cols-2 h-[465px] relative">
                                    <div className="absolute top-3 left-7 flex flex-row items-start justify-between pr-7 pt-3">
                                        <h4 className='text-[55px] font-bold text-primaryColor leading-[65px]'>{el?.coachName}</h4>
                                        <button className='text-primaryColor text-xl pt-5'><FaRegHeart /></button>
                                    </div>
                                    <div className="col-span-1 bg-[#d4e0ef] rounded-tl-[10px]"></div>
                                    <div className="col-span-1 bg-[#fafafa] rounded-tr-[10px]"></div>

                                    <div className="absolute bottom-[-4.75rem] right-[1.75rem] card_box">
                                        <div className="bg-white w-[300px] h-[360px] relative z-10">
                                            <div className="w-full h-[320px] relative ">
                                                <Image src={el?.image} alt='' fill className='object-contain' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row item-center gap-4 bg-primaryBgColor py-10 px-4 rounded-b-[10px] relative z-[1]">
                                    <button>
                                        <Image src={card1} alt='' className='w-[30px] h-[30px] object-contain' />
                                    </button>
                                    <button>
                                        <Image src={card2} alt='' className='w-[30px] h-[30px] object-contain' />
                                    </button>
                                </div>

                            </div>
                        ))
                    }

                </div>

                <div className="flex flex-row items-center justify-center">
                    <button onClick={() => setIsOpen(true)} className='text-xl font-medium text-white bg-secondaryBg rounded-full py-4 px-6 mt-10'>Join as Coach</button>
                </div>

                <JoinPortlaysForm isOpen={isOpen} setIsOpen={setIsOpen} close={close} open={open} />
            </div>
        </div>

    )
}

