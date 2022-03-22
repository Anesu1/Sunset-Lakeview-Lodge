import axios from "axios";
import { startCase } from "lodash";

const host = "http://localhost:1337";
export const baseUrl = `${host}/api`;

const backendApiKey =
  "14c0db7bf26cd5141e9b2d560816c81b67a6c8bafaca11e73ba9dba224b54004afed17cc55fe82d676af5504dbae6ce0e91b76b1004f294eb44300c306ea76bc85cac0905e5790e3a0d54fc3012b7f24fc1ad8fe7508fb063b5097d61e3dd9882073cc66955e4e71e7393aa66f7aafab9c48cd604195b4832ba64383f3013f88";

// "14c0db7bf26cd5141e9b2d560816c81b67a6c8bafaca11e73ba9dba224b54004afed17cc55fe82d676af5504dbae6ce0e91b76b1004f294eb44300c306ea76bc85cac0905e5790e3a0d54fc3012b7f24fc1ad8fe7508fb063b5097d61e3dd9882073cc66955e4e71e7393aa66f7aafab9c48cd604195b4832ba64383f3013f88";

const headers = {
  Authorization: `Bearer ${backendApiKey}`,
};

axios.defaults.headers = headers;


async function getRooms() {
  const path = "/rooms?populate=*";
  const res = await axios.get(baseUrl + path, { headers: headers });
  const { data } = res.data;
  return mapToRooms(data);
}

function mapToRooms(rooms) {
  return rooms.map((roomItem) => {
    let id = roomItem.id;
    let attributes = roomItem.attributes;
    let images = attributes.images.data.map(
      (image) => host + image.attributes.url
    );
    let imagefeat = host + attributes.featuredImage.data.attributes.url;
    delete attributes.featuredImage;
    delete attributes.images;

    let room = { id, imagefeat, images, ...attributes };
    return room;
  });
}

export async function checkRoomAvailability(checkIn, checkOut, id) {
  const requestData = {
    data: {
      checkIn,
      checkOut,
      room: id,
    },
  };

  const response = await axios.post(
    `${baseUrl}/booking/available`,
    requestData
  );
  const { isAvailable } = response.data;
  return isAvailable;
}

export async function createSecretToken(data) {
  const { amount, currency } = data;
   // const path ='https://lakeviewnodejs.herokuapp.com/api/create-token';
  // {headers:{Authorization:"Bearer e76cac099e2b91e84e0eb86eaa510628478f0c247142c00ed9e10b6b9564695af16f00aae71f288fcedfdade8e97d0a8077282c33a11a76be504863a26cd025fe6e3d6e2de6996991e17bae52ada68cf92dd44f25571eb5cffd356bfd84c3fe6147f0ead19abf571c19eec0d0b4e4f746f4249b529f474a2c2588daa65b579ab"}}
  const response = await axios.post(`${baseUrl}/create-token`, {
    amount,
    currency,
  });

  const { clientSecret } = response.data;

  return clientSecret;
}


export async function createBookingRequest(data){
  const response = await axios.post(`${baseUrl}/bookings`,data);
  return response.data;
}

const roomExample = [
  {
    id: 1,
    attributes: {
      adults: 1,
      bedType: "King Sized Bed",
      beds: 2,
      description: "ms",
      featured: true,
      kids: 2,
      price: 300,
      roomName: "Cottage",
      subTitle: "!@",
      view: "Lake View",
      createdAt: "2022-02-23T10:53:55.956Z",
      updatedAt: "2022-02-24T17:41:40.622Z",
      publishedAt: "2022-02-23T10:53:58.816Z",
      featuredImage: {
        data: {
          id: 1,
          attributes: {
            name: "Screen Shot 2022-02-19 at 12.21.23 PM.png",
            alternativeText: "Screen Shot 2022-02-19 at 12.21.23 PM.png",
            caption: "Screen Shot 2022-02-19 at 12.21.23 PM.png",
            width: 1440,
            height: 900,
            formats: {
              large: {
                ext: ".png",
                url: "/uploads/large_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
                hash: "large_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
                mime: "image/png",
                name: "large_Screen Shot 2022-02-19 at 12.21.23 PM.png",
                path: null,
                size: 407.41,
                width: 1000,
                height: 625,
              },
              small: {
                ext: ".png",
                url: "/uploads/small_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
                hash: "small_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
                mime: "image/png",
                name: "small_Screen Shot 2022-02-19 at 12.21.23 PM.png",
                path: null,
                size: 138.53,
                width: 500,
                height: 313,
              },
              medium: {
                ext: ".png",
                url: "/uploads/medium_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
                hash: "medium_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
                mime: "image/png",
                name: "medium_Screen Shot 2022-02-19 at 12.21.23 PM.png",
                path: null,
                size: 260.85,
                width: 750,
                height: 469,
              },
              thumbnail: {
                ext: ".png",
                url: "/uploads/thumbnail_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
                hash: "thumbnail_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
                mime: "image/png",
                name: "thumbnail_Screen Shot 2022-02-19 at 12.21.23 PM.png",
                path: null,
                size: 46.29,
                width: 245,
                height: 153,
              },
            },
            hash: "Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
            ext: ".png",
            mime: "image/png",
            size: 391.68,
            url: "/uploads/Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-02-23T10:52:57.713Z",
            updatedAt: "2022-02-23T10:52:57.713Z",
          },
        },
      },
      images: {
        data: [
          {
            id: 2,
            attributes: {
              name: "code_material.png",
              alternativeText: "code_material.png",
              caption: "code_material.png",
              width: 1410,
              height: 782,
              formats: {
                large: {
                  ext: ".png",
                  url: "/uploads/large_code_material_071febdbc1.png",
                  hash: "large_code_material_071febdbc1",
                  mime: "image/png",
                  name: "large_code_material.png",
                  path: null,
                  size: 220.53,
                  width: 1000,
                  height: 555,
                },
                small: {
                  ext: ".png",
                  url: "/uploads/small_code_material_071febdbc1.png",
                  hash: "small_code_material_071febdbc1",
                  mime: "image/png",
                  name: "small_code_material.png",
                  path: null,
                  size: 75.12,
                  width: 500,
                  height: 277,
                },
                medium: {
                  ext: ".png",
                  url: "/uploads/medium_code_material_071febdbc1.png",
                  hash: "medium_code_material_071febdbc1",
                  mime: "image/png",
                  name: "medium_code_material.png",
                  path: null,
                  size: 139.88,
                  width: 750,
                  height: 416,
                },
                thumbnail: {
                  ext: ".png",
                  url: "/uploads/thumbnail_code_material_071febdbc1.png",
                  hash: "thumbnail_code_material_071febdbc1",
                  mime: "image/png",
                  name: "thumbnail_code_material.png",
                  path: null,
                  size: 26.33,
                  width: 245,
                  height: 136,
                },
              },
              hash: "code_material_071febdbc1",
              ext: ".png",
              mime: "image/png",
              size: 151.79,
              url: "/uploads/code_material_071febdbc1.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2022-02-24T17:41:32.941Z",
              updatedAt: "2022-02-24T17:41:32.941Z",
            },
          },
        ],
      },
    },
  },
];

export { getRooms };
