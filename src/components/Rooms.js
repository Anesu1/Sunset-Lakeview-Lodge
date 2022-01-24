import React from 'react';
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

function Rooms() {
    return (
        <RoomsWrapper>
            <Room link="/roomsPage" imgBg="roomone.png" onHoverImg="roomfour.png" amount="250" roomName="Executive Rooms" />
            <Room link="/roomsPage" imgBg="roomtwo.png" onHoverImg="roomone.png" amount="220" roomName="Deluxe Room"  />
            <Room link="/roomsPage" imgBg="roomthree.png" onHoverImg="roomtwo.png" amount="180" roomName="Twin Room"  />
            <Room link="/roomsPage" imgBg="roomfour.png" onHoverImg="roomthree.png" amount="110" roomName="Cottages" l/>
        </RoomsWrapper>
    )
}

export default Rooms
