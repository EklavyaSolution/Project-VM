"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import venky_musti from "@/assets/venky_musti.svg"
import Modal from '@/components/Modal'
import ContactForm from '@/components/ContactForm'


const Appointment = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen pb-16'>
      <div className='w-full text-white font-semibold flex flex-col items-center justify-center gap-4 tracking-[0.5px] text-lg h-80 bg-appointment_bg bg-cover bg-center'>
        <h4 className='text-[#FF926A]'>“Organize your future with the right numbers.”</h4>
        <h1 className=' font-bold text-[36px] tracking-[0.7px]'>Book Your Appointment</h1>
        <h5>with Venky Musti</h5>
        <h5>Astro Numerology | Career | Relationship | Business</h5>
      </div>

      <div className='w-full bg-[#FFF3E0CC] pb-12 pt-8 mt-20'>
        <div className='w-full mx-auto max-w-[1100px] flex justify-between items-center'>
          <div className='text-[#111]'>
            <h2 className='font-semibold text-4xl mb-3'>Book Appointment</h2>
            <ul type="circle" className='font-medium text-lg list-disc ml-6'>
              <li>Online Zoom Meeting or Google Meet or Face to Face</li>
              <li>You can ask everything about your business, Carrier, etc.</li>
            </ul>
            <button className='text-white font-semibold text-lg tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-7 py-1.5 border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md outline-none mr-8 mt-6' onClick={() => setShow(!show)}>Book Appointment</button>
          </div>
          <div>
            <Image src={venky_musti} alt='' className='w-[400px]' />
          </div>
        </div>
      </div>
      <Modal show={show} setShow={setShow}>
        <ContactForm show={show} setShow={setShow} />
      </Modal>
    </div>
  )
}

export default Appointment