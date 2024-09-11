"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Clients = () => {
    const [clientsData, setClientsData] = useState([]);

    const fetchClients = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/admin/clients/get-client-data");
            setClientsData(data)
        } catch (error) {
            console.log(error)
        }
    };

    const formatDate = (date) => {
        const prevdate = new Date(date);
        const newDate = prevdate.toLocaleDateString('en-US', {
            year: "2-digit",
            month: "short",
            day: "numeric"
        })
        return newDate
    }
    useEffect(() => {
        fetchClients();
    }, [])

    return (
        <div className='w-full h-full py-8 pt-16 overflow-hidden'>
            <h3 className='text-3xl font-semibold tracking-wide text-center mb-8'>Clients</h3>
            <div className=' overflow-auto h-fit flex-wrap mb-10 pb-10 px-10'>
                <table className='bg-[#efefef] w-full divide-y-2 divide-[#aaa] text-center font-nunito font-medium text-[17px]'>
                    <thead>
                        <tr className='pt-2 pb-1'>
                            <th>S. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Birth Date</th>
                            <th>Birth Time</th>
                            <th>Birth Place</th>
                            <th>Date 1</th>
                            <th>Time 1</th>
                            <th>Date 2</th>
                            <th>Time 2</th>
                            <th>Date 3</th>
                            <th>Time 3</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsData?.map((item, index) => {
                            return <tr key={index}>
                                <td className='py-2'>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{formatDate(item.birthDate)}</td>
                                <td>{item.birthTime}</td>
                                <td>{item.birthPlace}</td>
                                <td>{formatDate(item.date1)}</td>
                                <td>{item.time1}</td>
                                <td>{formatDate(item.date2)}</td>
                                <td>{item.time2}</td>
                                <td>{formatDate(item.date3)}</td>
                                <td>{item.time3}</td>
                                <td className='w-64'>{item.message}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Clients


