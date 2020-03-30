import axios from "axios";

const api = axios.create({
  baseURL: "https://be-the-super-hero.herokuapp.com"
});

export default api;
