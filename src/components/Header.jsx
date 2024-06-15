"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import venky_logo from "@/assets/venky_logo.svg"
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
        link: "/our-global-presence"
    },
    {
        name: "Contact Us",
        link: "/contact-us"
    }];

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY || window.pageYOffset;;
            const visible = prevScrollPos < currentScrollPos || currentScrollPos === 0;
            setVisible(visible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const pathname = usePathname();

    return (
        <nav className={`w-full px-10 flex items-center py-2 transition-all duration-300 ease-in-out delay-200 justify-between sticky left-0 bg-black  z-[999] ${visible ? "-top-[100%]" : "top-0"}`}>
            <Link href="/">
                <Image src={venky_logo} alt='Venki Musti (Numerology Expert)' className='w-16' />
            </Link>
            <div className='flex items-center gap-6 font-semibold text-[15px] text-white'>
                {navlinks.map(({ name, link }, index) => {
                    return (
                        <Link key={index} href={link} className={`${pathname.startsWith(link) ? "text-orange-500" : ""} tracking-wide `}>
                            <h3>{name}</h3></Link>
                    )
                })}
                 <Link href="/appointment" className='ml-8' >
                 <button className=' outline-none border-2 border-[#EF9D33]  rounded-lg px-4 py-1.5 tracking-wide text-[#EF9D33] '>Book Appointment</button>
                 </Link>
            </div>
        </nav>
    )
}

export default Header