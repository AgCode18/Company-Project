import * as dashboardService from "./dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    const data = await dashboardService.getDashboardStats();

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};