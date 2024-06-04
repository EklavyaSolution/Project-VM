"use client"

import Image from 'next/image'
import React from 'react';
import gallery_img from '@/assets/gallery_img.svg'

const Gallery = () => {
  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen mb-16'>
      <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
        <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Gallery</h1>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-10'>
        <h2 className='text-center font-semibold text-[#100E6A] font-poppins text-[33px] tracking-wide'>Personal Gallery </h2>
        <p className='text-center font-normal mt-4 mb-12 mx-auto w-[80%]'>Here you'll find some of our favorite snapshots over the past few years these include my clients and also pictures taken when i attended various cultural events and met some wonderful people from movie and other industries</p>
        <div className='grid grid-cols-3 gap-10 p-6'>
          <div className=' overflow-hidden rounded'>
            <Image src={gallery_img} alt='A photo with Ram' />
          </div>
          <div className=' overflow-hidden rounded-md'>
            <Image src={gallery_img} alt='A photo with Ram' />
          </div>
          <div className=' overflow-hidden rounded-md'>
            <Image src={gallery_img} alt='A photo with Ram' />
          </div>
          <div className=' overflow-hidden rounded-md'>
            <Image src={gallery_img} alt='A photo with Ram' />
          </div>
          <div className=' overflow-hidden rounded-md'>
            <Image src={gallery_img} alt='A photo with Ram' />
          </div>
          <div className=' overflow-hidden rounded-md'>
            <Image src={gallery_img} alt='A photo with Ram' />
          </div>
          <div className=' overflow-hidden rounded-md'>
            <Image src={gallery_img} alt='A photo with Ram' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Gallery