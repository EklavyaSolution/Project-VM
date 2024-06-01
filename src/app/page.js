"use client"

// import Slider from '@/components/Slider'
import Image from 'next/image'
import React from 'react'
import about_vid from "@/assets/about_vid.svg"
import Link from 'next/link';
import banner_bg from "@/assets/banner_bg.svg"
import banner_man from "@/assets/banner_man.svg"
import numero_sol1 from "@/assets/numero_sol1.svg"
import numero_sol2 from "@/assets/numero_sol2.svg"
import numero_sol3 from "@/assets/numero_sol3.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {

  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen'>

      <Swiper
        // spaceBetween={30}
        // slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[400px] relative overflow-hidden"
      >
        <SwiperSlide>
          <Image src={banner_bg} alt="" className='w-full h-full object-cover' />
          <div className='w-full absolute top-6 left-0 flex justify-between items-center px-32'>
            <div className='text-white font-semibold mt-12'>
              <h2 className='text-3xl tracking-wider mb-2'>Best Numerologist in New Jersey</h2>
              <h5 className='text-xl tracking-wider mb-6'>Astro Numerology | Career | Relationship | Business</h5>
              <Link href="/appointment"><button className='bg-[#F2934C]  px-7 py-2 rounded tracking-wider'>Book Appointment</button></Link>
            </div>
            <div>
              <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-96' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={banner_bg} alt="" className='w-full h-full object-cover' />
          <div className='w-full absolute top-6 left-0 flex justify-between items-center px-32'>
            <div className='text-white font-semibold mt-12'>
              <h2 className='text-3xl tracking-wider mb-2'>Best Numerologist in New Jersey</h2>
              <h5 className='text-xl tracking-wider mb-6'>Astro Numerology | Career | Relationship | Business</h5>
              <Link href="/appointment"><button className='bg-[#F2934C]  px-7 py-2 rounded tracking-wider'>Book Appointment</button></Link>
            </div>
            <div>
              <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-96' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='w-full mx-auto max-w-[1200px] mt-16 text-center'>
        <div>
          <h3 className=' font-semibold pb-1.5 inline-block text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4 border-b-[3px] border-[#100E6A]'>Why Numerology?</h3>
          <p className='w-[65%] mx-auto text-center leading-6 text-[#4E4E4E] font-normal text-lg mt-5'>Yet it can be a lot harder for most people to imagine those same attributes being represented by a common number or letter of the alphabet. We can have a hard time seeing numbers as anything other than ciphers for quantities and measurements because that's how we use them every day.</p>
        </div>
        <div className='mt-20 flex flex-col items-center'>
          <h2 className=' font-semibold pb-1.5 inline-block text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4 border-b-[3px] border-[#100E6A]'>Meet VENKY MUSTI</h2>
          <div className='w-[500px] h-[280px] rounded-lg overflow-hidden mt-8'>
            <Image src={about_vid} alt='Meet Veny Musti' className='w-full h-full object-cover' />
          </div>
          <p className='w-[65%] text-center leading-6 text-[#4E4E4E] font-normal text-lg mt-4'>It all started in 1999 when I was talking to a friend from Gujarat experts I realizame attributes being represented all started in 1999 when I was talking to a friend from G when I was talking to a friend from Gd from G when I was talking to a friend from G.</p>
          <Link href="/appointment"><button className='bg-[#F2934C] px-7 py-2 rounded tracking-wider text-white mt-10 font-semibold'>Book Your Slot</button></Link>
        </div>
      </div>
      <div className='bg-[#FFF3E0CC] w-full py-10 px-40 mt-20'>
        <h3 className='font-semibold text-center text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4'>Why Choose Me</h3>
        <p className='w-[60%] mx-auto text-center leading-6 text-[#4E4E4E] font-medium text-lg mt-5'>I am not your garden-variety Astro Babaji with a half-baked idea of Vedic Astrology preying on people’s vulnerabilities and promoting blind beliefs. I studied astrology for long years under an eminent guru and worked in the corporate world. My blended experience helps me use my knowledge with Logic, Positivity and Empathy to guide you to the right path.</p>
        <div className='flex items-center justify-between text-[#EF652E] font-bold mt-10'>
          <div className='text-center'>
            <h4 className='text-6xl'>20+</h4>
            <p className='tracking-wider mt-1 text-lg'>Years of Experience</p>
          </div>
          <div className='text-center'>
            <h4 className='text-6xl'>5000+</h4>
            <p className='tracking-wider mt-1 text-lg'>Lives Transformed</p>
          </div>
          <div className='text-center'>
            <h4 className='text-6xl'>3+</h4>
            <p className='tracking-wider mt-1 text-lg'>Countries Presence</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <h3 className='font-semibold text-center text-[#100E6A] md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl leading-4 mb-12'>Numerology Solution</h3>
        <div className='w-full px-10'>

          <Swiper
            autoHeight
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=" w-[80%] mx-auto select-none"
          >
            <SwiperSlide className='w-[370px] rounded-md overflow-hidden text-center bg-white border-[#9E9E9E] border-[0.5px]'>
              <Image src={numero_sol1} alt='' className='w-full h-full object-cover' />
              <h3 className='font-semibold mt-3 text-lg w-60 mx-auto'>Astro Numerology Consultation</h3>
              <p className='font-medium text-[#4E4E4E] mt-3 w-80 leading-5 mx-auto'>Astro Numerology readings provide you with a comprehensive image of your life reading.</p>
              <Link href="/appointment"><button className='border-[#F2934C] border font-medium px-4 py-1.5 rounded tracking-wider text-[#FC993E] my-4'>More details</button></Link>
            </SwiperSlide>
            <SwiperSlide className='w-[370px] rounded-md overflow-hidden text-center bg-white border-[#9E9E9E] border-[0.5px]'>
              <Image src={numero_sol2} alt='' className='w-full h-full object-cover' />
              <h3 className='font-semibold mt-3 text-lg w-60 mx-auto'>Astro Numerology Consultation</h3>
              <p className='font-medium text-[#4E4E4E] mt-3 w-80 leading-5 mx-auto'>Astro Numerology readings provide you with a comprehensive image of your life reading.</p>
              <Link href="/appointment"><button className='border-[#F2934C] border font-medium px-4 py-1.5 rounded tracking-wider text-[#FC993E] my-4'>More details</button></Link>
            </SwiperSlide>
            <SwiperSlide className='w-[370px] rounded-md overflow-hidden text-center bg-white border-[#9E9E9E] border-[0.5px]'>
              <Image src={numero_sol3} alt='' className='w-full h-full object-cover' />
              <h3 className='font-semibold mt-3 text-lg w-60 mx-auto'>Astro Numerology Consultation</h3>
              <p className='font-medium text-[#4E4E4E] mt-3 w-80 leading-5 mx-auto'>Astro Numerology readings provide you with a comprehensive image of your life reading.</p>
              <Link href="/appointment"><button className='border-[#F2934C] border font-medium px-4 py-1.5 rounded tracking-wider text-[#FC993E] my-4'>More details</button></Link>
            </SwiperSlide>
            <SwiperSlide className='w-[370px] rounded-md overflow-hidden text-center bg-white border-[#9E9E9E] border-[0.5px]'>
              <Image src={numero_sol2} alt='' className='w-full h-full object-cover' />
              <h3 className='font-semibold mt-3 text-lg w-60 mx-auto'>Astro Numerology Consultation</h3>
              <p className='font-medium text-[#4E4E4E] mt-3 w-80 leading-5 mx-auto'>Astro Numerology readings provide you with a comprehensive image of your life reading.</p>
              <Link href="/appointment"><button className='border-[#F2934C] border font-medium px-4 py-1.5 rounded tracking-wider text-[#FC993E] my-4'>More details</button></Link>
            </SwiperSlide>
            <SwiperSlide className='w-[370px] rounded-md overflow-hidden text-center bg-white border-[#9E9E9E] border-[0.5px]'>
              <Image src={numero_sol3} alt='' className='w-full h-full object-cover' />
              <h3 className='font-semibold mt-3 text-lg w-60 mx-auto'>Astro Numerology Consultation</h3>
              <p className='font-medium text-[#4E4E4E] mt-3 w-80 leading-5 mx-auto'>Astro Numerology readings provide you with a comprehensive image of your life reading.</p>
              <Link href="/appointment"><button className='border-[#F2934C] border font-medium px-4 py-1.5 rounded tracking-wider text-[#FC993E] my-4'>More details</button></Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default App