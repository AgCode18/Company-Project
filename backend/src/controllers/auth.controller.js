import prisma from "../db/db.js";
import { generateToken } from "../utils/generateToken.js";

import bcrypt from "bcrypt"
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await prisma.admin.findUnique({
            where: {
                email,
            },
        });

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Admin created successfully",
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect"
            });
        }

        const token = generateToken(admin.id);

        return res.status(200).json({
            success: true,
            token,
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};