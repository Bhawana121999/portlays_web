'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function SportsCalender() {

    const [value, onChange] = useState<Value>(new Date());

    return (

        <div className="bg-[#EEEEEE]">
            <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4 py-[60px]">
                <div className="text-center relative mb-12">
                    <div className="flex flex-col items-center">
                        <h2 className='text-mainHeading font-bold text-mainHeadingColor mb-2'>Sports Calendar</h2>
                        <p className='w-[52%] text-2xl font-medium text-paraColor'>View upcoming sports events and set reminders to stay on top of all the action</p>
                    </div>

                    <Link href='#' className='text-xl font-semibold text-mainHeadingColor absolute right-0 top-[5.75rem]'>See All</Link>
                </div>


                <div className="grid grid-cols-7 gap-14">
                    <div className="col-span-4">
                        <ul className='flex flex-col gap-3 overflow-y-scroll h-[69vh] scroll_custom pr-3'>
                            <li className='flex flex-col bg-[#b4d7fd] py-[30px] px-6 rounded-[10px]'>
                                <h4 className='text-[32px] font-bold text-black'>Key India Events - Aug 12</h4>
                                <p className='text-2xl font-medium text-black'>India VS South Africa</p>
                                <p className='text-lg font-medium text-mainHeadingColor'>ICC U19 Men’s World Cup 2024 India vs South Africa 1st T20 9th Aug | 7:00 pm</p>
                            </li>
                            <li className='flex flex-col bg-[#fbe1d7] py-[30px] px-6 rounded-[10px]'>
                                <h4 className='text-[32px] font-bold text-black'>Key India Events - Aug 12</h4>
                                <p className='text-2xl font-medium text-black'>India VS South Africa</p>
                                <p className='text-lg font-medium text-mainHeadingColor'>ICC U19 Men’s World Cup 2024 India vs South Africa 1st T20 9th Aug | 7:00 pm</p>
                            </li>
                            <li className='flex flex-col bg-[#d0e7f3] py-[30px] px-6 rounded-[10px]'>
                                <h4 className='text-[32px] font-bold text-black'>Key India Events - Aug 12</h4>
                                <p className='text-2xl font-medium text-black'>India VS South Africa</p>
                                <p className='text-lg font-medium text-mainHeadingColor'>ICC U19 Men’s World Cup 2024 India vs South Africa 1st T20 9th Aug | 7:00 pm</p>
                            </li>
                            <li className='flex flex-col bg-[#b4d7fd] py-[30px] px-6 rounded-[10px]'>
                                <h4 className='text-[32px] font-bold text-black'>Key India Events - Aug 12</h4>
                                <p className='text-2xl font-medium text-black'>India VS South Africa</p>
                                <p className='text-lg font-medium text-mainHeadingColor'>ICC U19 Men’s World Cup 2024 India vs South Africa 1st T20 9th Aug | 7:00 pm</p>
                            </li>
                            <li className='flex flex-col bg-[#fbe1d7] py-[30px] px-6 rounded-[10px]'>
                                <h4 className='text-[32px] font-bold text-black'>Key India Events - Aug 12</h4>
                                <p className='text-2xl font-medium text-black'>India VS South Africa</p>
                                <p className='text-lg font-medium text-mainHeadingColor'>ICC U19 Men’s World Cup 2024 India vs South Africa 1st T20 9th Aug | 7:00 pm</p>
                            </li>
                            <li className='flex flex-col bg-[#d0e7f3] py-[30px] px-6 rounded-[10px]'>
                                <h4 className='text-[32px] font-bold text-black'>Key India Events - Aug 12</h4>
                                <p className='text-2xl font-medium text-black'>India VS South Africa</p>
                                <p className='text-lg font-medium text-mainHeadingColor'>ICC U19 Men’s World Cup 2024 India vs South Africa 1st T20 9th Aug | 7:00 pm</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-3">
                        <div className='calendar_box'>
                            <Calendar onChange={onChange} value={value} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <button className='text-xl font-medium text-white bg-secondaryBg rounded-full py-4 px-6 mt-10'>Set Reminder</button>
                </div>

            </div>
        </div>
    )
}
