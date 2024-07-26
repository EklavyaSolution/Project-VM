"use client"

import Image from 'next/image'
import React from 'react';
import destiny_img from "@/assets/destiny_img.svg"
import BookNumeroSession from '@/components/BookNumeroSession';
import Numbers from '@/components/Numbers';

const Psychic_number = () => {
    return (
        <div className='w-full h-full min-h-screen mb-8 lg:mb-16'>
            <div className='w-full grid place-items-center h-32 lg:h-56 bg-header_bg bg-cover bg-center'>
                <h1 className='text-white text-center font-semibold font-poppins text-4xl lg:text-5xl tracking-[1px] lg:tracking-[0.7px]'>Number in Numerology</h1>
            </div>
            <div className='w-full mx-auto max-w-[1200px] mt-10'>
                <h2 className='text-center font-semibold text-[#10101E] text-3xl lg:text-[33px] px-5 lg:px-0'>Psychic Numbers In <span className='text-[#261891]'>Numerology</span></h2>
                <h5 className='text-center text-[#EA8427] w-full lg:w-[90%] mx-auto font-semibold lg:text-2xl mt-2 px-5 lg:px-0'>Psychic Number is an important Number in Numerology. It is helpful in the long-term planning of events.</h5>
                <div className='w-full px-5 lg:px-12 py-6 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-12 bg-[#FFEECE] mt-10'>
                    <div className='w-full max-w-[380px] h-[190px] lg:h-[240px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#10101E] text-xl lg:text-2xl font-semibold mb-2 lg:mb-3'>What is Psychic Number?</h2>
                        <p className='w-full max-w-[650px] lg:text-lg leading-[22px] lg:leading-[26px] font-medium font-nunito text-[#3D3D3D]'>A Psychic number, also known as the Driver number or Mulaank, is a significant aspect of numerology that delves into your inner self. It unveils how you perceive yourself, what you expect from life, and your core desires. Essentially, your Psychic number is a mirror reflecting your inner thoughts, behaviors, and perceptions of the universe. </p>
                    </div>
                </div>
                <div className='w-full px-5 lg:px-12 py-6 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-12 bg-[#FFEECE] mt-8'>
                    <div className='w-full max-w-[380px] h-[190px] lg:h-[240px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#10101E] text-xl lg:text-2xl font-semibold mb-2 lg:mb-3'>How to Calculate Psychic Number?</h2>
                        <p className='w-full max-w-[650px] lg:text-lg leading-[22px] lg:leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Psychic number is calculated by adding the birth date number and finding its single number. Refer to the below two examples to calculate your Psychic number.</p>

                        <p className='mt-3 lg:text-lg leading-[22px] lg:leading-[26px] font-medium font-nunito text-[#3D3D3D]'><span className='font-bold'>For Example</span> <br />
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