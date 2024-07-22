"use client"

import Image from 'next/image'
import React from 'react';
import about_bg from "@/assets/about_bg.svg"
import banner_man from "@/assets/banner_man.svg"
import about_vid from "@/assets/about_vid.svg"
import Link from 'next/link';
import BookNumeroSession from '@/components/BookNumeroSession';
import Numbers from '@/components/Numbers';
import { destinyData } from '@/components/data/data';
import { notFound } from 'next/navigation';
import AboutVenky from '@/components/AboutVenky';


const DestinyNumbers = ({ params }) => {

    if ((params.id > 9 && params.id != 11 && params.id != 22 && params.id != 33) || params.id < 1) {
        return notFound();
    }

    return (
        <div className='bg-[#FFFBF6] w-full h-full min-h-screen mb-16'>
            <div className='w-full h-[300px] overflow-hidden relative'>
                <Image src={about_bg} alt="" className='w-full h-full object-cover' />
                <div className='w-full absolute top-6 -left-6 flex justify-between items-center px-32'>
                    <div className='text-white font-semibold -mt-10 ml-44 relative'>
                        <h2 className='text-3xl tracking-wider  border-b-2 border-white pb-3 text-center'>Destiny Number {params.id}</h2>
                        <h5 className='text-5xl tracking-wider mt-2'>Numerology</h5>
                        <h4 className='text-[#FFFFFF33] text-[270px] absolute -top-[160%] left-1/2 -translate-x-[50%]'>{params.id}</h4>
                    </div>
                    <div>
                        <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-80' />
                    </div>
                </div>
            </div>
            <div className='w-full mx-auto max-w-[1200px] mt-12 flex flex-col items-center'>
                <h3 className='text-center text-[#10101E] text-[33px] tracking-wide font-semibold'>Number {params.id} as Destiny Number</h3>
                <p className='text-center text-[#EA8427] text-2xl mt-2 tracking-wide font-semibold'>{destinyData[params.id > 10 ? params.id - 1 - (1 + ((params.id % 10 - 1) * 10)) : params.id - 1].mainPara}</p>
                <div className='w-[650px] h-[320px] rounded-lg overflow-hidden mt-12 mb-8'>
                    <Image src={about_vid} alt='Meet Veny Musti' className='w-full h-full object-cover' />
                </div>
                <div className='flex justify-center mb-16'>
                    <Link href="/appointment">
                        <button className='text-white outline-none rounded px-4 py-2 font-semibold tracking-wider bg-[#F2934C]'>Book Appointment</button>
                    </Link>
                </div>
                <div className='w-full py-8 px-16 flex gap-10 border border-[#15138C] rounded-md'>
                    <div className='w-96 h-56 bg-red-400 rounded-md overflow-hidden'>
                        <Image />
                    </div>
                    <div>
                        <h3 className='text-[#10101E] font-semibold tracking-wide text-2xl'>What Does Destiny Number {params.id} Mean?</h3>
                        <ul className='w-[600px] font-medium font-nunito text-[#3D3D3D] text-lg mt-2.5 leading-5 ml-5 list-disc'>
                            {destinyData[params.id > 10 ? params.id - 1 - (1 + ((params.id % 10 - 1) * 10)) : params.id - 1].destinyNum.map((item, index) => {
                                return <li key={index} className='mb-2'>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <BookNumeroSession />
            {destinyData[params.id > 10 ? params.id - 1 - (1 + ((params.id % 10 - 1) * 10)) : params.id - 1].destiny.map((item, index) => {
                return <div key={index} className='w-full px-44 py-6 mb-4 text-center'>
                    <h3 className='text-[#10101E] font-semibold tracking-wide text-2xl'>{item.heading}</h3>
                    <p className='font-medium text-lg font-nunito text-[#3d3d3d] mt-2.5 leading-6'>{item.para}</p>
                </div>
            })}
            <div className='my-16'>
                <AboutVenky />
            </div>
            <Numbers name="destiny" />
        </div>
    )
}

export default DestinyNumbers