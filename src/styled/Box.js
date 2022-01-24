import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    background:${props => props.theme.color.green};
    padding:20px 10px;
    h3,p{
        color:#ffffff;
    }
    a{
        text-decoration:none;
        color:#ffffff;
    }
    h2,h4{
        color:${props => props.theme.color.orange};
    }
    h4{
        font-family:${props => props.theme.fam.inter};
        font-size:20px;
        text-transform:uppercase;
        position:relative;
        width:max-content;
        padding-right:20px;
        &:before{
            height:2px;
            width:127px;
            background:${props => props.theme.color.orange};
            content:"";
            position:absolute;
            right:0;
            top:50%;
            transform:translate(100%,-50%);
        }
    }
    h3{
        font-size:35px;
        color:#ffffff;
        font-family:${props => props.theme.fam.oswald};
        margin:0;
        line-height:1.3;
    }
`

function Box({large, medium, small, text, link, linkText, textTwo}) {
    return (
        <Wrapper className='box'>
            <h2>{large}</h2>
            <h3>{medium}</h3>
            <h4>{small}</h4>
           <Paragraph>{text}</Paragraph>
           <Paragraph>{textTwo}</Paragraph>
           <a href={link}>{linkText}</a>
        </Wrapper>
    )
}

export default Box
