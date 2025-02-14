import React from 'react'
import {Rating } from '@mui/material'
import Syllabus from "../course/Syllabus.json"
import Syllabus1 from "../course/Syllabus1.json"
import Syllabus2 from "../course/Syllabus2.json"
function Cards() {
  return (
    <>
    <p className='text-5xl font-semibold ml-12 mb-8  choose mt-28'>Our Syllabus</p>
    <div  className='flex  gap-3 justify-center ml-16 mr-16 mb-10'>     
      
        {Syllabus.map((data) => (
    <div key={data.id} className='h-[70vh] w-[41vh]  rounded-lg border-1 border-black ml-2'>

 
      <div><img  className=" p-2.5 rounded-2xl  "src={data.pic} alt="" /></div>
      <div className='flex gap-3'>
        <div> <button className='btn  ml-4 w-24 mt-1  border-1 border-black rounded font-semibold'>{data.day}</button></div>

      <div className='text-lg font-semibold ml-5'>{data.fname} <span className='ml-5'>{data.lname}</span></div>
      </div>
      <div ><h1 className='font-bold text-lg ml-2'>{data.fdevelop}<br />{data.ldevelop}</h1>
      <Rating value={5} className='ml-1' name='half-rating' readOnly precision={.5}/>
      <h1 className='text-lg text-gray-500 p-0.5'>{data.para}</h1>
      
      </div>
      </div>

    
  ))} 
  </div>
  <div  className='flex  gap-3 justify-center ml-16 mr-16 mb-10'>     
        {Syllabus1.map((data) => (
    <div key={data.id} className='h-[70vh] w-[41vh]  rounded-lg border-1 border-black ml-2'>

 
      <div><img  className=" p-2.5 rounded-2xl  "src={data.pic} alt="" /></div>
      <div className='flex gap-3'>
        <div> <button className='btn  ml-4 w-24 mt-1  border-1 border-black rounded font-semibold'>{data.day}</button></div>

      <div className='text-lg font-semibold ml-5'>{data.fname} <span className='ml-5'>{data.lname}</span></div>
      </div>
      <div ><h1 className='font-bold text-lg ml-2'>{data.fdevelop}<br />{data.ldevelop}</h1>
      <Rating value={5} className='ml-1' name='half-rating' readOnly precision={.5}/>
      <h1 className='text-lg text-gray-500 p-0.5'>{data.para}</h1>
      
      </div>
      </div>

    
  ))} 
  </div>


  <div  className='flex  gap-3 justify-center ml-16 mr-16 mb-10'>     
        {Syllabus2.map((data) => (
    <div key={data.id} className='h-[70vh] w-[41vh]  rounded-lg border-1 border-black ml-2'>

 
      <div><img  className=" p-2.5 rounded-2xl  "src={data.pic} alt="" /></div>
      <div className='flex gap-3'>
        <div> <button className='btn  ml-4 w-24 mt-1  border-1 border-black rounded font-semibold'>{data.day}</button></div>

      <div className='text-lg font-semibold ml-5'>{data.fname} <span className='ml-5'>{data.lname}</span></div>
      </div>
      <div ><h1 className='font-bold text-lg ml-2'>{data.fdevelop}<br />{data.ldevelop}</h1>
      <Rating value={5} className='ml-1' name='half-rating' readOnly precision={.5}/>
      <h1 className='text-lg text-gray-500 p-0.5'>{data.para}</h1>
      
      </div>
      </div>

    
  ))} 
  </div>


  
    </>
    
    
  )
}

export default Cards