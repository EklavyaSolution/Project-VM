"use client"

import Image from 'next/image'
import React from 'react';
import gallery1 from '@/assets/gallery1.jpeg'
import gallery2 from '@/assets/gallery2.jpeg'
import gallery4 from '@/assets/gallery4.jpeg'
import gallery5 from '@/assets/gallery5.jpeg'
import gallery6 from '@/assets/gallery6.jpeg'
import gallery7 from '@/assets/gallery7.jpeg'
import gallery8 from '@/assets/gallery8.jpeg'
import gallery9 from '@/assets/gallery9.jpeg'
import gallery3 from '@/assets/gallery3.PNG'

const Gallery = () => {
  return (
    <div className='w-full h-full min-h-screen mb-8 lg:mb-16'>
      <div className='w-full grid place-items-center h-44 min-[600px]:h-60 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-4xl min-[600px]:text-5xl tracking-[1px] lg:tracking-[0.7px]'>Gallery</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-5 lg:mt-10 text-center'>
        <h2 className='font-semibold text-[#10101E] text-3xl lg:text-[33px]'>Personal <span className='text-[#261891]'>Gallery</span> </h2>
        <p className='lg:text-lg font-medium font-nunito text-[#3D3D3D] mt-2 mb-5 lg:mb-12 mx-auto w-[90%]'>Here you'll find some of our favorite snapshots over the past few years these include my clients and also pictures taken when i attended various cultural events and met some wonderful people from movie and other industries</p>
        <div className='flex flex-wrap justify-center gap-6 p-8 lg:p-0'>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery3} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery4} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery5} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery9} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery1} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery6} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery7} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery8} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
          <div className=' overflow-hidden rounded-md max-w-[380px]'>
            <Image src={gallery2} alt='A photo with Ram' className='w-full h-full object-cover'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery