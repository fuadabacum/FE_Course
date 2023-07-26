import axios from "axios";

const payload = [
  {
    id: "64509a48-971b-4cf9-b249-81f7288b598e",
    quantity: 1,
    coordinates: [1, 1],
    product: {
      id: "d3df9783-65e8-4da3-a9b7-6d23834b4861",
      name: "Chips",
      price: "2.00",
    },
  },
  {
    id: "2c884c95-456b-43a9-a1a8-94f803226d7b",
    quantity: 10,
    coordinates: [2, 1],
    product: {
      id: "d3df9783-65e8-4da3-a9b7-6d23834b4861",
      name: "Chips",
      price: "2.00",
    },
  },
  {
    id: "12cadd95-3072-40dd-bd49-30caad5b2375",
    quantity: 0,
    coordinates: [3, 1],
    product: null,
  },
  {
    id: "0fb0b1bd-1923-4fd9-b282-ed4d7933a5e7",
    quantity: 0,
    coordinates: [1, 2],
    product: null,
  },
  {
    id: "201535f2-4e6b-4209-b6af-341ecb0c3288",
    quantity: 5,
    coordinates: [2, 2],
    product: {
      id: "070e14d9-efd4-4339-afec-462766c5dfce",
      name: "Coke",
      price: "1.50",
    },
  },
  {
    id: "43d7bbdd-ac98-4ff4-9512-b31caf07d56d",
    quantity: 0,
    coordinates: [3, 2],
    product: null,
  },
  {
    id: "752407a0-3121-4112-8324-ed9022ad0d75",
    quantity: 0,
    coordinates: [1, 3],
    product: null,
  },
  {
    id: "b00e0d15-af21-4160-aff9-9e6f933cc6fc",
    quantity: 0,
    coordinates: [2, 3],
    product: null,
  },
  {
    id: "61592199-9988-48dd-a61e-61cbd1d67d9f",
    quantity: 0,
    coordinates: [3, 3],
    product: null,
  },
];

const simulateRequest: any = (mock: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mock });
    }, 1000);
  });
};

export const api = {
  getProducts: () => axios.get(process.env.REACT_APP_BACKEND_URL + "/slots"),
  buyProduct: (data: object) => axios.post(process.env.REACT_APP_BACKEND_URL + "/slots", data),
  addMoney: (data: object) => axios.post(process.env.REACT_APP_BACKEND_URL + "/clients", data),
  refundMoney: (data: object) => axios.put(process.env.REACT_APP_BACKEND_URL + "/clients", data),
  getProductsMock: () => simulateRequest(payload),
};
