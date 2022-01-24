import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RoomWrapper = styled.div`
    background:url("./imgs/${props => props.imgBg}");
    background-size:cover;
    width:100%;
    position:relative;
    transition:all 500ms ease-in-out;
    height:400px;
    @media(min-width:768px){
      width:50%;
      height:500px;
  }
  @media(min-width:1200px){
      height:650px;
  }
    .top-text{
        padding:10%;
    }
    a{
        position:absolute;
        bottom:10%;
        left:10%;
        transform:translateX(0px);
        text-decoration:none;
        color:#ffffff;
        font-family:${props => props.theme.fam.renner};
        font-size:20px;
        
        @media(min-width:768px){
            opacity:0;
            transform:translateX(50px);
            transition:all 500ms ease;
            font-size:30px;
        }
    }
    
  
   

  &:hover{
      background:url("./imgs/${props => props.onHoverImg}");
      background-size:cover;
      a{
          transform:translateX(0);
          opacity:1;
      }
  }
  
  .split {
  width: 750px;
  height: 468px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 400px;
  cursor: pointer;

  &:before {
    content: 'CLICK';
    color: #777;
    letter-spacing: 1px;
    font-size: 10px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%);
  }

  img {
    height: auto;
    width: 100%;
    opacity: 0;
  }

  div {
    position: absolute;
    z-index: 1;
    background-repeat: no-repeat;
    transform: rotateY(-50deg) scale(0.5);
    opacity: 0;
    transform-origin: bottom;
    transition: all .6s cubic-bezier(.71, .05, .09, .91);
  }

  &.active {
    div {
      opacity: 1;
      transform: rotate(0deg) translateY(0);
    }
  }
}
.top-text{
    p{
        font-family:${props => props.theme.fam.renner};
        color:#ffffff;
        font-size:15px;
        margin-bottom:5px;

    }
    h3{
        font-family:${props => props.theme.fam.renner};
        color:#ffffff;
        font-size:35px;
        margin:0;
        @media(min-width:992px){
            font-size:60px;
        }
    }
}

`

  

function Room({amount, roomName, link, imgBg, onHoverImg}) {
    return (
        <RoomWrapper imgBg={imgBg} onHoverImg={onHoverImg} className='room-inner'>
            <div className="top-text">
                <p>From: ${amount} per night</p>
                <h3>{roomName}</h3>
            </div>
            <Link to={link}>Book Now</Link>
            <div class="glow-wrap">
    <i class="glow"></i>
  </div>
        </RoomWrapper>
    )
}

















  
//   h1{
//     position: absolute;
//     z-index: 1;
//     transform: translate(-25%, -65%);
//     font-family: 'Montserrat', sans-serif;
//     margin: 0;
//     line-height: 1.2;
//   }
  
  
//   /* Ends */
  



export default Room
