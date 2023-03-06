import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000000,
  headers: {
    "content-type": "application/json",
  },
});
