import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin:0 auto;
max-width:400px;
margin-bottom:30px;
@media(min-width:768px){
      width:30%;
    }
  .img{
    height:250px;
    width:100%;
    overflow:hidden;
    img{
      width:100%;
      transform:translateY(-20%);
    }
  }
  h3{
    margin:40px 0;
  }
  .qty{
    display:flex;
    justify-content:space-between;
    position:relative;
    margin-bottom:30px;
    &:before{
      content:"";
      position:absolute;
      height:100%;
      width:1px;
      background:#000000;
      left:33.3%;
    }
    &:after{
      content:"";
      position:absolute;
      height:100%;
      width:1px;
      background:#000000;
      left:66.6%;
    }
    .qty-inner{
      width:30%;
      
      p{
        font-family:${props => props.theme.fam.renner};
        line-height:1.3;
      }
     .number{
       font-size:50px;
       margin:0;
       font-weight:900;
       line-height:1;
     }
    }
  }  
  button{
    background:transparent;
    color:#000000;
    border:none;
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:1.3px;
    font-family:${props => props.theme.color.renner};
  }
`

function RoomCards({roomName, imageName, beds, adults, kids, amount}) {
  return (
      <Wrapper>
        <div className="img">
          <img src={imageName} alt="" />
        </div>
        <h3>{roomName}</h3>
        <div className="qty">
          <div className="qty-inner">
            <p className='number'>{beds}</p>
            <p>King Sized <br />Bed</p>
          </div>
          <div className="qty-inner">
            <p className='number'>{adults}</p>
            <p>King Sized <br />Bed</p>
          </div>
          <div className="qty-inner">
            <p className='number'>{kids}</p>
            <p>King Sized <br />Bed</p>
          </div>
        </div>
        <button>Book Now From ${amount}</button>
      </Wrapper>
  );
}

export default RoomCards;
