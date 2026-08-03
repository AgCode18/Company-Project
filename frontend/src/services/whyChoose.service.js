import api from "../services/api.js";

/* ===========================
   Get All
=========================== */

export const getWhyChooseList = (params) => {
  return api.get("/why-choose-us", {
    params,
  });
};

/* ===========================
   Get By ID
=========================== */

export const getWhyChooseById = (id) => {
  return api.get(`/why-choose-us/${id}`);
};

/* ===========================
   Create
=========================== */

export const createWhyChoose = (formData) => {
  return api.post(
    "/why-choose-us",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

/* ===========================
   Update
=========================== */

export const updateWhyChoose = (
  id,
  formData
) => {
  return api.put(
    `/why-choose-us/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

/* ===========================
   Delete
=========================== */

export const deleteWhyChoose = (id) => {
  return api.delete(`/why-choose-us/${id}`);
};