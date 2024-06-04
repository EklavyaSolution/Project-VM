"use client"

import Image from 'next/image'
import React from 'react';
import destiny_no from "@/assets/destinyno_img.svg"
import physic_no from "@/assets/Physicno_img.svg"
import Link from 'next/link';
import BookNumeroSession from '@/components/BookNumeroSession';

const ArticlesandUpdates = () => {
  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Articles & Updates</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-10'>
        <h2 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide'>Articles </h2>
        <p className='text-center font-normal text-lg mx-auto mt-2 mb-12 w-[85%] tracking-[0.2px]'>Explore life's secrets with Venky Musti. Harmony and clarity await as you delve into the profound world of AstroNumerology. Best Marriage And Love Compatibility Consultation In Dubai.</p>
        <div className='flex gap-12 bg-[#FDF2F8] mt-6 py-10 px-12'>
          <div className='w-[420px] h-[330px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={physic_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div className='w-[600px]'>
            <h2 className='text-[#100E6A] font-poppins font-semibold text-[22px] mb-3 leading-7 tracking-[0.5px] uppercase'>EXPLORING THE NUMBERS: UNRAVELING THE MYSTERIES OF ASTRONUMEROLOGY</h2>
            <p className=' font-normal tracking-[0.2px]'>Numbers have always held a mystical allure, playing a significant role in various cultures and belief systems throughout history. Among the many practices that involve the study of numbers, AstroNumerology stands out as a fascinating discipline that combines the insights of astrology and numerology. In this blog, we delve into the captivating world of AstroNumerology and how it can provide us with valuable insights into our lives, relationships, and even business endeavors. Get Best Business Name Consultation Service in Dubai UAE.</p>
            <Link href="/numerology/psychic-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-5 font-semibold tracking-wide bg-gradient-to-r from-[#FFB1DC] to-[#FF57B3] border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#FFB0DB80]'>Know more</button>
            </Link>
          </div>
        </div>
        <div className='flex justify-between bg-[#ECF7FF] mt-12 py-10 px-12'>
          <div className='w-[600px]'>
            <h2 className='text-[#100E6A] font-poppins font-semibold text-[22px] mb-3 leading-7 tracking-[0.5px] uppercase'>DO NUMBERS REALLY WORK? UNVEILING THE MYSTERIES OF NUMEROLOGY</h2>
            <p className='font-normal tracking-[0.2px]'>Numbers have been an integral part of human history, serving as a universal language to quantify and understand our world, Best Astro Numerology Service In New Jersey USA, numbers have taken on a different role, delving into the realm of mysticism and self-discovery through the practice of numerology. Whether it's finding your life path number, exploring name numerology, or seeking lucky numbers for specific events, numerology has captivated the curiosity of many. But the question remains: Do numbers really work, or is it just a belief system steeped in superstition? In this blog, we will explore the fascinating world of numerology to determine its significance and impact on our lives. Best Astro Numerology Service In New Jersey USA.</p>
            <Link href="/numerology/destiny-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-5 font-semibold tracking-wide bg-gradient-to-r from-[#ABDCFF] to-[#75C5FF] border-[0.5px] border-[#CDEAFF80] shadow-[2px_4px_8px_0px_#BDE3FF80]'>Know more</button>
            </Link>
          </div>
          <div className='w-[420px] h-[330px] overflow-hidden rounded-tr-2xl rounded-bl-2xl'>
            <Image src={destiny_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
      <BookNumeroSession />
      <div className='bg-[#FFB9574D] px-52 py-8 flex items-center justify-between text-[#EF652E] font-bold'>
        <div className='text-center'>
          <h4 className='text-6xl'>20+</h4>
          <p className='tracking-wider mt-1 text-lg'>Years of Experience</p>
        </div>
        <div className='text-center'>
          <h4 className='text-6xl'>5000+</h4>
          <p className='tracking-wider mt-1 text-lg'>Lives Transformed</p>
        </div>
        <div className='text-center'>
          <h4 className='text-6xl'>3+</h4>
          <p className='tracking-wider mt-1 text-lg'>Countries Presence</p>
        </div>

      </div>
    </div>
  )
}

export default ArticlesandUpdates