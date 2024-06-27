import React from 'react'
import country from "@/assets/cntry_prsnc.svg"
import lives from "@/assets/lvs_trsm.svg"
import experience from "@/assets/yrs_exp.svg"
import Image from 'next/image'

const VenkyExp = () => {
    return (
        <div className='w-full text-center py-12 flex items-center justify-center gap-16 font-semibold text-[#10101E]'>
            <div className='shadow-[0px_0px_17.6px_2px_rgba(0,0,0,0.10)] flex gap-6 rounded-md px-6 py-2.5'>
                <Image className='w-12' src={experience} alt='20+ yrs experience' />
                <div>
                    <h4 className='text-[33px] tracking-wider'>20+</h4>
                    <p className='tracking-wider text-[#3D3D3D] font-nunito'>Years of Experience</p>
                </div>
            </div>
            <div className='shadow-[0px_0px_17.6px_2px_rgba(0,0,0,0.15)] flex gap-6 rounded-md px-6 py-2.5'>
                <Image className='w-12' src={lives} alt='5000+ lives Transformed' />
                <div>
                    <h4 className='text-[33px] tracking-wider'>5000+</h4>
                    <p className='tracking-wider text-[#3D3D3D] font-nunito'>Lives Transformed</p>
                </div>
            </div>
            <div className='shadow-[0px_0px_17.6px_2px_rgba(0,0,0,0.15)] flex gap-6 rounded-md px-6 py-2.5'>
                <Image className='w-12' src={country} alt='3+ country presence' />
                <div>
                    <h4 className='text-[33px] tracking-wider'>4+</h4>
                    <p className='tracking-wider text-[#3D3D3D] font-nunito'>Countries Presence</p>
                </div>
            </div>
        </div>
    )
}

export default VenkyExp