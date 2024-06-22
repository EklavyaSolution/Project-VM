"use client"

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import del from "@/assets/delete.svg";
import { useRouter } from 'next/navigation';

const Article = () => {
    const router = useRouter();

    const [articleData, setArticleData] = useState([]);
    const [formActive, setFormActive] = useState(false);
    const [articleForm, setArticleForm] = useState({
        heading: "",
        para: "",

    });

    const handleChange = (e) => {
        setArticleForm((prevData) => ({
            ...prevData, [e.target.name]: e.target.value
        }))
    }
    const handleChange2 = (e) => {
        const img = e.target.files[0];
        setArticleForm((prevData) => ({
            ...prevData, article_img: img
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("article_img", articleForm.article_img);
        formdata.append("heading", articleForm.heading);
        formdata.append("para", articleForm.para);

        const result = await axios.post("http://localhost:5000/admin/article", formdata);
        setFormActive(!formActive);
    };

    const handleDelete = async (id) => {
        try {
            const deleted = await axios.delete(`http://localhost:5000/admin/article/${id}`);
            router.refresh();
        } catch (error) {
            console.log(error)
        }
    }

    const fetchArticles = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/admin/article");
            setArticleData(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <div className='w-full h-full py-8 pt-16'>
            <h3 className='text-3xl font-semibold tracking-wide text-center mb-8'>Article</h3>
            <div className='flex justify-center'>
                <button onClick={() => setFormActive(!formActive)} className='text-lg py-1.5 px-6 border border-[#aaa] shadow-md mb-6 rounded-md outline-none bg-gradient-to-r from-[#e59a49] to-[#f00f5e] text-white font-medium'>Add Article</button>
            </div>
            <div className=' overflow-y-auto overflow-x-hidden h-fit px-10'>
                {articleData && articleData?.map((item, index) => {
                    return <div key={index} className='rounded px-4 py-3 flex gap-8 shadow-2xl border border-[#ccc] mb-8 relative'>
                        <div className='w-[380px] h-[230px] overflow-hidden rounded bg-red-200'>
                            <Image src={item.imgUrl} alt='' width={380} height={230} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className='font-semibold tracking-wider mb-4 text-lg w-[70%]'>{item.heading}</h3>
                            <p className=' font-nunito text-[#333] line-clamp-6'>{item.para}</p>
                        </div>
                        <div onDoubleClick={() => handleDelete(item._id)} className='absolute top-2 shadow-md  bg-white right-8 cursor-pointer select-none px-2 py-1.5 rounded-full'>
                            <Image src={del} alt='Delete Icon' className='w-6' />
                        </div>
                    </div>

                })}
            </div>

            {formActive && (
                <div className='fixed top-0 left-0 w-full h-full bg-red-300 grid place-items-center'>
                    <div className='w-[700px] h-fit bg-white shadow-2xl rounded-md border border-[#777] px-10 py-8 relative'>
                        <form action="" onSubmit={handleSubmit}>
                            <label className='w-full mb-1 block font-medium' htmlFor="">Artice Image</label>
                            <input type="file" name="article_img" className='mb-3' onChange={handleChange2} />
                            <input type="text" name='heading' placeholder='Enter Article Heading' value={articleForm.heading} onChange={handleChange} className='w-full px-6 py-1.5 rounded border border-[#ccc] my-3 font-medium outline-none' />
                            <textarea name="para" value={articleForm.para} onChange={handleChange} placeholder='Enter Article Text' className='w-full px-6 py-1.5 rounded border border-[#ccc] my-3 font-medium outline-none'></textarea>
                            <div className='flex justify-center'>
                                <button type='submit' className='px-8 py-1 rounded-md bg-gradient-to-r from-[#43d1d1] to-[#017dfa] mt-6 text-white font-medium text-lg'>Submit</button>
                            </div>
                        </form>
                        <div className='absolute top-2 right-8 cursor-pointer' onClick={() => setFormActive(!formActive)}>Cr</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Article