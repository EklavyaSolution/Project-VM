"use client"
import React, { useState } from 'react'
import services_top from "@/assets/services_top.svg"
import doublearrow from "@/assets/double-arrow.svg"
import Image from 'next/image'
import Link from 'next/link'
import AstroNumerology from '@/components/services/AstroNumerology'

const Services = () => {
  const [service, setService] = useState(0);

  const services = [{
    name: "Astro Numerology"
  },
  {
    name: "Career Numerology"
  },
  {
    name: "Relationship Numerology"
  },
  {
    name: "Business Numerology"
  },
  {
    name: "New Born Numerology"
  },
  ]

  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen pb-16'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Services</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-16'>
        <div className=' py-4 flex items-center'>
          <Image src={services_top} alt='Numerology Services' className='w-[400px]' />
          <div className='bg-[#FFB9574D] rounded-lg py-8 px-10 ml-5 font-medium'>
            <h3 className=' font-poppins text-2xl mb-2'>Personalized Consultations for Success and Fulfillment</h3>
            <p className='tracking-[0.2px]'>Venky conducts Face to face, Telephone or web-meeting based consultations for Clients. Utilizing a variety of methods, such as AstroNumerology, Predictive<Link href="https://www.numerologic.us/"><span className='block underline text-blue-600'> Get Best Astro Numerology Consultation Service in dubai,UAE.</span></Link> Each conversation is customized to meet your specific needs and is intended to leave you with a generative vision, a stronger commitment, and an action plan for obtaining your ideal results. Your empowerment on your path to greater clarity, focus, abundance, and harmony is Venky's ultimate aim, Get Best Astro Numerology Consultation Service.</p>
            <Link href="/appointment">
              <button className='text-white outline-none rounded-md px-6 py-2 mt-6 font-semibold tracking-wider bg-[#F2934C]'>Book Appointment</button>
            </Link>
          </div>
        </div>
        <div className='mt-16'>
          <h2 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide'>Services Offered</h2>
          <p className='text-center font-normal tracking-[0.2px] mt-4'>Unlock your destiny with Venky Musti, the AstroNumerology expert, and embark on a<br />transformative journey towards abundance and fulfillment, Get Best Astro Numerology Consultation Service</p>
          <div className='flex mt-8 gap-10 relative'>
            <div className='py-6 px-4 gap-5 flex h-fit flex-col border-[0.5px] border-[#b4b4b4ce] rounded-md sticky top-20 left-0'>
              {services.map((item, index) => {
                return (
                  <div key={index} className='flex items-center gap-4 rounded px-4 py-1.5 w-[340px] bg-[#FFFFFF66] border-[0.5px] border-[#b4b4b4ac] shadow-[0px_4px_4px_0px_#00000040]'>
                    <Image src={doublearrow} alt='services' className='w-5' />
                    <h3 className='font-medium tracking-[0.3px]'>{item.name}</h3>
                  </div>
                )
              })}
            </div>
            <AstroNumerology />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services