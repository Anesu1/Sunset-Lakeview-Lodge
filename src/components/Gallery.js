import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io'
import gallerya from '../images/gallery/gallery (1).jpg'
import galleryb from '../images/gallery/gallery (2).jpg'
import galleryc from '../images/gallery/gallery (3).jpg'
import galleryd from '../images/gallery/gallery (4).jpg'
import gallerye from '../images/gallery/gallery (5).jpg'
import galleryf from '../images/gallery/gallery (6).jpg'
import galleryg from '../images/gallery/gallery (7).jpg'
import galleryh from '../images/gallery/gallery (8).jpg'
import galleryi from '../images/gallery/gallery (9).jpg'

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

function Gallery() {
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
    <GalleryWrapper>
      <Slider {...settings}>
        <img src={gallerya} alt="" />
        <img src={galleryb} alt="" />
        <img src={galleryc} alt="" />
        <img src={galleryd} alt="" />
        <img src={gallerye} alt="" />
        <img src={galleryf} alt="" />
        <img src={galleryg} alt="" />
        <img src={galleryh} alt="" />
        <img src={galleryi} alt="" />
      </Slider>
    </GalleryWrapper>
  );
}

export default Gallery;
