import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import adminRoutes from "./routes/admin.routes.js"

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes); 




export default app;
