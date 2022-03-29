/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Paragraph from "../../styled/Paragraph";
import styled from "styled-components";
import iconbed from "../../images/icon_bed 1.png";
import iconpeople from "../../images/icon_people 1.png";
import iconview from "../../images/icon_view 1.png";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import moment from "moment";
import Date from "../../styled/Date";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { checkRoomAvailability } from "../../api/api";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { SpinningCircles } from "react-loading-icons";
import { useHistory } from "react-router-dom";
import { KeyboardReturn } from "@material-ui/icons";

const WrapperBook = styled.section`
  padding: 5%;
  @media (min-width: 768px) {
    padding: 0 5%;
  }
  .book {
    width: 90%;
    margin: 0 auto;
    box-shadow: 0 4px 20px #f4f4f4;
    background: #ffffff;
    transform: translateY(-70px);
    padding: 5%;
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      position: relative;
      &:before {
        position: absolute;
        height: 80%;
        width: 1px;
        background: #000;
        content: "";
        left: 65%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .book-inner {
    text-align: center;
    @media (min-width: 992px) {
      text-align: left;
      width: 60%;
      h3 {
        font-size: 30px;
      }
    }
  }
  .icon-inner {
    margin-bottom: 30px;
    @media (min-width: 992px) {
      margin: 0;
      text-align: center;
    }
    img {
      width: 70px;
    }
  }
  .book-item {
    text-align: center;
    @media (min-width: 992px) {
      width: 30%;
      margin: auto 0 auto auto;
    }
    h3 {
      font-family: ${(props) => props.theme.fam.cera};
      font-size: 60px;
      margin: 20px 0;
      font-weight: 900;
    }
    p {
      font-family: ${(props) => props.theme.fam.cera};
      color: ${(props) => props.theme.color.orange};
      text-transform: uppercase;
      font-size: 20px;
    }
  }
  button {
    width: 100%;
    border: none;
    font-family: ${(props) => props.theme.fam.oswald};
    height: 50px;
    font-size: 20px;
    text-transform: uppercase;
    background: ${(props) => props.theme.color.green};
    color: ${(props) => props.theme.color.orange};
  }
  .icons {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      max-width: 500px;
      margin: 0 auto;
      align-items: flex-end;
    }
  }
`;

const FormWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to bottom,
      rgba(44, 65, 60, 0.3),
      rgba(44, 65, 60, 0.3)
    ),
    url("./imgs/HP Sunsetlakeview/HP Sunsetlakeview/Mainhouse/Mainhouse.jpg");
  background-size: cover;

  form {
    max-width: 400px;
    background: #ffffffa2;
    box-shadow: 0px 3px 11px #00000037;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    position: relative;
    .blur {
      filter: drop-shadow(0px 16px 24px rgba(17, 37, 62, 0.16));
      backdrop-filter: blur(20px);
      z-index: -1;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #ffffff59;
      border-radius: 10px;
    }
  }
  h1 {
    color: #32325d;
    font-weight: 400;
    line-height: 50px;
    font-size: 40px;
    margin: 20px 0;
    padding: 0;
  }

  .Checkout {
    margin: 0 auto;
    max-width: 800px;
    box-sizing: border-box;
    padding: 0 5px;
  }

  button {
    white-space: nowrap;
    border: 0;
    outline: 0;
    display: inline-block;
    height: 40px;
    margin-right: 20px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    background-color: ${(props) => props.theme.color.green};
    text-decoration: none;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    margin-top: 10px;
  }

  form {
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 3px solid #e6ebf1;
  }

  button:hover {
    color: #fff;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.orange};
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
  }

  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement('#ele');

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

