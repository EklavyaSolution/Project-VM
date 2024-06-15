"use client"

import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [authData, setAuthData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setAuthData((prevData) => ({
            ...prevData, [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/admin/auth/login", authData);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full h-screen bg-slate-50 py-40'>
            <div className='max-w-[600px] mx-auto h-fit px-20 py-6 rounded-md shadow-2xl border border-[#cfcfcf]'>
                <h3 className='text-2xl font-medium mb-5 text-center'>Login</h3>
                <form onSubmit={handleSubmit}>
                    <input type="email" name='email' placeholder='Email Id' value={authData.email} onChange={handleChange} className='w-full px-6 py-1.5 rounded border border-[#ccc] my-3 font-medium outline-none' />
                    <input type="password" name='password' placeholder='Password' value={authData.password} onChange={handleChange} className='w-full px-6 py-1.5 rounded border border-[#ccc] my-3 font-medium outline-none' />
                    <div className='flex justify-center'>
                        <button type='submit' className='px-8 py-1 rounded-md bg-gradient-to-r from-[#43d1d1] to-[#017dfa] mt-6 text-white font-medium text-lg'>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login