import prisma from "../../db/db.js";


export const applyJob = async (jobId, data) => {
  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  if (job.status !== "PUBLISHED") {
    throw new Error("This job is not accepting applications");
  }

  if (new Date(job.lastDate) < new Date()) {
    throw new Error("Application deadline has passed");
  }

  const existingApplication = await prisma.jobApplication.findFirst({
    where: {
      jobId,
      email: data.email,
    },
  });

  if (existingApplication) {
    throw new Error("You have already applied for this job");
  }

  const application = await prisma.jobApplication.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      coverLetter: data.coverLetter,
      resume: data.resume,
      jobId,
    },
    include: {
      job: true,
    },
  });

  return application;
};


export const getApplications = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  const skip = (page - 1) * limit;

  const where = {};

  if (query.status) {
    where.status = query.status;
  }

  if (query.search) {
    where.OR = [
      {
        fullName: {
          contains: query.search,
          mode: "insensitive",
        },
      },
      {
        email: {
          contains: query.search,
          mode: "insensitive",
        },
      },
    ];
  }

  const [applications, total] = await Promise.all([
    prisma.jobApplication.findMany({
      where,

      include: {
        job: true,
      },

      orderBy: {
        createdAt: "desc",
      },

      skip,

      take: limit,
    }),

    prisma.jobApplication.count({
      where,
    }),
  ]);

  return {
    applications,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};


export const getApplicationById = async (id) => {
  const application = await prisma.jobApplication.findUnique({
    where: {
      id,
    },

    include: {
      job: true,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  return application;
};


export const updateApplicationStatus = async (
  id,
  status
) => {

  const application =
    await prisma.jobApplication.findUnique({
      where: {
        id,
      },
    });

  if (!application) {
    throw new Error("Application not found");
  }

  return prisma.jobApplication.update({
    where: {
      id,
    },

    data: {
      status,
    },
  });
};


export const deleteApplication = async (id) => {

  const application =
    await prisma.jobApplication.findUnique({
      where: {
        id,
      },
    });

  if (!application) {
    throw new Error("Application not found");
  }

  return prisma.jobApplication.delete({
    where: {
      id,
    },
  });

};