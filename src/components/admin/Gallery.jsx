"use client"

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import del from "@/assets/delete.svg";
import { useRouter } from 'next/navigation';


const Gallery = () => {

  const router = useRouter();
  const [galleryData, setGalleryData] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [galleryForm, setGalleryForm] = useState({
    caption: "",
  });

  const handleChange = (e) => {
    setGalleryForm((prevData) => ({
      ...prevData, caption: e.target.value
    }))
  }
  const handleChange2 = (e) => {
    const img = e.target.files[0];
    setGalleryForm((prevData) => ({
      ...prevData, image: img
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", galleryForm.image);
    formdata.append("caption", galleryForm.caption);

    const result = await axios.post("http://localhost:5000/admin/gallery", formdata);
    setFormActive(!formActive);
  };

  const handleDelete = async (id) => {
    try {
      const deleted = await axios.delete(`http://localhost:5000/admin/gallery/${id}`);
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  }

  const fetchGallery = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/admin/gallery");
      setGalleryData(data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [])

  return (
    <div className='w-full h-full py-8 pt-16 overflow-hidden'>
      <h3 className='text-3xl font-semibold tracking-wide text-center mb-8'>Gallery</h3>
      <div className='flex justify-center'>
        <button onClick={() => setFormActive(!formActive)} className='text-lg py-1.5 px-6 border border-[#aaa] shadow-md mb-6 rounded-md outline-none bg-gradient-to-r from-[#e59a49] to-[#f00f5e] text-white font-medium'>Add Gallery</button>
      </div>
      <div className=' overflow-y-auto overflow-x-hidden h-fit flex gap-8 flex-wrap mb-10 pb-20 px-10'>
        {galleryData && galleryData.map((item, index) => {
          return <div key={index} className='w-[330px] h-[380px] overflow-hidden shadow-2xl relative border border-[#ccc] rounded bg-red-200'>
            <Image src={item.imgUrl} alt={item.caption} width={330} height={380} className="w-full h-full object-cover" />
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
              <label className='w-full mb-1 block font-medium' htmlFor="">Gallery Image</label>
              <input type="file" name="article_img" className='mb-3' onChange={handleChange2} />
              <input type="text" name='caption' placeholder='Enter Image Caption' value={galleryForm.caption} onChange={handleChange} className='w-full px-6 py-1.5 rounded border border-[#ccc] my-3 font-medium outline-none' />

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

export default Gallery