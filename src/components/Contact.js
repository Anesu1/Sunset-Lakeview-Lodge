import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";
import { TextField } from '@material-ui/core';

const ContactWrapper = styled.section`
  padding:5%;
  .contact-inner{
    @media(min-width:768px){
      width:70%;
      margin:0 auto;
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      .contact-item{
        width:45%;
      }
    }
    @media(min-width:992px){
      width:50%;
    }
  }
  .contact-item{
 
      text-align:center;
    
    h3{
      font-family:${props => props.theme.fam.renner};
      text-transform:uppercase;
      font-size:20px;
      @media(min-width:768px){
        font-size:30px;
      }
    }
  }
  form{
    width:100%;
    .MuiFormControl-root{
      width:100%;
      margin-bottom:20px;
      label + .MuiInput-formControl{
        padding-bottom:25px;
        font-family:${props => props.theme.fam.renner};
        font-size:15px;
        color:#000000 !important;
        padding-left:10px;
      }
      .MuiInputLabel-formControl{
        font-family:${props => props.theme.fam.renner};
        font-size:15px;
        color:#000000 !important;
        padding-left:10px;
      }
      .MuiInput-underline:after{
        border-color:${props => props.theme.color.green} !important;
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
  }
`;

function Contact() {
  return (
    <ContactWrapper>
      <div className="contact-inner">
        <div className="contact-item">
          <h3>Our Address</h3>
          <Paragraph>816 Mica Point,</Paragraph>
          <Paragraph>Kariba, Zimbabwe</Paragraph>
        </div>
        <div className="contact-item">
          <h3>RESERVATION</h3>
          <Paragraph>+263 7 123 456 789</Paragraph>
          <Paragraph>reservations@sunsetlakeviewlodge.com</Paragraph>
        </div>
        <form action="">
        <TextField name="user" label="Full Name"/>
                <TextField  name="email" label="Email Address" />
                <TextField  name="phone" label="What are you intrested in?" />
                <TextField
                name="message"
          label="Message"
          multiline
          rows={3}
        />
<button type="submit">Send Message</button>
        </form>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
