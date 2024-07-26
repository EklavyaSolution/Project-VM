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
import num11 from "@/assets/num11.svg"
import num22 from "@/assets/num22.svg"
import num33 from "@/assets/num33.svg"
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
    {
        id: 11,
        img: num11,
    },
    {
        id: 22,
        img: num22,
    },
    {
        id: 33,
        img: num33,
    },
    ];
    return (
        <section className='w-full px-6 lg:px-12'>
            <h3 className='text-center font-semibold text-[#10101E] text-3xl lg:text-[33px] mb-8 lg:mb-12 capitalize'>{name} <span className='text-[#261891]'>Numbers</span></h3>
            <div className='flex flex-wrap items-center justify-center gap-5 lg:gap-10'>
                {data.map((item) => {
                    if (name !== "destiny" && item.id > 10) {
                        return;
                    } else {
                        return <Link key={item.id} href={`/numerology/${name}-number/${item.id}`} className='w-[47%] lg:w-fit'>
                            <div className='lg:w-[250px] rounded overflow-hidden bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)]'>
                                <Image src={item.img} alt='' className='w-full object-cover' />
                                <h3 className='py-3 text-center font-semibold text-lg tracking-wide capitalize'>{name} Number {item.id > 10 ? "" : 0}{item.id}</h3>
                            </div>
                        </Link>
                    }
                })}

            </div>
        </section>
    )
}

export default Numbers