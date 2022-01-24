import React from 'react'
import styled from 'styled-components';
import Box from '../styled/Box';
import Heading from '../styled/Heading';

const ProvideWrapper = styled.section`
    padding:5%;
    overflow:hidden;
    @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      padding:10% 5%;
      
    }
    
    .provide-inner{
      @media(min-width:768px){
        width:60%;
        margin-top:auto;
      }
    }
    img{
        width:100%;
    }
    
    h2{
        width:unset;
        @media(min-width:768px){
          width:max-content;
        }
        br{
          @media(min-width:568px){
            display:none;
          }
        }
        &:before{
                transform: translate(-85%,35px);
                @media(min-width:768px){
                    transform: translate(-50%,20px);
            
        }
        /* @media(min-width:992px){
          transform:translate(-200%,20px);
        } */
        
    }
  }
    .img{
        position:relative;
        margin-bottom:30px;
        @media(min-width:768px){
          margin:0;
        }
        .box{
            position:absolute;
            top:50%;
            left:50%;
            width:70%;
            transform:translate(-50%,-50%);
            height:50%;
            @media(min-width:992px){
            height:25%;
            width:45%;
            padding:5%;
        }
        }
    }
    .provide-item{
        position:relative;
        @media(min-width:768px){
          width:37%;
          margin-top:auto;
        }
        .box{
            position:absolute;
            top:60%;
            left:50%;
            width:70%;
            transform:translate(-50%,-50%);
            height:50%;
            @media(min-width:768px){
              height:25%;
              top:55%;
              width:45%;
              padding:5%;
            }
        }
        h2{
          width:unset;
          margin-bottom:10px;
        }
    }
    .br{
      display:block;
    }
    .box{
      display:flex;
      justify-content:center;
      align-items:flex-start;
      flex-direction:column;
      h2{
        text-transform:uppercase;
        font-family:${props => props.theme.fam.oswald};
        font-size:30px;
        @media(min-width:992px){
          font-size:40px;
        }
      }
      a{
        position:relative;
        width:max-content;
        padding-bottom:5px;
    &:before{
      position:absolute;
      content:"";
      background:#ffffff;
      height:2px;
      width:100%;
      bottom:0;
      left:0;
    }
      }
      h4,h3,p{
        display:none;
        &:before{
          display:none;
        }
      }
    }
`
 
function Provide() {
 
    return (
      <ProvideWrapper>
        <div className="provide-inner">
          <Heading>
            We provide the best <br /> services 24/7 <br className='br'/> to satisfy <br /> our clients
          </Heading>
          <div className="img">
            <img src="./imgs/provideone.png" alt="" />
            <Box large="Book With Us" linkText="Get In Touch" />
          </div>
        </div>
        <div className="provide-item">
          <img src="./imgs/providetwo.png" alt="" />
          <Box large={`Work With Us`} linkText="Get In Touch" />
        </div>
      </ProvideWrapper>
    );
}

export default Provide
