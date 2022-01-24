import React from "react";
import styled from "styled-components";
import Card from "../styled/Card";
import Slider from "react-slick";

const CardsWrapper = styled.section`
  overflow: hidden;
  height: 650px;
  max-width:350px;
  margin:0 auto;
  @media(min-width:768px){
    max-width:unset;
    .slick-track{
      display:flex;
      justify-content:space-between;
      
    }
  }
  @media(min-width:992px){
    height:450px;
    .slick-track{
      .slick-slide{
        width:24.5% !important;
        overflow:hidden;
        &:not(:last-child) {
    margin-right: 10px;
}
      }
    }
  }
  .slick-slider .slick-dots li button:before {
    font-size: 50px !important;
    background: black;
    border-radius: 10px;
    position: relative;
    z-index: 5;
    content: "" !important;
    height: 23px;
    width: 23px;
    background: black;
  }
  .slick-slider {
   
    .slick-dots {
      
      bottom:-55px;
      li {
        background-color: ${props => props.theme.color.green};
        border-radius: 26px;
        transition: 0.7s;
        height:20px;
      }
      .slick-active{
        background:${props => props.theme.color.orange};
        width:50px;
      }
    }
  }
`;

function Cards() {
  const settings = {
    unslick: true,
    slidesToShow: 4,
    responsive: [
      {breakpoint: 992,
        settings: {
          slidesToShow: 2,
          unslick: false,
           dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          unslick: false,
          dots: true,
          //   slidesToShow:1,
          //            dots: true,
          // infinite: true,
          // speed: 500,
          // fade: false,
          // autoplay: true,
          // autoplaySpeed: 5000,
          // slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CardsWrapper>
      <Slider {...settings}>
        <Card imgUrl="cardone.png" title="BreakFast" link />
        <Card imgUrl="cardtwo.png" title="Activities" link />
        <Card imgUrl="cardthree.png" title="Housekeeping" link />
        <Card imgUrl="cardfour.png" title="Lounge" link />
      </Slider>
    </CardsWrapper>
  );
}

export default Cards;
