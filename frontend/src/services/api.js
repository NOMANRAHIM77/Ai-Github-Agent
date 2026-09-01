import axios from "axios";

const getBaseURL = () => {
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  if (typeof process !== "undefined" && process.env?.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  // Local development -> use local backend server
  if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
    return "http://127.0.0.1:8000";
  }
  // Deployed environment -> relative path on same host
  return "";
};

const API = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendMessage = (message) => {
  return API.post("/chat", { message });
};


