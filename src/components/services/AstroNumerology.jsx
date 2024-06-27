"use client"
import astro_numero from "@/assets/astro_numero.svg"
import Link from 'next/link';
import Image from 'next/image'

const AstroNumerology = () => {
    return (
        <section className='rounded-md bg-[#FFF3E0] py-6 px-12 w-full'>
            <h2 className='text-[#10101E] text-2xl font-semibold text-center'>Astro Numerology Consultation</h2>
            <div className='rounded-lg overflow-hidden w-[600px] h-[300px] mt-6 mb-8 mx-auto'>
                <Image src={astro_numero} alt='Astro Numerology Consultation' className='object-cover w-full h-full' />
            </div>
            <p className='text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D] text-center'>Embark on a transformative journey with Venky Musti's AstroNumerology consultations. Through a unique fusion of astrology and numerology, Venky provides detailed insights into your life's patterns and cosmic influences. Discover the power of aligning your name, business, or partnerships with favorable numbers to attract prosperity and abundance. Uncover the dynamics of your relationships, identify auspicious timings, and receive guidance on overcoming challenges. Venky's personalized approach empowers you to make informed decisions, unlocking your true potential for success and fulfillment. Embrace the cosmic wisdom and take charge of your destiny today, Get Best Astro Numerology In New York City USA.</p>
            <div className='flex justify-center mt-6 mb-2'>
                <Link href="/appointment">
                    <button className='text-white outline-none rounded-md bg-gradient-to-r from-[#FD6E0E] to-[#EF9D33] px-6 py-2 font-semibold tracking-wide'>Schedule Your Call</button>
                </Link>
            </div>
        </section>
    )
}

export default AstroNumerology