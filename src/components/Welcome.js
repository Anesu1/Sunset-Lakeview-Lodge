import React from "react";
import styled from "styled-components";
import Box from "../styled/Box";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";

const WelcomeWrapper = styled.section`
    padding:5%;
    @media(min-width:992px){
      display:flex;
      justify-content:space-between;
      position:relative;
      padding-top:10%;
    }
    h2{
      @media(min-width:992px){
                font-size:30px;
        }
    }
    h1{
        font-family:${props => props.theme.fam.renner};
        font-size:xx-large;
        margin-bottom:0;
        @media(min-width:992px){
      position:absolute;
          bottom:0;
          font-size:70px;
    }
    }
    .box{
        padding:20px 10px;
        @media(min-width:992px){
          padding:20px;
        }
        h2,h3{
            display:none;
        }
    }
    .inner{
      margin:auto;
      @media(min-width:992px){
      width:37%;

    }
    }
    img{
      width:100%;
      display:none;
      @media(min-width:768px){
        display:block;
      }
    }
    .pix{
      position:relative;
      @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        width:100%;
        margin-top:50px;
        img{
          width:47%;
        }
        .welcomeone{
          transform:translateY(-25px);
        }
        .welcometwo{
          transform:translateY(25px);
        }
        .box{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
        }
      }
      @media(min-width:992px){
      width:60%;
    }
    }
`;

function Welcome() {
  return (
    <WelcomeWrapper>
      <div className="inner">
        <Heading>Welcome</Heading>
        <Paragraph>
          Our Lodge is an ultimate boutique facility and is located high up on
          the peninsula Mica point between the dam of the lake Kariba and the
          center of Kariba Village next over the western part of the National
          park.
        </Paragraph>
        <Paragraph>
          Sunset Lakeview looks over the Lake Kariba and the coastal zone of
          Zambia. After the spectacular sunset you can see the lights of the
          Kapenta fishing boats.
        </Paragraph>
        <Paragraph>
          The Lodge is very luxurious and offers every comfort. As unique the
          lodge offers a very luxurious accommodation for a maximum of 12 guests
          in 6 individual rooms.
        </Paragraph>
      </div>
      <div className="pix">
        <img src="./imgs/welcomeone.png" className="welcomeone" alt="" />
        <img src="./imgs/welcometwo.png" className="welcometwo" alt="" />
        <Box small="Located" text="About just 3km from the Zambian boarder, from the Kariba Airport its just 20 minutes. " textTwo="Sunset Lakeview Lodge is the perfect place to be." />
      </div>
      <h1>Sunset Lakeview Lodge</h1>
    </WelcomeWrapper>
  );
}

export default Welcome;
