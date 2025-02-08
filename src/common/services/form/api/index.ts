import axios from "axios";

const baseURL = "http://letsworkout.pl";

const instance = axios.create({
  baseURL,
  headers: { "Content-Type": "multipart/form-data" },
});

export default instance;
