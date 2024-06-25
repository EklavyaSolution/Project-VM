"use client"

import AboutVenky from '@/components/AboutVenky'
import WorldMap from '@/components/WorldMap'
import React from 'react'

const GlobalPresence = () => {
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
                <p className='text-lg font-medium font-nunito text-[#3D3D3D] mt-3 mb-5'>Connecting you with around the World</p>
            </div>
        </div>
    )
}

export default GlobalPresence