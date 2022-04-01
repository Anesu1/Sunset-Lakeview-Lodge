/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { createSecretToken, createBookingRequest } from "./../api/api";
import { FcOk, FcHighPriority } from "react-icons/fc";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { SpinningCircles } from "react-loading-icons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Modal from "react-modal";

const Wrapper = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  padding: 10% 0;
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
    svg {
      height: 100%;
      width: 100%;
    }
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
  .btns {
    display: flex;
    align-items: flex-end;
  }
  .form {
    background: #ffffff;
    padding: 20px;
    input {
      height: 40px;
      width: 100%;
      margin-bottom: 20px;
      border-radius: 7px;
      border: 1px solid #00000026;
      font-family: ${(props) => props.theme.fam.renner};
      &::placeholder {
        color: #000000;
      }
    }
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
const CheckoutForm = (props) => {
  const stripeObj = useStripe();
  const elements = useElements();
  const [clicked, setClicked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [bookStatus, setBookStatus] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalCheckout, setModalCheckOut] = React.useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }

    console.log(address);
    setClicked(true);
    setIsOpen(true);
    const payload = await stripeObj.confirmPayment({
      elements: elements,
      redirect: "if_required",
    });

    if (payload.error) {
      console.log(payload.error);
      setClicked(false);
      setBookStatus(false);
      return;
    }

    const { room, amount } = props.state.current;

    const bookingPayload = {
      data: {
        room: room.id,
        checkIn: room.checkIn,
        checkOut: room.checkOut,
        fullName,
        phoneNumber,
        address,
        email,
      },
    };
    await createBookingRequest(bookingPayload);
    setClicked(false);
    setBookStatus(true);
    openModal();
  };
  setIsOpen(true);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example"
        ariaHideApp={false}
      >
        <div>
          {bookStatus ? (
            <h3>
              successifully Booked {props.state.current.room.roomName} <FcOk />
            </h3>
          ) : (
            <h3>
              Unable to make a booking for {props.state.current.room.roomName}{" "}
              at the moment <FcHighPriority />
            </h3>
          )}
        </div>
      </Modal>
      <Wrapper className="my-form">
        <form onSubmit={handleSubmit}>
          <div className="blur"></div>
          <h1>Book your room : {props.state.current.room.roomName}</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <PhoneInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>

          <PaymentElement
            options={{
              fields: {
                billingDetails: {
                  name: "auto",
                  email: "auto",
                  address: "auto",
                  phone: "auto",
                },
              },
            }}
          />
          <div className="btns">
            <button type="submit" disabled={!stripeObj || !elements}>
              {clicked ? <SpinningCircles /> : "Pay Now"}
            </button>
            <Link to="/" onClick={() => setClicked(false)}>
              <button>Back Home</button>
            </Link>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

const publishablekey =
  "pk_live_51JtbTZCBx8oxjz2RQHKxcRt3IdgUyfGjfMvhD6Tsix61MTrQ5m4IZuSpvbmAirzOtu7iFp6xMpYzGfC597LtFwR600t4aG8HQV";

const stripePromise = loadStripe(publishablekey);

const StripeSection = ({ props }) => {
  const location = useLocation();
  const paramState = useRef();
  const [clientSecret, setClientSecret] = useState("");

  // const state = {
  //   amount: 0,
  //   room: {
  //     roomName,
  //     price,
  // id
  // checkIn,
  // checkOut,
  //   },
  // };

  useEffect(() => {
    paramState.current = location.state;
    createSecretToken({
      amount: paramState.current.amount,
      currency: "usd",
    }).then((secret) => setClientSecret(secret));
  }, [clientSecret, location.state]);

  if (clientSecret === "") {
    return <div></div>;
  }

  return (
    <>
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: clientSecret,
        }}
      >
        <CheckoutForm clientSecret={clientSecret} state={paramState} />
      </Elements>
    </>
  );
};

export default StripeSection;
