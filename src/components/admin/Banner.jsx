"use client"

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import del from "@/assets/delete.svg";
import { useRouter } from 'next/navigation';


const Banner = () => {

  const router = useRouter();

  const [bannerData, setBannerData] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [bannerForm, setBannerForm] = useState({});

  const handleChange = (e) => {
    const img = e.target.files[0];
    setBannerForm({ banner: img })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("banner", bannerForm.banner);

    const result = await axios.post("http://localhost:5000/admin/banner", formdata);
    setFormActive(!formActive);
  };

  const handleDelete = async (id) => {
    try {
      const deleted = await axios.delete(`http://localhost:5000/admin/banner/${id}`);
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  }

  const fetchBanners = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/admin/banner");
      setBannerData(data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchBanners();
  }, [])

  return (
    <div className='w-full h-full py-8 pt-16'>
      <h3 className='text-3xl font-semibold tracking-wide text-center mb-8'>Banner</h3>
      <div className='flex justify-center'>
        <button onClick={() => setFormActive(!formActive)} className='text-lg py-1.5 px-6 border border-[#aaa] shadow-md mb-6 rounded-md outline-none bg-gradient-to-r from-[#e59a49] to-[#f00f5e] text-white font-medium'>Add Banner</button>
      </div>
      <div className=' overflow-y-auto h-fit overflow-x-hidden px-10'>
        {bannerData && bannerData.map((item, index) => {
          return <div key={index} className='rounded p-4 shadow-2xl border border-[#ccc] mb-8 relative'>
            <div className='w-full h-[250px] overflow-hidden rounded bg-red-200'>
              <Image src={item.imgUrl} alt='' width={800} height={250} className="w-full h-full object-cover" />
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
              <label className='w-full mb-1 block font-medium' htmlFor="">Banner Image</label>
              <input type="file" name="banner" className='mb-3' onChange={handleChange} />
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

export default Banner