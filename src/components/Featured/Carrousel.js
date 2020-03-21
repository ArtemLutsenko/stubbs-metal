import React from "react";
import Slider from "react-slick";
import slide_one from "../../assets/carrousel1.jpg";
import './Carrousel.scss'

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    arrows: false
  };
  return (
    <div className="carrousel_wrapper" style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${slide_one})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${slide_one})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${slide_one})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${slide_one})`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
