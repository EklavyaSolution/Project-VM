"use client"

import Article from '@/components/admin/Article';
import Banner from '@/components/admin/Banner';
import Gallery from '@/components/admin/Gallery';
import React, { useState } from 'react'

const Profile = () => {
    const [activeLink, setActiveLink] = useState(0);
    const links = ["Article", "Banner", "Gallery"];

    const renderTabs = () => {
        switch (activeLink) {
            case 0:
                return <Article />;
            case 1:
                return <Banner />;
            case 2:
                return <Gallery />;
            default:
                break;
        }
    };
    return (
        <div className='w-full h-screen bg-gray-50 flex'>
            <div className='h-screen w-[300px] bg-[#eee] px-10 py-20'>
                {links.map((item, index) => (<h4 key={index} className={`font-medium text-lg w-[250px] py-2 px-4 my-3 cursor-pointer hover:bg-[#ccc] rounded ${activeLink === index ? "bg-[#ddd] border border-[#ccc] shadow-md" : ""}`} onClick={() => setActiveLink(index)}>{item}</h4>))}
            </div>
            <div className='w-[calc(100%-300px)] h-full '>
                {renderTabs()}
            </div>

        </div>
    )
}

export default Profile