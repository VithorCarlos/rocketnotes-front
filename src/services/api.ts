import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-4wku.onrender.com",
});
