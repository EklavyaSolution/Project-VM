"use client"
import React, { useState } from 'react'
import services_top from "@/assets/services_top.svg"
import doublearrow from "@/assets/double-arrow.svg"
import Image from 'next/image'
import Link from 'next/link'
import AstroNumerology from '@/components/services/AstroNumerology'
import VenkyExp from '@/components/VenkyExp'
import { usePathname } from 'next/navigation';
import physic_no from "@/assets/Physicno_img.svg"


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

        <div className='mt-12'>
          <h2 className='text-center font-semibold text-[#10101E] text-[33px]'>Services <span className='text-[#261891]'>Offered</span></h2>
          <p className='text-center text-lg font-medium font-nunito text-[#3D3D3D]'>Unlock your destiny with Venky Musti, the AstroNumerology expert, and embark on a<br />transformative journey towards abundance and fulfillment, Get Best Astro Numerology Consultation Service</p>
          <div className='grid grid-cols-3 gap-10 mt-12'>
            <div className='bg-[#FFF3E0] p-6 rounded-lg shadow-[0_4px_8px_0px_rgba(0,0,0,0.1),4px_0px_8px_0px_rgba(0,0,0,0.1),-4px_0px_8px_0px_rgba(0,0,0,0.1)]'>
              <div className='rounded-lg overflow-hidden w-full h-[200px]'>
                <Image src={physic_no} className='w-full object-cover h-full' />
              </div>
              <div className='mt-4 mb-5'>
                <h3 className='text-[#080810] font-semibold text-lg'>Astro Numerology Consultation</h3>
                <p className='text-[#656565] font-semibold font-nunito leading-[1.35rem] '>AstroNumerology readings offer a detailed look into your life, covering everything from name compatibility to identifying your lucky years, colors, stones, and elements. They also provide personalized remedies for personal and professional growth, along with success tips for the next five years.</p>
              </div>
              <Link href="/appointment">
                <button className='text-white w-full outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 font-semibold tracking-wide'>Schedule Call</button>
              </Link>
            </div>
            <div className='bg-[#FFF3E0] p-6 rounded-lg shadow-[0_4px_8px_0px_rgba(0,0,0,0.1),4px_0px_8px_0px_rgba(0,0,0,0.1),-4px_0px_8px_0px_rgba(0,0,0,0.1)]'>
              <div className='rounded-lg overflow-hidden w-full h-[200px]'>
                <Image src={physic_no} className='w-full object-cover h-full' />
              </div>
              <div className='mt-4 mb-5'>
                <h3 className='text-[#080810] font-semibold text-lg'>Personal Name Consultation</h3>
                <p className='text-[#656565] font-semibold font-nunito leading-[1.35rem] '>AstroNumerology readings offer a detailed look into your life, covering everything from name compatibility to identifying your lucky years, colors, stones, and elements. They also provide personalized remedies for personal and professional growth, along with success tips for the next five years.</p>
              </div>
              <Link href="/appointment">
                <button className='text-white w-full outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 font-semibold tracking-wide'>Schedule Call</button>
              </Link>
            </div>
            <div className='bg-[#FFF3E0] p-6 rounded-lg shadow-[0_4px_8px_0px_rgba(0,0,0,0.1),4px_0px_8px_0px_rgba(0,0,0,0.1),-4px_0px_8px_0px_rgba(0,0,0,0.1)]'>
              <div className='rounded-lg overflow-hidden w-full h-[200px]'>
                <Image src={physic_no} className='w-full object-cover h-full' />
              </div>
              <div className='mt-4 mb-5'>
                <h3 className='text-[#080810] font-semibold text-lg'>Marriage & Love Compatibility </h3>
                <p className='text-[#656565] font-semibold font-nunito leading-[1.35rem] '>AstroNumerology readings offer a detailed look into your life, covering everything from name compatibility to identifying your lucky years, colors, stones, and elements. They also provide personalized remedies for personal and professional growth, along with success tips for the next five years.</p>
              </div>
              <Link href="/appointment">
                <button className='text-white w-full outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 font-semibold tracking-wide'>Schedule Call</button>
              </Link>
            </div>
            <div className='bg-[#FFF3E0] p-6 rounded-lg shadow-[0_4px_8px_0px_rgba(0,0,0,0.1),4px_0px_8px_0px_rgba(0,0,0,0.1),-4px_0px_8px_0px_rgba(0,0,0,0.1)]'>
              <div className='rounded-lg overflow-hidden w-full h-[200px]'>
                <Image src={physic_no} className='w-full object-cover h-full' />
              </div>
              <div className='mt-4 mb-5'>
                <h3 className='text-[#080810] font-semibold text-lg'>Business Name Consultation</h3>
                <p className='text-[#656565] font-semibold font-nunito leading-[1.35rem] '>AstroNumerology readings offer a detailed look into your life, covering everything from name compatibility to identifying your lucky years, colors, stones, and elements. They also provide personalized remedies for personal and professional growth, along with success tips for the next five years.</p>
              </div>
              <Link href="/appointment">
                <button className='text-white w-full outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 font-semibold tracking-wide'>Schedule Call</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='my-12'>
          <VenkyExp />
        </div>
        <div>
          <h2 className='text-center font-semibold text-[#10101E] text-[33px]'>Our Happy <span className='text-[#261891]'>Clients</span> say about us</h2>
          <p className='text-center text-lg font-medium font-nunito text-[#3D3D3D]'>Unlock your destiny with Venky Musti, the AstroNumerology expert, and embark on a<br />transformative journey towards abundance and fulfillment, Get Best Astro Numerology Consultation Service</p>
          <div className='mt-16 grid grid-cols-2 gap-10'>
            <div className='border-[0.5px] border-[#aaaaaaaf] rounded-md px-8 py-3'>
              <div className='flex gap-8 items-center border-b pb-2'>
                <Image className='rounded-full w-11 h-11  bg-gray-300' />
                <div>
                  <h4 className='text-[#080810] font-semibold'>Name</h4>
                  <p className='font-nunito text-[#3D3D3D] font-semibold leading-4'>Profession</p>
                </div>
              </div>
              <div className='mt-2'>
                <p className='font-nunito text-[#3D3D3D] font-medium'>Unlock your destiny with Venky Musti, the AstroNumerology expert, and embark on a<br />transformative journey towards abundance and fulfillment, Get Best Astro Numerology Consultation Service</p>
                <div className='flex justify-between mt-5'>
                  <p className='text-orange-600'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className='text-[#3D3D3D] font-nunito font-medium text-sm'>10 feb 2021</p>
                </div>
              </div>
            </div>
            <div className='border-[0.5px] border-[#aaaaaaaf] rounded-md px-8 py-3'>
              <div className='flex gap-8 items-center border-b pb-2'>
                <Image className='rounded-full w-11 h-11  bg-gray-300' />
                <div>
                  <h4 className='text-[#080810] font-semibold'>Name</h4>
                  <p className='font-nunito text-[#3D3D3D] font-semibold leading-4'>Profession</p>
                </div>
              </div>
              <div className='mt-2'>
                <p className='font-nunito text-[#3D3D3D] font-medium'>Unlock your destiny with Venky Musti, the AstroNumerology expert, and embark on a<br />transformative journey towards abundance and fulfillment, Get Best Astro Numerology Consultation Service</p>
                <div className='flex justify-between mt-5'>
                  <p className='text-orange-600'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className='text-[#3D3D3D] font-nunito font-medium text-sm'>10 feb 2021</p>
                </div>
              </div>
            </div>
            <div className='border-[0.5px] border-[#aaaaaaaf] rounded-md px-8 py-3'>
              <div className='flex gap-8 items-center border-b pb-2'>
                <Image className='rounded-full w-11 h-11  bg-gray-300' />
                <div>
                  <h4 className='text-[#080810] font-semibold'>Name</h4>
                  <p className='font-nunito text-[#3D3D3D] font-semibold leading-4'>Profession</p>
                </div>
              </div>
              <div className='mt-2'>
                <p className='font-nunito text-[#3D3D3D] font-medium'>Unlock your destiny with Venky Musti, the AstroNumerology expert, and embark on a<br />transformative journey towards abundance and fulfillment, Get Best Astro Numerology Consultation Service</p>
                <div className='flex justify-between mt-5'>
                  <p className='text-orange-600'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className='text-[#3D3D3D] font-nunito font-medium text-sm'>10 feb 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services