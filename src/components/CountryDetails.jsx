"use client"

import React from 'react';
import usa from "@/assets/usa.svg";
import australia from "@/assets/australia.svg";
import dubai from "@/assets/dubai.svg";
import Image from 'next/image';

const CountryDetails = ({ country }) => {

    const countries = [{
        address: "Tulip Ct, Edison, NJ 08820, United States",
        img: usa,
    }, {
        address: "Sydney, NSW, Australia",
        img: australia,
    }, {
        address: "Plot no. 246/123 Al Habtoor Warehouse # 61, Industrial Area 3, Opp. Al Khayam Bakery Al Qusais, Dubai",
        img: dubai,
    }];
    const cityfunc = () => {
        if (country === "usa") {
            return countries[0]
        } else if (country === "australia") {
            return countries[1]
        } else {
            return countries[2]
        }
    }
    return (
        <div className='bg-[#FFF3E0] py-10 px-16'>
            <h3 className='text-center text-[#10101E] text-2xl mt-3 tracking-wide font-semibold'>{cityfunc().address}</h3>
            <div className='grid place-items-center px-5 lg:px-0 mt-8 mb-10'>
                <picture className='w-full max-w-[600px] h-[300px] overflow-hidden rounded-xl'>
                    <Image src={cityfunc().img} alt='Venky Musti in USA' className='w-full h-full object-cover' />
                </picture>
            </div>
            <h3 className='text-[#10101E] text-xl font-semibold mb-0.5'>Venky's Consultation Services</h3>
            <p className='text-lg text-[#3D3D3D] font-nunito font-medium leading-6'>Venky offers personalized consultations through face-to-face meetings, telephone calls, or web meetings. His approach integrates various methods such as:</p>
            <ul className='ml-4 list-disc mt-2 mb-5 text-lg text-[#3D3D3D] font-nunito font-medium'>
                <li>AstroNumerology</li>
                <li>Predictive Numerology</li>
                <li>Vedic Astrology</li>
                <li>KP System</li>
                <li>Intuitive System</li>
            </ul>
            <h3 className='text-[#10101E] text-xl font-semibold mb-0.5'>Areas of Insight</h3>
            <p className='text-lg text-[#3D3D3D] font-nunito font-medium leading-6'>Venky provides insights into several life aspects by evaluating your birth chart with a strengths-based approach, including:
            </p>
            <ul className='ml-4 list-disc mt-2 mb-5 text-lg text-[#3D3D3D] font-nunito font-medium'>
                <li>Profession</li>
                <li>Finances</li>
                <li>Health</li>
                <li>Relationships</li>
            </ul>
            <h3 className='text-[#10101E] text-xl font-semibold mb-0.5'>Consultation Features</h3>
            <p className='text-lg text-[#3D3D3D] font-nunito font-medium leading-6'>Our customized conversations are designed to meet your specific needs, offering a generative vision and fostering a stronger commitment to your goals. We aim to empower you to achieve clarity, focus, abundance, and harmony through actionable plans tailored to your unique circumstances.<br /><br /> By engaging in these discussions, you will gain the insights and support necessary to turn your aspirations into reality, helping you navigate your journey with confidence and purpose.</p>
        </div>
    )
}

export default CountryDetails