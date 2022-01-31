/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Box from "../styled/Box";
import Fade from 'react-reveal/Fade';

const BannerWrapper = styled.section`
  background:linear-gradient(to bottom, rgba(44, 65, 60, 0.3),rgba(44, 65, 60, 0.3)), url("./imgs/HP Sunsetlakeview/HP Sunsetlakeview/Mainhouse/Mainhouse.jpg");
  background-size:cover;
  height:100vh;
  display:flex;
  align-items:left;
  justify-content:center;
  position:relative;
  flex-direction:column;
  padding:5%;
  @media(min-width:768px){
    height:660px;
  }
  @media(min-width:1200px){
    height:100vh;
  }
  h1{
    font-size:50px;
    line-height:1.3;
    color:#ffffff;
    font-family:${props => props.theme.fam.oswald};
    margin:15px 0;
    margin-top: 50px;
    @media(min-width:768px){
      font-size:80px;
      margin-top:15px;
    }
  }
  a{
    color:#ffffff;
    font-family:${props => props.theme.renner};
    font-size:20px;
    text-decoration:none;
    position:relative;
    padding-bottom:5px;
    width:max-content;
    &:before{
      position:absolute;
      content:"";
      background:#ffffff;
      height:2px;
      width:100%;
      bottom:0;
      left:0;
    }
  }
  .box{
    margin-top:50px;
    @media(min-width:768px){
      max-width:400px;
      position:absolute;
      right:5%;
      bottom:-13%;
    }
    @media(min-width:992px){
      padding:20px;
    }
  }
`;

function Banner() {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <BannerWrapper style={{ transform:`transformY(${offsetY * 0.2}px)`}}>
      <Fade bottom>
        <h1>Discover the <br /> Touch of Nature</h1></Fade>
      <a href="#" >Find out more</a>
      
      <Box  small="place" text="Our Lodge is an ultimate boutique facility and is located high up on the peninsula Micapoint between the dam of the lake Kariba and the center of Kariba Village next over the western part of the Nationalpark."/>
    </BannerWrapper>
  );
}

export default Banner;
