import prisma from "../../db/db.js";

/* ===========================
   Get Website Settings
=========================== */

export const getWebsiteSettings = async () => {
  let settings = await prisma.websiteSetting.findFirst();

  if (!settings) {
    settings = await prisma.websiteSetting.create({
      data: {
        companyName: "My Company",
      },
    });
  }

  return settings;
};

/* ===========================
   Update Website Settings
=========================== */

export const updateWebsiteSettings = async (data) => {
  let settings = await prisma.websiteSetting.findFirst();

  if (!settings) {
    settings = await prisma.websiteSetting.create({
      data: {
        companyName: data.companyName,
        ...data,
      },
    });

    return settings;
  }

  return prisma.websiteSetting.update({
    where: {
      id: settings.id,
    },
    data,
  });
};