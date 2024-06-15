"use client"

import React from 'react'
import banner_man from "@/assets/banner_man.svg"
import Image from 'next/image'
import about_vid from "@/assets/about_vid.svg"
import country from "@/assets/cntry_prsnc.svg"
import lives from "@/assets/lvs_trsm.svg"
import experience from "@/assets/yrs_exp.svg"
import Link from 'next/link'
import AboutVenky from '@/components/AboutVenky'

const About = () => {
  return (
    <div className='bg-white w-full h-full min-h-screen pb-16'>
      <div className='w-full h-[300px] bg-about_bg bg-cover bg-center overflow-hidden flex justify-between items-center pt-16 px-[152px]'>
        <div className='text-white font-semibold -mt-8'>
          <h2 className='font-poppins text-[33px] tracking-wider mb-3'>About Venky Musti</h2>
          <h5 className='text-2xl tracking-wider mb-1'>Best Numerologist in New Jersey</h5>
          <h5 className=' tracking-wider '>Astro Numerology | Career | Relationship | Business</h5>
        </div>
        <div>
          <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-80' />
        </div>
      </div>
      <div className='w-full mx-auto max-w-[1200px] font-semibold mt-10'>
        <h3 className='text-[#10101E] text-center text-[33px]'>Meet <span className='text-[#261891]'>Venky Musti</span></h3>
        <div className='w-[600px] mx-auto h-[300px] rounded-lg overflow-hidden mt-8'>
          <Image src={about_vid} alt='Meet Veny Musti' className='w-full h-full object-cover' />
        </div>
        <div className='mt-12 text-center font-nunito font-medium text-[#3D3D3D]'>
          <p className='w-[80%] mx-auto text-lg mb-3'>Numerology has always fascinated me. My interest in numbers and their meanings fuels my passion for discovering how they influence our lives. I love exploring new ways to apply numerology to everyday situations, continuously learning and expanding my knowledge. </p>
          <p className='w-[80%] mx-auto text-lg mb-3'>My journey began in 1999 during a conversation with a friend from Gujarat, India. He introduced me to a book that connected him to his birth number, sparking my curiosity. This newfound interest led me to read numerous books and engage with many experts in the field. </p>
          <p className='w-[80%] mx-auto text-lg'>Over the years, I have deepened my understanding by studying different numerology systems and analyzing hundreds of birth and event dates. This research has revealed intriguing patterns, reinforcing my belief in the power and potential of numerology.</p>
        </div>
        <div className='w-full text-center py-12 mt-6 flex items-center justify-center gap-16 font-semibold text-[#10101E]'>
          <div className='shadow-[0px_0px_17.6px_2px_rgba(0,0,0,0.15)] flex gap-6 rounded-md px-6 py-2.5'>
            <Image className='w-12' src={experience} alt='20+ yrs experience' />
            <div>
              <h4 className='text-[33px] tracking-wider'>20+</h4>
              <p className='tracking-wider text-[#3D3D3D] font-nunito'>Years of Experience</p>
            </div>
          </div>
          <div className='shadow-[0px_0px_17.6px_2px_rgba(0,0,0,0.15)] flex gap-6 rounded-md px-6 py-2.5'>
            <Image className='w-12' src={lives} alt='5000+ lives Transformed' />
            <div>
              <h4 className='text-[33px] tracking-wider'>5000+</h4>
              <p className='tracking-wider text-[#3D3D3D] font-nunito'>Lives Transformed</p>
            </div>
          </div>
          <div className='shadow-[0px_0px_17.6px_2px_rgba(0,0,0,0.15)] flex gap-6 rounded-md px-6 py-2.5'>
            <Image className='w-12' src={country} alt='3+ country presence' />
            <div>
              <h4 className='text-[33px] tracking-wider'>4+</h4>
              <p className='tracking-wider text-[#3D3D3D] font-nunito'>Countries Presence</p>
            </div>
          </div>
        </div>
        <div className='mt-8 mb-16 text-center'>
          <h3 className='text-[#10101E] text-center text-[33px] mb-6'>Numerology & Energies</h3>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-medium text-[#3D3D3D]'>Numerology is the science that aligns your name with your birth date, creating harmony that brings peace, success, and wisdom into your life. The phonetic energy in your name, when synchronized with your core birth numbers, attracts lasting wealth, fame, and happiness.</p>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-medium text-[#3D3D3D]'>However, if your name and birth numbers clash, it can lead to struggles and disappointments. Understanding and correcting these imbalances is key to transforming your life.</p>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-bold text-black'>Unlock your true potential of your life...</p>
        </div>
      </div>
      <AboutVenky />
      <div className='w-full mx-auto max-w-[1200px] font-semibold mt-16'>
        <div className='my-16 text-center font-semibold'>
          <h3 className='w-[80%] mx-auto text-[#10101E] text-center text-[33px] leading-10'>Tired of feeling lost? Want to tap into the hidden power within your birth date, name, and zodiac sign? Venky's Numerology can be your guide!</h3>
          <h4 className='text-[#10101E] text-2xl text-center mb-8 mt-6'>Here's what sets Venky apart:</h4>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-medium text-[#3D3D3D]'>The U.S., Canada, and India's Trusted Numerologist: Discover why Venky is the go-to expert for unlocking the secrets of numbers.</p>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-medium text-[#3D3D3D]'>Unveiling the Language of Numbers: Every number vibrates with unique energy, revealing your character, destiny, relationships, and wealth potential.</p>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-medium text-[#3D3D3D]'>Unlocking Your Future: Venky combines the power of Numerology and Vedic Astrology to provide detailed predictions for the next 5-10 years</p>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-medium text-[#3D3D3D]'>Master Your Timing: Get expert guidance on choosing auspicious dates for important life events.</p>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-medium text-[#3D3D3D]'>The Name Game: Let Venky help you select a name that aligns with your goals and empowers your journey.</p>
          <p className='w-[80%] mx-auto text-lg mb-3 font-nunito font-bold text-black'>Ready to transform your life? Contact Venky today and embark on an exciting journey of self-discovery</p>
        </div>
        <div className='flex justify-center my-2'>
          <Link href="/appointment" className=' mt-6 mb-2'>
            <button className='text-white outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 font-semibold tracking-wide'>Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About