import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const FeaturedProducts = ({ featuredProducts }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const { addToCart } = useCartStore();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
	};

	const isStartDisabled = currentIndex === 0;
	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

	return (
		<div className='py-12 bg-black/20'>
			<div className='container mx-auto px-4'>
				<h2 className='text-center text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-12 drop-shadow-2xl tracking-tight'>
					Featured Products
				</h2>

				<div className='relative'>
					<div className='overflow-hidden rounded-3xl'>
						<div
							className='flex transition-transform duration-500 ease-in-out'
							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
						>
							{featuredProducts?.map((product, index) => (
								<div key={product._id} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-3'>
									<div className='group bg-black/40 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,191,255,0.25)] border border-white/10 hover:border-cyan-400/40'>
										<div className='overflow-hidden rounded-t-2xl'>
											<img
												src={product.image}
												alt={product.name}
												className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700'
											/>
										</div>

										<div className='p-6'>
											<h3 className='text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors'>{product.name}</h3>
											<p className='text-cyan-400 font-black text-2xl mb-6 tracking-wide'>
												₹{product.price.toFixed(0)}
											</p>

											<button
												onClick={() => addToCart(product)}
												className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] hover:scale-[1.05] flex items-center justify-center text-lg tracking-wide'
											>
												<ShoppingCart className='w-6 h-6 mr-3' />
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={prevSlide}
						disabled={isStartDisabled}
						className={`absolute top-1/2 -left-6 -translate-y-1/2 p-4 rounded-2xl transition-all duration-300 bg-black/60 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-glow-lg hover:scale-110 ${
							isStartDisabled ? 'opacity-40 cursor-not-allowed' : ''
						}`}
					>
						<ChevronLeft className='w-8 h-8 text-white drop-shadow-lg' />
					</button>

					<button
						onClick={nextSlide}
						disabled={isEndDisabled}
						className={`absolute top-1/2 -right-6 -translate-y-1/2 p-4 rounded-2xl transition-all duration-300 bg-black/60 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-glow-lg hover:scale-110 ${
							isEndDisabled ? 'opacity-40 cursor-not-allowed' : ''
						}`}
					>
						<ChevronRight className='w-8 h-8 text-white drop-shadow-lg' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;

