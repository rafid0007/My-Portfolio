import React from "react";
import Slider from "react-slick";
import Head from "next/head";

const CustomCarousel = ({items}) => {
  const settings = {
    autoplay: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <>
        <Head>
          <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <div>
          <Slider {...settings}>
            {
              items.map(item => item)
            }
          </Slider>
        </div>
      </>
  );
}

export default CustomCarousel;