import axios from "axios";

const baseURL = "https://api.api-ninjas.com/v1";

const instance = axios.create({
  baseURL,
  headers: {
    "X-Api-Key": "8DX8eEe67njS1lbThFsdSw==rQQNpQ8PYbPZBjrx"
  },
});

export default instance;
