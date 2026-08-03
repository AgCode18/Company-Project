import {
  applyJobSchema,
  updateApplicationStatusSchema,
} from "./application.schema.js";

export const validateApplyJob = (req, res, next) => {
  try {
    applyJobSchema.parse(req.body);

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      errors: error.errors,
    });
  }
};

export const validateStatusUpdate = (req, res, next) => {
  try {
    updateApplicationStatusSchema.parse(req.body);

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      errors: error.errors,
    });
  }
};
