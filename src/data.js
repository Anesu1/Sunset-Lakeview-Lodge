/* eslint-disable import/no-anonymous-default-export */
import deluxone from './images/BedroomsMainhouse/Deluxe/DeluxRoomLakeview1Bild1a.jpg';
import deluxtwo from './images/BedroomsMainhouse/Deluxe/DeluxRoomLakeview2.jpg';
import deluxthree from './images/BedroomsMainhouse/Deluxe/DeluxRoomLakeview1.jpg';
import deluxfour from './images/BedroomsMainhouse/Deluxe/DeluxRoomLakeview2Bath.jpg';
import exethree from './images/BedroomsMainhouse/Exc/ExecutivroomBath.jpg';
import exetwo from './images/BedroomsMainhouse/Exc/ExecutivRoomBild1.jpg';
import exeone from './images/BedroomsMainhouse/Exc/ExecutivRoomBild2.jpg';
import twinone from './images/BedroomsMainhouse/Twin/TwinRoom.jpg';
import twintwo from './images/BedroomsMainhouse/Twin/TwinRoomBath.jpg';
import twinthree from './images/Twin rooms/IMG_77711......-scaled.jpg'
import twinfour from './images/Twin rooms/IMG_77721..-scaled.jpg'
import twinfive from './images/Twin rooms/IMG_77741....-scaled.jpg'
import twinsix from './images/Twin rooms/IMG_77761......-scaled.jpg'
import twinseven from './images/Twin rooms/IMG_77811.....-scaled.jpg'
import twineight from './images/Twin rooms/IMG_77821......-scaled.jpg'
import twinnine from './images/Twin rooms/IMG_77851.....-scaled.jpg'
import twinten from './images/Twin rooms/IMG_80441......-scaled.jpg'
import cottagetwo from './images/HP Sunsetlakeview/HP Sunsetlakeview/Cottage/KitchenCottage.jpg';
import cottageone from './images/HP Sunsetlakeview/HP Sunsetlakeview/Cottage/RoomCottage.JPG';
import cottagethree from './images/HP Sunsetlakeview/HP Sunsetlakeview/Cottage/ShowerCottage.jpg';
import cottagefour from'./images/HP Sunsetlakeview/HP Sunsetlakeview/Cottage/TerraceCottage.jpg';


export default [
  
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Executive Suite",
      slug: "executive-suite",
      subtitle:"GREAT FOR BUSINESS TRIP",
      price: 150,
      adults:'2',
      beds:'1',
      kids:'1',
      amenities:[
        'Air Conditioning', 'Fan', 'Free Parking', 'Free Wifi', 'Mini Bar', 'Room Service', 'Smart Tv', 'Swimming Pool'
      ],
      view:'Lake view and sunset',
      bedType:'King size bed',
      featured: true,
      description:
      "Our comfortable Executive rooms is just the right size if you are travelling with your partner. Similar to all other rooms in the lodge, the Executive is fully equipped with all comforts.",
    descriptionone:" In addition to the lounge the room is equipped with exciting amenities. The rooms offers all the space and comforts your need during your stay in our lodge",
    
      featImg:exeone,
      images: [
        {
          fields: {
            file: {
              url: exeone
            }
          }
        },
        {
          fields: {
            file: {
              url: exetwo
            }
          }
        },
        {
          fields: {
            file: {
              url: exethree
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Deluxe Room",
      slug: "deluxe-room",
      subtitle:"GREAT FOR BUSINESS TRIP",
      price: 250,
      adults:'4',
      beds:'1',
      kids:'2',
      amenities:[
        'Air Conditioning', 'Fan', 'Free Parking', 'Free Wifi', 'Mini Bar', 'Room Service', 'Smart Tv', 'Swimming Pool'
      ],
      view:'Lake view and sunset',
      bedType:'King size bed',
      breakfast: false,
      featured: true,
      description:"",
     descriptionone:"",
        extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      featImg:deluxone,
      images: [
        {
          fields: {
            file: {
              url: deluxone
            }
          }
        },
        {
          fields: {
            file: {
              url: deluxtwo
            }
          }
        },
        {
          fields: {
            file: {
              url: deluxthree
            }
          }
        },
        {
          fields: {
            file: {
              url: deluxfour
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Twin Room",
      slug: "twin-room",
      subtitle:"GREAT FOR BUSINESS TRIP",
      type: "single",
      price: 300,
      size: 400,
      adults:'2',
      beds:'2',
      kids:'1',
      amenities:[
        'Air Conditioning', 'Fan', 'Free Parking', 'Free Wifi', 'Mini Bar', 'Room Service', 'Smart Tv', 'Swimming Pool'
      ],
      view:'Garden view',
      bedType:'Twin beds',
      breakfast: true,
      featured: true,
      description:
        "Our Twin Room have 2 separate beds. Perfect choice if you share the room with a good friend or a family member. The bed is made with comfortable white sheets and soft pillows, and the room is equipped to ensure a good night’s sleep.",
      descriptionone:"",
        extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      featImg:twinone,
      images: [
        {
          fields: {
            file: {
              url: twinone
            }
          }
        },
        {
          fields: {
            file: {
              url: twintwo
            }
          }
        },
        {
          fields: {
            file: {
              url: twinthree
            }
          }
        },
        {
          fields: {
            file: {
              url: twinfour
            }
          }
        },
        {
          fields: {
            file: {
              url: twinfive
            }
          }
        },
        {
          fields: {
            file: {
              url: twinsix
            }
          }
        },
        {
          fields: {
            file: {
              url: twinseven
            }
          }
        },
        {
          fields: {
            file: {
              url: twineight
            }
          }
        },
        {
          fields: {
            file: {
              url: twinnine
            }
          }
        },
        {
          fields: {
            file: {
              url: twinten
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Cottages",
      slug: "cottages",
      subtitle:"GREAT FOR BUSINESS TRIP",
      type: "single",
      price: 100,
      size: 200,
      adults:'2',
      beds:'2',
      kids:'3',
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "Our comfortable Executive rooms is just the right size if you are travelling with your partner. Similar to all other rooms in the lodge, the Executive is fully equipped with all comforts.",
      descriptionone:" In addition to the lounge the room is equipped with exciting amenities. The rooms offers all the space and comforts your need during your stay in our lodge",
        extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      featImg:cottageone,
      images: [
        {
          fields: {
            file: {
              url: cottageone
            }
          }
        },
        {
          fields: {
            file: {
              url: cottagetwo
            }
          }
        },
        {
          fields: {
            file: {
              url: cottagethree
            }
          }
        },
        {
          fields: {
            file: {
              url: cottagefour
            }
          }
        }
      ]
    }
  },
];
