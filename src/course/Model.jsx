import React from 'react'
import arrow from "../assets/Arrow.png"
import Teacher from "../assets/hero-banner.png"
import { FaCirclePlay } from "react-icons/fa6";
import Sticker from '../assets/sticker.png'

function Model() {
  return (
    <>
<div className='  back h-[95vh] w-[100%] flex pl-14'>
<div><h1 className='text-6xl font-bold mt-12 '>We've amazing  <br/><p className='mt-4'>Skills for</p><br />
    <span className='col underline '><p className='-mt-9'>Teaching </p></span></h1>
    <p className='text-gray-500 mt-8'>At Zinmatt, we’ve mastered the skills to teach digital <br />
     marketing effectively, empowering you with the tools <br />and knowledge needed for lasting success.</p>
          
    <button className='p-2 w-[28] border-1 mt-14 text-white bg rounded font-semibold'>Explore Course</button>
    <button className='bor p-2 w-[28]  border-1 border-black rounded font-semibold  ml-2'>Download Brochure</button>
    <div className='h-10 w-32 flex mt-9'><img src={Sticker} alt="" /> <span className='text mt-2 ml-4 font-semibold'>5,000+</span><p className='mt-2 ml-1 font-semibold'>Students</p></div>
</div>
  
  <div><button className='flex p-1 w-32 border-1 mt-32 text-white bg rounded font-semibold ml-56' > <FaCirclePlay className='mt-1.5 ml-2' /> <span>Live Courses</span></button>
 <div className=' rot h-[17vh] w-[57vh] mt-40 z-1  relative'><img src={arrow} className='h-[100%] w-[100%]'alt="" />
 </div>
 <button className='flex p-1.5 text-xl border-1 mt-28 text-white bg rounded ml-40 font-bold' >20 Modules</button>
 </div>

<div className='h-[70vh] w-[80vh] absolute ml-[52%]'><img className='h-[100%] w-[130%]' src={Teacher} alt="" />


</div>
</div>

<div className='w-[100%] border-1 border-black mb-14 '></div>
    </>
  )
}

export default Model