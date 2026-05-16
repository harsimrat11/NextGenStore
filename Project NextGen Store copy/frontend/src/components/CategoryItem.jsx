import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryItem = ({ category }) => {
	return (
	<motion.div 
			className='group relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-3xl cursor-pointer bg-gradient-to-b from-white/95 to-gray-50/80 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,191,255,0.4)] border border-cyan-200/50 hover:border-cyan-400/70 overflow-hidden hover:scale-105 transition-all duration-500 backdrop-blur-sm'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 400, damping: 25 }}
		>
			<Link to={"/category" + category.href} className="block h-full w-full">
				<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none' />
				<img
					src={category.imageUrl}
					alt={category.name}
					className='w-full h-full object-contain p-4 md:p-6 group-hover:scale-[1.01] transition-transform duration-500'
					loading='lazy'
				/>
				<div className='absolute bottom-4 left-4 z-30'>
					<motion.h3 
						className='text-lg sm:text-xl font-semibold text-white [text-shadow:0_0_8px_rgba(0,191,255,0.6)] drop-shadow-lg group-hover:[text-shadow:0_0_12px_rgba(0,191,255,0.8)] transition-all duration-300'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						{category.name}
					</motion.h3>
				</div>
			</Link>
		</motion.div>
	);
};

export default CategoryItem;
