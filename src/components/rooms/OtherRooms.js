import React, {useContext} from 'react';
import styled from 'styled-components';
import RoomCards from '../../styled/RoomCards';
import arrayShuffle from 'array-shuffle';
import {RoomContext} from '../../context';


const Wrapper = styled.section`
  padding:5%;
  text-align:center;
  h2{
    font-family:${props => props.theme.fam.renner};
    font-size:25px;
    font-weight:900;
  }
  .p{
    font-family:${props => props.theme.fam.renner};
    text-transform:uppercase;
    font-size:18px;

  } 
  .cards{
    @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      
    }
  }
`
const CardsRooms = [
  {
    roomName:"Deluxe Room",
    amount:"299",
    imageName:"roomtwo.png",
    kids:"0",
    adults:"2",
    beds:"2",
  },
  {
    roomName:"Twin Room",
    amount:"300",
    imageName:"roomfour.png",
    kids:"1",
    adults:"2",
    beds:"2",
  },
  {
    roomName:"Cottages",
    amount:"250",
    imageName:"roomtwo.png",
    kids:"0",
    adults:"1",
    beds:"1",
  }
]


function OtherRooms() {
  // let shuffled = arrayShuffle(CardsRooms);
  const context = useContext(RoomContext);
  let rooms = context.rooms;
  let current = context.getRoom(context.slug);
  let featuredRooms = context.slug ? rooms.filter(room => {
    return room.slug !== current.slug
  }) : arrayShuffle(CardsRooms);
  return (
      <Wrapper>
        <h2>Other Rooms</h2>
        <p className='p'>could also be interest for you</p>
        <div className="cards">
          {featuredRooms.map((item, i)=>{
            return <RoomCards key={i} roomName={item.roomName} amount={item.price} kids={item.kids} adults={item.adults} beds={item.beds} imageName={item.imagefeat}/>
          })}
        </div>
      </Wrapper>
  );
}

export default OtherRooms;
