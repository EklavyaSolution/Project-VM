"use client"

import Image from 'next/image'
import React from 'react';
import num1 from "@/assets/num1.svg"


const Numbers = ({ name }) => {
    const data = [{
        id: 1,
        img: num1,
    },
    {
        id: 2,
        img: num1,
    },
    {
        id: 3,
        img: num1,
    },
    {
        id: 4,
        img: num1,
    },
    {
        id: 5,
        img: num1,
    },]
    return (
        <section className='w-full px-12'>
            <h3 className='text-center font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4 mb-12 capitalize'>{name} Numbers</h3>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                {data.map((item) => {
                    return <div key={item.id} className='w-[250px] rounded overflow-hidden bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)]'>
                        <Image src={item.img} alt='' className='w-full object-cover' />
                        <h3 className='py-3 text-center font-semibold text-lg capitalize'>{name} Number 0{item.id}</h3>
                    </div>
                })}

            </div>
        </section>
    )
}

export default Numbers