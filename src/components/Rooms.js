import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from "./Loading"
import styled from 'styled-components';
import Room from '../styled/Room';


const RoomsWrapper = styled.section`
margin-top:50px;
    @media(min-width:768px){
        display:flex;
        margin-top:10%;
        justify-content:space-between;
        flex-wrap:wrap; 
    }
`

// function Rooms() {
    
//     return (
//         <RoomsWrapper>

//             <Room link="/rooms" imgBg="./imgs/HP Sunsetlakeview/HP Sunsetlakeview/Cottage/TerraceCottage.jpg" onHoverImg="./imgs/HP Sunsetlakeview/HP Sunsetlakeview/Cottage/RoomCottage.JPG" amount="250" roomName="Cottages" />
//             <Room link="/rooms" imgBg="./imgs/BedroomsMainhouse/Deluxe/DeluxRoomLakeview2.jpg" onHoverImg="./imgs/BedroomsMainhouse/Deluxe/DeluxRoomLakeview1Bild1a.jpg" amount="220" roomName="Deluxe Room"  />
//             <Room link="/rooms" imgBg="./imgs/BedroomsMainhouse/Twin/TwinRoom.jpg" onHoverImg="./imgs/BedroomsMainhouse/Twin/TwinRoomBath.jpg" amount="180" roomName="Twin Room"  />
//             <Room link="/rooms" imgBg="./imgs/BedroomsMainhouse/Exc/ExecutivRoomBild2.jpg" onHoverImg="./imgs/BedroomsMainhouse/Exc/ExecutivRoomBild1.jpg" amount="110" roomName="Executive Rooms" l/>
//         </RoomsWrapper>
//     )
// }




export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms: rooms} = this.context;
        
        rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })
    return (
      <RoomsWrapper id="rooms">
        
        {loading ? <Loading />: rooms}
    
      </RoomsWrapper>
    )
  }
}

