"use client"

import Image from 'next/image'
import React from 'react'
import venki_logo from '@/assets/venki_logo.svg'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

    const navlinks = [{
        name: "About Us",
        link: "/about"
    },
    {
        name: "Services",
        link: "/services"
    },
    {
        name: "Numerology",
        link: "/numerology"
    },
    {
        name: "Articles & Updates",
        link: "/articles&updates"
    },
    {
        name: "Gallery",
        link: "/gallery"
    },
    {
        name: "Our Global Presence",
        link: "/Our Global presence"
    },
    {
        name: "Appointment",
        link: "/appointment"
    },
    {
        name: "Contact Us",
        link: "/contact-us"
    }];

    const pathname=usePathname();

    return (
        <nav className='w-full px-16 flex items-center justify-between sticky top-0 left-0 bg-white z-[999]'>
            <Link href="/">
                <Image src={venki_logo} alt='Venki Musti (Numerlogy Expert)' className='w-16' />
            </Link>
            <div className='flex items-center gap-6 font-semibold'>
                {navlinks.map(({ name, link }, index) => {
                    return (
                        <Link key={index} href={link} className={`${pathname.startsWith(link) ? "text-orange-600" : "text-black"} text-sm tracking-wide uppercase`}>
                            <h3>{name}</h3></Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Header