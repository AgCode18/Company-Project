import * as serviceService from "./service.service.js";

import {
  createServiceSchema,
  updateServiceSchema,
} from "./service.schema.js";

/* ===========================
   Create Service
=========================== */

export const createService = async (req, res) => {
  try {
    const body = createServiceSchema.parse(req.body);

    const data = {
      ...body,
    };

    if (req.file) {
      data.image = `/uploads/services/${req.file.filename}`;
    }

    const service = await serviceService.createService(data);

    return res.status(201).json({
      success: true,
      message: "Service created successfully.",
      data: service,
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
   Get All Services
=========================== */

export const getServices = async (req, res) => {
  try {
    const result = await serviceService.getServices(req.query);

    return res.json({
      success: true,
      data: result.services,
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
   Get Service By ID
=========================== */

export const getServiceById = async (req, res) => {
  try {
    const service = await serviceService.getServiceById(
      req.params.id
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    return res.json({
      success: true,
      data: service,
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
   Update Service
=========================== */

export const updateService = async (req, res) => {
  try {
    const body = updateServiceSchema.parse(req.body);

    const data = {
      ...body,
    };

    if (req.file) {
      data.image = `/uploads/services/${req.file.filename}`;
    }

    const service = await serviceService.updateService(
      req.params.id,
      data
    );

    return res.json({
      success: true,
      message: "Service updated successfully.",
      data: service,
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
   Delete Service
=========================== */

export const deleteService = async (req, res) => {
  try {
    await serviceService.deleteService(req.params.id);

    return res.json({
      success: true,
      message: "Service deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};