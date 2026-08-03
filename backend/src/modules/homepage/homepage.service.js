import prisma from "../../db/db.js";

/* ===========================
   Get Homepage Settings
=========================== */

export const getHomepage = async () => {
  let homepage = await prisma.homepageSetting.findFirst();

  if (!homepage) {
    homepage = await prisma.homepageSetting.create({
      data: {
        heroTitle: "Welcome to Our Company",
      },
    });
  }

  return homepage;
};

/* ===========================
   Update Homepage Settings
=========================== */

export const updateHomepage = async (data) => {
  let homepage = await prisma.homepageSetting.findFirst();

  if (!homepage) {
    homepage = await prisma.homepageSetting.create({
      data: {
        heroTitle: data.heroTitle,
        ...data,
      },
    });

    return homepage;
  }

  return prisma.homepageSetting.update({
    where: {
      id: homepage.id,
    },
    data,
  });
};