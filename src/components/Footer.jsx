"use client"

import venki_logo_white from '@/assets/venki_logo_white.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fb from '@/assets/fb.svg'
import ig from '@/assets/ig.svg'
import linkedin from '@/assets/in.svg'
import yt from '@/assets/yt.svg'
import x from '@/assets/x.svg'
import phone from '@/assets/phone.svg'
import mail from '@/assets/mail.svg'
import whatsapp from '@/assets/whatsapp.svg'


const Footer = () => {
  return (
    <footer className='w-full p-12 pb-5 bg-gradient-to-b from-[#9241d8] to-[#15138c] text-white mt-16'>
      <div className='flex justify-between'>
        <div className='px-12'>
          <Link href="/">
            <Image src={venki_logo_white} alt='Venki Musti (Numerlogy Expert)' className='w-16' />
          </Link>
          <p className='mt-5 font-medium w-[400px] border-b-2 border-white pb-4 text-justify text-[15px] mb-4 text-[#EEE6FB]'>I have always been interested in numbers and their meanings. I love finding out what numbers mean and how they can impact our lives. I am constantly studying numerology and finding new and interesting ways to apply it to my life.</p>
          <h4 className='text-[#EEE6FB] mb-3 font-semibold'>Social Media</h4>
          <div className='flex items-center gap-2'>
            <div className='rounded px-2 py-1 text-white'>
              <Image src={fb} alt="Venky's facebook" className='w-6' />
            </div>
            <div className='rounded-sm px-2 py-1 text-white'>
              <Image src={ig} alt="Venky's instagram" className='w-6' />
            </div>
            <div className='rounded-sm px-2 py-1 text-white'>
              <Image src={x} alt="Venky's x" className='w-6' />
            </div>
            <div className='rounded-sm px-2 py-1 text-white'>
              <Image src={linkedin} alt="Venky's linkedin" className='w-6' />
            </div>
            <div className='rounded-sm px-2 py-1 text-white'>
              <Image src={yt} alt="Venky's youtube" className='w-6' />
            </div>
          </div>
        </div>
        <div className='mr-20'>
          <div className='flex gap-32'>
            <div className='font-medium'>
              <h2 className='font-semibold mb-3'>Consultation</h2>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Career Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Relationship Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Name Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Business Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>New Born Numerology</h4> </Link>
            </div>
            <div className='font-medium'>
              <h2 className='font-semibold mb-3'>Quick Links</h2>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>About</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Contact</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Testimonials</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>FAQs</h4> </Link>
            </div>
          </div>
          <div className='font-medium mt-6'>
            <h2 className='font-semibold mb-3'>Contact Us</h2>
            <Link href="tel:14512545454545">
              <div className='flex gap-4 items-center mb-3'>
                <Image src={phone} alt="Venky's Contact" className='h-[18px]' />
                <h4 className='text-sm'>+14512545454545</h4>
              </div>
            </Link>
            <Link href="tel:14512545454545">
              <div className='flex gap-4 items-center mb-3'>
                <Image src={whatsapp} alt="Venky's Whatsapp" className='h-[18px]' />
                <h4 className='text-sm'>Chat on Whatsapp</h4>
              </div>
            </Link>
            <Link href="mailto:venkymusti@eklavyasolution.com">
              <div className='flex gap-4 items-center mb-3'>
                <Image src={mail} alt="Venky's E-Mail" className='h-3.5' />
                <h4 className='text-sm'>venkymusti@eklavyasolution.com</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-white pt-5 font-medium mt-7 flex justify-between items-center px-8'>
        <h5 className='text-[15px]'><span className='text-[17px]'>&copy;</span> 2024 All Rights Reserved</h5>
        <div className='flex items-center gap-24'>
          <h5 className='text-[15px]'>Terms & Conditions</h5>
          <h5 className='text-[15px]'>Privacy Policy</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer