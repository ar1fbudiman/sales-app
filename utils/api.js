import axios from "axios";

export const api = axios.create({
  baseURL: "https://delman-fe-api.fly.dev",
  timeout: 60000,
});

export const baseURL = "https://delman-fe-api.fly.dev";
