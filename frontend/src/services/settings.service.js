import api from "./api";

/* ===========================
   Get Website Settings
=========================== */

export const getWebsiteSettings = () => {
  return api.get("/settings");
};

/* ===========================
   Update Website Settings
=========================== */

export const updateWebsiteSettings = (formData) => {
  return api.put("/settings", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};