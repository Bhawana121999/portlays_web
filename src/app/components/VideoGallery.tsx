'use client'

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';


export default function VideoGallery() {

    const [selectedTab, setSelectedTab] = useState(0)
    const videoRef = useRef<any>(null);

    const handlePlayInFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.play();
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    const resetVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;

            // Temporarily clear the video src to force the poster to show
            const src = videoRef.current.src;
            videoRef.current.src = "";
            videoRef.current.src = src;
        }
    };

    const handleFullscreenChange = () => {
        if (!document.fullscreenElement && videoRef.current) {
            resetVideo();
        }
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange); // For Safari

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, []);


    const [galleryArr, setGalleryArr] = useState([
        {
            tab: "Athlete's",
            subArr: [
                {
                    image: '/video1.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video2.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video3.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video1.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
            ]
        },
        {
            tab: "Coaches",
            subArr: [
                {
                    image: '/video2.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video1.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video3.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video1.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
            ]
        },
        {
            tab: "Sports Center",
            subArr: [
                {
                    image: '/video3.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video1.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video2.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
                {
                    image: '/video1.webp',
                    video: '/video5.mp4',
                    head: 'Ledecky',
                },
            ]
        },

    ])



    return (


        <div className="bg-[#D4E0EF]">
            <div className="2xl:max-w-[1650px] lg:px-8 2xl:px-4 mx-auto px-4 py-[60px]">
                <div className="flex flex-col items-center mb-12">
                    <h2 className='text-mainHeading font-bold text-mainHeadingColor mb-2'>Video Gallery</h2>
                    <p className='w-[70%] text-2xl font-medium text-paraColor text-center'>
                        Discover captivating videos of athletes, coaches, and sport centers, highlighting their achievements and impactful moments.
                    </p>
                </div>

                <div className="flex flex-row items-center justify-between mb-7">
                    <ul className='flex flex-row gap-1'>
                        {
                            galleryArr && galleryArr?.length > 0 && galleryArr?.map((el, i) => (
                                <li onClick={() => setSelectedTab(i)} key={i} className={`${selectedTab === i ? 'bg-secondaryBg text-white' : 'bg-[#EEEEEE] text-paraColor'} text-base font-medium p-4 cursor-pointer`}>{el?.tab}</li>
                            ))
                        }
                    </ul>

                    <Link href='#' className='text-xl font-semibold text-mainHeadingColor'>See All</Link>
                </div>

                <div className="grid grid-cols-4 gap-5" >
                    {
                        galleryArr[selectedTab]?.subArr && galleryArr[selectedTab]?.subArr?.length > 0 && galleryArr[selectedTab]?.subArr?.map((ele, ind) => (

                            < div className="col-span-1 relative flex flex-col items-center justify-center gradient_bg" key={ind}>
                                <video
                                    ref={videoRef}
                                    width="100%"
                                    height="auto"
                                    poster={ele?.image}
                                    className="relative rounded-[10px]"
                                >
                                    <source src={ele?.video} type="video/mp4" />
                                </video>

                                <button
                                    type="button"
                                    onClick={handlePlayInFullscreen}
                                    className="absolute w-[50px] h-[50px] rounded-full bg-[#FAFAFA] flex items-center justify-center z-[2]"
                                >
                                    <FaPlay className="text-xl text-mainHeadingColor" />
                                </button>

                                <h4 className="text-2xl font-semibold text-white absolute bottom-5 z-[2]">{ele?.head}</h4>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div >
    );
}
