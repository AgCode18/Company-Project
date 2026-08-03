import * as contactService from "./contact.service.js";

import {
  createContactSchema,
  updateReadStatusSchema,
} from "./contact.schema.js";

/* ===========================
   Create Contact (Public)
=========================== */

export const createContact = async (req, res) => {
  try {
    const body = createContactSchema.parse(req.body);

    const contact = await contactService.createContact(body);

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   Get All Contacts (Admin)
=========================== */

export const getContacts = async (req, res) => {
  try {
    const result = await contactService.getContacts(req.query);

    return res.json({
      success: true,
      data: result.contacts,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   Get Contact By ID
=========================== */

export const getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found.",
      });
    }

    return res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   Mark Read / Unread
=========================== */

export const updateReadStatus = async (req, res) => {
  try {
    const body = updateReadStatusSchema.parse(req.body);

    const contact = await contactService.updateReadStatus(
      req.params.id,
      body.isRead
    );

    return res.json({
      success: true,
      message: "Status updated successfully.",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   Delete Contact
=========================== */

export const deleteContact = async (req, res) => {
  try {
    await contactService.deleteContact(req.params.id);

    return res.json({
      success: true,
      message: "Contact enquiry deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};