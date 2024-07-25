"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import avatar from "@/assets/avatar.svg"


const AboutVenky = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1300px] rounded-md mx-auto w-[95%] py-5 lg:py-8 px-6 lg:px-24 flex flex-col lg:flex-row lg:items-center justify-between shadow-[0px_4px_18px_2px_rgba(0,0,0,0.10)] '>
                <div className='flex gap-4 lg:gap-8 mb-8 lg:mb-0'>
                    <picture className='w-20 h-20 flex-shrink-0 rounded-full overflow-hidden'>
                        <Image src={avatar} alt='Avatar' className='w-full h-full object-cover' />
                    </picture>
                    <div>
                        <h3 className='text-[#10101E] font-bold text-xl lg:text-2xl'>Venky Musti</h3>
                        <p className=' text-[#10101E] px-1 lg:px-3 inline-block rounded mt-1 font-nunito font-medium text-sm bg-[#D9D9D980] border-[0.5px] border-[#0000001A]'>Numerology Expert</p>
                        <p className='text-[#10101E] mt-5 font-nunito font-medium text-sm'>Empowering Individuals Through Numerology</p>
                    </div>
                </div>
                <div>
                    <Link href="/about" className='mb-4 block'>
                        <button className='text-[#FC993E] outline-none rounded-md border border-[#FC993E] px-16 py-2 font-semibold tracking-wide'>Learn More</button>
                    </Link>
                    <Link href="/appointment">
                        <button className='text-white outline-none rounded-md bg-[#FC993E] px-8 py-2 font-semibold tracking-wide'>Book Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutVenky