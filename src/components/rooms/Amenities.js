import React from 'react';
import styled from 'styled-components';
import {FaChevronRight} from 'react-icons/fa'
import amenities from '../../images/amenities.png'

const Wrapper = styled.section`
    background:${props => props.theme.color.green};
    color:#ffffff;
    padding:5%;
    margin-bottom:20px;
    @media(min-width:768px){
        padding-bottom:200px;

    }
    .amenities-inner{
        @media(min-width:768px){
            width:80%;
            margin:0 auto;
            display:flex;
            flex-wrap:wrap;
            margin-top:50px;
        }
        .item{
            display:flex;
            
            align-items:center;
            @media(min-width:768px){
                width:30%;
            }
            @media(min-width:992px){
                width:25%;
            }
            svg{
                margin-right:15px;
            }
        }
    }
    .imgs{
        display:flex;
        align-items:center;
        margin-bottom:30px;
        img{
            margin-right:10px;
            width:50px;
        }
        h3{
            text-transform:uppercase;
            font-family:${props => props.theme.fam.cera};
            font-size:20px;
        }
    }

`

function Amenities() {
  return (
      <Wrapper id="amenities">
          <div className="imgs">
              <img src={amenities} alt="" />
              <h3>Amenities & Services</h3>
          </div>
          <div className="amenities-inner">
              <div className="item">
                  <FaChevronRight />
                  <p>Air Conditioning</p>
              </div>
              <div className="item">
                  <FaChevronRight />
                  <p>Free Parking</p>
              </div>
              <div className="item">
                  <FaChevronRight />
                  <p>Mini Bar</p>
              </div>
              <div className="item">
                  <FaChevronRight />
                  <p>Smart Tv</p>
              </div>
              <div className="item">
                  <FaChevronRight />
                  <p>Fan</p>
              </div>
              <div className="item">
                  <FaChevronRight />
                  <p>Free Wifi</p>
              </div>
              <div className="item">
                  <FaChevronRight />
                  <p>Room Service</p>
              </div>
              <div className="item">
                  <FaChevronRight />
                  <p>Swimming Pool</p>
              </div>
              
          </div>
      </Wrapper>
  );
}

export default Amenities;
