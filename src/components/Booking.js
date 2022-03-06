/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Date from "../styled/Date";
import styled from "styled-components";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  flex-direction: column;
  font-family:${props => props.theme.fam.renner};
  width: 100vw;
  background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url("./imgs/HP Sunsetlakeview/HP Sunsetlakeview/Mainhouse/Mainhouse.jpg");

  color: #ffffff;
  background-size: cover;
  @media(min-width:568px){
    height:auto;
    padding:5% 0;
  }
  @media(min-width:768px){
    height:100vh;
    padding:0;
  }
  @media(min-width:992px){
    flex-direction:row;
    justify-content:space-evenly;
  }
  h1{
    color:#ffffff;
    z-index:2;
    position:relative;
    text-transform:capitalize;
    text-align:left;
    font-size:25px;
  }
  img {
    width: 90%;
    margin-bottom: 20px;
    border-radius: 10px;
    border:3px solid #ffffff;
  }
  input {
    height: 40px;
    margin-bottom: 30px;
  }
  .inner{
    width:60%;
    @media(min-width:992px){
    img{
      width:100%;
      margin-bottom:0;
    }
    
  }
  }
  .form{
    @media(min-width:992px){
    width:35%;
    max-width:300px;
    
  }
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .form {
    position: relative;
    border:3px solid #ffffff;
    border-radius:15px;
    .blur {
      filter: drop-shadow(0px 16px 24px rgba(17, 37, 62, 0.16));
      backdrop-filter: blur(20px);
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      background: #ffffff59;
      border-radius: 10px;
    }
    .form-inner {
      z-index: 2;
      position: relative;
      padding: 5%;
      text-align: left;
    }
  }
  .people{
    display:flex;
    .people-inner{
      width:50%;
      display:flex;
      justify-content:flex-start;
      flex-wrap:wrap;
      label{
        width:100%;
      }
      .icon{
        width:30%;
        margin-right:20px;
        svg{
          margin:0 auto;
          width:40px;
          height:40px;
          color:${props => props.theme.color.green};
        }
      }
    }
  }
  .nameprize{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5% 5% 0;
    span{
      position:relative;
      color:#ffffff;
      z-index:2;
      font-size:20px;
    }
  }
  .total{
    margin-top:20px;
    span{
      font-size:20px;
    }
  }
`;

function Booking({room}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [guests, setGuests] = useState(kids + adults);
  const [kidsage, setKidsage] = useState(false);

  if (adults < 0) {
    setAdults(0);
  }
  if (kids < 0) {
    setKids(0);
  }
  // if (kids > 0) {
  //   setKidsage(true);
  // }
  const Total = () =>{
    setGuests(kids + adults)
  }
  
  
  // if (kidsage === -1) {
  //   setKidsage(0);
  // } else if (kidsage === 18) {
  //   setKidsage(17);
  // }

  //  const {roomName, subtitle, desc,descr_one,price, slug, images, view, bedType} = room;
  //   const [mainImg, ...defaultImg] = images;
  return (
    <Wrapper>
      <div className="inner">
        <img src="./imgs/besttwo.png" alt="" />
      </div>
      <div className="form">
        <div className="nameprize">
          <h1>room name</h1>
          <span>$100</span>
          </div>
        
        <div className="blur"></div>
        <div className="form-inner">
          <form action="">
            <Date
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            <div className="people">
              <div className="people-inner">
                <label htmlFor="">Adults <span onChange={Total}>{adults}</span></label>
                <div className="icon" onClick={() => setAdults(adults - 1)}>
                  <BiMinusCircle />
                </div>
                <div className="icon" onClick={() => setAdults(adults + 1)}>
                  <BiPlusCircle />
                </div>
              </div>
              <div className="people-inner">
                <label htmlFor="" >Kids <span onChange={Total}>{kids}</span></label>
                <div className="icon" onClick={() => setKids(kids - 1)}>
                  <BiMinusCircle />
                </div>
                <div className="icon" onClick={() => setKids(kids + 1)}>
                  <BiPlusCircle />
                </div>
              </div>
            </div>
            <div className="total">
            <span> Total Guests: {guests}</span>
              </div>
          </form>
        </div>
      </div>

      {/*
       */}

      {/* <div className={kidsage ? '' : ''}>

  <label htmlFor="">Age</label>
  <div className="inner">
    <div className="icon">
      <BiMinusCircle />
    </div>
    
   <span></span>
    <div className="icon">
      <BsPlusCircle />
    </div>
  </div>

</div> */}

      
    </Wrapper>
  );
}

export default Booking;
