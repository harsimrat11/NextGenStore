import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import cors from "cors";

// Import MongoDB connection function
import connectDB from "./lib/db.js";

const __dirname = path.resolve();

// Resolve correct .env path
const envPath = path.join(__dirname, ".env");

console.log("Loading .env from:", envPath);

// Load environment variables
dotenv.config({ path: envPath });

// Check if MongoDB URI is loading
console.log("MONGO_URI from .env:", process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "frontend", "dist")));

	app.get("*", (req, res) => {
		res.sendFile(
			path.join(__dirname, "frontend", "dist", "index.html")
		);
	});
}

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
