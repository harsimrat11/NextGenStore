
// export default router;
import express from "express";
import {
	getAllProducts,
	getFeaturedProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductsByCategory,
	toggleFeaturedProduct,
	getProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.patch("/:id", toggleFeaturedProduct);
router.delete("/:id", deleteProduct);

router.get("/category/:category",getProductsByCategory);

export default router;
