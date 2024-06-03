"use client"

import Image from 'next/image'
import React from 'react'
import destini_no from "@/assets/destinyno_img.svg"
import physic_no from "@/assets/Physicno_img.svg"
import wedding_numero from "@/assets/wedding_numero.svg"
import mob_no_numero from "@/assets/mob_no_numero.svg"
import job_no_numero from "@/assets/job_no_numero.svg"
import email_id_numero from "@/assets/email_id_numero.svg"
import car_no_numero from "@/assets/car_no_numero.svg"
import dob_numero from "@/assets/dob_numero.svg"
import house_no_numero from "@/assets/house_no_numero.svg"
import Link from 'next/link'
import BookNumeroSession from '@/components/BookNumeroSession'


const Numerology = () => {

  const calculator_data = [{
    name: "Lucky Marriage Date Numerology",
    width: "28",
    image: "wedding_numero",
  },
  {
    name: "Car Number Numerology",
    width: "[104px]",
    image: "car_no_numero",
  },
  {
    name: "Mobile Number Numerology",
    width: "[104px]",
    image: "mob_no_numero",
  },
  {
    name: "House Number Numerology",
    width: "52",
    image: "house_no_numero",
  },
  {
    name: "Email ID Number Numerology",
    width: "28",
    image: "wedding_numero",
  },
  {
    name: "Job Number Numerology",
    width: "36",
    image: "wedding_numero",
  },
  {
    name: "Date of Birth Number Numerology",
    width: "[168px]",
    image: "dob_numero",
  },
  ]


  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center	 '>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[1px]'>Numerology</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-10'>
        <h2 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide'>Numbers In Numerology</h2>
        <div className='flex gap-12 bg-[#FDF2F8] mt-6 py-10 px-12'>
          <div className='w-[380px] h-[330px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={physic_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div>
            <h2 className='text-[#100E6A] font-poppins font-semibold text-2xl mb-2 tracking-[0.3px]'>Psychic Number </h2>
            <p className='w-[600px] font-normal tracking-[0.2px]'>Embark on a transformative journey with Venky Musti's AstroNumerology consultations. Through a unique fusion of astrology and numerology, Venky provides detailed insights into your life's patterns and cosmic influences. Discover the power of aligning your name, business, or partnerships with favorable numbers to attract prosperity and abundance. Uncover the dynamics of your relationships, identify auspicious timings, and receive guidance on overcoming challenges. Venky's personalized approach empowers you to make informed decisions, unlocking your true potential for success and fulfillment. Embrace the cosmic wisdom and take charge of your destiny today, Get Best Astro Numerology In New York City USA.</p>
            <Link href="/numerology/psychic-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-5 font-semibold tracking-wider bg-gradient-to-r from-[#FFB1DC] to-[#FF57B3] border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#FFB0DB80]'>Know more</button>
            </Link>
          </div>
        </div>
        <div className='flex justify-between bg-[#ECF7FF] mt-12 py-10 px-12'>
          <div>
            <h2 className='text-[#100E6A] font-poppins font-semibold text-2xl mb-2 tracking-[0.3px]'>Destiny Number </h2>
            <p className='w-[600px] font-normal tracking-[0.2px]'>Embark on a transformative journey with Venky Musti's AstroNumerology consultations. Through a unique fusion of astrology and numerology, Venky provides detailed insights into your life's patterns and cosmic influences. Discover the power of aligning your name, business, or partnerships with favorable numbers to attract prosperity and abundance. Uncover the dynamics of your relationships, identify auspicious timings, and receive guidance on overcoming challenges. Venky's personalized approach empowers you to make informed decisions, unlocking your true potential for success and fulfillment. Embrace the cosmic wisdom and take charge of your destiny today, Get Best Astro Numerology In New York City USA.</p>
            <Link href="/numerology/destiny-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-5 font-semibold tracking-wider bg-gradient-to-r from-[#ABDCFF] to-[#75C5FF] border-[0.5px] border-[#CDEAFF80] shadow-[2px_4px_8px_0px_#BDE3FF80]'>Know more</button>
            </Link>
          </div>
          <div className='w-[380px] h-[330px] overflow-hidden rounded-tr-2xl rounded-bl-2xl'>
            <Image src={destini_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
      <BookNumeroSession />

      <div className='bg-[#FFEECE] w-full py-8 mb-16'>
        <h3 className='mb-10 font-poppins text-[33px] tracking-wide font-semibold text-center text-[#100E6A]'>Numerology Calculation</h3>
        <div className='flex justify-center gap-8 flex-wrap items-center max-w-[1200px] w-full mx-auto mb-6 text-center text-[#100E6A] font-medium leading-5'>

          <div className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[215px] py-8  rounded-md'>
            <Image src={wedding_numero} alt='' className="w-28" />
            <h3 className='w-48  text-lg mt-4 leading-[22px] '>Lucky Marriage Date Numerology</h3>
          </div>
          <div className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[208px] py-8 rounded-md'>
            <Image src={car_no_numero} alt='' className='w-[98px]' />
            <h3 className='w-48 text-lg mt-4 leading-[22px]'>Car Number Numerology</h3>
          </div>
          <div className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[208px] py-8 rounded-md'>
            <Image src={mob_no_numero} alt='' className='w-[98px]' />
            <h3 className='w-48 text-lg mt-4 leading-[22px]'>Mobile Number Numerology</h3>
          </div>
          <div className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[208px] py-8 rounded-md'>
            <Image src={house_no_numero} alt='' className='w-48' />
            <h3 className='w-48 text-lg mt-4 leading-[22px]'>House Number Numerology</h3>
          </div>
          <div className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[208px] py-8 rounded-md'>
            <Image src={email_id_numero} alt='' className='w-[104px]' />
            <h3 className='w-48 text-lg mt-4 leading-[22px]'>Email ID Number Numerology</h3>
          </div>
          <div className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[208px] py-8 rounded-md'>
            <Image src={job_no_numero} alt='' className='w-[136px]' />
            <h3 className='w-48 text-lg mt-4 leading-[22px]'>Job Number Numerology</h3>
          </div>
          <div className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[208px] py-8 rounded-md'>
            <Image src={dob_numero} alt='' className='w-[158px]' />
            <h3 className='w-48 text-lg mt-4 leading-[22px]'>Date of Birth Number Numerology</h3>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Numerology