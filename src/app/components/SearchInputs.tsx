'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import { IoPaperPlane } from "react-icons/io5";




export default function SearchInputs() {

    const [search, setSearch] = useState(false);
    const [sports, setSports] = useState(false);
    const [location, setLocation] = useState(false);
    const [name, setName] = useState(false);
    const [inputSearch, setInputSearch] = useState('')
    const [inputSports, setInputSports] = useState('')
    const [inputLocation, setInputLocation] = useState('')
    const [inputName, setInputName] = useState('')

    const handleSearch = () => {
        setSearch(!search)
    }

    const handleSports = () => {
        setSports(!sports)
    }

    const handleLocation = () => {
        setLocation(!location)
    }

    const handleName = () => {
        setName(!name)
    }

    const [searchArr, setSearchArr] = useState([
        {
            destination: 'New Delhi',
        },
        {
            destination: 'Goa',
        },
        {
            destination: 'Mumbai',
        },
        {
            destination: 'Gujrat',
        },
    ])

    const [sportsArr, setSportsArr] = useState([
        {
            destination: 'New Delhi',
        },
        {
            destination: 'Goa',
        },
        {
            destination: 'Mumbai',
        },
        {
            destination: 'Gujrat',
        },
    ])

    const [locationArr, setLocationArr] = useState([
        {
            destination: 'New Delhi',
        },
        {
            destination: 'Goa',
        },
        {
            destination: 'Mumbai',
        },
        {
            destination: 'Gujrat',
        },
    ])

    const [nameArr, setNameArr] = useState([
        {
            destination: 'New Delhi',
        },
        {
            destination: 'Goa',
        },
        {
            destination: 'Mumbai',
        },
        {
            destination: 'Gujrat',
        },
    ])

    const ref: any = useRef(null)
    useEffect(() => {
        function handleOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setSearch(false)
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [ref, ref.current]);

    const refSports: any = useRef(null)
    useEffect(() => {
        function handleOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setSports(false)
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [ref, ref.current]);

    const refLocation: any = useRef(null)
    useEffect(() => {
        function handleOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setLocation(false)
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [ref, ref.current]);


    const refName: any = useRef(null)
    useEffect(() => {
        function handleOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setName(false)
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [ref, ref.current]);


    return (

        <>
            <div className='2xl:max-w-[1450px] lg:px-8 2xl:px-4 mx-auto px-4 py-[60px] bg-red-100'>
                <div className="flex flex-row gap-5">
                    <div className='relative' onClick={handleSearch} >
                        <label className='absolute -top-[0.65rem] left-4 bg-white text-sm font-medium text-mainHeadingColor px-1'>Search</label>
                        <input className='rounded border border-primaryColor py-[18px] px-4 text-sm font-semibold text-paraColor outline-0' type="text" placeholder="Area, Landmark or Property name" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />

                        {
                            search ?
                                <ul ref={ref} className='flex flex-col w-full  bg-white px-4 py-2'>
                                    {
                                        searchArr.map((el, index) => (
                                            <li key={index} onClick={() => setInputSearch(el.destination)} className='text-sm font-medium py-1'>{el.destination}</li>
                                        ))
                                    }

                                </ul>
                                : ''
                        }

                    </div>

                    <div className='relative' onClick={handleSports} >
                        <label className='absolute -top-[0.65rem] left-4 bg-white text-sm font-medium text-mainHeadingColor px-1'>Search</label>
                        <input className='rounded border border-primaryColor py-[18px] px-4 text-sm font-semibold text-paraColor outline-0' type="text" placeholder="Area, Landmark or Property name" value={inputSports} onChange={(e) => setInputSports(e.target.value)} />

                        {
                            sports ?
                                <ul ref={refSports} className='flex flex-col w-full  bg-white px-4 py-2'>
                                    {
                                        sportsArr.map((el, index) => (
                                            <li key={index} onClick={() => setInputSports(el.destination)} className='text-sm font-medium py-1'>{el.destination}</li>
                                        ))
                                    }

                                </ul>
                                : ''
                        }

                    </div>

                    <div className='relative' onClick={handleLocation} >
                        <label className='absolute -top-[0.65rem] left-4 bg-white text-sm font-medium text-mainHeadingColor px-1'>Search</label>
                        <input className='rounded border border-primaryColor py-[18px] px-4 text-sm font-semibold text-paraColor outline-0' type="text" placeholder="Area, Landmark or Property name" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} />

                        {
                            location ?
                                <ul ref={refLocation} className='flex flex-col w-full  bg-white px-4 py-2'>
                                    {
                                        locationArr.map((el, index) => (
                                            <li key={index} onClick={() => setInputLocation(el.destination)} className='text-sm font-medium py-1'>{el.destination}</li>
                                        ))
                                    }

                                </ul>
                                : ''
                        }

                    </div>

                    <div className='relative' onClick={handleName} >
                        <label className='absolute -top-[0.65rem] left-4 bg-white text-sm font-medium text-mainHeadingColor px-1'>Search</label>
                        <input className='rounded border border-primaryColor py-[18px] px-4 text-sm font-semibold text-paraColor outline-0' type="text" placeholder="Area, Landmark or Property name" value={inputName} onChange={(e) => setInputName(e.target.value)} />

                        {
                            name ?
                                <ul ref={refName} className='flex flex-col w-full  bg-white px-4 py-2'>
                                    {
                                        nameArr.map((el, index) => (
                                            <li key={index} onClick={() => setInputName(el.destination)} className='text-sm font-medium py-1'>{el.destination}</li>
                                        ))
                                    }

                                </ul>
                                : ''
                        }

                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                        <Link href='/Searchhotel' ><IoPaperPlane /> Show Hotels</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
