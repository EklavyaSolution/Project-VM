import React from 'react'
import about_bg from "@/assets/about_bg.svg"
import banner_man from "@/assets/banner_man.svg"
import Image from 'next/image'
import about_vid from "@/assets/about_vid.svg"
import Link from 'next/link'


const About = () => {
  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen'>
      <div className='w-full h-[300px] overflow-hidden relative'>
        <Image src={about_bg} alt="" className='w-full h-full object-cover' />
        <div className='w-full absolute top-6 left-0 flex justify-between items-center px-32'>
          <div className='text-white font-semibold -mt-10'>
            <h2 className='text-3xl tracking-wider mb-6'>About Venky Musti</h2>
            <h5 className='text-xl tracking-wider mb-2'>Best Numerologist in New Jersey</h5>
            <h5 className=' tracking-wider '>Astro Numerology | Career | Relationship | Business</h5>
          </div>
          <div>
            <Image src={banner_man} alt='Venky Musti | Best Numerologist' className='w-80' />
          </div>
        </div>
      </div>
      <div className='w-full mx-auto max-w-[1200px] mt-10 flex flex-col items-center'>
        <div className='w-[500px] h-[280px] rounded-lg overflow-hidden mt-8'>
          <Image src={about_vid} alt='Meet Veny Musti' className='w-full h-full object-cover' />
        </div>
        <div className='mt-16 text-center'>
          <h3 className='text-3xl text-[#100E6A] font-semibold mb-6'>Meet Venky Musti</h3>
          <p className='w-[80%] mx-auto font-medium text-lg leading-6 mb-3'>Numerology is something that I am very passionate about. I have always been interested in numbers and their meanings. I love finding out what numbers mean and how they can impact our lives. I am constantly studying numerology and finding new and interesting ways to apply it to my life. Best Master Astro Numerology Consultation.</p>
          <p className='w-[80%] mx-auto font-medium text-lg leading-6 mb-3'>It all started in 1999 when I talked to a friend from Gujarat, India. He was talking about a book that made him understand the connection with his birth number. It made me curious and I started liking the concept. Then by reading multiple books and talking with many experts, I realized the potential of numbers. Get Best Master Astro Numerology Consultation In Melbourne.</p>
          <p className='w-[80%] mx-auto font-medium text-lg leading-6'>Since then I built my knowledge by studying various systems of numerology and researching hundreds of birth dates /event dates etc and found various patterns - Venky</p>
        </div>
        <div className='w-full text-center px-20 py-8 mt-6 flex items-center justify-between text-[#EF652E] font-bold'>
          <div className='bg-[#FFF5DB] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-md px-12 py-2.5'>
            <h4 className='text-6xl'>20+</h4>
            <p className='tracking-wider mt-1 text-lg'>Years of Experience</p>
          </div>
          <div className='bg-[#FFF5DB] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-md px-12 py-2.5'>
            <h4 className='text-6xl'>5000+</h4>
            <p className='tracking-wider mt-1 text-lg'>Lives Transformed</p>
          </div>
          <div className='bg-[#FFF5DB] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-md px-12 py-2.5'>
            <h4 className='text-6xl'>3+</h4>
            <p className='tracking-wider mt-1 text-lg'>Countries Presence</p>
          </div>
        </div>
        <div className='mt-8 mb-16 text-center'>
          <h3 className='text-3xl text-[#100E6A] font-semibold mb-6'>Meet Venky Musti</h3>
          <p className='w-[80%] mx-auto font-medium text-lg leading-6 mb-3'>Numerology is something that I am very passionate about. I have always been interested in numbers and their meanings. I love finding out what numbers mean and how they can impact our lives. I am constantly studying numerology and finding new and interesting ways to apply it to my life. Best Master Astro Numerology Consultation.</p>
          <p className='w-[80%] mx-auto font-medium text-lg leading-6 mb-3'>It all started in 1999 when I talked to a friend from Gujarat, India. He was talking about a book that made him understand the connection with his birth number. It made me curious and I started liking the concept. Then by reading multiple books and talking with many experts, I realized the potential of numbers. Get Best Master Astro Numerology Consultation In Melbourne.</p>
          <p className='w-[80%] mx-auto font-medium text-lg leading-6'>Since then I built my knowledge by studying various systems of numerology and researching hundreds of birth dates /event dates etc and found various patterns - Venky</p>
        </div>
        <div className='flex justify-center my-2'>
                <Link href="/appointment">
                    <button className='text-white outline-none rounded-md px-4 py-2.5 mt-5 font-semibold tracking-wider bg-[#F2934C]'>Book Your Appointment</button>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default About