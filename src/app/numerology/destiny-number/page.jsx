import Image from 'next/image'
import React from 'react';
import destiny_img from "@/assets/destiny_img.svg"
import BookNumeroSession from '@/components/BookNumeroSession';
import Numbers from '@/components/Numbers';


const Destiny_number = () => {

  return (
    <div className='w-full h-full min-h-screen mb-16 font-semibold'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-poppins text-5xl tracking-[1px]'>Number in Numerology</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-10'>
        <h2 className='text-center text-[#10101E] text-[33px]'>Destiny Number In <span className='text-[#261891]'>Numerology</span></h2>
        <h5 className='text-center text-[#EA8427] w-[90%] mx-auto text-2xl mt-2'>Destiny Number is an important Number in Numerology. It is helpful in the long-term planning of events.</h5>
        <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-10'>
          <div className='w-[380px] h-[240px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div>
            <h2 className='text-[#10101E] text-2xl mb-1'>What is Destiny Number?</h2>
            <p className='w-[650px] text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Destiny numbers, also known as Life Path numbers or Bhagyaank, hold special significance in numerology. They reveal a person’s natural talents, gifts, and unique path in life. Think of them as spiritual digits that guide you toward fulfilling your purpose. Unlike Life Path numbers, which involve fated challenges, destiny numbers highlight what comes naturally to you. </p>
          </div>
        </div>
        <div className='w-full px-12 py-8 flex gap-12 bg-[#FFEECE] mt-8'>
          <div className='w-[380px] h-[240px] overflow-hidden rounded-tl-2xl rounded-br-2xl'>
            <Image src={destiny_img} alt='Physic Numbers in Numerology' className='w-full h-full object-cover' />
          </div>
          <div>
            <h2 className='text-[#10101E] text-2xl mb-1'>How to Calculate Destiny Number?</h2>
            <p className='w-[650px] text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Destiny Number / Bhagyank number is calculated by adding the person's date of birth and then reducing the obtained number into a single-digit number. Refer to the below example to calculate your Destiny Number.</p>

            <p className='mt-4 text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'><span className='font-bold'>For Example</span> <br />
              Let's assume you are born on 4 April 1985, <br />
              Add date + month + year <br />
              4 + 4 + 1 + 9 + 8 +5 <br />
              = 31= 3 + 1= 4 <br />
              Your Destiny Number is 4</p>
          </div>
        </div>
      </div>
      <BookNumeroSession />
      <Numbers name="destiny" />
    </div>
  )
}

export default Destiny_number