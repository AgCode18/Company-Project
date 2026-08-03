import api from "./api.js";


export const getDashboard = () => {
  return api.get("/dashboard");
};