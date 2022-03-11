/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {TiArrowBack} from 'react-icons/ti';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const WrapperBanner = styled.section`
  height:100vh;
  background:linear-gradient(to bottom,#33333378,#33333378), url("${props => props.bgImage}");
  background-size:cover;
  position:relative;
  background-position:center center;
  @media(min-width:768px){
    height:660px;
  }
  @media(min-width:1200px){
    height:100vh;
  }
  .back{
    padding: 5%;
    text-decoration: none;
    color: #ffffff;
    align-items:center;
    display: flex;
   
    p{
      font-family:${props => props.theme.fam.cera};
      font-size:15px;
    }
    svg{
      height:30px;
      width:30px;
      margin-right:10px;
    }
  }
  .banner-item{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#ffffff;
    text-align:center;
    width:100%;
    h1{
      font-size:40px;
      font-family:${props => props.theme.fam.cera};
    }
    p{
      font-family:${props => props.theme.fam.renner};
      font-size:20px;
      color:#ffffff;
    }

  }
  .links{
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: max-content;
    transform: translateX(-50%);
    display:flex;
    @media(min-width:992px){
      bottom:20%;
    }
    a{
      display:block;
      padding:20px 7px;
      font-size:13px;
      cursor:pointer;

      transition:all 0.7s ease-in-out;
      text-transform:uppercase;
      text-decoration:none;
      color:#ffffff;
      &:hover{
        color:#cccccce6;
      }
      @media(min-width:768px){
        font-size:15px;
      }
    }
  }
`

function BannerRooms({bgImage, roomName, subtitle}) {
  return (
    <WrapperBanner bgImage={bgImage}>
      <NavLink to="/" className='back'><TiArrowBack /> Home</NavLink>
      <div className="banner-item">
        <h1>{roomName}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="links">
        <Link  to="details"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}>details</Link>
        <Link  to="amenities"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}>AMENITIES & SERVICES</Link>
        <Link  to="gallery"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}>Gallery</Link>
      </div>
    </WrapperBanner>
  );
}

export default BannerRooms;
