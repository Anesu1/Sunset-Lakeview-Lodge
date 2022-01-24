import React from 'react'
import styled from 'styled-components';
import Box from '../styled/Box';
import Heading from '../styled/Heading';

const Wrapper = styled.section`
    padding:5%;
    @media(min-width:768px){
        display:flex;
        padding-top:15%;
        justify-content:space-between;
    }
    img{
        width:100%;
    }
    .inner{
        @media(min-width:768px){
            width:37%;
        }
       
    }
    .best-inner{
        @media(min-width:768px){
            width:60%;
            position:relative;
            margin-top:auto;
        }

        img{
            display:none;
            @media(min-width:768px){
                display:block;
            }
        }
        h2{
            @media(min-width:992px){
                font-size:30px;
            br{
                display:none;
            }
        }
            &:before{
                transform: translate(30%,16px);
                @media(min-width:992px){
                    transform: translate(85%,0px);
            
        }
            }
        }
         .box{
        display:flex;
        flex-direction:column-reverse ;
        padding:20px;
        margin-bottom:20px;
        @media(min-width:768px){
            position:absolute;
            right:5%;
            display:none;
            width:250px;
            height:max-content;
            bottom:-30%;
        }
        @media(min-width:992px){
            display:flex;

        }
            h2,p{
                display:none;
            }
            
    }
    }
   
`

function Best() {
    return (
        <Wrapper>
            <div className="inner">
                <img src="./imgs/bestone.png" alt="" />
            </div>
            <div className="best-inner">
                <Heading>The Best Luxury Real <br /> Estate in Kariba</Heading>
                <img src="./imgs/besttwo.png" alt="" />
                <Box small="Place" medium="816 Mica Point Kariba"/>
            </div>
        </Wrapper>
    )
}

export default Best
