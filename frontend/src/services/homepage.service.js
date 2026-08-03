import api from "../services/api.js";

/* ===========================
   Get Homepage
=========================== */

export const getHomepage = () => {
  return api.get("/homepage");
};

/* ===========================
   Update Homepage
=========================== */

export const updateHomepage = (formData) => {
  return api.put("/homepage", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};