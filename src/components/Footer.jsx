"use client"

import venky_logo from "@/assets/venky_logo.svg"
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
import { usePathname } from 'next/navigation'


const Footer = () => {

  const pathname = usePathname();
  if (pathname.startsWith("/v")) return <></>;

  return (
    <footer className='w-full px-6 py-12 lg:p-12 lg:pb-5 pb-12 bg-gradient-to-b from-[#9241d8] to-[#15138c] text-white z-[999]'>
      <div className='flex lg:flex-row flex-col justify-between'>
        <div className='px-0 lg:px-12 flex lg:flex-col flex-row flex-wrap items-start'>
          <Link href="/">
            <Image src={venky_logo} alt='Venki Musti (Numerlogy Expert)' className='w-40' />
          </Link>
          <p className='lg:mt-5 ml-8 max-[840px]:mb-0 lg:ml-0 font-medium w-[80%] max-w-[550px] lg:w-[400px] border-b-2 border-white pb-4 text-justify text-[15px] mb-4 text-[#EF9D33]'>I have always been interested in numbers and their meanings. I love finding out what numbers mean and how they can impact our lives. I am constantly studying numerology and finding new and interesting ways to apply it to my life.</p>
          <div className="max-[840px]:w-full mb-12">
            <h4 className='text-[#EEE6FB] mb-3 font-semibold tracking-wide'>Social Media</h4>
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
        </div>
        <div className='min-[1100px]:mr-20'>
          <div className='flex gap-16 min-[1020px]:gap-32'>
            <div className='font-medium tracking-wide'>
              <h2 className='font-semibold mb-3 tracking-wide'>Consultation</h2>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Career Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Relationship Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Name Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Business Numerology</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>New Born Numerology</h4> </Link>
            </div>
            <div className='font-medium tracking-wide'>
              <h2 className='font-semibold mb-3 tracking-wide text-nowrap'>Quick Links</h2>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>About</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Contact</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>Testimonials</h4> </Link>
              <Link href="#"> <h4 className='mb-1.5 text-sm'>FAQs</h4> </Link>
            </div>
          </div>
          <div className='font-medium mt-6 tracking-wide'>
            <h2 className='font-semibold mb-3 tracking-wide'>Contact Us</h2>
            <Link href="tel:+17327980415">
              <div className='flex gap-4 items-center mb-3'>
                <Image src={phone} alt="Venky's Contact" className='h-[18px]' />
                <h4 className='text-sm'>+1 7327980415</h4>
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
      <div className='border-t-2 border-white pt-5 font-medium mt-7 flex flex-col lg:flex-row justify-between items-center px-8 tracking-wide'>
        <h5 className='text-[15px]'><span className='text-[17px]'>&copy;</span> 2024 All Rights Reserved</h5>
        <div className='flex items-center gap-4 lg:gap-12 flex-wrap mt-7 lg:mt-0'>
          <Link href="/disclaimer"><h5 className='text-[15px]'>Disclaimer</h5></Link>
          <Link href="/terms-conditions"><h5 className='text-[15px]'>Terms & Conditions</h5></Link>
          <Link href="/privacy-policy"><h5 className='text-[15px]'>Privacy Policy</h5></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer