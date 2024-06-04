import Image from 'next/image'
import React from 'react'
import appointment_img from "@/assets/appointment_img.svg"
import chakra_numero_top from "@/assets/chakra_numero_top.svg"
import chakra_numero_btm from "@/assets/chakra_numero_btm.svg"
import appointment_tv from "@/assets/appointment_tv.svg"
import venky_musti from "@/assets/venky_musti.svg"

const Appointment = () => {
  return (
    <div className='bg-[#FFFBF6] w-full h-full min-h-screen pb-16'>
      <div className='w-full text-white font-semibold flex flex-col items-center justify-center gap-4 tracking-[0.5px] text-lg h-80 bg-appointment_bg bg-cover bg-center'>
        <h4 className='text-[#FF926A]'>“Organize your future with the right numbers.”</h4>
        <h1 className=' font-bold text-[36px] tracking-[0.7px]'>Book Your Appointment</h1>
        <h5>with Venky Musti</h5>
        <h5>Astro Numerology | Career | Relationship | Business</h5>
      </div>
      {/* <div className='w-full mx-auto max-w-[1200px]  mt-8 bg-[#FFF3E0CC] rounded-lg relative py-8 px-12'>
        <h2 className='font-medium text-2xl'>Make an Appointment</h2>
        <div className='mt-8 flex items-center justify-between'>
          <div className='w-1/2'>
            <form action="" className='flex flex-wrap justify-between gap-4 font-medium mb-10'>
              <input type="text" placeholder='First Name' className='w-[48%] bg-white  outline-none border-[0.93px] border-[#EFAB97] px-6 py-1.5 rounded' />
              <input type="text" placeholder='Last Name' className='w-[48%] bg-white  outline-none border-[0.93px] border-[#EFAB97] px-6 py-1.5 rounded' />
              <input type="email" placeholder='Email' className='bg-white  outline-none w-full border-[0.93px] border-[#EFAB97] px-6 py-1.5 rounded' />
              <input type="text" placeholder='Mobile Number' className='bg-white  outline-none w-full border-[0.93px] border-[#EFAB97] px-6 py-1.5 rounded' />
              <input type="text" placeholder='Date of Birth' className='bg-white  outline-none w-full border-[0.93px] border-[#EFAB97] px-6 py-1.5 rounded' />
              <input type="text" placeholder='Time of Birth' className='bg-white  outline-none w-full border-[0.93px] border-[#EFAB97] px-6 py-1.5 rounded' />
              <input type="text" placeholder='Place of Birth' className='bg-white  outline-none w-full border-[0.93px] border-[#EFAB97] px-6 py-1.5 rounded' />
              <textarea placeholder='How can i help you?' className='resize-none bg-white  outline-none w-full border-[0.93px] border-[#EFAB97] px-6 py-2 rounded' rows={3} ></textarea>
              <div className='flex justify-center w-full mt-6'>
                <button type="submit" className='text-white font-semibold text-lg tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-12 py-1.5 border-[0.37px] border-[#E25E3E80] shadow-[1.47px_2.93px_5.87px_0px_#E25E3E40] rounded-md outline-none'>Submit</button>
              </div>
            </form>
          </div>
          <div className='w-1/2 pl-5 flex justify-center'>
            <Image src={appointment_img} className='w-[80%] object-cover' />
          </div>
        </div>
        <Image src={chakra_numero_top} className='absolute top-0 right-0 w-72' />
        <Image src={chakra_numero_btm} className='absolute bottom-0 left-0 w-48' />
      </div> */}
      <div className='w-full mx-auto max-w-[1100px]  mt-20 flex justify-between items-center'>
        <div>
          <Image src={appointment_tv} alt='' className='w-[400px]' />
        </div>
        <div className='text-[#111]'>
          <h2 className='font-semibold text-4xl mb-3'>Online Appointment</h2>
          <ul type="circle" className='font-medium text-lg list-disc ml-6'>
            <li>Online Zoom Meeting or Google Meet </li>
            <li>You can ask everything about your business, Carrier, etc.</li>
          </ul>
          <h5 className='font-medium text-lg mt-6 mb-2'>Session</h5>
          <button className='text-white font-semibold text-lg tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-7 py-1.5 border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md outline-none mr-8'>1 Hour</button>
          <button className='text-white font-semibold text-lg tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-7 py-1.5 border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md outline-none'>30 Min</button>
        </div>
      </div>
      <div className='w-full bg-[#FFF3E0CC] pb-12 pt-8 mt-20'>
        <div className='w-full mx-auto max-w-[1100px] flex justify-between items-center'>
          <div className='text-[#111]'>
            <h2 className='font-semibold text-4xl mb-3'>Face to Face Appointment</h2>
            <ul type="circle" className='font-medium text-lg list-disc ml-6'>
              <li>Online Zoom Meeting or Google Meet </li>
              <li>You can ask everything about your business, Carrier, etc.</li>
            </ul>
            <h5 className='font-medium text-lg mt-6 mb-2'>Session</h5>
            <button className='text-white font-semibold text-lg tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-7 py-1.5 border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md outline-none mr-8'>1 Hour</button>
            <button className='text-white font-semibold text-lg tracking-wide bg-gradient-to-r from-[#FF9B50] to-[#E25E3E] px-7 py-1.5 border-[0.5px] border-[#E25E3E80] shadow-[2px_4px_8px_0px_#E25E3E40] rounded-md outline-none'>30 Min</button>
          </div>
          <div>
            <Image src={venky_musti} alt='' className='w-[400px]' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Appointment