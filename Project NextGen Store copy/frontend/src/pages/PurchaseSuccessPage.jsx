import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const PurchaseSuccessPage = () => {
	const [isProcessing, setIsProcessing] = useState(true);
	const { clearCart } = useCartStore();
	const [error, setError] = useState(null);

	useEffect(() => {
		const handleCheckoutSuccess = async (sessionId) => {
			try {
				await axios.post("/payments/checkout-success", {
					sessionId,
				});
				clearCart();
			} catch (error) {
				console.log(error);
			} finally {
				setIsProcessing(false);
			}
		};

		const sessionId = new URLSearchParams(window.location.search).get("session_id");
		if (sessionId) {
			handleCheckoutSuccess(sessionId);
		} else {
			setIsProcessing(false);
			setError("No session ID found in the URL");
		}
	}, [clearCart]);

	if (isProcessing) return "Processing...";

	if (error) return `Error: ${error}`;

	return (
		<div className='h-screen flex items-center justify-center px-4'>
			<Confetti
				width={window.innerWidth}
				height={window.innerHeight}
				gravity={0.1}
				style={{ zIndex: 99 }}
				numberOfPieces={700}
				recycle={false}
			/>

			<div className='max-w-lg w-full mx-auto bg-gradient-to-br from-gray-800/60 via-gray-900/50 to-black/70 rounded-2xl shadow-2xl ring-neon-blue/20 backdrop-blur-xl overflow-hidden relative z-10'>
				<div className='p-8 md:p-10'>
					<div className='flex justify-center'>
						<CheckCircle className='text-neon-blue w-16 h-16 mb-4 animate-pulse drop-shadow-[0_0_20px_rgba(0,191,255,0.5)]' />
					</div>
					<h1 className='text-2xl sm:text-3xl font-black text-center mb-2 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent drop-shadow-2xl'>
						Purchase Successful!
					</h1>

					<p className='text-gray-300 text-center mb-2'>
						Thank you for your order. {"We're"} processing it now.
					</p>
					<p className='text-neon-blue text-center text-sm mb-6 font-semibold drop-shadow-sm'>
						Check your email for order details and updates.
					</p>
					<div className='bg-gray-700 rounded-lg p-4 mb-6'>
						<div className='flex items-center justify-between mb-2'>
							<span className='text-sm text-gray-400'>Order number</span>
							<span className='text-sm font-semibold text-neon-blue'>#12345</span>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-gray-400'>Estimated delivery</span>
							<span className='text-sm font-semibold text-neon-blue'>3-5 business days</span>
						</div>
					</div>

					<div className='space-y-4'>
						<motion.button
							className='w-full bg-gradient-to-r from-neon-blue to-ps-blue hover:shadow-neon-glow-lg text-white font-bold py-3 px-6
             rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-neon-blue/50 hover:scale-105'
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<HandHeart className='mr-2' size={18} />
							Thanks for trusting us!
						</motion.button>
						<Link
							to={"/"}
							className='w-full bg-gradient-to-r from-neon-blue/90 to-ps-blue hover:shadow-neon-glow-lg text-white font-bold py-3 px-6 
            rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-neon-blue/50 hover:scale-105'
						>
							Continue Shopping
							<ArrowRight className='ml-2' size={18} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PurchaseSuccessPage;
