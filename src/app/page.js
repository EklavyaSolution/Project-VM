"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import about_vid from "@/assets/about_vid.svg"
import Link from 'next/link';
import swipePrev from "@/assets/swipePrev.svg"
import swipeNext from "@/assets/swipeNext.svg"
import banner_man from "@/assets/venky.png"
import numero_sol1 from "@/assets/numero_sol1.svg"
import numero_sol2 from "@/assets/numero_sol2.svg"
import numero_sol3 from "@/assets/numero_sol3.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderComp from '@/components/SliderComp';
import carbon_time from "@/assets/carbon_time.svg"
import mandala from "@/assets/mandala.svg"
import rotater from "@/assets/rotater.svg"
import banner_slide4 from "@/assets/banner_slide4.png"
import banner_slide3 from "@/assets/banner_slide3.png"
import banner_slide1 from "@/assets/banner1.png"
import { CustomerReview, servicesData } from '@/components/data/data';


const App = () => {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-7 h-7 min-[820px]:w-10 min-[820px]:h-10 bg-[#FFFBF6] rounded-full grid place-items-center cursor-pointer absolute top-1/2 right-2  min-[890px]:right-5 translate-y-[-50%] z-10"
        onClick={onClick}
      >
        <Image src={swipeNext} alt='Next' className='w-2 min-[820px]:w-3 ml-1' />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-7 h-7 min-[820px]:w-10 min-[820px]:h-10 bg-[#FFFBF6] rounded-full grid place-items-center cursor-pointer absolute top-1/2 left-2  min-[890px]:left-5 translate-y-[-50%] z-10"
        onClick={onClick}
      >
        <Image src={swipePrev} alt='Next' className='w-2 min-[820px]:w-3 -ml-1' />
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
          <div className='w-full relative h-[28vh] min-[480px]:h-[32vh] min-[570px]:h-[38vh] min-[650px]:h-[44vh] min-[770px]:h-[52vh]  min-[950px]:h-[60vh] bg-banner_bg bg-cover bg-center overflow-hidden z-10'>
            <div className='w-full h-full overflow-hidden relative'>
              <Image src={banner_slide1} alt='' className='w-full h-full object-cover' />
              <Link href="/appointment" className='absolute max-[950px]:top-56 min-[900px]:left-8 min-[950px]:top-64 min-[1080px]:left-20 min-[1150px]:left-24 min-[1200px]:top-60 min-[1200px]:left-32  min-[1250px]:left-36  min-[1450px]:left-40'><button className='bg-[#F2934C] px-7 py-2 max-[820px]:text-sm rounded tracking-wider font-semibold text-white'>Book Appointment</button></Link>
            </div>
          </div>
        </div>
        <div>
          <div className='w-full relative h-[28vh] min-[480px]:h-[32vh] min-[570px]:h-[38vh] min-[650px]:h-[44vh] min-[770px]:h-[52vh]  min-[950px]:h-[60vh] bg-banner_bg bg-cover bg-center overflow-hidden z-10'>
            <div className='w-full h-full overflow-hidden'>
              <Image src={banner_slide4} alt='' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
        <div>
          <div className='w-full relative h-[28vh] min-[480px]:h-[32vh] min-[570px]:h-[38vh] min-[650px]:h-[44vh] min-[770px]:h-[52vh]  min-[950px]:h-[60vh] bg-banner_bg bg-cover bg-center overflow-hidden z-10'>
            <div className='w-full h-full overflow-hidden'>
              <Image src={banner_slide3} alt='' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </Slider>

      <div className='w-full mx-auto max-w-[1200px] mt-10 lg:mt-16 px-5 lg:px-0 font-semibold relative'>
        <div className='hidden min-[1025px]:block absolute -top-20 -left-64 w-[550px] h-[550px] z-[5]'>
          <Image src={rotater} alt='' className='w-full h-full object-cover animate-[spin_15s_linear_infinite]' />
        </div>
        <div className='w-full max-[1025px]:mx-auto max-[1025px]:text-center min-[1025px]:ml-[320px] min-[1180px]:ml-[480px] max-w-[700px]'>
          <h5 className='font-medium text-lg font-nunito text-[#3D3D3D] mb-1'>Hi there..</h5>
          <h3 className='font-bold text-[#10101E] max-[1025px]:text-4xl text-3xl lg:text-[33px]'>I am Venky Musti</h3>
          <p className='font-medium text-lg font-nunito text-[#3D3D3D] mt-2'>Achieving balance and harmony in all areas of life is essential for overall well-being. <span className='font-semibold text-[#FC993E]'>Venky Musti</span> Inner Alignment approach combines powerful techniques of Vastu, AstroNumerology, Meditation, Intuition, Energy Healing, and Spirituality to help you find inner peace and fulfillment.
            <br /><br />
            Together, we can unlock your true potential and create a life filled with joy and abundance. Let's get started on your journey towards a happier, healthier you!</p>
        </div>

        <div className='mt-12 lg:mt-20 flex flex-col items-center text-center'>
          <h2 className='  text-[#10101E] text-3xl lg:text-[33px]'>Meet <span className='text-[#261891]'>VENKY MUSTI</span></h2>
          <picture className='w-full h-full max-w-[650px] max-h-[320px] rounded-xl overflow-hidden mt-5 shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)]'>
            <Image src={about_vid} alt='Meet Veny Musti' className='w-full h-full object-cover' />
          </picture>
          <p className='w-full lg:w-[75%] text-center leading-6 text-[#3D3D3D] font-nunito text-lg mt-8'>Numerology has always fascinated me. My interest in numbers and their meanings fuels my passion for discovering how they influence our lives. I love exploring new ways to apply numerology to everyday situations, continuously learning and expanding my knowledge. <br /><br />My journey began in 1999 during a conversation with a friend from Gujarat, India. He introduced me to a book that connected him to his birth number, sparking my curiosity. This newfound interest led me to read numerous books and engage with many experts in the field. <br /><br />Over the years, I have deepened my understanding by studying different numerology systems and analyzing hundreds of birth and event dates. This research has revealed intriguing patterns, reinforcing my belief in the power and potential of numerology.</p>
          <Link href="/services" className='mt-10'>
            <button className='bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-7 py-2 rounded-md tracking-wider text-white'>Book Your Slot</button></Link>
        </div>
      </div>
      <div className='bg-[#FFF3E0] w-full py-10 px-8 lg:px-40 mt-16 font-semibold relative'>
        <h3 className='text-[#10101E] text-3xl lg:text-[33px] text-center'>Why <span className='text-[#261891]'>Choose Me</span></h3>
        <p className='w-full lg:w-[90%] mx-auto text-center text-[#3D3D3D] font-nunito text-lg mt-5'>I am not your garden-variety Astro Babaji with a half-baked idea of Vedic Astrology preying on people's vulnerabilities and promoting blind beliefs. I studied astrology for long years under an eminent guru and worked in the corporate world. My blended experience helps me use my knowledge with Logic, Positivity and Empathy to guide you to the right path.</p>
        <div className='flex flex-wrap items-center gap-5 md:gap-0 justify-center md:justify-between text-[#031D2E] mt-12'>
          <div className='text-center mb-3 md:mb-0'>
            <h4 className='text-4xl lg:text-6xl tracking-wider'>20+</h4>
            <p className='tracking-wider text-[#474747] mt-2 text-xl lg:text-2xl font-nunito'>Years of Experience</p>
          </div>
          <div className='text-center mb-3 md:mb-0'>
            <h4 className='text-4xl lg:text-6xl tracking-wider'>5000+</h4>
            <p className='tracking-wider text-[#474747] mt-2 text-xl lg:text-2xl font-nunito'>Lives Transformed</p>
          </div>
          <div className='text-center mb-3 md:mb-0'>
            <h4 className='text-4xl lg:text-6xl tracking-wider'>4+</h4>
            <p className='tracking-wider text-[#474747] mt-2 text-xl lg:text-2xl font-nunito'>Countries Presence</p>
          </div>
        </div>
        <div className='absolute top-0 right-0'>
          <Image src={mandala} alt='nothing' />
        </div>
      </div>
      <div className='mt-16 mb-20 font-semibold'>
        <h3 className='text-center text-[#10101E] text-[33px] tracking-[0.5px] mb-1'>Numerology <span className='text-[#261891]'>Solutions</span></h3>
        <p className=' text-center text-[#000000] font-medium font-nunito text-lg mb-10'>Unlocking the Power of Numbers in your Life</p>
        <SliderComp slides={3} auto={false} data={servicesData.map((item, index) => {
          return <div key={index}>
            <div className='w-[350px] h-[360px] mx-auto rounded-md overflow-hidden bg-white border-[#9e9e9eb3] border-[0.5px]'>
              <div className="w-full h-1/2">
                <Image src={item.imgUrl} alt='' className='w-full h-full object-cover' />
              </div>
              <div className="p-4 flex flex-col justify-between h-1/2">
                <div>
                  <h3 className='text-[#10101E] text-lg leading-5'>{item.name}</h3>
                  <p className='font-medium text-[#3D3D3D] line-clamp-3 font-nunito mt-2 text-sm tracking-wide'>{item.data}</p>
                </div>
                <div>
                  <Link href="/appointment" ><button className='border-[#EF9D33] hover:text-white hover:bg-[#EF9D33] transition-all ease-out duration-300 border font-medium px-4 py-1.5 rounded tracking-wider text-[#EF9D33]'>More details</button></Link>
                </div>
              </div>
            </div>
          </div>
        })} />
      </div>
      <div className='bg-[#FFF3E0] py-12 font-semibold relative'>
        <h3 className='text-center text-[#10101E] text-[33px] tracking-[0.5px] mb-1'>Latest <span className='text-[#261891]'>Articles & Updates</span></h3>
        <p className=' text-center text-[#000000] font-medium font-nunito text-lg mb-10'>Explore insightful Articles on Numerology</p>
        <SliderComp slides={3} auto={false} data={[1, 2, 3, 4].map((item, index) => {
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
      <div className='mt-16 mb-8 font-semibold'>
        <h3 className='text-center text-[#10101E] text-[33px] tracking-[0.5px] mb-1'>What Peoples say <span className='text-[#261891]'>about us</span></h3>
        <p className=' text-center text-[#000000] font-medium font-nunito text-lg mb-10'>See what our Clients have to say about their Numerology Experiences</p>
        <SliderComp slides={1} auto={true} data={CustomerReview.slice(0, 5).map((item, index) => {
          return <div key={index}>
            <div className="w-full flex flex-col items-center justify-between">
              <p className='text-[#4D4D4D] text-center font-nunito font-semibold italic leading-7 mb-7'>{item.review}</p>
              <Link href={item.link}>
                <div className='w-[52px] h-[52px] mx-auto rounded-full overflow-hidden'>
                  <Image src={item.imgUrl} alt='' className='w-full h-full object-cover' />
                </div>
                <h3 className='text-[#E25E3E] font-bold text-lg mt-2'>{item.name}</h3>
              </Link>
            </div>
          </div>
        })} />
      </div>
      <div className='w-full py-12'>
        <div className='w-[90%] mx-auto max-w-[1200px] bg-[#FFF3E0] rounded-md py-6 px-8 sm:px-16 min-[820px]:px-5 lg:px-10 flex min-[820px]:flex-row flex-col justify-between min-[820px]:items-center'>
          <div>
            <h3 className='text-[#EF652E] font-semibold text-xl lg:text-2xl'>Subscribe to get latest updates</h3>
            <p className='text-[#000000] font-medium font-nunito'>Stay updated with the latest numerology tips and offers</p>
          </div>
          <div className='w-full min-[500px]:w-[80%] sm:w-[60%] min-[820px]:w-[40%] mt-5 min-[820px]:mt-0'>
            <label className='text-sm text-[#10101E] font-semibold w-full inline-block'>Email</label>
            <input type="email" className='bg-[rgba(255,255,255,0.4)] font-medium outline-none w-full lg:w-[90%] border-[0.5px] border-[#FFD0A4] px-2.5 lg:px-6 py-1.5 rounded' />
            <p className='text-[12px] text-[#9E9E9E] select-none font-medium'>We respect your privacy</p>
            <button className='text-white font-semibold tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-8 py-1.5 border-[0.5px] border-[#e25f3e45] shadow-[2px_4px_8px_0px_#E25E3E40] rounded outline-none mt-3 lg:mt-6'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App