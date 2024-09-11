import Image from 'next/image';
import React, { useState } from 'react';
import cancel from "@/assets/cancel.svg";
import axios from 'axios';

const ContactForm = ({ show, setShow }) => {
    const initialform = {
        name: "",
        email: "",
        mobile: "",
        birthDate: "",
        birthTime: "",
        birthPlace: "",
        date1: "",
        time1: "",
        date2: "",
        time2: "",
        date3: "",
        time3: "",
        message: ""
    };

    const [formdata, setFormdata] = useState(initialform);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const isSubmit = formdata.name.length > 2 && formdata.email && formdata.mobile.length === 10 && formdata.birthDate && formdata.birthTime && formdata.birthPlace && formdata.date1 && formdata.time1 && formdata.date2 && formdata.time2;
            if (!isSubmit) return setError("Please fill in all details properly.");
            const data = await axios.post("http://localhost:5000/admin/clients/client-data", formdata);
            setError("");
            setFormdata(initialform)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };
    return (
        <div className='w-[98%] max-w-[750px] max-h-[97vh] overflow-y-auto overflow-x-hidden rounded'>
            <div className='bg-[#FFF3E0] px-6 lg:px-10 p-6 shadow-[0_4px_18px_2px_#FFD0A433] border-[0.5px] border-[#FFD0A4]  relative'>
                <Image src={cancel} alt='Cancel Icon' className='absolute top-4 right-5 w-8 h-8 cursor-pointer' onClick={() => setShow(!show)} />
                <h3 className='text-[#10101E] text-center mb-6 text-3xl lg:text-[33px] font-semibold'>Book Appointment</h3>
                <form className='flex flex-wrap justify-between items-center gap-3.5 font-semibold' onSubmit={handleSubmit}>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Name*</label>
                        <input type="text" name='name' value={formdata.name} autoComplete='off' onChange={handleChange} placeholder='Your Name' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Mobile Number*</label>
                        <input type="number" name='mobile' value={formdata.mobile} onChange={handleChange} placeholder='Mobile No.' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Email Address*</label>
                        <input type="email" name='email' value={formdata.email} onChange={handleChange} placeholder='Email ID' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Date of Birth*</label>
                        <input type="date" name='birthDate' value={formdata.birthDate} onChange={handleChange} placeholder='Date of Birth' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Birth Time*</label>
                        <input type="time" name='birthTime' value={formdata.birthTime} onChange={handleChange} placeholder='Birth Time' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Birth Place*</label>
                        <input type="text" name='birthPlace' value={formdata.birthPlace} onChange={handleChange} placeholder='Place of Birth' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%] '>
                        <h3 className='text-[#10101E] block mb-0.5'>Preferred Timing 1*</h3>
                        <div className='flex gap-2'>
                            <div>
                                <label className='text-[#555] block mb-0.5'>Date</label>
                                <input type="date" name='date1' value={formdata.date1} onChange={handleChange} className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-3 py-1 rounded' />
                            </div>
                            <div>
                                <label className='text-[#555] block mb-0.5'>Time</label>
                                <input type="time" name='time1' value={formdata.time1} onChange={handleChange} className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-3 py-1 rounded' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <h3 className='text-[#10101E] block mb-0.5'>Preferred Timing 2*</h3>
                        <div className='flex gap-2'>
                            <div>
                                <label className='text-[#555] block mb-0.5'>Date</label>
                                <input type="date" name='date2' value={formdata.date2} onChange={handleChange} className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-3 py-1 rounded' />
                            </div>
                            <div>
                                <label className='text-[#555] block mb-0.5'>Time</label>
                                <input type="time" name='time2' value={formdata.time2} onChange={handleChange} className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-3 py-1 rounded' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <h3 className='text-[#10101E] block mb-0.5'>Preferred Timing 3</h3>
                        <div className='flex gap-2'>
                            <div>
                                <label className='text-[#555] block mb-0.5'>Date</label>
                                <input type="date" name='date3' value={formdata.date3} onChange={handleChange} className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-3 py-1 rounded' />
                            </div>
                            <div>
                                <label className='text-[#555] block mb-0.5'>Time</label>
                                <input type="time" name='time3' value={formdata.time3} onChange={handleChange} className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-3 py-1 rounded' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full relative'>
                        <label className='text-[#10101E] block mb-0.5'>Additional Message</label>
                        <textarea placeholder='Please write message here' name='message' value={formdata.message} onChange={handleChange} className='resize-none w-full bg-[#FFFFFF66] font-medium outline-none border-[0.5px] border-[#FFD0A4] px-6 py-2 rounded' rows={2} ></textarea>
                        {error && <p className='text-red-500 text-[13px] absolute -bottom-4 left-0'>{error}</p>}
                    </div>
                    <div className='flex justify-center w-full mt-3'>
                        <button type="submit" disabled={loading} className={`text-white font-semibold text-lg ${loading ? "grayscale" : ""} bg-gradient-to-r  from-[#FD6E0E] to-[#EF9D33] px-16 py-2 rounded-md outline-none`}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ContactForm