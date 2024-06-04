"use client"
import Image from 'next/image'
import React from 'react';
import Phoneicon from "@/assets/Phoneicon.svg"
import mailicon from "@/assets/Mailicon.svg"
import Link from 'next/link';

const ContactUs = () => {

  const visitDetails = [{
    country: "USA",
    address: "75 Tower Court Kernersville, NC\n27284 PO Box\n6658 Rockhild SDT 2505",
  },
  {
    country: "Australia",
    address: "75 Tower Court Kernersville, NC\n27284 PO Box\n6658 Rockhild SDT 2505",
  },
  {
    country: "Dubai",
    address: "75 Tower Court Kernersville, NC\n27284 PO Box\n6658 Rockhild SDT 2505",
  }
  ]
  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen pb-16'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Contact Us</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px]'>
        <div className=' mt-8 py-4'>
          <h2 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide'>Contact Details</h2>
          <div className='flex items-center justify-center gap-36 mt-3'>
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
          <h2 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide mt-16'>Visit Us</h2>
          <div className='flex items-center justify-between mt-5'>
            {visitDetails.map((item, index) => {
              return <div key={index} className='border-[0.5px] border-[#b4b4b4b3] rounded-lg overflow-hidden w-[350px]'>
                <div className='bg-[#FF9B50] py-2.5'>
                  <h3 className='text-center text-[21px] tracking-[0.7px] font-semibold'>{item.country}</h3>
                </div>
                <div className='w-[75%] mx-auto pt-4 pb-6'>
                  <p className='font-semibold text-lg mb-2'>Address:</p>
                  <p className='font-medium whitespace-break-spaces'>{item.address}</p>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className='bg-[#FFF5DB80] py-6 px-24 mt-16'>
          <h3 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide mb-8'>Get In Touch</h3>
          <form className='flex flex-wrap justify-between items-center gap-7'>
            <input type="text" placeholder='Your Name*' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="number" placeholder='Mobile No.' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="email" placeholder='Email ID' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="date" placeholder='Date of Birth' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="time" placeholder='Birth Time' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <input type="text" placeholder='Place of Birth' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[45%] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <textarea placeholder='Message' className='resize-none w-full bg-[rgba(255,255,255,0.4)] font-medium outline-none border-[0.5px] border-[#E25E3E80] px-6 py-2 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' rows={3} ></textarea>
            <div className='flex justify-center w-full my-6'>
              <button type="submit" className='text-white font-semibold text-xl tracking-wider bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-16 py-2 border-[0.5px] border-[#e25f3e45] shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md outline-none'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs