import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
	},
	category: {
		type: String,
		required: true,
	},
	isFeatured: {
		type: Boolean,
		default: false,
	},

	model: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	specs: {
		type: String,
		required: true,
	},

}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;