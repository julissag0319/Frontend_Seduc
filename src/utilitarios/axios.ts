import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:4002",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});
