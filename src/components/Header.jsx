"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import venky_logo from "@/assets/venky_logo.svg"
import arrow_down from "@/assets/arrow-down.svg"
import close from "@/assets/close.png"
import hamburger from "@/assets/hamburger.png"
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
        link: "/numerology",
        children: [{
            name: "Psychic Number",
            sublink: "/numerology/psychic-number",
        },
        {
            name: "Destiny Number",
            sublink: "/numerology/destiny-number",
        }]
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
    const [navActive, setNavActive] = useState(false);

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
    if (pathname.startsWith("/v")) return <></>;

    return (
        <nav className={`w-full max-[700px]:pl-4 max-[1200px]:pl-7 pr-4  min-[700px]:pr-7 min-[1200px]:pr-2 min-[1245px]:pr-4 min-[1278px]:pr-7 flex items-center -py-8 transition-all duration-300 delay-200 ease-out justify-between sticky left-0 bg-black  z-[999] ${visible ? "-top-[100%]" : "top-0"}`}>
            <Link href="/">
                <Image src={venky_logo} alt='Venki Musti (Numerology Expert)' className='sm:w-32 sm:h-32 w-20 h-20' />
            </Link>
            <div className='hidden min-[1200px]:flex items-center gap-5 min-[1245px]:gap-6 font-semibold text-[15px] text-white'>
                {navlinks.map((item, index) => {
                    return <div key={index} className='relative group'>
                        <Link href={item.link} className={`${pathname.startsWith(item.link) ? "text-orange-500" : ""} tracking-wide `
                        }><h3 className='py-3 flex items-center gap-2'>{item.name} {item?.children && <Image src={arrow_down} className='w-3 h-3' />} </h3></Link>
                        {item?.children && <div className='bg-black border border-[#444] p-4 rounded flex-col gap-5 absolute top-11 left-0 hidden group-hover:flex hover:flex'>
                            {item.children?.map((subitem, index) => (
                                <Link key={index} href={subitem.sublink} className="tracking-wide"><h3 className='text-nowrap'>{subitem.name}</h3></Link>
                            ))}
                        </div>
                        }
                    </div>
                })}
                <Link href="/appointment" className='ml-1 min-[1270px]:ml-8' >
                    <button className=' outline-none border-2 border-[#EF9D33]  rounded-lg px-4 py-1.5 tracking-wide text-[#EF9D33] '>Book Appointment</button>
                </Link>
            </div>
            <div className='block min-[1200px]:hidden min-[700px]:-mr-3'>
                <Image src={hamburger} alt='Hamburger Menu' className=' cursor-pointer w-12 p-2 ' onClick={() => setNavActive(true)} />
            </div>
            <div className={` ${navActive ? "pointer-events-auto" : "pointer-events-none"} fixed block min-[1200px]:hidden top-0 left-0 w-screen h-screen`}>
                <div className={`absolute top-0 pointer-events-auto w-full max-w-[380px] h-screen bg-gray-400 -mr-1 scale-[1.02] transition-all duration-500 ease-in-out  ${navActive ? "right-0" : "-right-[100%]"}`}>
                    <Image src={close} alt='Close Icon' className='absolute top-5 right-8  w-12 p-2 cursor-pointer' onClick={() => setNavActive(false)} />

                    <div className='mt-[68px]'>
                        <h3 className='text-3xl font-semibold text-center mb-8'>Venky Musti</h3>
                        <ul className=' text-center'>
                            {navlinks.map((item, index) => {
                                return <li key={index}><Link href={item.link} className='mb-5 inline-block' onClick={() => setNavActive(false)}><h3 className='font-medium text-xl'>{item.name}</h3></Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header