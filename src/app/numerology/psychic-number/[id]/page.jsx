"use client"

import Image from 'next/image'
import React from 'react';
import about_bg from "@/assets/about_bg.svg"
import banner_man from "@/assets/banner_man.svg"
import about_vid from "@/assets/about_vid.svg"
import Link from 'next/link';
import BookNumeroSession from '@/components/BookNumeroSession';
import Numbers from '@/components/Numbers';
import num1 from "@/assets/num1.svg";
import { psychicData } from '@/components/data/data';
import { notFound } from 'next/navigation';


const PsychicNumbers = ({ params }) => {
  if (params.id > 9 || params.id < 1) {
    return notFound();
  }

  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen mb-16'>
      <div className='w-full h-[300px] overflow-hidden relative'>
        <Image src={about_bg} alt="" className='w-full h-full object-cover' />
        <div className='w-full absolute top-6 -left-6 flex justify-between items-center px-32'>
          <div className='text-white font-semibold -mt-10 ml-44 relative'>
            <h2 className='text-3xl tracking-wider  border-b-2 border-white pb-3 text-center'>Psychic Number {params.id}</h2>
            <h5 className='text-5xl tracking-wider mt-2'>Numerology</h5>
            <h4 className='text-[#FFFFFF33] text-[270px] absolute -top-[160%] left-1/2 -translate-x-[50%]'>{params.id}</h4>
          </div>
          <div>
            <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-80' />
          </div>
        </div>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-16 flex flex-col items-center'>
        <h3 className='text-center font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4'>{psychicData[params.id - 1].mainHeading}</h3>
        <p className='text-center text-[#EA8427] font-semibold text-2xl mx-auto mt-4 w-[90%]'>{psychicData[params.id - 1].mainPara}</p>
        <div className='w-[500px] h-[280px] rounded-lg overflow-hidden mt-12 mb-8'>
          <Image src={about_vid} alt='Meet Veny Musti' className='w-full h-full object-cover' />
        </div>
        <div className='flex justify-center mb-12'>
          <Link href="/appointment">
            <button className='text-white outline-none rounded px-4 py-2 font-semibold tracking-wider bg-[#F2934C]'>Book Your Appointment</button>
          </Link>
        </div>
        <div className='w-full bg-[#ECF7FF] py-8 px-16 flex gap-10'>
          <div className='w-96 h-56 bg-red-400 rounded-md overflow-hidden'>
            <Image />
          </div>
          <div>
            <h3 className='text-[#100E6A] text-3xl font-semibold'>Ruling Planet of Number 1</h3>
            <p className='w-[650px] font-medium text-lg mt-3 leading-6'>{psychicData[params.id - 1].rulingPlanet}</p>
          </div>
        </div>
        <div className='w-full bg-[#ECF7FF] py-8 px-16 flex gap-10 mt-8 mb-12'>
          <div className='w-96 h-56 bg-red-400 rounded-md overflow-hidden'>
            <Image src={num1} alt='' className='w-full h-full object-cover' />
          </div>
          <div>
            <h3 className='text-[#100E6A] text-3xl font-semibold'>Lucky Colors of Number 1</h3>
            <p className='w-[650px] font-medium text-lg mt-3 leading-6'>{psychicData[params.id - 1].luckyColors}</p>
          </div>
        </div>
      </div>
      {psychicData[params.id - 1].character.map((item, index) => {
        return <div key={index} className='w-full px-44 py-6 bg-[#FFF3E0] mb-4'>
          {item.heading && <h3 className='text-[#100E6A] text-3xl font-semibold text-center mb-3'>{item.heading}</h3>}
          <p className='font-medium text-lg mt-3 leading-6 text-center whitespace-break-spaces'>{item.para}</p>
        </div>
      })}
      <BookNumeroSession />
      <Numbers name="psychic" />
    </div>
  )
}

export default PsychicNumbers