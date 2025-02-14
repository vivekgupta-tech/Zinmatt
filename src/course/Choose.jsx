import React from 'react'
import Chs from "../assets/chs.png"
import Chss from "../assets/chss.png"
import Choos from "./Choose.json"
function Choose() {
  return (
    <>
    <div className='h-[45vh] w-[100%]   flex gap-5 justify-center'>
    <div className='h-[100%] w-[50%] rounded-lg  shad'> <img className=' ml-4 mt-3 h-20 w-36' src={Chs} alt="" />
                <p className=' choose ml-3  mt-2.5  text-3xl font-serif'>Why Choose Us</p>
                <p className='ml-3 mt-2.5 text-gray-500'>At Zinmatt, we offer expert-led digital marketing training, real-world projects, and personalized support to help you succeed in the digital space.</p>
                <button className='p-2 shadow-lg w-[28] border-1 mt-6 ml-3 text-white bg rounded font-semibold  shade'>Explore Course</button>
        </div>


        <div className='h-[100%] w-[23%] rounded-lg  shad'>
        <img src={Chss} className='ml-4 mt-3 h-14 w-14' alt="" />
                <p className=' text-3xl choose underline ml-2.5 '>Flexible Learning</p>
                <p className='ml-2.5 mt-2.5 text-gray-500'>Learn at your own pace with Zinmatt's flexible online courses. Access lessons anytime, anywhere, and tailor your learning experience to fit your schedule.</p>
        </div>
    </div>
    <div className='flex gap-5 justify-center mt-10'>
    {Choos.map((data) => (
 
    <div key={data.id} className='h-[47vh] w-[23%] rounded-lg shad'>
        <img src={data.pic} className='ml-4 mt-3 h-14 w-14' alt="" />
                <p className=' text-3xl choose underline ml-2.5 '>{data.fdevelop}</p>
                <p className='ml-2.5 mt-2.5 text-gray-500 justify-center '>{data.para}</p>
        </div>
        ))} 
          </div>
    </>
  )
}

export default Choose