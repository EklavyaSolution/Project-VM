"use client"

import React from 'react';
import Link from 'next/link';

const BookNumeroSession = () => {
    return (
        <section className='w-full h-80 my-16 bg-booknumerosession_bg bg-cover bg-center flex flex-col items-center justify-center text-white font-semibold'>
            <h3 className='font-poppins text-[33px] tracking-wider'>Numerology Consultation</h3>
            <p className='text-[21px] mt-2 tracking-wide'>Book Appointment with Mr. Venky Musti for your detailed Numerology Consultation</p>
            <Link href="/appointment">
                <button className=' outline-none rounded-md px-6 py-2 mt-12 tracking-wider bg-[#F2934C]'>Book Appointment</button>
            </Link>
        </section>
    )
}

export default BookNumeroSession