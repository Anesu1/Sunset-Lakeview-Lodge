import React from "react";
import Paragraph from "../../styled/Paragraph";
import styled from 'styled-components';
import iconbed from '../../images/icon_bed 1.png'
import iconpeople from '../../images/icon_people 1.png'
import iconview from '../../images/icon_view 1.png'
import {Link} from 'react-router-dom';

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
      width:70px;
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

function BookNow({description, descriptionone, price, view, bedType, adults, room}) {
  const {slug} = room;
  return (
    <WrapperBook id="details">
      <div className="book">
      <div className="book-inner">
        <h3>
       
          Great choice for a relaxing vacation for families with children or a
          group of friends.
        </h3>
        <Paragraph>
          {description}
        </Paragraph>
        <Paragraph>
          {descriptionone}
        </Paragraph>
        <div className="icons">
            <div className="icon-inner">
                <img src={iconbed} alt="" />
                <p>{bedType}</p>
            </div>
            <div className="icon-inner">
                <img src={iconpeople} alt="" />
                <p>{adults} Adults</p>
            </div>
            <div className="icon-inner">
                <img src={iconview} alt="" />
                <p>{view}</p>
            </div>
        </div>
      </div>
      <div className="book-item">
          <p>starting from</p>
          <h3>${price}</h3>
         <Link to={`/rooms/${slug}/booknow`}><button>Book Now</button></Link>
      </div>
      </div>
     
    </WrapperBook>
  );
}

export default BookNow;
