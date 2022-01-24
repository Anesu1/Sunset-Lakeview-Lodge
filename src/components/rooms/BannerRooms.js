import React from 'react';
import { Link } from 'react-router-dom';
import {TiArrowBack} from 'react-icons/ti';
import styled from 'styled-components';

const WrapperBanner = styled.section`
  height:100vh;
  background:url("./imgs/roomone.png");
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
      text-transform:uppercase;
      text-decoration:none;
      color:#ffffff;
      @media(min-width:768px){
        font-size:15px;
      }
    }
  }
`

function BannerRooms() {
  return (
    <WrapperBanner>
      <Link to="/" className='back'><TiArrowBack /> Home</Link>
      <div className="banner-item">
        <h1>Executive Rooms </h1>
        <p>GREAT FOR BUSINESS TRIP</p>
      </div>
      <div className="links">
        <Link to="/">detail</Link>
        <Link to="/">AMENITIES & SERVICES</Link>
        <Link to="/">Gallery</Link>
      </div>
    </WrapperBanner>
  );
}

export default BannerRooms;
