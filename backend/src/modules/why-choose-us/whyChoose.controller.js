import * as whyChooseService from "./whyChoose.service.js";

import {
  createWhyChooseSchema,
  updateWhyChooseSchema,
} from "./whyChoose.schema.js";

/* ===========================
   Create
=========================== */

export const createWhyChoose = async (req, res) => {
  try {
    const body = createWhyChooseSchema.parse(req.body);

    const data = {
      ...body,
    };

    if (req.file) {
      data.icon = `/uploads/why-choose-us/${req.file.filename}`;
    }

    const item = await whyChooseService.createWhyChoose(data);

    return res.status(201).json({
      success: true,
      message: "Why Choose Us item created successfully.",
      data: item,
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
   Get All
=========================== */

export const getWhyChooseList = async (req, res) => {
  try {
    const result = await whyChooseService.getWhyChooseList(req.query);

    return res.json({
      success: true,
      data: result.items,
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
   Get By ID
=========================== */

export const getWhyChooseById = async (req, res) => {
  try {
    const item = await whyChooseService.getWhyChooseById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Why Choose Us item not found.",
      });
    }

    return res.json({
      success: true,
      data: item,
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
   Update
=========================== */

export const updateWhyChoose = async (req, res) => {
  try {
    const body = updateWhyChooseSchema.parse(req.body);

    const data = {
      ...body,
    };

    if (req.file) {
      data.icon = `/uploads/why-choose-us/${req.file.filename}`;
    }

    const item = await whyChooseService.updateWhyChoose(req.params.id, data);

    return res.json({
      success: true,
      message: "Why Choose Us item updated successfully.",
      data: item,
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
   Delete
=========================== */

export const deleteWhyChoose = async (req, res) => {
  try {
    await whyChooseService.deleteWhyChoose(req.params.id);

    return res.json({
      success: true,
      message: "Why Choose Us item deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



