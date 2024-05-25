"use client"

import Image from 'next/image'
import React from 'react'
import destini_no from "@/assets/destinyno_img.svg"
import physic_no from "@/assets/Physicno_img.svg"
import Link from 'next/link'


const Numerology = () => {
  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen'>
      <div className='w-full grid place-items-center h-48 lg:h-52  2xl:h-56 bg-sky-500 '>
        <h1 className='text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl'>Numerology</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] '>
        <h2 className='text-center mt-10 font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl'>Numbers In Numerology</h2>
        <div className='flex gap-12 bg-[#FDF2F8] mt-6 py-10 px-12'>
          <div className='w-[360px] h-[330px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={physic_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div>
            <h2 className='text-[#100E6A] font-semibold text-2xl leading-5 mb-4'>Psychic Number </h2>
            <p className='w-[600px] font-normal'>Embark on a transformative journey with Venky Musti’s AstroNumerology consultations. Through a unique fusion of astrology and numerology, Venky provides detailed insights into your life’s patterns and cosmic influences. Discover the power of aligning your name, business, or partnerships with favorable numbers to attract prosperity and abundance. Uncover the dynamics of your relationships, identify auspicious timings, and receive guidance on overcoming challenges. Venky’s personalized approach empowers you to make informed decisions, unlocking your true potential for success and fulfillment. Embrace the cosmic wisdom and take charge of your destiny today, Get Best Astro Numerology In New York City USA.</p>
            <Link href="/numerology/psychic-number">
              <button className='text-white outline-none rounded-md px-6 py-1.5 mt-5 font-semibold tracking-wide bg-gradient-to-r from-[#FFB1DC] to-[#FF57B3] [border-[0.5px] border-[#E25E3E80]] shadow-[2px_4px_8px_0px_#FFB0DB80]'>Know more</button>
            </Link>
          </div>
        </div>
        <div className='flex justify-between bg-[#ECF7FF] mt-12 py-10 px-12'>
          <div>
            <h2 className='text-[#100E6A] font-semibold text-2xl leading-5 mb-4'>Destiny Number </h2>
            <p className='w-[600px] font-normal'>Embark on a transformative journey with Venky Musti’s AstroNumerology consultations. Through a unique fusion of astrology and numerology, Venky provides detailed insights into your life’s patterns and cosmic influences. Discover the power of aligning your name, business, or partnerships with favorable numbers to attract prosperity and abundance. Uncover the dynamics of your relationships, identify auspicious timings, and receive guidance on overcoming challenges. Venky’s personalized approach empowers you to make informed decisions, unlocking your true potential for success and fulfillment. Embrace the cosmic wisdom and take charge of your destiny today, Get Best Astro Numerology In New York City USA.</p>
            <Link href="/numerology/destiny-number">
              <button className='text-white outline-none rounded-md px-6 py-1.5 mt-5 font-semibold tracking-wide bg-gradient-to-r from-[#ABDCFF] to-[#75C5FF] [border-[0.5px] border-[#CDEAFF80]] shadow-[2px_4px_8px_0px_#BDE3FF80]'>Know more</button>
            </Link>
          </div>
          <div className='w-[360px] h-[330px] overflow-hidden rounded-tr-2xl rounded-bl-2xl'>
            <Image src={destini_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
      <div className='bg-[#FFEECE] px-8 w-full mt-12 py-8'>
        <h3 className='mb-3 text-3xl font-semibold text-center text-[#100E6A]'>Numerology Calculation</h3>
        <div className='flex justify-center gap-6 flex-wrap items-center'>a</div>
      </div>
    </div >
  )
}

export default Numerology