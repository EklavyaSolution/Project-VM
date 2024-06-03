"use client"

import Image from 'next/image'
import React from 'react';
import destiny_img from "@/assets/destiny_img.svg"
import BookNumeroSession from '@/components/BookNumeroSession';
import Numbers from '@/components/Numbers';

const Psychic_number = () => {
    return (
        <div className='bg-[#FFFBF6] w-full h-full min-h-screen mb-16'>
            <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
                <h1 className='text-white font-semibold font-poppins text-5xl tracking-[1px]'>Number in Numerology</h1>
            </div>
            <div className='w-full mx-auto max-w-[1200px] mt-10'>
                <h2 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide'>Psychic Numbers</h2>
                <h5 className='text-center text-[#EA8427] font-semibold text-[22px] mt-3 tracking-wide'>Psychic Number is an important Number in Numerology. It is helpful in the long-term planning of events.</h5>
                <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-10'>
                    <div className='w-[360px] h-[220px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#100E6A] font-medium text-xl font-poppins tracking-wide mb-4'>What is Psychic Number?</h2>
                        <p className='w-[650px] font-normal leading-[1.32rem] text-justify'>A Psychic number is also called the Driver number or Mulaank. The psychic number reveals the way a person looks at oneself. It affects what one expects and desires. It tells about your inner-self. How you think, behave and perceive the Universe is majorly defined by your Psychic number.</p>
                    </div>
                </div>
                <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-8'>
                    <div className='w-[360px] h-[220px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#100E6A] font-medium text-xl font-poppins tracking-wide mb-4'>How to Calculate Psychic Number?</h2>
                        <p className='w-[650px] font-normal leading-[1.32rem] text-justify'>Psychic number is calculated by adding the birth date number and finding its single number. Refer to the below two examples to calculate your Psychic number.</p>

                        <p className='mt-4 font-normal leading-[1.32rem]'><span className='font-semibold'>For Example</span> <br />
                            If your date of birth is 24 March 1985.<br />
                            Now birthday is on 24,<br />
                            2 + 4=6<br />
                            6 is the Psychic number here</p>
                    </div>
                </div>
            </div>
            <BookNumeroSession />
            <Numbers name="psychic" />
        </div>

    )
}

export default Psychic_number