import React from "react";
import Paragraph from "../../styled/Paragraph";
import styled from 'styled-components';

const WrapperBook = styled.section`
  padding:5%;
  @media(min-width:768px){
    padding:0 5%;
  }
  .book{
    width:90%;
    margin:0 auto;
    box-shadow:0 4px 20px #f4f4f4;
    background:#ffffff;
    transform:translateY(-70px);
    padding:5%;
    @media(min-width:992px){
      display:flex;
      justify-content:space-between;
      position:relative;
    &:before{
      position:absolute;
      height:80%;
      width:1px;
      background:#000;
      content:"";
      left:65%;
      top:50%;
      transform:translateY(-50%);
    }
    }
  }
  .book-inner{
    text-align:center;
    @media(min-width:992px){
      text-align:left;
      width:60%;
      h3{
        font-size:30px;
      }
    }
        
  
  }
  .icon-inner{
    margin-bottom:30px;
    @media(min-width:992px){
      margin;0;
      text-align:center;
    }
    img{
      width:90px;
    }
  }
  .book-item{
    text-align:center;
    @media(min-width:992px){
      width:30%;
      margin:auto 0 auto auto;
    }
    h3{
      font-family:${props => props.theme.fam.cera};
      font-size:60px;
      margin:20px 0;
      font-weight:900;
     
    }
    p{
      font-family:${props => props.theme.fam.cera};
      color:${props => props.theme.color.orange};
      text-transform:uppercase;
      font-size:20px;
    }
    button{
      width:100%;
      border:none;
      font-family:${props => props.theme.fam.oswald};
      height:50px;
      font-size:20px;
      text-transform:uppercase;
      background:${props => props.theme.color.green};
      color:${props => props.theme.color.orange};
    }
  }
  .icons{
    @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      max-width:500px;
      margin:0 auto;
      align-items:flex-end;
    }
  }
`

function BookNow() {
  return (
    <WrapperBook>
      <div className="book">
      <div className="book-inner">
        <h3>
          Great choice for a relaxing vacation for families with children or a
          group of friends.
        </h3>
        <Paragraph>
          Our comfortable Executive rooms is just the right size if you are
          travelling with your partner. Similar to all other rooms in the lodge,
          the Executive is fully equipped with all comforts.
        </Paragraph>
        <Paragraph>
          In addition to the lounge the room is equipped with exciting
          amenities. The rooms offers all the space and comforts your need
          during your stay in our lodge.
        </Paragraph>
        <div className="icons">
            <div className="icon-inner">
                <img src="./imgs/icon_bed 1.png" alt="" />
                <p>King Sized Bed</p>
            </div>
            <div className="icon-inner">
                <img src="./imgs/icon_people 1.png" alt="" />
                <p>2 Adults</p>
            </div>
            <div className="icon-inner">
                <img src="./imgs/icon_view 1.png" alt="" />
                <p>Lake view and sunset</p>
            </div>
        </div>
      </div>
      <div className="book-item">
          <p>starting from</p>
          <h3>$250</h3>
          <button>Book Now</button>
      </div>
      </div>
     
    </WrapperBook>
  );
}

export default BookNow;
