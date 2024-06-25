"use client"

import Image from 'next/image'
import React from 'react'
import map from "@/assets/map.svg"
import usamark from "@/assets/usamark.svg"
import australiamark from "@/assets/australiamark.svg"
import dubaimark from "@/assets/dubaimark.svg"


const WorldMap = () => {

    const visitDetails = [{
        img: usamark,
        country: "USA",
        address: "75 Tower Court Kernersville, NC\n27284 PO Box\n6658 Rockhild SDT 2505",
    },
    {
        img: australiamark,
        country: "Australia",
        address: "75 Tower Court Kernersville, NC\n27284 PO Box\n6658 Rockhild SDT 2505",
    },
    {
        img: dubaimark,
        country: "Dubai",
        address: "75 Tower Court Kernersville, NC\n27284 PO Box\n6658 Rockhild SDT 2505",
    }
    ];

    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <Image src={map} alt='Global Locations of Venky Musti' className='w-full object-cover' />
            </div>
            <div className='mt-10 flex justify-center text-start gap-32'>
                <div className='flex gap-6 items-start'>
                    <Image src={usamark} alt='' className='w-5 mt-1.5' />
                    <div>
                        <h3 className='font-semibold text-[#43BCCD] text-2xl'>USA</h3>
                        <p className='font-semibold text-[#3D3D3D] mt-1 font-nunito'>Tulip Ct, Edison, NJ 08820,<br />United States</p>
                    </div>
                </div>
                <div className='flex gap-6 items-start'>
                    <Image src={australiamark} alt='' className='w-5 mt-1.5' />
                    <div>
                        <h3 className='text-[#A0C261] font-semibold text-2xl'>Australia</h3>
                        <p className='font-semibold text-[#3D3D3D] mt-1 font-nunito'>Sydney, NSW, <br />Australia</p>
                    </div>
                </div>
                <div className='flex gap-6 items-start'>
                    <Image src={dubaimark} alt='' className='w-5 mt-1.5' />
                    <div>
                        <h3 className='font-semibold text-[#662E9B] text-2xl'>Dubai</h3>
                        <p className='w-[260px] font-semibold text-[#3D3D3D] mt-1 font-nunito'>Plot no. 246/123 Al Habtoor Warehouse # 61, Industrial Area 3, Opp. Al Khayam Bakery Al Qusais, Dubai</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorldMap