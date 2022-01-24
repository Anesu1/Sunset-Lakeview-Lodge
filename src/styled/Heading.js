import React from 'react'
import styled from 'styled-components';

const HeadingWrapper = styled.h2`
    font-size:25px;
    font-family:${props => props.theme.fam.oswald};
    color:${props => props.theme.color.orange};
    text-transform:uppercase;
    position:relative;
    line-height:1.3;
    padding-right:20px;
    width:max-content;
    @media(min-width:992px){
                font-size:30px;
        }
    &:before{
        position:absolute;
        content:"";
        display:none;
        height:2px;
        width:80px;
        background:${props => props.theme.color.orange};
        top:50%;
        right:0;
        transform:translate(100%, -50%);
        @media(min-width:768px){
            display:block;
        }
    }
    
`

function Heading({children}) {
    return (
        <HeadingWrapper>
            {children}
        </HeadingWrapper>
    )
}

export default Heading
