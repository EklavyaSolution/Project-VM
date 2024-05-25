"use client"
import Image from 'next/image'
import React from 'react';
import Phoneicon from "@/assets/Phoneicon.svg"
import mailicon from "@/assets/Mailicon.svg"
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen'>
      <div className='w-full grid place-items-center h-48 lg:h-52  2xl:h-56 bg-sky-500 '>
        <h1 className='text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl'>Contact Us</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px]'>
        <div className=' mt-8 py-4'>
          <h2 className='text-center font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4'>Contact Details</h2>
          <div className='flex items-center justify-center gap-36 mt-5'>
            <Link href="tel:+1 5641213211654" >
              <div className='flex gap-4 items-center'>
                <div className='bg-[rgba(255,255,255,0.4)] border-[0.5px] border-[#E25E3E80] px-3 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded'>
                  <Image
                    src={Phoneicon}
                    alt='Phone icon'
                    className='w-5 h-5'
                  />
                </div>
                <div className='bg-[rgba(255,255,255,0.4)] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md'>
                  <h4 className='leading-5 text-[17px] font-medium text-[#C63D2F]'>+1 5641213211654</h4>
                </div>
              </div>
            </Link>
            <Link href="mailto:venkymusti@eklavyasolution.com" >
              <div className='flex gap-4 items-center'>
                <div className='bg-[rgba(255,255,255,0.4)] border-[0.5px] border-[#E25E3E80] px-3 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded'>
                  <Image
                    src={mailicon}
                    alt='Phone icon'
                    className='w-5 h-5'
                  />
                </div>
                <div className='bg-[rgba(255,255,255,0.4)] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md'>
                  <h4 className='leading-5 text-[17px] font-medium text-[#C63D2F]'>venkymusti@eklavyasolution.com</h4>
                </div>
              </div>
            </Link>
          </div>
          <h2 className='text-center font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4 mt-16'>Visit Us</h2>
          <div className='flex items-center justify-between mt-5'>
            <div className='border-[0.5px] border-[#b4b4b4b3] rounded-lg overflow-hidden w-[350px]'>
              <div className='bg-[#FF9B50] py-2.5'>
                <h3 className='text-center text-2xl font-semibold'>USA</h3>
              </div>
              <div className='w-fit mx-auto pt-4 pb-6'>
                <p className='font-semibold text-lg mb-2'>Address:</p>
                <p className='font-medium'>75 Tower Court Kernersville, NC <br />27284 PO Box <br />6658 Rockhild SDT 2505</p>

              </div>
            </div>
            <div className='border-[0.5px] border-[#b4b4b4b3] rounded-lg overflow-hidden w-[350px]'>
              <div className='bg-[#FF9B50] py-2.5'>
                <h3 className='text-center text-2xl font-semibold'>Australia</h3>
              </div>
              <div className='w-fit mx-auto pt-4 pb-6'>
                <p className='font-semibold text-lg mb-2'>Address:</p>
                <p className='font-medium'>75 Tower Court Kernersville, NC <br />27284 PO Box <br />6658 Rockhild SDT 2505</p>

              </div>
            </div>
            <div className='border-[0.5px] border-[#b4b4b4b3] rounded-lg overflow-hidden w-[350px]'>
              <div className='bg-[#FF9B50] py-2.5'>
                <h3 className='text-center text-2xl font-semibold'>Dubai</h3>
              </div>
              <div className='w-fit mx-auto pt-4 pb-6'>
                <p className='font-semibold text-lg mb-2'>Address:</p>
                <p className='font-medium'>75 Tower Court Kernersville, NC <br />27284 PO Box <br />6658 Rockhild SDT 2505</p>

              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#FFF5DB80] py-6 px-24 mt-16'>
          <h3 className='text-center font-semibold text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4 mb-8'>Get In Touch</h3>
          <form className='flex flex-wrap justify-between items-center gap-7'>
            <input type="text" placeholder='Your Name*' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="number" placeholder='Mobile No.' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="email" placeholder='Email ID' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="date" placeholder='Date of Birth' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="time" placeholder='Birth Time' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="text" placeholder='Place of Birth' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <textarea placeholder='Message' className='resize-none w-full bg-[rgba(255,255,255,0.4)] font-medium outline-none border-[0.5px] border-[#E25E3E80] px-6 py-2 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' rows={3} ></textarea>
            <div className='flex justify-center w-full mt-6'>
              <button type="submit" className='text-white font-semibold text-xl tracking-wide bg-gradient-to-l from-orange-600 to-orange-500 px-16 py-2.5 border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md outline-none'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs