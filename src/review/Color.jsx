import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
function Color() {
  return (
    <>
    <div className='w-[85%] h-[80vh] flex ml-24 mb-20 mr-20 '>
        <div className='w-[50%] h-[100%] clr pl-10 '>
        <h1 className='text-red-500 font-semibold text-2xl mt-24'>ELEVATE</h1>
        <p className='text-white font-semibold text-xl mt-6'>Master the Digital Realm: Unlock Your Potential with Zinmatt Pvt Ltd's Premier Learning Platform!</p>

        <p className='text-white mt-6 '>Discover the art and science of digital marketing with Zinmatt Pvt Ltd. From fundamentals to advanced tactics, our platform provides a rich learning experience tailored to your goals. Gain the skills, insights, and strategies needed to thrive in today’s competitive digital landscape. Start your journey with us today!</p>

        <button className='p-2 w-[20vh] mt-12 text-white bg-green-500 rounded font-semibold'>Get In Touch</button>
        
        </div>
        <div className='w-[50%] h-[100%] clrs  pl-10 '>
        <h1 className='font-bold text-2xl mt-20'>India's most active learning platform</h1>
        <p className=' text-lg mr-2 mt-6'>Empowering India’s Brightest Minds: Experience Unparalleled Growth and Learning on Zinmatt, the Nation’s Leading Active Learning Platform.</p>


        <ul className='mt-10 font-bold text-xl'>
            <li className='flex gap-4 mt-2.5'> <span className='mt-1.5 '><MdAccessTimeFilled /></span><span>Project On Time</span></li>
            <li className='flex gap-4 mt-2.5'> <span className='mt-1.5 '><FaDesktop /></span><span>Modern Technology</span></li>
            <li className='flex gap-4 mt-2.5'> <span className='mt-1.5 '><MdDesignServices /></span><span>Latest Designs</span></li>
            <li className='flex gap-4 mt-2.5'> <span className='mt-1.5 '><FaHandsHelping /></span><span>Hand holding Support</span></li>
        </ul>
        <h1 className='font-bold text-xl mt-4'>This is your last digital marketing platform</h1>
        </div>
        </div>
    

    </>
  )
}

export default Color