import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full min-h-screen mb-16'>
            <div className='w-full mx-auto max-w-[1200px] mt-10 font-semibold'>
                <h2 className='text-center text-[#10101E] text-[33px] uppercase'>EXPLORING THE NUMBERS: UNRAVELING THE MYSTERIES OF ASTRONUMEROLOGY </h2>
                <div className='rounded-lg min-w-[500px] h-[300px] bg-red-400 overflow-hidden'>
                    <Image className='w-full h-full object-cover' />
                </div>
                <h3 className='text-[#10101E] text-2xl mb-2'>Introduction</h3>
                <p className='text-lg leading-[26px] font-medium font-nunito text-[#3D3D3D]'>Astronumerology, a fascinating blend of astrology and numerology, seeks to uncover the mysteries of human existence and the universe through the power of numbers and celestial bodies. While astrology focuses on the positions and movements of celestial bodies, and numerology examines the significance of numbers in our lives, Astronumerology combines these fields for a more comprehensive understanding of our existence and destiny.</p>
            </div>
        </div>
    )
}

export default page