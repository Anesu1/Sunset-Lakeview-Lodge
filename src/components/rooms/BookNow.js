import React from "react";
import Paragraph from "../../styled/Paragraph";
import styled from 'styled-components';
import iconbed from '../../images/icon_bed 1.png'
import iconpeople from '../../images/icon_people 1.png'
import iconview from '../../images/icon_view 1.png'
import Modal from 'react-modal';
import { useState } from "react";
import Date from "../../styled/Date";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";



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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Modal.setAppElement('#yourAppElement');



function BookNow({roomName, description, descriptionone, price, view, bedType, adults, room}) {
  const {slug} = room;
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [adult, setAdult] = useState(0);
  const [kids, setKids] = useState(0);
  const [guests, setGuests] = useState(kids + adult);
  const [kidsage, setKidsage] = useState(false);

  if (adult < 0) {
    setAdult(0);
  }
  if (kids < 0) {
    setKids(0);
  }
  // if (kids > 0) {
  //   setKidsage(true);
  // }
  const Total = () =>{
    setGuests(kids + adult)
  }
  
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
         <button onClick={openModal}>Book Now</button>
      </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example"
      >
        <AiOutlineCloseCircle onClick={closeModal} />
        
        <div className="form" id="form">
        <div className="nameprize">
          <h1>{roomName}</h1>
          <span>${price}</span>
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
                <label htmlFor="">Adults <span onChange={Total}>{adult}</span></label>
                <div className="icon" onClick={() => setAdult(adult - 1)}>
                  <BiMinusCircle />
                </div>
                <div className="icon" onClick={() => setAdult(adult + 1)}>
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
          </form> <button className="but">Proceed</button>
        </div>
      </div>
     
      </Modal>
    </WrapperBook>
  );
}

export default BookNow;
