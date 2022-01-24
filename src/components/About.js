import React from "react";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";

const AboutWrapper = styled.section`
  padding:5%;
  @media(min-width:768px){
    padding:10% 5%;
    .about{
      display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    }
    
  }
  @media(min-width:1200px){
    padding: 10%;
  }
  .about-inner{
    @media(min-width:768px){
      width:45%;
    }
    h4{
      font-family:${props => props.theme.fam.renner};
    }
  }
  p{
    font-size:13px;
    span{
      font-weight:bold;
    }
  }
  h2{
    margin-top:0;
    @media(min-width:768px){
      text-align:center;
      width:max-content;
    }
  }
`;

function About() {
  return (
    <AboutWrapper>
      <Heading>About Us</Heading>
      <div className="about">
      <div className="about-inner">
        <h4>Our Vision</h4>
        <Paragraph>
          To be the leading Hospitality and Leisure Company in the markets we
          operate
        </Paragraph>
        <h4>Our Mission</h4>
        <Paragraph>
          We are a luxury brand whose incredible family of associates puts the
          soul in hospitality every day. The needs of our guests, associates and
          owners are in the forefront of everything we do. Through authenticity
          and innovation, we create unique memorable experiences
        </Paragraph>
      </div>
      <div className="about-inner">
        <Paragraph>
          <span>Professionalism</span> – we provide excellent service to our
          customers
        </Paragraph>
        <Paragraph>
          <span>Respect</span> – In all our relationships, we seek to build and
          honor.
        </Paragraph>
        <Paragraph>
          <span>Integrity</span> – We do what we say. We are true to self and
          true to others.
        </Paragraph>
        <Paragraph>
          <span>Leisure</span> – We enjoy everything we do.
        </Paragraph>
        <Paragraph>
          <span>Fairness</span> – We are a non-discriminate organization and we
          treat everyone equally.
        </Paragraph>
        <Paragraph>
          <span>Service Excellence</span> – We meet and exceed customer
          expectations.
        </Paragraph>
        <Paragraph>
          <span>Care</span> – We show concern and seek the well-being of
          everyone
        </Paragraph>
      </div>
      </div>
     
    </AboutWrapper>
  );
}

export default About;
