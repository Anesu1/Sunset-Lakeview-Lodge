/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { createSecretToken, createBookingRequest } from "./../api/api";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.section`
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

const CheckoutForm = (props) => {
  const stripeObj = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    const payload = await stripeObj.confirmPayment({
      elements: elements,
      redirect: "if_required",
    });

    if (payload.error) {
      console.log(payload.error);
    } else {
      const { room, amount } = props.state.current;

      const payload = {
        data: {
          room: room.id,
          checkIn: room.checkIn,
          checkOut: room.checkOut,
        },
      };
      await createBookingRequest(payload);
    }
  };

  return (
    <Wrapper className="my-form">
      <form onSubmit={handleSubmit}>
        <div className="blur"></div>
        <h1>Book your room : {props.state.current.room.roomName}</h1>
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

        <button type="submit" disabled={!stripeObj || !elements}>
          Pay Now
        </button>
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </form>
    </Wrapper>
  );
};

const publishablekey =
  "pk_test_51KVuGuDrnLGrJMF2iGHdpltwQAQ4calwlB6lTUkZED8Gq8q7gI4vu6I8K4nIL1vnz7tb491KDPKTVxbz6oKG3b0500N6MwQghc";

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
  });

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
