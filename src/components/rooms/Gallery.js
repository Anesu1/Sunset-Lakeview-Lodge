import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io'

const GalleryWrapper = styled.section`
  overflow: hidden;
  /* display:none;
  @media(min-width:768px){
    display:block;
  } */
  img {
    height: 300px;
    @media(min-width:768px){
        height:500px;
    }
  }
  .slick-slider{
    .slick-prev{
    left:3%;
    z-index:99;
    color:#ffffffa7;
    height:50px;
    width:50px;
    transition:all 0.3s ease-in-out;
    transform:scale(0.8);
    &:hover{
      transform:translate(1px,-1px);
      color:#ffffff;
    }
  }
  .slick-next{
    right:3%;
    z-index:99;
    color:#ffffffa7;
    height:50px;
    width:50px;
    transition:all 0.3s ease-in-out;
    transform:scale(0.8);
    &:hover{
      transform:translate(1px,-1px);
      color:#ffffff;
    }
  }
  }
  
`;

function Gallery({children}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrow:true,
    slidesToShow: 1,
    autoplay: false,
    centerMode: true,
    variableWidth: true,
    nextArrow:<IoIosArrowDroprightCircle />,
    prevArrow:<IoIosArrowDropleftCircle />
  };
  return (
    <GalleryWrapper id="gallery">
      <Slider {...settings}>
        {children}
      </Slider>
    </GalleryWrapper>
  );
}

export default Gallery;
