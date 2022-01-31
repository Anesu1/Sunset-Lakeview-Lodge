import React from 'react'
import styled from 'styled-components';

const CardWrapper = styled.div`
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.25)), url("${props => props.background}");
    background-size:cover;
    height:580px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
       overflow:hidden;
    transition: all 500ms ease-in-out;
    transform: scale(1, 1);
    
  
   &:hover{
    
           transform: scale(1.25, 1.25);
     h4{
        transform:translateY(5px) scale(0.85, 0.85);
     }
     a{
         transform:translateY(-5px) scale(0.85, 0.85);
     }
    
    }
   @media(min-width:992px){
       height:450px;
   }
    h4{
        color:#ffffff;
        transition:500ms ease-in-out;
        font-family:${props => props.theme.fam.renner};
        font-size:30px;
        margin:15px 0;
        @media(minw-dith:992px){
            font-size:20px;
         
        }
    }
    a{
        font-family:${props => props.theme.fam.renner};
        transition:500ms ease-in-out;
        font-size:18px;
        position:relative;
        text-decoration:none;
        color:#ffffff;
        font-family:${props => props.theme.fam.renner};
        @media(minw-dith:992px){
            font-size:15px;
        }
        &:before{
            position:absolute;
            height:3px;
            content:"";
            width:100%;
            bottom:-5px;
            left:0;
            background:#ffffff;

        }
    }
`

function Card({imgUrl, title, link}) {
    return (
        <CardWrapper background={imgUrl} >
            <h4>{title}</h4> 
            <a href={link}>
                Find Out More
            </a>
        </CardWrapper>
    )
}

export default Card
