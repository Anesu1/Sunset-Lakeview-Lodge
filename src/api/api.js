import axios from "axios";
import { startCase } from "lodash";

const host = "http://172.93.101.140:1337";
export const baseUrl = `${host}/api`;

const backendApiKey = "496a66042d84b37b70869f0896d3591fd420381ccca5c476783feae3922f2d3618638cbbf0d74c3db2876c6630ee378055e585e51d96beaa360ccf51221a77d1be601f457ddc60f19087fb9fd87388bf44923b5e6d6662004c7cbc0e9092bd3cc0628a13b2d63a667365ddb5aaa829d722efc188732f16cf8255c6c627e51f9e";

const headers = {
  Authorization: `Bearer ${backendApiKey}`,
};

axios.defaults.headers = headers;
// axios.defaults.baseURL = baseUrl

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
    let images = attributes?.images.data.map(
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

// const roomExample = [
//   {
//     id: 1,
//     attributes: {
//       adults: 1,
//       bedType: "King Sized Bed",
//       beds: 2,
//       description: "ms",
//       featured: true,
//       kids: 2,
//       price: 300,
//       roomName: "Cottage",
//       subTitle: "!@",
//       view: "Lake View",
//       createdAt: "2022-02-23T10:53:55.956Z",
//       updatedAt: "2022-02-24T17:41:40.622Z",
//       publishedAt: "2022-02-23T10:53:58.816Z",
//       featuredImage: {
//         data: {
//           id: 1,
//           attributes: {
//             name: "Screen Shot 2022-02-19 at 12.21.23 PM.png",
//             alternativeText: "Screen Shot 2022-02-19 at 12.21.23 PM.png",
//             caption: "Screen Shot 2022-02-19 at 12.21.23 PM.png",
//             width: 1440,
//             height: 900,
//             formats: {
//               large: {
//                 ext: ".png",
//                 url: "/uploads/large_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
//                 hash: "large_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
//                 mime: "image/png",
//                 name: "large_Screen Shot 2022-02-19 at 12.21.23 PM.png",
//                 path: null,
//                 size: 407.41,
//                 width: 1000,
//                 height: 625,
//               },
//               small: {
//                 ext: ".png",
//                 url: "/uploads/small_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
//                 hash: "small_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
//                 mime: "image/png",
//                 name: "small_Screen Shot 2022-02-19 at 12.21.23 PM.png",
//                 path: null,
//                 size: 138.53,
//                 width: 500,
//                 height: 313,
//               },
//               medium: {
//                 ext: ".png",
//                 url: "/uploads/medium_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
//                 hash: "medium_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
//                 mime: "image/png",
//                 name: "medium_Screen Shot 2022-02-19 at 12.21.23 PM.png",
//                 path: null,
//                 size: 260.85,
//                 width: 750,
//                 height: 469,
//               },
//               thumbnail: {
//                 ext: ".png",
//                 url: "/uploads/thumbnail_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
//                 hash: "thumbnail_Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
//                 mime: "image/png",
//                 name: "thumbnail_Screen Shot 2022-02-19 at 12.21.23 PM.png",
//                 path: null,
//                 size: 46.29,
//                 width: 245,
//                 height: 153,
//               },
//             },
//             hash: "Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021",
//             ext: ".png",
//             mime: "image/png",
//             size: 391.68,
//             url: "/uploads/Screen_Shot_2022_02_19_at_12_21_23_PM_e4bacca021.png",
//             previewUrl: null,
//             provider: "local",
//             provider_metadata: null,
//             createdAt: "2022-02-23T10:52:57.713Z",
//             updatedAt: "2022-02-23T10:52:57.713Z",
//           },
//         },
//       },
//       images: {
//         data: [
//           {
//             id: 2,
//             attributes: {
//               name: "code_material.png",
//               alternativeText: "code_material.png",
//               caption: "code_material.png",
//               width: 1410,
//               height: 782,
//               formats: {
//                 large: {
//                   ext: ".png",
//                   url: "/uploads/large_code_material_071febdbc1.png",
//                   hash: "large_code_material_071febdbc1",
//                   mime: "image/png",
//                   name: "large_code_material.png",
//                   path: null,
//                   size: 220.53,
//                   width: 1000,
//                   height: 555,
//                 },
//                 small: {
//                   ext: ".png",
//                   url: "/uploads/small_code_material_071febdbc1.png",
//                   hash: "small_code_material_071febdbc1",
//                   mime: "image/png",
//                   name: "small_code_material.png",
//                   path: null,
//                   size: 75.12,
//                   width: 500,
//                   height: 277,
//                 },
//                 medium: {
//                   ext: ".png",
//                   url: "/uploads/medium_code_material_071febdbc1.png",
//                   hash: "medium_code_material_071febdbc1",
//                   mime: "image/png",
//                   name: "medium_code_material.png",
//                   path: null,
//                   size: 139.88,
//                   width: 750,
//                   height: 416,
//                 },
//                 thumbnail: {
//                   ext: ".png",
//                   url: "/uploads/thumbnail_code_material_071febdbc1.png",
//                   hash: "thumbnail_code_material_071febdbc1",
//                   mime: "image/png",
//                   name: "thumbnail_code_material.png",
//                   path: null,
//                   size: 26.33,
//                   width: 245,
//                   height: 136,
//                 },
//               },
//               hash: "code_material_071febdbc1",
//               ext: ".png",
//               mime: "image/png",
//               size: 151.79,
//               url: "/uploads/code_material_071febdbc1.png",
//               previewUrl: null,
//               provider: "local",
//               provider_metadata: null,
//               createdAt: "2022-02-24T17:41:32.941Z",
//               updatedAt: "2022-02-24T17:41:32.941Z",
//             },
//           },
//         ],
//       },
//     },
//   },
// ];

export { getRooms };
