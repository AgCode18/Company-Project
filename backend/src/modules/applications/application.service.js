import prisma from "../../db/db.js";

/**
 * Get all applications
 */
export async function getApplications({
  page = 1,
  limit = 10,
  search = "",
  status,
}) {
  const skip = (Number(page) - 1) * Number(limit);

  const where = {
    ...(search && {
      OR: [
        {
          fullName: {
            contains: search,
          },
        },
        {
          email: {
            contains: search,
          },
        },
      ],
    }),

    ...(status && { status }),
  };

  const [applications, total] = await Promise.all([
    prisma.jobApplication.findMany({
      where,
      include: {
        job: true,
      },
      skip,
      take: Number(limit),
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.jobApplication.count({
      where,
    }),
  ]);

  return {
    applications,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
}

/**
 * Get application by ID
 */
export async function getApplicationById(id) {
  return prisma.jobApplication.findUnique({
    where: {
      id,
    },
    include: {
      job: true,
    },
  });
}

/**
 * Update application status
 */
export async function updateApplicationStatus(id, status) {
  return prisma.jobApplication.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
}

/**
 * Delete application
 */
export async function deleteApplication(id) {
  return prisma.jobApplication.delete({
    where: {
      id,
    },
  });
}