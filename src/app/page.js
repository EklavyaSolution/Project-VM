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
import why_numero from "@/assets/why_numero.svg"
import mandala from "@/assets/mandala.svg"


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
    <div className='bg-white h-full min-h-screen'>
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

      <div className='w-full mx-auto max-w-[1200px] mt-16 font-semibold'>
        <div className='flex gap-12'>
          <picture className='w-[35%] rounded-lg overflow-hidden'>
            <Image src={why_numero} alt='' className='w-full h-full object-cover' />
          </picture>
          <div className='w-[60%]'>
            <h3 className='tracking-[0.2px] text-[#10101E] text-[33px]'>Why Numerology?</h3>
            <p className=' text-[#3D3D3D] font-nunito text-lg mt-1'>“Unlock Your Destiny: Why Numerology Matters ” / Unlock Your Life's Code: Discover What Numbers Reveal About You</p>
            <ul className=' text-[#3D3D3D] font-nunito text-lg list-disc ml-8'>
              <li><span className='font-bold text-[#10101E]'>Life Roadmap:</span> Numerology guides your purpose. </li>
              <li><span className='font-bold text-[#10101E]'>Energies Aligned:</span> Use numbers strategically.</li>
              <li><span className='font-bold text-[#10101E]'>Self-Discovery:</span> Understand strengths and growth.</li>
              <li><span className='font-bold text-[#10101E]'>Relationship Insights:</span> Decode connections.</li>
              <li><span className='font-bold text-[#10101E]'>Impact the World:</span> Empower change.</li>
            </ul>
          </div>
        </div>
        <div className='mt-20 flex flex-col items-center text-center'>
          <h2 className='  text-[#10101E] text-[33px]'>Meet <span className='text-[#261891]'>VENKY MUSTI</span></h2>
          <picture className='w-[650px] h-[320px] rounded-xl overflow-hidden mt-5 shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)]'>
            <Image src={about_vid} alt='Meet Veny Musti' className='w-full h-full object-cover' />
          </picture>
          <p className='w-[65%] text-center leading-6 text-[#3D3D3D] font-nunito text-lg mt-8'>It all started in 1999 when I was talking to a friend from Gujarat experts I realizame attributes being represented all started in 1999 when I was talking to a friend from G when I was talking to a friend from Gd from G when I was talking to a friend from G.</p>
          <Link href="/appointment" className='mt-10'>
            <button className='bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-7 py-2 rounded-md tracking-wider text-white'>Book Your Slot</button></Link>
        </div>
      </div>
      <div className='bg-[#FFF3E0] w-full py-10 px-40 mt-16 font-semibold relative'>
        <h3 className='text-[#10101E] text-[33px] text-center'>Why <span className='text-[#261891]'>Choose Me</span></h3>
        <p className='w-[90%] mx-auto text-center text-[#3D3D3D] font-nunito text-lg mt-5'>I am not your garden-variety Astro Babaji with a half-baked idea of Vedic Astrology preying on people's vulnerabilities and promoting blind beliefs. I studied astrology for long years under an eminent guru and worked in the corporate world. My blended experience helps me use my knowledge with Logic, Positivity and Empathy to guide you to the right path.</p>
        <div className='flex items-center justify-between text-[#031D2E] mt-12'>
          <div className='text-center'>
            <h4 className='text-6xl tracking-wider'>20+</h4>
            <p className='tracking-wider text-[#474747] mt-2 text-2xl font-nunito'>Years of Experience</p>
          </div>
          <div className='text-center'>
            <h4 className='text-6xl tracking-wider'>5000+</h4>
            <p className='tracking-wider text-[#474747] mt-2 text-2xl font-nunito'>Lives Transformed</p>
          </div>
          <div className='text-center'>
            <h4 className='text-6xl tracking-wider'>4+</h4>
            <p className='tracking-wider text-[#474747] mt-2 text-2xl font-nunito'>Countries Presence</p>
          </div>
        </div>
        <div className='absolute top-0 right-0'>
          <Image src={mandala} alt='nothing' />
        </div>
      </div>
      <div className='mt-16 mb-20 font-semibold'>
        <h3 className='text-center text-[#10101E] text-[33px] tracking-[0.5px] mb-1'>Numerology <span className='text-[#261891]'>Solutions</span></h3>
        <p className=' text-center text-[#000000] font-medium font-nunito text-lg mb-10'>Unlocking the Power of Numbers in your Life</p>
        <SliderComp slides={3} data={services_data.map((item, index) => {
          return <div key={index}>
            <div className='w-[350px] h-[360px] mx-auto rounded-md overflow-hidden bg-white border-[#9e9e9eb3] border-[0.5px]'>
              <div className="w-full h-1/2">
                <Image src={item.image} alt='' className='w-full h-full object-cover' />
              </div>
              <div className="p-4 flex flex-col justify-between h-1/2">
                <div>
                  <h3 className='text-[#10101E] text-lg'>{item.name}</h3>
                  <p className='font-medium text-[#3D3D3D] font-nunito mt-1 text-sm tracking-wide'>{item.para}</p>
                </div>
                <div>
                  <Link href={item.link}><button className='border-[#EF9D33] hover:text-white hover:bg-[#EF9D33] transition-all ease-out duration-300 border font-medium px-4 py-1.5 rounded tracking-wider text-[#EF9D33]'>More details</button></Link>
                </div>
              </div>
            </div>
          </div>
        })} />
      </div>
      <div className='bg-[#FFF3E0] py-12 font-semibold relative'>
        <h3 className='text-center text-[#10101E] text-[33px] tracking-[0.5px] mb-1'>Latest <span className='text-[#261891]'>Articles & Updates</span></h3>
        <p className=' text-center text-[#000000] font-medium font-nunito text-lg mb-10'>Explore insightful Articles on Numerology</p>
        <SliderComp slides={3} data={[1, 2, 3, 4].map((item, index) => {
          return <div key={index}>
            <Link href="/app">
              <div className='w-[350px] h-[400px] mx-auto rounded-md overflow-hidden bg-white border-[#9e9e9eb3] border-[0.5px]'>
                <div className="w-full h-[180px]">
                  <Image src={numero_sol1} alt='' className='w-full h-full object-cover' />
                </div>
                <div className="p-4 flex flex-col justify-between h-[220px]">
                  <div>
                    <h3 className='text-[#10101E] text-lg leading-6'>Exploring the Numbers: Unravelling the Mysteries of Astronumerology</h3>
                    <p className='font-medium text-[#3D3D3D] font-nunito mt-1 text-sm tracking-wide line-clamp-2'>Introduction: Numbers have always held a mystical allure, playing</p>
                    <p className="text-[#3DB45E] text-[13px] mt-1">Read More</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image src={carbon_time} alt="time" className="w-4" />
                    <p className="text-sm text-[#6B6B6B] font-medium tracking-wide">July 25, 2023</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        })} />
        <div className='flex justify-center'>
          <Link href="/articles&updates">
            <button className='text-white outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 mt-8 font-semibold tracking-wide'>View More</button>
          </Link>
        </div>
        <div className='absolute bottom-0 left-0 rotate-180'>
          <Image src={mandala} alt='nothing' />
        </div>
      </div>
      {/* <div className='my-16'>
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
            <button className='text-white outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 mt-8 font-semibold tracking-wide'>View All</button>
          </Link>
        </div>
      </div> */}
      <div className='my-16 font-semibold'>
        <h3 className='text-center text-[#10101E] text-[33px] tracking-[0.5px] mb-1'>What Peoples say <span className='text-[#261891]'>about us</span></h3>
        <p className=' text-center text-[#000000] font-medium font-nunito text-lg mb-10'>See what our Clients have to say about their Numerology Experiences</p>
        <SliderComp slides={3} data={[1, 1, 1, 1, 1].map((item, index) => {
          return <div key={index}>
            <div className="w-[380px] h-[220px] overflow-hidden rounded-md mx-auto">
              <Image src={vid_testimonials} alt="gallery" className="w-full h-full object-cover" />
            </div>
          </div>
        })} />
        <div className='flex justify-center'>
          <Link href="/articles&updates">
            <button className='text-white outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 mt-8 font-semibold tracking-wide'>View More</button>
          </Link>
        </div>
      </div>
      <div className='w-full py-12'>
        <div className='w-[90%] mx-auto max-w-[1200px] bg-[#FFF3E0] rounded-md py-6 px-10 flex justify-between items-center'>
          <div>
            <h3 className='text-[#EF652E] font-semibold text-2xl'>Subscribe to get latest updates</h3>
            <p className=' text-center text-[#000000] font-medium font-nunito'>Stay updated with the latest numerology tips and offers</p>
          </div>
          <div className='w-[40%]'>
            <label className='text-sm text-[#10101E] font-semibold w-full inline-block'>Email</label>
            <input type="email" className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-[90%] border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
            <p className='text-[12px] text-[#9E9E9E] select-none font-medium'>We respect your privacy</p>
            <button className='text-white font-semibold tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-8 py-1.5 border-[0.5px] border-[#e25f3e45] shadow-[2px_4px_8px_0px_#E25E3E40] rounded outline-none mt-6'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App