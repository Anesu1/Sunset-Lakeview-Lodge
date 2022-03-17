import React, { Component } from "react";
// import items from './data'
import Client from "./Contentful";

import { getRooms } from "./api/api";

const RoomContext = React.createContext();

// <RoomContext.Provider value={}

class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    loading: true,
    id: "",
  };

  //getData
  getData = async () => {
    const backendRooms = await getRooms();
    console.log(backendRooms);
    try {
      // let response = await Client.getEntries();
      // console.log(response);
      let rooms = backendRooms;
      let featuredRooms = rooms.filter((room) => room.featured);
      this.setState({
        rooms,
        featuredRooms,
        loading: false,
        id: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  setRoom = (id) => {
    this.setState({
      ...this.state,
      id: id,
    });
  };
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let imagefeat = item.fields.featImg.fields.file.url;
      let room = { ...item.fields, images, imagefeat, id };
      return room;
    });
    return tempItems;
  }
  getRoom = (id) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.id === id);
    return room;
  };

  // let tempRooms = [...rooms];
  // if(type !== 'all'){
  //   tempItems = tempRooms.filter( room => room.type === type)
  // }

  render() {
    return (
      <RoomContext.Provider
        value={{ ...this.state, getRoom: this.getRoom, setRoom: this.setRoom }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
