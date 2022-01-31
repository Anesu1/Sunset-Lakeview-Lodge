import React from 'react';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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
       <Contact />
      <Footer />
      </>
  )
}

export default RoomsPage;
