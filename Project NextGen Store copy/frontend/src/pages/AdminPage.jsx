// import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import AnalyticsTab from "../components/AnalyticsTab";
// import CreateProductForm from "../components/CreateProductForm";
// import ProductsList from "../components/ProductsList";
// import { useProductStore } from "../stores/useProductStore";

// const tabs = [
// 	{ id: "create", label: "Create Product", icon: PlusCircle },
// 	{ id: "products", label: "Products", icon: ShoppingBasket },
// 	{ id: "analytics", label: "Analytics", icon: BarChart },
// ];

// const AdminPage = () => {
// 	const [activeTab, setActiveTab] = useState("create");
// 	const { fetchAllProducts } = useProductStore();

// 	useEffect(() => {
// 		fetchAllProducts();
// 	}, [fetchAllProducts]);

// 	return (
// 		<div className='min-h-screen relative overflow-hidden'>
// 			<div className='relative z-10 container mx-auto px-4 md:px-8 py-12 lg:py-20'>
// 				<motion.h1
// 					className='text-4xl lg:text-5xl font-black mb-12 text-center bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent drop-shadow-2xl tracking-tight'
// 					initial={{ opacity: 0, y: -20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8 }}
// 				>
// 					Admin Dashboard
// 				</motion.h1>

// 				<div className='flex justify-center mb-8'>
// 					{tabs.map((tab) => (
// 							<button
// 							key={tab.id}
// 							onClick={() => setActiveTab(tab.id)}
// 							className={`flex items-center px-6 py-3 mx-2 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-neon-glow-lg ${
// 								activeTab === tab.id
// 									? "bg-gradient-to-r from-neon-blue to-ps-blue text-white shadow-neon-glow"
// 									: "bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-200 border border-gray-600/50 hover:bg-gray-600/50 ring-neon-blue/20 backdrop-blur-sm"
// 							}`}
// 						>
// 							<tab.icon className='mr-3 h-5 w-5' />
// 							{tab.label}
// 						</button>
// 					))}
// 				</div>
// 				{activeTab === "create" && <CreateProductForm />}
// 				{activeTab === "products" && <ProductsList />}
// 				{activeTab === "analytics" && <AnalyticsTab />}
// 			</div>
// 		</div>
// 	);
// };
// export default AdminPage;


import {
  BarChart3,
  PlusCircle,
  ShoppingBasket,
  Sparkles,
  Edit,
  Trash2,
  Package2,
  Search,
  Star,
} from "lucide-react";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab";
import CreateProductForm from "../components/CreateProductForm";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
  {
    id: "create",
    label: "Add Product",
    desc: "Launch new items",
    icon: PlusCircle,
  },
  {
    id: "products",
    label: "Products",
    desc: "Inventory control",
    icon: ShoppingBasket,
  },
  {
    id: "analytics",
    label: "Analytics",
    desc: "Revenue insights",
    icon: BarChart3,
  },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("products");
  const { fetchAllProducts } = useProductStore();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div className="min-h-screen bg-[#05070d] text-white px-4 md:px-8 py-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
              <Sparkles size={18} className="text-cyan-300" />
            </div>

            <span className="uppercase tracking-[0.3em] text-xs text-cyan-300">
              Control Center
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Manage products, inventory and store analytics.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-3xl p-[1px] transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                    : "bg-white/10"
                }`}
              >
                <div
                  className={`rounded-3xl px-5 py-5 h-full text-left backdrop-blur-xl border ${
                    active
                      ? "bg-[#0b1020] border-white/10"
                      : "bg-[#0b0f18] border-white/5 hover:bg-[#101625]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-2xl ${
                        active
                          ? "bg-gradient-to-br from-cyan-300 to-blue-500 text-black"
                          : "bg-white/5 text-cyan-300"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="font-semibold text-sm md:text-base text-white">
                        {tab.label}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">{tab.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 md:p-7 shadow-[0_0_40px_rgba(0,255,255,0.05)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "create" && <CreateProductForm />}

              {activeTab === "products" && <ProductsSection />}

              {activeTab === "analytics" && <AnalyticsTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/* PRODUCTS TAB */
const ProductsSection = () => {
  const { products, deleteProduct, toggleFeaturedProduct } = useProductStore();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Product Inventory
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Manage products with futuristic control panel styling.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search product..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020]/90 backdrop-blur-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs uppercase tracking-widest text-gray-400">
              <th className="px-6 py-5">Product</th>
              <th className="px-6 py-5">Price</th>
              <th className="px-6 py-5">Stock</th>
              <th className="px-6 py-5">Featured</th>
              <th className="px-6 py-5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <motion.tr
                key={product._id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="border-b border-white/5 hover:bg-white/[0.03]"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-white/10"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        {product.name}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">
                        ID: {product._id.slice(-6)}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 font-semibold text-cyan-300">
                  ₹{product.price}
                </td>

                <td className="px-6 py-5">
                  <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                    In Stock
                  </span>
                </td>

                <td className="px-6 py-5">
                  <button
                    onClick={() => toggleFeaturedProduct(product._id)}
                    className={`p-2 rounded-xl ${
                      product.isFeatured
                        ? "bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                        : "bg-white/5 text-gray-500 border border-white/10"
                    }`}
                  >
                    <Star
                      size={16}
                      fill={product.isFeatured ? "currentColor" : "none"}
                    />
                  </button>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 rounded-xl bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20">
                      <Edit size={16} />
                    </button>

                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="p-2 rounded-xl bg-red-500/10 text-red-300 hover:bg-red-500/20"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid lg:hidden gap-4">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className="rounded-3xl border border-white/10 bg-[#0b1020]/90 p-4"
          >
            <div className="flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  {product.name}
                </h3>

                <p className="text-cyan-300 font-bold mt-1">
                  ₹{product.price}
                </p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => toggleFeaturedProduct(product._id)}
                    className="p-2 rounded-xl bg-yellow-400/10 text-yellow-300"
                  >
                    <Star
                      size={16}
                      fill={product.isFeatured ? "currentColor" : "none"}
                    />
                  </button>

                  <button className="p-2 rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Edit size={16} />
                  </button>

                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="p-2 rounded-xl bg-red-500/10 text-red-300"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty */}
      {products.length === 0 && (
        <div className="rounded-3xl border border-dashed border-white/10 py-14 text-center mt-4">
          <Package2 className="mx-auto text-gray-500 mb-3" size={30} />
          <p className="text-gray-400">No products available</p>
        </div>
      )}
    </div>
  );
};

export default AdminPage;