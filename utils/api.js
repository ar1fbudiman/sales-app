import axios from "axios";

const api = axios.create({
  baseURL: "https://delman-fe-api.fly.dev",
  timeout: 60000,
});

export default api;
