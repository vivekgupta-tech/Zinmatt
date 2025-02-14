import React from 'react'
import Google from "./img/Google.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import head from "./head.json"

function SlideHead() {
    const autoplay = true;
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay,
    slidesToShow:1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className='w-[85%] h-[86vh]  flex mt-20  ml-20 mr-14 '>
        <div className='w-[60%] mt-24'>
            <h1 className='text-6xl colr font-bold mt-16 ml-5'>We are Best</h1>
              <p className='text-4xl font-bold mt-2.5 ml-5'>In Digital Industry</p>
              <p className='text-sm mt-10 text-gray-500 ml-5 font-semibold'>Discover the Stories Behind Our Glowing Reviews and Testimonials!</p>

              <img className='h-20 w-[60%] mt-12 ml-4' src={Google} alt="" />
        </div>
        <div className=' w-[50%]'>

      <Slider {...settings}>
        {head.map((data) => (
          <div key={data.id}>
            <div className="">
              <img src={data.pic} alt="" className=" w-[100%] "/>
            </div>
          </div>
        ))}
      </Slider>

        </div>
    </div>

    <div>
    </div>
    </>
  )
}

export default SlideHead