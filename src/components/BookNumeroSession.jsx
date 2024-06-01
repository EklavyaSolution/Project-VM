import Image from 'next/image'
import React from 'react';
import booknumerosession from '@/assets/booknumerosession_bg.svg'
import Link from 'next/link';

const BookNumeroSession = () => {
    return (
        <div className='relative w-full h-68 my-16'>
            <Image src={booknumerosession} alt='' className='w-full h-full object-cover' />
            <div className='w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center text-white font-semibold'>
                <h3 className='text-4xl leading-4'>Numerology Consultation</h3>
                <p className='text-lg mt-6'>Book Appointment with Mr. Venky Musti for your detailed Numerology Consultation</p>
                <Link href="/appointment">
                    <button className=' outline-none rounded-md px-6 py-2 mt-9 tracking-wide bg-[#F2934C]'>Book Appointment</button>
                </Link>
            </div>
        </div>
    )
}

export default BookNumeroSession