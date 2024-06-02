"use client"

import Image from 'next/image'
import React from 'react';
import destiny_img from "@/assets/destiny_img.svg"
import BookNumeroSession from '@/components/BookNumeroSession';
import Numbers from '@/components/Numbers';

const Psychic_number = () => {
    return (
        <div className='bg-[#FFFBF6] w-full h-full min-h-screen mb-16'>
            <div className='w-full grid place-items-center h-48 lg:h-52  2xl:h-56 bg-sky-500 '>
                <h1 className='text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px]'>Psychic Number in Numerology</h1>
            </div>
            <div className='w-full mx-auto max-w-[1200px] mt-6'>
                <h2 className='text-center font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4'>Psychic Number</h2>
                <h5 className='text-center text-[#EA8427] font-semibold text-xl mt-2 tracking-wide'>Psychic Number is an important Number in Numerology. It is helpful in the long-term planning of events.</h5>
                <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-8'>
                    <div className='w-[280px] h-[220px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#100E6A] font-semibold text-2xl leading-5 mb-4'>What is Psychic Number?</h2>
                        <p className='w-[740px] font-normal leading-[1.32rem]'>Destiny Number is also called as Life Path number / Conductor number or Bhagyaank. It is an essential number for personal numerology calculation. Destiny Number tells about the fate of a person. The Destiny Number reveals how a person's life will be and what a person will receive in life. It also helps predicting life's important events.</p>
                    </div>
                </div>
                <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-8'>
                    <div className='w-[280px] h-[220px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#100E6A] font-semibold text-2xl leading-5 mb-4'>How to Calculate Psychic Number?</h2>
                        <p className='w-[740px] font-normal leading-[1.32rem]'>Psychic Number / Bhagyank number is calculated by adding the person's date of birth and then reducing the obtained number into a single-digit number. Refer to the below example to calculate your Psychic Number.</p>

                        <p className='mt-4 font-normal leading-[1.32rem]'><span className='font-semibold'>For Example</span> <br />
                            Let's assume you are born on 4 April 1985, <br />
                            Add date + month + year <br />
                            4 + 4 + 1 + 9 + 8 +5 <br />
                            = 31= 3 + 1= 4 <br />
                            Your Destiny Number is 4</p>
                    </div>
                </div>
            </div>
            <BookNumeroSession />
            <Numbers name="psychic" />
        </div>

    )
}

export default Psychic_number