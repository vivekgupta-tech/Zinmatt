import React from "react";
import cslider from './cslider.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function New_Released() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", zIndex: 2 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", zIndex: 2 }}
        onClick={onClick}
      />
    );
  }
  const autoplay = true;

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay,
    slidesToShow:4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
    <div className="ml-12 mr-12">
      <Slider {...settings} className="ml-10 mr-10">
        {cslider.map((data) => (
          <div key={data.id}>
            <div
              key={data.id}
              className="  w-[90%]  ml-4 mr-2 rounded-lg mt-10 mb-12"
            >
              <img
                src={data.pic}
                alt=""
                className=" w-[100%] rounded-lg slide"
              />
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </>
  );
}

export default New_Released;
