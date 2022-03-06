/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Amenities from "../components/rooms/Amenities";
import BannerRooms from "../components/rooms/BannerRooms";
import BookNow from "../components/rooms/BookNow";
import Gallery from "../components/rooms/Gallery";
import OtherRooms from "../components/rooms/OtherRooms";
import {RoomContext} from '../context'

export default class SingleRoom extends Component {
  constructor(props){
    super(props) 
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg:"",

    }
  }
  static contextType = RoomContext;

  componentDidMount(){
        this.context.setRoom(this.props.match.params.slug)
  }

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room){
      return <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/">Go back home</Link>
      </div>
    }
    const {roomName, subtitle, desc,descr_one,price, slug, images, adults, view, bedType} = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <BannerRooms  bgImage={images[0]} roomName={roomName} subtitle={subtitle}/>
        <BookNow description={desc} descriptionone={descr_one} room={room} price={price} adults={adults} view={view} bedType={bedType}/>
       <Amenities />
        <Gallery>
          {defaultImg.map((item,i) =>{
            return <img src={item} key={i} alt={roomName} />
          })}
       </Gallery>
      <OtherRooms />
       <Cards />
       <Contact />
      <Footer />
      </>
    );
  }
}
