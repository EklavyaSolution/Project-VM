"use client"

import React from 'react'

const Disclaimer = () => {
    return (
        <div className='w-full h-full min-h-screen mb-8 lg:mb-16'>
            <div className='w-full grid place-items-center h-24 lg:h-56 bg-header_bg bg-cover bg-center'>
                <h1 className='text-white font-semibold font-poppins text-3xl lg:text-5xl tracking-[0.7px]'>Disclaimer</h1>
            </div>
            <div className='w-full mx-auto max-w-[1000px] mt-7 lg:mt-10 px-6 lg:px-0 font-semibold'>
                <h3 className='text-xl lg:text-[28px] mb-1 lg:mb-4 text-[#1a1a1a]'>Upon purchasing an astrological reading or any other service  from Venky Musti or Numerologic , you acknowledge that you:</h3>
                <ul className='list-disc ml-5 mb-6 lg:mb-10 leading-7 lg:leading-10 lg:text-xl font-nunito text-[#333]'>
                    <li>Have read this disclaimer in its entirety.</li>
                    <li>Understand all aspects of this disclaimer.</li>
                    <li>Agree with all aspects of this disclaimer.</li>
                    <li>Release me of any and all liability for any actions and/or inactions.</li>
                    <li>Are at least 18 years of age.</li>
                </ul>
                <p className='text-[#333] font-nunito lg:text-xl leading-8 mt-4 lg:mt-7'>Although I take Numerology very seriously and believe it is a powerful tool of insight and guidance, I am legally required to state that Numerology readings provided by Venky Musti are for entertainment purposes only.</p>
                <p className='text-[#333] font-nunito lg:text-xl leading-7 mt-4 lg:mt-7'>Numerology readings provided by Venky Musti do not constitute, do not replace, and should not be construed as financial, legal, medical, psychiatric, psychological, or any other type of professional advice on any subject matter. If you require such advice, please consult a licensed professional.</p>
                <p className='text-[#333] font-nunito lg:text-xl leading-7 mt-4 lg:mt-7'>Once the Numerology reading is opted and a meeting is scheduled no cancellations or returns are accepted.</p>
                <p className='text-[#333] font-nunito lg:text-xl leading-7 mt-4 lg:mt-7'>Venky Musti or Numerologic or its associates are not responsible for any damages arising from any actions taken by a client following an Numerology reading.</p>
            </div>
        </div>
    )
}

export default Disclaimer