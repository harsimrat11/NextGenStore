import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useCartStore } from "../stores/useCartStore";
import { useUserStore } from "../stores/useUserStore";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Footer from "../components/Footer";

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();
	const { addToCart } = useCartStore();
	const { user } = useUserStore();

	const { category } = useParams();

	const convertSlugToCategory = (slug) => {
		const categoryMap = {
			'ps5-standard': 'PS5 Standard',
			'ps5-slim': 'PS5 Slim',
			'ps5-pro': 'PS5 Pro',
			'nvme-ssd': 'NVMe SSD',
			'controllers': 'Controllers',
			'games': 'Games',
			'accessories': 'Accessories',
			'headphones': 'Headphones'
		};
		return categoryMap[slug] || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	};

	const categoryTitle = convertSlugToCategory(category);

	useEffect(() => {
		const categoryName = convertSlugToCategory(category);
		fetchProductsByCategory(categoryName);
	}, [fetchProductsByCategory, category]);

	const handleAddToCart = (product) => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		}
		addToCart(product);
		toast.success(`${product.name} added to cart!`);
	};

	if (!products) return <div className="text-white text-center py-20">Loading...</div>;

	return (
		<div className='min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow'>
				<motion.h1
					className='text-center text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-20 drop-shadow-2xl tracking-tight'
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{categoryTitle}
				</motion.h1>

				<div className='space-y-12'>
					{products.length === 0 && (
						<motion.h2 
							className='text-4xl font-semibold text-gray-400 text-center py-20'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							No products found in this category
						</motion.h2>
					)}

					{products.map((product, index) => (
						<motion.div
							key={product._id}
							className='group bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-400/70 rounded-3xl p-6 lg:p-10 shadow-2xl hover:shadow-[0_25px_50px_rgba(6,182,212,0.25)] transition-all duration-500 hover:bg-gray-900/80 overflow-hidden'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.05 }}
							whileHover={{ y: -8 }}
						>
							<div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
								{/* Left: Image + Button */}
								<div className='flex flex-col items-center lg:items-start lg:w-[35%] w-full'>
									<div className='relative w-full'>
										<img 
											src={product.image} 
											alt={product.name} 
											className='w-full h-64 lg:h-72 object-contain rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-black/10 p-4 lg:p-6'
										/>
										{product.isFeatured && (
											<div className='absolute -top-3 left-1/2 lg:left-auto lg:left-4 -translate-x-1/2 lg:translate-x-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-4 py-1.5 rounded-full shadow-2xl text-xs tracking-wide whitespace-nowrap'>
												<Star className='w-3.5 h-3.5 inline mr-1' /> Featured
											</div>
										)}
									</div>
									<button
										onClick={() => handleAddToCart(product)}
										className='mt-6 w-full max-w-xs lg:max-w-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.03] text-base tracking-wide flex items-center justify-center'
									>
										<ShoppingCart className='w-5 h-5 mr-2' />
										Add to Cart
									</button>
								</div>

								{/* Right: Details */}
								<div className='w-full lg:w-[65%] space-y-4'>
									<h2 className='text-3xl lg:text-4xl font-black text-white leading-tight group-hover:text-cyan-200 transition-colors line-clamp-2'>
										{product.name}
									</h2>
									<p className='text-lg text-gray-300 leading-relaxed line-clamp-3'>
										{product.description}
									</p>
									<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2 border-t border-gray-700/30'>
										<div>
											<span className='text-cyan-300 font-semibold text-base'>Model</span>
											<p className='text-xl font-bold text-white mt-1'>{product.model}</p>
										</div>
										<div>
											<span className='text-cyan-300 font-semibold text-base'>Color</span>
											<p className='text-xl font-bold text-white mt-1'>{product.color}</p>
										</div>
										<div>
											<span className='text-cyan-300 font-semibold text-base'>Price</span>
											<p className='text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-1'>₹{product.price.toLocaleString()}</p>
										</div>
										<div className='lg:col-span-2'>
											<span className='text-cyan-300 font-semibold text-base'>Specs</span>
											<p className='text-lg text-gray-200 mt-1 leading-relaxed line-clamp-2'>{product.specs}</p>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CategoryPage;
