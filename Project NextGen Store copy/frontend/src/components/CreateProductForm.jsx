import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import toast from "react-hot-toast";

const categories = [
  "PS5 Standard",
  "PS5 Slim",
  "PS5 Pro",
  "NVMe SSD",
  "Controllers",
  "Games",
  "Accessories",
  "Headphones",
];

const CreateProductForm = () => {
  const { createProduct, loading } = useProductStore();

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    model: "",
    color: "",
    specs: "",
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProduct((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(newProduct);

      toast.success("Product created successfully");

      setNewProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        model: "",
        color: "",
        specs: "",
      });
    } catch (error) {
      toast.error("Failed to create product");
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto bg-gray-900 border border-cyan-500/20 rounded-2xl shadow-2xl p-8"
    >
      <h2 className="text-3xl font-bold text-white mb-8">
        Create New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Description
          </label>
          <textarea
            rows="3"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Category
            </label>
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
            >
              <option value="">Select Category</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Model</label>
            <input
              type="text"
              name="model"
              value={newProduct.model}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Color</label>
            <input
              type="text"
              name="color"
              value={newProduct.color}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
            />
          </div>
        </div>

        {/* Specs */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Specifications
          </label>
          <textarea
            rows="3"
            name="specs"
            value={newProduct.specs}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
          />
        </div>

        {/* Upload */}
        <div>
          <label className="block text-sm text-gray-300 mb-3">
            Product Image
          </label>

          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          <label
            htmlFor="imageUpload"
            className="inline-flex items-center gap-2 cursor-pointer bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl transition"
          >
            <Upload size={18} />
            Upload Image
          </label>

          {newProduct.image && (
            <p className="text-green-400 text-sm mt-3">
              Image selected successfully
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <Loader className="animate-spin" size={18} />
              Creating...
            </>
          ) : (
            <>
              <PlusCircle size={18} />
              Create Product
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default CreateProductForm;