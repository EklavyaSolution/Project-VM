"use client"

import AboutVenky from '@/components/AboutVenky'
import WorldMap from '@/components/WorldMap'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({ children }) => {
    const pathname = usePathname();

    return (
        <div className='w-full h-full min-h-screen mb-16'>
            <div className='w-full grid place-items-center h-56 bg-header_bg bg-cover bg-center'>
                <h1 className='text-white font-semibold font-poppins text-5xl tracking-[0.7px]'>Worldwide Presence</h1>
            </div>
            <div className='w-full mx-auto max-w-[1200px] mt-10 text-center'>
                <h2 className='font-semibold text-[#10101E] text-[33px]'>Globally <span className='text-[#261891]'>Locations</span> </h2>
                <p className='text-lg font-medium font-nunito text-[#3D3D3D] mt-1 mb-12'>Strategically Located to Serve You Better, Offering Comprehensive Solutions Across the Globe</p>
                <WorldMap />
            </div>
            <div className='my-16'>
                <AboutVenky />
            </div>
            <div className='w-full mx-auto max-w-[1200px] text-center'>
                <h2 className='font-semibold text-[#10101E] text-2xl'>Get your personalized Numerology reading from Astro Numerologist Venky Musti</h2>
                <p className='text-lg font-medium font-nunito text-[#3D3D3D] mt-3 mb-10'>Connecting you with around the World</p>

                <div className='w-full flex justify-center gap-10'>
                    <Link href="/our-global-presence/usa"><h3 className={`${pathname.includes("usa") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>USA</h3></Link>
                    <Link href="/our-global-presence/australia"><h3 className={`${pathname.includes("australia") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>Australia</h3></Link>
                    <Link href="/our-global-presence/dubai"><h3 className={`${pathname.includes("dubai") ? "text-[#FC993E] border-b-[3px] border-[#FC993E]" : "text-[#3D3D3D]"} font-semibold text-lg`}>Dubai</h3></Link>
                </div>

                {children}

            </div>
        </div>
    )
}

export default layout