import bcrypt from "bcrypt";
import prisma from "../src/db/db.js";

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: "admin@gmail.com",
    },
  });

  if (existingUser) {
    console.log("Super Admin already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@1234", 10);

  await prisma.user.create({
    data: {
      name: "Super Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "SUPER_ADMIN",
      isActive: true,
    },
  });

  console.log("Super Admin created successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