function BookNow({
  roomName,
  description,
  descriptionone,
  price,
  view,
  bedType,
  adults,
  room,
}) {
  const { id } = room;

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalCheckout, setModalCheckOut] = React.useState(false);
  const history = useHistory();

  function openModal() {
    setIsOpen(true);
  }
  function openModalCheckOut() {
    setModalCheckOut(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setClicked(false);
  }
  function closeCheckModal() {
    setModalCheckOut(false);
  }
  const [startDate, setStartDate] = useState(moment().toDate());
  const [endDate, setEndDate] = useState();
  const [adult, setAdult] = useState(0);
  const [kids, setKids] = useState(0);
  const [guests, setGuests] = useState(kids + adult);
  const [kidsage, setKidsage] = useState(false);
  const [isAvailable, setIsAvailable] = useState(undefined);
  const [totalAmout, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const cIn = moment(startDate);
  const cOut = moment(endDate);
  const days = moment.duration(cOut.diff(cIn)).asDays();

  if (adult < 0) {
    setAdult(0);
  }
  if (adult > 4) {
    setAdult(4);
  }
  if (kids < 0) {
    setKids(0);
  }
  // if (kids > 0) {
  //   setKidsage(true);
  // }
  const Total = () => {
    setGuests(kids + adult);
  };

  const TotalAmount = (days, price) => {
    let total = 0;
    if (days == null || days === undefined) {
      total = price + kids * 35;
      setTotalAmount(Math.ceil(total));
      return;
    }
    total = price + kids * 35;
    total = total + days * price;
    setTotalAmount(Math.ceil(total));
  };

  function formatDate(date) {
    return moment(date).format("yyyy-MM-DD").toString();
  }

  // call this method when the proceed button is pressed
  const proceed = async () => {
    // Slug should be the room id;
    const checkIn = formatDate(startDate);
    const checkOut = formatDate(endDate);
    setClicked(true);
    const available = await checkRoomAvailability(checkIn, checkOut, id);
    setIsAvailable(available);

    // @TODO: Add more fields @High
    const state = {
      amount: totalAmout,
      room: {
        roomName,
        price,
        id,
        checkIn,
        checkOut,
      },
    };

    if (isAvailable) {
      setClicked(false);
      history.replace("/checkout", state);
    }
    //  Available variable should be true or false

    // if false, the client should be shown a message that the room is not available for booking (already booked)
    // if true, proceed to the checkout page passing in the total amout to the checkiut page as a parameter
  };

  function calculateTotal() {
    let total = 0;
    if (kids !== 0) {
      total = total + (price + kids * 35);
    }
    total = total + days * price;
    setTotalAmount(total.toFixed(2));
  }
  useEffect(() => {
    calculateTotal();
  });

  const handleClick = () => {};
  return (
    <WrapperBook id="details">
      <div className="book">
        <div className="book-inner">
          <h3>
            Great choice for a relaxing vacation for families with children or a
            group of friends.
          </h3>
          <Paragraph>{description}</Paragraph>
          <Paragraph>{descriptionone}</Paragraph>
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
        ariaHideApp={false}
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
                calculateTotal={calculateTotal}
              />
              <div className="people">
                <div className="people-inner">
                  <label htmlFor="">
                    Adults <span onChange={Total}>{adult}</span>
                  </label>
                  <div className="icon" onClick={() => setAdult(adult - 1)}>
                    <BiMinusCircle />
                  </div>
                  <div className="icon" onClick={() => setAdult(adult + 1)}>
                    <BiPlusCircle />
                  </div>
                </div>
                <div className="people-inner">
                  <label htmlFor="">
                    Kids <span onChange={Total}>{kids}</span>
                  </label>
                  <div
                    className="icon"
                    onClick={() => {
                      setKids(kids - 1);
                      calculateTotal();
                    }}
                  >
                    <BiMinusCircle />
                  </div>
                  <div
                    className="icon"
                    onClick={() => {
                      setKids(kids + 1);
                      calculateTotal();
                    }}
                  >
                    <BiPlusCircle />
                  </div>
                </div>
              </div>
              <div className="total">
                <span> Total Price: ${totalAmout}</span>
              </div>
              <div className="total" style={{ marginBottom: 40 + "px" }}>
                <span style={{ color: "red" }}>
                  {" "}
                  {isAvailable === false && isAvailable !== undefined
                    ? "The Room Is Not Available For Booking at the moment."
                    : ""}
                </span>
              </div>
            </form>{" "}
            <button onClick={proceed} className="but">
              {clicked ? <SpinningCircles /> : `Proceed`}
            </button>
          </div>
        </div>
      </Modal>
    </WrapperBook>
  );
}

export default BookNow;
