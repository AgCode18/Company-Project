import api from "../services/api.js";

/* ===========================
   Admin
=========================== */

export const getApplications = (params) => {
  return api.get("/applications", {
    params,
  });
};

export const getApplicationById = (id) => {
  return api.get(`/applications/${id}`);
};

export const updateApplicationStatus = (
  id,
  status
) => {
  return api.patch(`/applications/${id}/status`, {
    status,
  });
};

export const deleteApplication = (id) => {
  return api.delete(`/applications/${id}`);
};

/* ===========================
   Public
=========================== */

export const applyJob = (
  jobId,
  formData
) => {
  return api.post(
    `/applications/${jobId}/apply`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};