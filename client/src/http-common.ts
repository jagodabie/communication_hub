import axios from "axios";
const origin =  "http://localhost:8080/";

export default axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json"
  }
});