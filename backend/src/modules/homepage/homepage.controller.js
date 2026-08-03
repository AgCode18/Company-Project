import * as homepageService from "./homepage.service.js";

import { updateHomepageSchema } from "./homepage.schema.js";

/* ===========================
   Get Homepage Settings
=========================== */

export const getHomepage = async (req, res) => {
  try {
    const homepage = await homepageService.getHomepage();

    return res.json({
      success: true,
      data: homepage,
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
   Update Homepage Settings
=========================== */

export const updateHomepage = async (req, res) => {
  try {
    const body = updateHomepageSchema.parse(req.body);

    const data = {
      ...body,
    };

    // Hero Background Image
    if (req.files?.heroBackgroundImage?.length) {
      data.heroBackgroundImage =
        `/uploads/homepage/${req.files.heroBackgroundImage[0].filename}`;
    }

    // About Image
    if (req.files?.aboutImage?.length) {
      data.aboutImage =
        `/uploads/homepage/${req.files.aboutImage[0].filename}`;
    }

    const homepage = await homepageService.updateHomepage(data);

    return res.json({
      success: true,
      message: "Homepage updated successfully.",
      data: homepage,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};