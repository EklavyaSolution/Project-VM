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
                <h2 className='text-center font-semibold text-[#10101E] text-[33px]'>Psychic Numbers In <span className='text-[#261891]'>Numerology</span></h2>
                <h5 className='text-center text-[#EA8427] w-[90%] mx-auto font-semibold text-2xl mt-2'>Psychic Number is an important Number in Numerology. It is helpful in the long-term planning of events.</h5>
                <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-10'>
                    <div className='w-[380px] h-[240px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#10101E] text-2xl font-semibold mb-3'>What is Psychic Number?</h2>
                        <p className='w-[650px] text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>A Psychic number, also known as the Driver number or Mulaank, is a significant aspect of numerology that delves into your inner self. It unveils how you perceive yourself, what you expect from life, and your core desires. Essentially, your Psychic number is a mirror reflecting your inner thoughts, behaviors, and perceptions of the universe. </p>
                    </div>
                </div>
                <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-8'>
                    <div className='w-[380px] h-[240px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
                        <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h2 className='text-[#10101E] text-2xl font-semibold mb-3'>How to Calculate Psychic Number?</h2>
                        <p className='w-[650px] text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Psychic number is calculated by adding the birth date number and finding its single number. Refer to the below two examples to calculate your Psychic number.</p>

                        <p className='mt-3 text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'><span className='font-bold'>For Example</span> <br />
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