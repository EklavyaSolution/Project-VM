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
    width: "[104px]",
    image: wedding_numero,
  },
  {
    name: "Car Number Numerology",
    width: "[98px]",
    image: car_no_numero,
  },
  {
    name: "Mobile Number Numerology",
    width: "[98px]",
    image: mob_no_numero,
  },
  {
    name: "House Number Numerology",
    width: "48",
    image: house_no_numero,
  },
  {
    name: "Email ID Number Numerology",
    width: "[104px]",
    image: email_id_numero,
  },
  {
    name: "Job Number Numerology",
    width: "[136px]",
    image: job_no_numero,
  },
  {
    name: "Date of Birth Numerology",
    width: "[158px]",
    image: dob_numero,
  },
  ]


  return (
    <div className='w-full h-full min-h-screen'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center	 '>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Numerology</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-10'>
        <h2 className='text-center font-semibold text-[#10101E] text-[33px]'>Numbers In <span className='text-[#261891]'>Numerology</span></h2>
        <div className='flex gap-12 bg-[#FDF2F8] mt-12 py-10 px-12'>
          <div className='w-[400px] h-[280px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={physic_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div>
            <h2 className='text-[#10101E] text-2xl font-semibold mb-3'>Psychic Number </h2>
            <p className='w-[600px] text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Your Psychic number plays a crucial role in shaping your identity. It influences your outlook on life and the way you interact with the world. By understanding your Psychic number, you can gain deeper insights into your personality and uncover hidden aspects of your nature.</p>
            <Link href="/numerology/psychic-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-8 font-semibold tracking-wider bg-gradient-to-r from-[#FFB1DC] to-[#FF57B3] border-[0.5px] border-[#FEC8E580] shadow-[2px_4px_8px_0px_#FFB0DB80]'>Know more</button>
            </Link>
          </div>
        </div>
        <div className='flex justify-between bg-[#ECF7FF] mt-12 py-10 px-12'>
          <div>
            <h2 className='text-[#10101E] text-2xl font-semibold mb-3'>Destiny Number </h2>
            <p className='w-[600px] text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Destiny numbers, also known as Life Path numbers or Bhagyaank, hold special significance in numerology. They reveal a person's natural talents, gifts, and unique path in life. Think of them as spiritual digits that guide you toward fulfilling your purpose. Unlike Life Path numbers, which involve fated challenges, destiny numbers highlight what comes naturally to you.</p>
            <Link href="/numerology/destiny-number">
              <button className='text-white outline-none rounded px-6 py-1.5 mt-8 font-semibold tracking-wider bg-gradient-to-r from-[#ABDCFF] to-[#75C5FF] border-[0.5px] border-[#CDEAFF80] shadow-[2px_4px_8px_0px_#BDE3FF80]'>Know more</button>
            </Link>
          </div>
          <div className='w-[400px] h-[280px] overflow-hidden rounded-tr-2xl rounded-bl-2xl'>
            <Image src={destini_no} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
      <BookNumeroSession />

      <div className='bg-[#FFEECE] w-full py-8 mb-16'>
        <h3 className='mb-10 text-center font-semibold text-[#10101E] text-[33px]'>Numerology <span className='text-[#261891]'>Calculation</span></h3>
        <div className='flex justify-center gap-8 flex-wrap items-center max-w-[1200px] w-full mx-auto mb-6 text-center text-[#100E6A] font-medium leading-5'>
          {calculator_data.map((item, index) => {
            return <div key={index} className='bg-gradient-to-r from-[#FFD69D] to-[#FFAB6B] border-[0.5px] border-[#FC993E] shadow-[0px_4px_4px_0px_#E25E3E40] flex flex-col items-center w-[240px] h-[215px] py-8  rounded-md'>
              <picture className={`w-${item.width}`}>
              <Image src={item.image} alt=''  className='w-full object-cover'/>
              </picture>
              <h3 className='w-48 text-lg mt-6 font-semibold text-[#3D3D3D] leading-6'>{item.name}</h3>
            </div>
          })}
        </div>
      </div>
    </div >
  )
}

export default Numerology