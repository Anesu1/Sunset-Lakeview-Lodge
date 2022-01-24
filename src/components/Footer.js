import React from 'react';
import styled from 'styled-components';
import Paragraph from '../styled/Paragraph';
import moment from 'moment'

const FooterWrapper = styled.footer`
    background:${props => props.theme.color.green};
    color:#ffffff;
    padding:5%;
    text-align:center;
    @media(min-width:992px){
        display:flex;
        padding:20px 5%;
        align-items:center;
        justify-content:space-between;
    }
    ul{
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        @media(min-width:992px){
            margin-left:auto;
        }
        li{
            a{
                text-decoration:none;
                color:#ffffff;
                display:block;
                font-size:15px;
                padding:15px 10px 15px 0;
                @media(min-width:992px){
                    padding:10px 20px;
                }
            }
        }
    }
`

function Footer() {
    const year = moment().year()
    return (
        <FooterWrapper>
            <Paragraph>Copyright© {year} Sunset Lakeview Lodge</Paragraph>
            <ul className="links">
                <li><a href="#">Rooms</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <Paragraph>Privacy Policy  |  Disclaimer</Paragraph>
        </FooterWrapper>
    )
}

export default Footer
