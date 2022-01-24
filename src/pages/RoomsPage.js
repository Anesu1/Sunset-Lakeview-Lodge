import React from 'react';
import Cards from '../components/Cards';
import Gallery from '../components/Gallery';
import Amenities from '../components/rooms/Amenities';
import BannerRooms from '../components/rooms/BannerRooms';
import BookNow from '../components/rooms/BookNow';
import OtherRooms from '../components/rooms/OtherRooms';

function RoomsPage() {
  return(
      <>
      <BannerRooms />
      <BookNow />
      <Amenities />
      <Gallery />
       <OtherRooms /> 
       <Cards />
      
      </>
  )
}

export default RoomsPage;
