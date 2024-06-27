"use client"
import React, { useState } from 'react'
import services_top from "@/assets/services_top.svg"
import doublearrow from "@/assets/double-arrow.svg"
import Image from 'next/image'
import Link from 'next/link'
import AstroNumerology from '@/components/services/AstroNumerology'
import VenkyExp from '@/components/VenkyExp'
import { usePathname } from 'next/navigation'

const Services = () => {
  const pathname = usePathname();

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
    <div className='w-full h-full min-h-screen mb-16'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Services</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-16'>
        <div className='flex items-center gap-8'>
          <div className='w-[33%] overflow-hidden'>
            <Image src={services_top} alt='Numerology Services' className='w-full h-full object-cover' />
          </div>
          <div className='w-[64%]'>
            <h3 className='text-[#10101E] text-2xl font-semibold mb-2'>Personalized Consultations for Success <br />and Fulfillment</h3>
            <p className='text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Venky conducts Face to face, Telephone or web-meeting based consultations for Clients. Utilizing a variety of methods, such as AstroNumerology, Predictive Numerology, Vedic Astrology, KP system, and Intuitive system, he uses a strengths-based approach to evaluate the data from your birth chart. He can then offer insight into several aspects of your life, including your profession, finances, health, relationships, and more, Get Best Astro Numerology Consultation Service in dubai UAE. Each conversation is customized to meet your specific needs and is intended to leave you with a generative vision, a stronger commitment, and an action plan for obtaining your ideal results. Your empowerment on your path to greater clarity, focus, abundance, and harmony is Venky's ultimate aim, Get Best Astro Numerology Consultation Service.</p>
            <div className='flex gap-8 mt-6'>
              <Link href="/about" className='mb-4 block'>
                <button className='text-[#FC993E] outline-none rounded-md border border-[#FC993E] px-8 py-2 font-semibold tracking-wide'>Learn More</button>
              </Link>
              <Link href="/appointment">
                <button className='text-white outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 font-semibold tracking-wide'>Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='my-10'>
          <VenkyExp />
        </div>
        <div>
          <h2 className='text-center font-semibold text-[#10101E] text-[33px]'>Services <span className='text-[#261891]'>Offered</span></h2>
          <p className='text-center text-lg font-medium font-nunito text-[#3D3D3D]'>Unlock your destiny with Venky Musti, the AstroNumerology expert, and embark on a<br />transformative journey towards abundance and fulfillment, Get Best Astro Numerology Consultation Service</p>
          <div className='w-full flex justify-center gap-10 my-10'>
            <Link href="/our-global-presence/usa"><h3 className={`${pathname.includes("usa") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>Astro Numerology</h3></Link>
            <Link href="/our-global-presence/australia"><h3 className={`${pathname.includes("australia") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>Career Numerology</h3></Link>
            <Link href="/our-global-presence/dubai"><h3 className={`${pathname.includes("dubai") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>Relationship Numerology</h3></Link>
            <Link href="/our-global-presence/dubai"><h3 className={`${pathname.includes("dubai") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>Business Numerology</h3></Link>
            <Link href="/our-global-presence/dubai"><h3 className={`${pathname.includes("dubai") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>New Born Numerology</h3></Link>
          </div>
          <AstroNumerology />
        </div>
      </div>
    </div>
  )
}

export default Services