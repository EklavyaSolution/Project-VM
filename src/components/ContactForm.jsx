import React, { useState } from 'react'

const ContactForm = () => {
    const initialform = {
        name: "",
        email: "",
        mobile: "",
        birthDate: "",
        birthTime: "",
        birthPlace: "",
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
            const isSubmit = formdata.name.length > 2 && formdata.email && formdata.mobile.length === 10 && formdata.birthDate && formdata.birthTime && formdata.birthPlace;
            if (!isSubmit) return setError("Please fill in all details properly.");
            const data = await axios.post("http://localhost:5000/admin/leads/create", formdata);
            setError("");
            setFormdata(initialform)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };
    return (
        <div className='w-full lg:w-[60%] mt-12 lg:mt-0' onClick={(e) => e.stopPropagation()}>
            <div className='bg-[#FFF3E0] px-6 lg:px-10 p-10 shadow-[0_4px_18px_2px_#FFD0A433] border-[0.5px] border-[#FFD0A4] rounded-lg'>
                <form className='flex flex-wrap justify-between items-center gap-5 font-semibold' onSubmit={handleSubmit}>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Name</label>
                        <input type="text" name='name' value={formdata.name} onChange={handleChange} placeholder='Your Name*' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Mobile Number</label>
                        <input type="number" name='mobile' value={formdata.mobile} onChange={handleChange} placeholder='Mobile No.' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Email Address</label>
                        <input type="email" name='email' value={formdata.email} onChange={handleChange} placeholder='Email ID' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Date of Birth</label>
                        <input type="date" name='birthDate' value={formdata.birthDate} onChange={handleChange} placeholder='Date of Birth' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Birth Time</label>
                        <input type="time" name='birthTime' value={formdata.birthTime} onChange={handleChange} placeholder='Birth Time' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <label className='text-[#10101E] block mb-0.5'>Birth Place</label>
                        <input type="text" name='birthPlace' value={formdata.birthPlace} onChange={handleChange} placeholder='Place of Birth' className='bg-[#FFFFFF66] font-medium outline-none w-full border-[0.5px] border-[#FFD0A4] px-6 py-1.5 rounded' />
                    </div>
                    <div className='w-full relative'>
                        <label className='text-[#10101E] block mb-0.5'>Additional Message</label>
                        <textarea placeholder='Please write message here' name='message' value={formdata.message} onChange={handleChange} className='resize-none w-full bg-[#FFFFFF66] font-medium outline-none border-[0.5px] border-[#FFD0A4] px-6 py-2 rounded' rows={4} ></textarea>
                        {error && <p className='text-red-500 text-[13px] absolute -bottom-4 left-0'>{error}</p>}
                    </div>
                    <div className='flex justify-center w-full mt-6'>
                        <button type="submit" disabled={loading} className={`text-white font-semibold text-lg ${loading ? "grayscale" : ""} bg-gradient-to-r  from-[#FD6E0E] to-[#EF9D33] px-16 py-2 rounded-md outline-none`}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ContactForm