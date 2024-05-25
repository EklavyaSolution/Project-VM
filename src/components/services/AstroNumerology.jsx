"use client"
import astro_numero from "@/assets/astro_numero.svg"
import Link from 'next/link';
import Image from 'next/image'

const AstroNumerology = () => {
    return (
        <section className='rounded-md bg-[#FFF3E0] py-6 px-10 w-full'>
            <h2 className='font-semibold text-2xl text-center'>Astro Numerology Consultation</h2>
            <div className='rounded-lg overflow-hidden w-[500px] h-[300px] my-6 mx-auto'>
                <Image src={astro_numero} alt='Astro Numerology Consultation' className='object-cover w-full h-full' />
            </div>
            <p className='text-justify font-normal'>Embark on a transformative journey with Venky Musti's AstroNumerology consultations. Through a unique fusion of astrology and numerology, Venky provides detailed insights into your life's patterns and cosmic influences. Discover the power of aligning your name, business, or partnerships with favorable numbers to attract prosperity and abundance. Uncover the dynamics of your relationships, identify auspicious timings, and receive guidance on overcoming challenges. Venky's personalized approach empowers you to make informed decisions, unlocking your true potential for success and fulfillment. Embrace the cosmic wisdom and take charge of your destiny today, Get Best Astro Numerology In New York City USA.Embark on a transformative journey with Venky Musti's AstroNumerology consultations. Through a unique fusion of astrology and numerology, Venky provides detailed insights into your life's patterns and cosmic influences. Discover the power of aligning your name, business, or partnerships with favorable numbers to attract prosperity and abundance. Uncover the dynamics of your relationships, identify auspicious timings, and receive guidance on overcoming challenges. Venky's personalized approach empowers you to make informed decisions, unlocking your true potential for success and fulfillment. Embrace the cosmic wisdom and take charge of your destiny today, Get Best Astro Numerology In New York City USA.</p>
            <div className='flex justify-center my-2'>
                <Link href="/appointment">
                    <button className='text-white outline-none rounded-md px-4 py-2.5 mt-5 font-semibold tracking-wider bg-[#F2934C]'>Schedule Your Call</button>
                </Link>
            </div>
        </section>
    )
}

export default AstroNumerology