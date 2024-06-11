"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import about_vid from "@/assets/about_vid.svg"
import Link from 'next/link';
import swipePrev from "@/assets/swipePrev.svg"
import swipeNext from "@/assets/swipeNext.svg"
import banner_man from "@/assets/banner_man.svg"
import numero_sol1 from "@/assets/numero_sol1.svg"
import numero_sol2 from "@/assets/numero_sol2.svg"
import numero_sol3 from "@/assets/numero_sol3.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderComp from '@/components/SliderComp';
import carbon_time from "@/assets/carbon_time.svg"
import gallery_img from '@/assets/gallery_img.svg'
import vid_testimonials from "@/assets/vid_testimonials.svg"


const App = () => {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-10 h-10 bg-[#FFFBF6] rounded-full grid place-items-center cursor-pointer absolute top-1/2 right-5 translate-y-[-50%] z-10"
        onClick={onClick}
      >
        <Image src={swipeNext} alt='Next' className='w-3 ml-1' />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-10 h-10 bg-[#FFFBF6] rounded-full grid place-items-center cursor-pointer absolute top-1/2 left-5 translate-y-[-50%] z-10"
        onClick={onClick}
      >
        <Image src={swipePrev} alt='Next' className='w-3 -ml-1' />
      </div>
    );
  }

  const slider = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current.slickNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const services_data = [{
    name: "Astro Numerology Consultation",
    image: numero_sol1,
    para: "Astro Numerology readings provide you with a comprehensive image of your life reading.",
    link: "/appointment",
  },
  {
    name: "Relationship Compatibility",
    image: numero_sol2,
    para: "Looking for advice on marriage, Want to check compatibility with your partner?",
    link: "/appointment",
  },
  {
    name: "Business Consultation",
    image: numero_sol3,
    para: "A Successful Business needs a powerful name. During this 60 minute session you will provide with detailed analysis",
    link: "/appointment",
  },
  {
    name: "Astro Numerology Consultation",
    image: numero_sol1,
    para: "Astro Numerology readings provide you with a comprehensive image of your life reading.",
    link: "/appointment",
  },
  ];

  return (
    <div className='bg-[#FFFBF6] h-full min-h-screen'>
      <Slider ref={slider} {...settings}>
        <div>
          <div className='w-full flex justify-between items-center flex-row h-[400px] bg-banner_bg bg-cover bg-center px-32 pt-5'>
            <div className='text-white font-semibold mt-12'>
              <h2 className='text-3xl tracking-wider mb-2'>Best Numerologist in New Jersey</h2>
              <h5 className='text-xl tracking-wider mb-6'>Astro Numerology | Career | Relationship | Business</h5>
              <Link href="/appointment"><button className='bg-[#F2934C]  px-7 py-2 rounded tracking-wider'>Book Appointment</button></Link>
            </div>
            <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-96' />
          </div>
        </div>
        <div>
          <div className='w-full flex justify-between items-center flex-row h-[400px] bg-banner_bg bg-cover bg-center px-32 pt-5'>
            <div className='text-white font-semibold mt-12'>
              <h2 className='text-3xl tracking-wider mb-2'>Best Numerologist in New Jersey</h2>
              <h5 className='text-xl tracking-wider mb-6'>Astro Numerology | Career | Relationship | Business</h5>
              <Link href="/appointment"><button className='bg-[#F2934C]  px-7 py-2 rounded tracking-wider'>Book Appointment</button></Link>
            </div>
            <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-96' />
          </div>
        </div>
        <div>
          <div className='w-full flex justify-between items-center flex-row h-[400px] bg-banner_bg bg-cover bg-center px-32 pt-5'>
            <div className='text-white font-semibold mt-12'>
              <h2 className='text-3xl tracking-wider mb-2'>Best Numerologist in New Jersey</h2>
              <h5 className='text-xl tracking-wider mb-6'>Astro Numerology | Career | Relationship | Business</h5>
              <Link href="/appointment"><button className='bg-[#F2934C]  px-7 py-2 rounded tracking-wider'>Book Appointment</button></Link>
            </div>
            <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-96' />
          </div>
        </div>
      </Slider>

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
      <div className='bg-[#FFF3E0CC] w-full py-10 px-40 mt-16'>
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
      <div className='mt-20 mb-16'>
        <h3 className='font-semibold text-center text-[#100E6A] font-poppins text-[33px] tracking-[0.5px] mb-12'>Numerology Solutions</h3>
        <SliderComp slides={3} data={services_data.map((item, index) => {
          return <div key={index}>
            <div className='w-[350px] h-[400px] mx-auto rounded-md overflow-hidden text-center bg-white border-[#9e9e9eb1] border-[0.5px]'>
              <div className="w-full h-1/2">
                <Image src={item.image} alt='' className='w-full h-full object-cover' />
              </div>
              <div className="py-4 flex flex-col justify-between h-1/2">
                <div>
                  <h3 className='font-semibold text-lg w-48 leading-[22px] tracking-wide mx-auto'>{item.name}</h3>
                  <p className='font-medium text-[#4E4E4E] mt-3 text-[15px] w-80 px-2 leading-5 mx-auto'>{item.para}</p>
                </div>
                <div>
                  <Link href={item.link}><button className='border-[#F2934C] hover:text-white hover:bg-[#FC993E] transition-all ease-out duration-300 border font-medium px-4 py-1.5 rounded tracking-wider text-[#FC993E]'>More details</button></Link>
                </div>
              </div>
            </div>
          </div>
        })} />
      </div>
      <div className='bg-[#FFF3E0] py-12'>
        <h3 className='font-semibold text-center text-[#100E6A] font-poppins text-[33px] tracking-[0.5px] mb-12'>Latest Articles & Updates</h3>
        <SliderComp slides={3} data={[1, 2, 3, 4].map((item, index) => {
          return <div key={index}>
            <Link href="/app">
              <div className='w-[350px] h-[400px] mx-auto rounded-md overflow-hidden text-center bg-white border-[#9e9e9eb1] border-[0.5px]'>
                <div className="w-full h-1/2">
                  <Image src={numero_sol1} alt='' className='w-full h-full object-cover' />
                </div>
                <div className="py-4 flex flex-col items-center justify-between h-1/2">
                  <div>
                    <h3 className='font-semibold text-[17px] w-[90%] leading-5 tracking-[0.5px] mx-auto uppercase'>EXPLORING THE NUMBERS: UNRAVELING THE MYSTERIES OF ASTRONUMEROLOGY</h3>
                    <p className='font-medium text-[#4E4E4E] mt-3 text-[15px] w-80 px-2 mx-auto leading-5'>Introduction: Numbers have always held a mystical allure, playing a...</p>
                    <p className="text-[#3DB45E] font-medium text-[13px] mt-1">Read More</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image src={carbon_time} alt="time" className="w-4" />
                    <p className="text-[13px] text-[#9E9E9E] font-medium tracking-wide">July 25, 2023</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        })} />
        <div className='flex justify-center'>
          <Link href="/articles&updates">
            <button className='text-white outline-none rounded px-6 py-2 mt-8 font-semibold tracking-wide bg-[#F2934C]'>View More</button>
          </Link>
        </div>
      </div>
      <div className='my-16'>
        <h3 className='font-semibold text-center text-[#100E6A] font-poppins text-[33px] tracking-[0.5px] mb-12'>Gallery</h3>
        <SliderComp slides={4} data={[1, 1, 1, 1, 1, 1].map((item, index) => {
          return <div key={index}>
            <div className="w-[280px] h-[380px] overflow-hidden rounded-md mx-auto">
              <Image src={gallery_img} alt="gallery" className="w-full h-full object-cover" />
            </div>
          </div>
        })} />
        <div className='flex justify-center'>
          <Link href="/gallery">
            <button className='text-white outline-none rounded px-7 py-2 mt-8 font-semibold tracking-wide bg-[#F2934C]'>View All</button>
          </Link>
        </div>
      </div>
      <div className='bg-[#FFF3E0] py-12'>
        <h3 className='font-semibold text-center text-[#100E6A] font-poppins text-[33px] tracking-[0.5px] mb-12'>What Peoples say about us</h3>
        <SliderComp slides={3} data={[1, 1, 1, 1, 1].map((item, index) => {
          return <div key={index}>
            <div className="w-[380px] h-[220px] overflow-hidden rounded-md mx-auto">
              <Image src={vid_testimonials} alt="gallery" className="w-full h-full object-cover" />
            </div>
          </div>
        })} />
        <div className='flex justify-center'>
          <Link href="/articles&updates">
            <button className='text-white outline-none rounded px-6 py-2 mt-8 font-semibold tracking-wide bg-[#F2934C]'>View More</button>
          </Link>
        </div>
      </div>
      <div className='w-full py-12'>
        <div className='w-[90%] mx-auto max-w-[1200px] bg-[#FFF3E0CC] rounded-md py-6 px-10 flex justify-between items-center'>
          <h3 className='text-[#EF652E] font-semibold text-2xl'>Subscribe to get latest updates</h3>
          <div className='flex gap-4'>
            <input type="email" placeholder='Enter Email Id' className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[360px] border-[0.5px] border-[#E25E3E80] px-6 py-1.5 shadow-[2px_4px_8px_0px_#E25E3E40] rounded' />
            <button className='text-white font-semibold tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-8 py-1.5 border-[0.5px] border-[#e25f3e45] shadow-[2px_4px_8px_0px_#E25E3E40] rounded outline-none'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App