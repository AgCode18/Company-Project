import api from "../services/api.js";

export const getDashboard = () => {
  return api.get("/dashboard");
};