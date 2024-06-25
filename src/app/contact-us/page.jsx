"use client"
import Image from 'next/image'
import React from 'react';
import phoneicon from "@/assets/redphone.svg"
import mailicon from "@/assets/redmail.svg"
import globe from "@/assets/globe.svg"
import Link from 'next/link';
import WorldMap from '@/components/WorldMap';

const ContactUs = () => {

  const contactDetails = [{
    link: "",
    img: globe,
    heading: "Have Queries?",
    ptag: "Chat with us",
  },
  {
    link: "tel:+41 87541258",
    img: phoneicon,
    heading: "Mobile Number",
    ptag: "+41 87541258",
  },
  {
    link: "mailto:venky@gmnail.com",
    img: mailicon,
    heading: "E-Mail ID",
    ptag: "venky@gmnail.com",
    height: "63%"
  }
  ];


  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen pb-16'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Contact Us</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-16 flex '>
        <div className='w-[40%]'>
          <h3 className='font-semibold text-[#10101E] text-[33px]'>Get In Touch and Explore</h3>
          <p className='font-medium font-nunito text-[#3D3D3D] mt-1'>Fill out the form </p>
          <div className='mt-10'>
            {contactDetails.map((item, index) => {
              return <Link key={index} href={item.link} className='mb-7 w-fit block'>
                <div className='flex gap-5'>
                  <div className='w-[54px] h-[54px] grid place-items-center rounded-full bg-[#FFF3E0]'>
                    <Image src={item.img} alt='' className={`h-[${item?.height ? item.height : "60%"}] w-[60%] object-cover`} />
                  </div>
                  <div>
                    <h4 className='font-semibold text-[#10101E] text-lg'>{item.heading}</h4>
                    <p className='font-medium font-nunito text-[#3D3D3D]'>{item.ptag}</p>
                  </div>
                </div>
              </Link>
            })}

          </div>
        </div>
        <div className='w-[60%]'>
          <div className='bg-[#FFF3E0] p-10 shadow-[0_4px_18px_2px_#FFD0A433] border-[0.5px] border-[#FFD0A4] rounded-lg'>
            <form className='flex flex-wrap justify-between items-center gap-5 font-semibold'>
              <div className='w-[47%]'>
                <label className='text-[#10101E] block mb-0.5'>Name</label>
                <input type="text" placeholder='Your Name*' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
              </div>
              <div className='w-[47%]'>
                <label className='text-[#10101E] block mb-0.5'>Mobile Number</label>
                <input type="number" placeholder='Mobile No.' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
              </div>
              <div className='w-[47%]'>
                <label className='text-[#10101E] block mb-0.5'>Email Address</label>
                <input type="email" placeholder='Email ID' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
              </div>
              <div className='w-[47%]'>
                <label className='text-[#10101E] block mb-0.5'>Date of Birth</label>
                <input type="date" placeholder='Date of Birth' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
              </div>
              <div className='w-[47%]'>
                <label className='text-[#10101E] block mb-0.5'>Birth Time</label>
                <input type="time" placeholder='Birth Time' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
              </div>
              <div className='w-[47%]'>
                <label className='text-[#10101E] block mb-0.5'>Birth Place</label>
                <input type="text" placeholder='Place of Birth' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
              </div>
              <div className='w-full'>
                <label className='text-[#10101E] block mb-0.5'>Additional Message</label>
                <textarea placeholder='Please write message here' className='resize-none w-full bg-[#FFFFFF66] font-medium outline-none border-[0.5px] border-[#FFD0A4] px-6 py-2 rounded' rows={4} ></textarea>
              </div>
              <div className='flex justify-center w-full mt-6'>
                <button type="submit" className='text-white font-semibold bg-gradient-to-r text-lg from-[#FD6E0E] to-[#EF9D33] px-16 py-2 rounded-md outline-none'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-16'>
        <h3 className='font-semibold text-[#10101E] text-[33px] text-center'>Visit Us</h3>
        <p className='text-lg font-medium font-nunito leading-6 text-[#3D3D3D] mt-1 mb-12 text-center'>Explore and visit our workplace that <br />available in the world</p>
        <WorldMap/>
      </div>
    </div>
  )
}

export default ContactUs