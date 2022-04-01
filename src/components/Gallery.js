import React from "react";
import styled from "styled-components";

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
import animal1 from '../images/animal (1).jpg'
import animal2 from '../images/animal (2).jpg'
import animal3 from '../images/animal (3).JPG'
import animal4 from '../images/animal (4).jpg'
import animal5 from '../images/animal (5).jpg'
import animal6 from '../images/animal (6).jpg'
import animal7 from '../images/animal (7).JPG'
import animal8 from '../images/animal (8).jpg'
import animal9 from '../images/animal (9).jpg'
import animal10 from '../images/animal (10).jpg'
import animal11 from '../images/animal (11).jpg'
import animal12 from '../images/animal (12).jpg'
import animal13 from '../images/animal (13).jpg'
import pool from '../images/HP Sunsetlakeview/HP Sunsetlakeview/Pool/Pool1.jpg';
import pool1 from '../images/HP Sunsetlakeview/HP Sunsetlakeview/Pool/Pool3.jpg';
import Slider from "react-slick";

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
        
        <img src={galleryb} alt="" />
        <img src={galleryi} alt="" />
        <img src={animal1} alt="" />
        <img src={animal4} alt="" />
        <img src={animal2} alt="" />
        <img src={galleryd} alt="" />
        <img src={animal10} alt="" />
        <img src={galleryf} alt="" />
        <img src="./imgs/gall (2).jpeg" alt="" />
        <img src="./imgs/gall (9).jpeg" alt="" />
        <img src={galleryg} alt="" />
        <img src={galleryh} alt="" />
        <img src={animal3} alt="" />
        <img src={animal5} alt="" />
        <img src={galleryc} alt="" />
        <img src={animal6} alt="" />
        <img src={animal7} alt="" /> 
        <img src={animal9} alt="" />
        <img src={gallerye} alt="" />
        <img src={animal7} alt="" />
        <img src={pool} alt="" />
        <img src="./imgs/gall (13).jpeg" alt="" />
        <img src="./imgs/gall (8).jpeg" alt="" />
        <img src={gallerya} alt="" />
        <img src={pool1} alt="" />
        <img src={animal8} alt="" />
        <img src={animal11} alt="" />
        <img src={animal12} alt="" />
        <img src={animal13} alt="" />
        <img src="./imgs/gall (3).jpeg" alt="" />
        <img src="./imgs/gall (14).jpeg" alt="" />
      </Slider>
    </GalleryWrapper>
  );
}

export default Gallery;
