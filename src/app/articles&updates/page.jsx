"use client"

import Image from 'next/image'
import React from 'react';
import destiny_no from "@/assets/destinyno_img.svg"
import physic_no from "@/assets/Physicno_img.svg"
import Link from 'next/link';
import BookNumeroSession from '@/components/BookNumeroSession';
import AboutVenky from '@/components/AboutVenky';

const ArticlesandUpdates = () => {
  return (
    <div className='w-full h-full min-h-screen mb-16'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Articles & Updates</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-10'>
        <h2 className='text-center font-semibold text-[#10101E] text-[33px]'>Articles </h2>
        <p className='text-center text-lg font-medium font-nunito text-[#3D3D3D] mx-auto mb-16 w-[85%]'>Explore life's secrets with Venky Musti. Harmony and clarity await as you delve into the profound world of AstroNumerology. Best Marriage And Love Compatibility Consultation In Dubai.</p>
        <div className='flex gap-10 bg-[#FDF2F8] py-10 px-12'>
          <div className='w-[400px] h-[310px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={physic_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div className='w-[660px]'>
            <h2 className='text-[#10101E] text-2xl font-semibold mb-2'>Exploring the Numbers: Unraveling the Mysteries of AstroNumerology</h2>
            <p className='text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Numbers have always held a mystical allure, playing a significant role in various cultures and belief systems throughout history. Among the many practices that involve the study of numbers, AstroNumerology stands out as a fascinating discipline that combines the insights of astrology and numerology. In this blog, we delve into the captivating world of AstroNumerology and how it can provide us with valuable insights into our lives, relationships, and even business endeavors. Get Best Business Name Consultation Service in Dubai UAE.</p>
            <Link href="/numerology/psychic-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-6 font-semibold tracking-wider bg-gradient-to-r from-[#FFB1DC] to-[#FF57B3] border-[0.5px] border-[#FEC8E580] shadow-[2px_4px_8px_0px_#FFB0DB80]'>Read more</button>
            </Link>
          </div>
        </div>
        <div className='flex justify-between bg-[#ECF7FF] mt-12 py-10 px-12'>
          <div className='w-[660px]'>
            <h2 className='text-[#10101E] text-2xl font-semibold mb-2'>Do Numbers Really work? Unveiling the Mysteries of Numerology</h2>
            <p className='text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Numbers have been an integral part of human history, serving as a universal language to quantify and understand our world, Best Astro Numerology Service In New Jersey USA, numbers have taken on a different role, delving into the realm of mysticism and self-discovery through the practice of numerology. Whether it’s finding your life path number, exploring name numerology, or seeking lucky numbers for specific events, numerology has captivated the curiosity of many. But the question remains: Do numbers really work, or is it just a belief system steeped in superstition? In this blog, we will explore the fascinating world of numerology to determine its significance and impact on our lives. Best Astro Numerology Service In New Jersey USA.</p>
            <Link href="/numerology/destiny-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-8 font-semibold tracking-wider bg-gradient-to-r from-[#ABDCFF] to-[#75C5FF] border-[0.5px] border-[#CDEAFF80] shadow-[2px_4px_8px_0px_#BDE3FF80]'>Read more</button>
            </Link>
          </div>
          <div className='w-[400px] h-[310px] overflow-hidden rounded-tr-2xl rounded-bl-2xl'>
            <Image src={destiny_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='flex gap-10 bg-[#F2FDF5] py-10 px-12 mt-12 mb-16'>
          <div className='w-[400px] h-[310px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={physic_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div className='w-[660px]'>
            <h2 className='text-[#10101E] text-2xl font-semibold mb-2'>Number Traits: Unraveling the Mysteries of Numerology</h2>
            <p className='text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Numerology, an ancient practice dating back thousands of years, offers a fascinating lens through which to understand ourselves, our experiences, and the world around us. Rooted in the belief that numbers hold profound symbolic and mystical significance, numerology explores the connections between numbers and various aspects of life, including personality traits, relationships, and life paths. Let's delve into the rich tapestry of numerology, unraveling its secrets and exploring its practical applications.</p>
            <Link href="/numerology/psychic-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-6 font-semibold tracking-wider bg-gradient-to-r from-[#C9FFD8] to-[#81FDA2] border-[0.5px] border-[#81FDA280] shadow-[2px_4px_8px_0px_#9FFEB980]'>Read more</button>
            </Link>
          </div>
        </div>
      </div>
      <AboutVenky />
    </div>
  )
}

export default ArticlesandUpdates