import React from 'react'
import cutting from "./cuting.json"
import cutting1 from "./cutting1.json"
import Paper from "./Paper.json"
function Cutting() {
  return (
    <>
    <div className='flex gap-3 justify-center flex-wrap mt-8'>
    {cutting.map((data) => (

<div className='w-[20%]' key={data.id}><img  className=" w-[100%] "  src={data.pic} alt="" /></div>
))} 
</div>

<div className='flex gap-3 justify-center flex-wrap mt-20'>
    {cutting1.map((data) => (

<div className='w-[20%]' key={data.id}><img  className=" w-[100%] "  src={data.pic} alt="" /></div>
))} 
</div>


<div className='flex gap-3 justify-center flex-wrap mt-20 ml-16 mr-12'>
    {Paper.map((data) => (

<div className='w-[30%]' key={data.id}><img  className=" w-[100%] "  src={data.pic} alt="" /></div>
))} 
</div>




    </>
  )
}

export default Cutting