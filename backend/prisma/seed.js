import bcrypt from "bcrypt";
import prisma from "../src/db/db.js";



async function main() {
    const existingAdmin = await prisma.admin.findUnique({
        where: {
            email: "admin@gmail.com",
        },
    });

    if (existingAdmin) {
        console.log("Admin Alreay exists");
        return
    }

    const hashedPassword = await bcrypt.hash("Admin@1234", 10);

    await prisma.admin.create({
        data: {
            name: "azzunique",
            email: "admin@gmail.com",
            password: hashedPassword,
        },
    }),

        console.log("Admin created successfully");
}

main().catch(console.error).finally(async () => {
    await prisma.$disconnect();
});