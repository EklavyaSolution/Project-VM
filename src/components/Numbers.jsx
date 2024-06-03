"use client"

import Image from 'next/image'
import React from 'react';
import num1 from "@/assets/num1.svg"
import num2 from "@/assets/num2.svg"
import num3 from "@/assets/num3.svg"
import num4 from "@/assets/num4.svg"
import num5 from "@/assets/num5.svg"
import num6 from "@/assets/num6.svg"
import num7 from "@/assets/num7.svg"
import num8 from "@/assets/num8.svg"
import num9 from "@/assets/num9.svg"
import Link from 'next/link';


const Numbers = ({ name }) => {
    const data = [{
        id: 1,
        img: num1,
    },
    {
        id: 2,
        img: num2,
    },
    {
        id: 3,
        img: num3,
    },
    {
        id: 4,
        img: num4,
    },
    {
        id: 5,
        img: num5,
    },
    {
        id: 6,
        img: num6,
    },
    {
        id: 7,
        img: num7,
    },
    {
        id: 8,
        img: num8,
    },
    {
        id: 9,
        img: num9,
    },
    ]
    return (
        <section className='w-full px-12'>
            <h3 className='text-center font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4 mb-12 capitalize'>{name} Numbers</h3>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                {data.map((item) => {
                    return <Link href={`/numerology/${name}-number/${item.id}`}>
                        <div key={item.id} className='w-[250px] rounded overflow-hidden bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)]'>
                            <Image src={item.img} alt='' className='w-full object-cover' />
                            <h3 className='py-3 text-center font-semibold text-lg capitalize'>{name} Number 0{item.id}</h3>
                        </div>
                    </Link>
                })}

            </div>
        </section>
    )
}

export default Numbers