import axios from "axios";

const config = {
  baseUrl: "http://api.weatherapi.com/v1",
  headers: {
    key: "3e756b6080f247079c9125141221310",
  },
};

export const api = axios.create(config);
