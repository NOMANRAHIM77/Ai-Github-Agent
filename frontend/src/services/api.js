import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // FastAPI backend
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendMessage = (message) => {
  return API.post("/chat", { message }); // matches FastAPI router
};
