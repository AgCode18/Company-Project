import api from "../../src/services/api.js";

/* ===========================
   Public
=========================== */

// Submit Contact Form
export const createContact = (data) => {
  return api.post("/contact", data);
};

/* ===========================
   Admin
=========================== */

// Get All Contacts
export const getContacts = (params) => {
  return api.get("/contact", {
    params,
  });
};

// Get Contact By ID
export const getContactById = (id) => {
  return api.get(`/contact/${id}`);
};

// Update Read Status
export const updateReadStatus = (id, isRead) => {
  return api.patch(`/contact/${id}/read-status`, {
    isRead,
  });
};

// Delete Contact
export const deleteContact = (id) => {
  return api.delete(`/contact/${id}`);
};