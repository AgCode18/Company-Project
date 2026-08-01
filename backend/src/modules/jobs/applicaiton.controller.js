import * as applicationService from "./application.service.js";

// ==========================================
// Apply for Job (Public)
// ==========================================

export const applyJob = async (req, res) => {
  try {
    const validatedData = applyJobSchema.parse({
      ...req.body,
      resume: req.file?.filename,
    });

    const application = await applicationService.applyJob(
      req.params.jobId,
      validatedData,
    );

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }
  }
};

// ==========================================
// Get All Applications (Admin)
// ==========================================

export const getApplications = async (req, res) => {
  try {
    const query = applicationQuerySchema.parse(req.query);

    const applications = await applicationService.getApplications(query);

    return res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }
  }
};

// ==========================================
// Get Application By ID
// ==========================================

export const getApplicationById = async (req, res) => {
  try {
    const application = await applicationService.getApplicationById(
      req.params.id,
    );

    return res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }
  }
};

// ==========================================
// Update Application Status
// ==========================================

export const updateApplicationStatus = async (req, res) => {
  try {
    const body = updateApplicationStatusSchema.parse(req.body);

    await applicationService.updateApplicationStatus(
      req.params.id,
      body.status,
    );

    return res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: application,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }
  }
};

// ==========================================
// Delete Application
// ==========================================

export const deleteApplication = async (req, res) => {
  try {
    await applicationService.deleteApplication(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }
  }
};
