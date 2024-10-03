'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import portfolio from '@/assets/images/portfolio.webp'
import {FaRegHeart} from 'react-icons/fa'
import card1 from '@/assets/images/card1.png'
import card2 from '@/assets/images/card2.png'
import JoinPortlaysForm from './JoinPortlaysForm'



export default function AthletePortfolio() {


    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(!isOpen)
    }

    const close = () => {
        setIsOpen(!isOpen)
    }


    const [portfolioArr, setPortfolioArr] = useState([
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
        {
            name: 'Arjun Singh Rathore',
            image: portfolio,
            para: 'Dynamic table tennis star with unmatched skill, drive, and charisma',
        },
    ])


    return (

        <>
            <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4 py-[60px]">
                <div className="text-center relative mb-12">
                    <h2 className='text-mainHeading font-bold text-mainHeadingColor mb-2'>Portlays Athlete Portfolio</h2>
                    <div className="flex flex-col items-center">
                        <p className='w-[70%] text-2xl font-medium text-paraColor'>Showcase of athletic journeys and achievements to connect with the global sports community,<br /> boosting visibility, recognition, and career opportunities.</p>
                    </div>

                    <Link href='#' className='text-xl font-semibold text-mainHeadingColor absolute right-0 top-[5.75rem]'>See All</Link>
                </div>


                <div className="grid grid-cols-4 gap-5">
                    {
                        portfolioArr && portfolioArr?.length > 0 && portfolioArr?.map((el, i) => (
                            <div className="col-span-1 rounded-lg overflow-hidden box_shadow" key={i}>
                                <div className="bg-secondaryBg relative h-11">
                                    <div className="absolute">
                                        <h4 className='text-2xl font-bold text-white shape_skew1 uppercase'>{el?.name}</h4>
                                    </div>
                                    <button className='w-full flex flex-row justify-end py-3 px-[30px] text-white text-xl'><FaRegHeart /></button>
                                </div>
                                <div className="bg-white h-[400px] flex flex-row items-center justify-center">
                                    <div className="w-[225px] h-[270px] relative">
                                        <Image src={el?.image} alt='' fill className='object-contain' />
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-secondaryBg h-24">
                                        <div className="absolute flex flex-row item-center gap-4 shape_skew3">
                                            <button>
                                                <Image src={card1} alt='' className='w-[22px] h-[22px] object-contain' />
                                            </button>
                                            <button>
                                                <Image src={card2} alt='' className='w-[22px] h-[22px] object-contain' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-0">
                                        <p className='text-lg font-normal text-white shape_skew2 leading-[1.55rem]'>{el?.para}</p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>

                <div className="flex flex-row items-center justify-center">
                    <button onClick={() => setIsOpen(true)} className='text-xl font-medium text-white bg-secondaryBg rounded-full py-4 px-6 mt-10'>Join as Athlete</button>
                </div>
            </div>


            <JoinPortlaysForm isOpen={isOpen} setIsOpen={setIsOpen} close={close} open={open} />


        </>

    )
}
