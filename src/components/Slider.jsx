"use client"

import React, { useState, useEffect } from 'react';
import banner_bg from "@/assets/banner_bg.svg"
import banner_man from "@/assets/banner_man.svg"
import numero_sol1 from "@/assets/numero_sol1.svg"
import numero_sol2 from "@/assets/numero_sol2.svg"
import numero_sol3 from "@/assets/numero_sol3.svg"
import numero_blog from "@/assets/numero_blog.svg"
import Image from 'next/image';
import Link from 'next/link';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, },
        { id: 2, },
        { id: 3, },
    ];
    const totalSlides = slides.length * 3;

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    //     }, 3000); // Change slide every 3 seconds
    //     return () => clearInterval(interval);
    // }, [totalSlides, currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((slide) => (slide === totalSlides - 1 ? 0 : slide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((slide) => (slide === 0 ? totalSlides - 1 : slide - 1));
    };

    return (
        <div className="w-full h-full relative">
            {/* <div className="w-full h-full flex overflow-hidden">
                {[...slides, ...slides, ...slides].map((slide, index) => (
                    <div className="w-full flex-grow-0 shrink-0 h-[400px] relative transition-all duration-500 ease-in-out" style={{ translate: `-${currentSlide * 100}%` }} key={index}>
                        <Image src={banner_bg} alt="" className='w-full h-full object-cover' />
                        <div className='w-full absolute top-6 left-0 flex justify-between items-center px-32'>
                            <div className='text-white font-semibold mt-12'>
                                <h2 className='text-3xl tracking-wider mb-2'>Best Numerologist in New Jersey {index}</h2>
                                <h5 className='text-xl tracking-wider mb-6'>Astro Numerology | Career | Relationship | Business</h5>
                                <Link href="/appointment"><button className='bg-[#F2934C]  px-7 py-2 rounded tracking-wider'>Book Appointment</button></Link>
                            </div>
                            <div>
                                <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-96' />
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="w-[1250px] mx-auto h-full flex overflow-hidden gap-16 items-center">
                {[...slides, ...slides, ...slides].map((slide, index) => (
                    <div className="w-[370px] flex-grow-0 shrink-0 rounded overflow-hidden text-center bg-white border-[#9E9E9E] border-[0.5px]  relative transition-all duration-500 ease-in-out" style={{ translate: `-${currentSlide * 100}%` }} key={index}>
                        <Image src={numero_sol1} alt='' className='w-full h-full object-cover' />
                        <h3 className='font-semibold mt-3 text-lg'>Astro Numerology Consultation</h3>
                        <p className='font-medium text-[#4E4E4E] mt-3'>Astro Numerology readings provide you with a comprehensive image of your life reading.</p>
                        <Link href="/appointment"><button className='border-[#F2934C] border font-medium px-4 py-1.5 rounded tracking-wider text-[#FC993E] my-4'>More details</button></Link>
                    </div>
                ))}

            </div>
            <button className=" px-4 py-1.5 absolute top-1/2 left-6  translate-y-[-50%] bg-[#FFFBF6] rounded-full text-xl " onClick={prevSlide}>&#10094;</button>
            <button className=" px-4 py-1.5 absolute top-1/2 right-6  translate-y-[-50%] bg-[#FFFBF6] rounded-full text-xl " onClick={nextSlide}>&#10095;</button>
        </div>
    );
};
export default Slider;