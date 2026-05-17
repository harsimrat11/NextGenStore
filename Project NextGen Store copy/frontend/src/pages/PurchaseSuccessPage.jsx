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
				setError("Payment processing failed");
			} finally {
				setIsProcessing(false);
			}
		};

		const sessionId = new URLSearchParams(
			window.location.search
		).get("session_id");

		if (sessionId) {
			handleCheckoutSuccess(sessionId);
		} else {
			setIsProcessing(false);
			setError("No session ID found in URL");
		}
	}, [clearCart]);

	if (isProcessing) return <div>Processing...</div>;

	if (error) return <div>Error: {error}</div>;

	return (
		<div className="h-screen flex items-center justify-center px-4">
			<Confetti
				width={window.innerWidth}
				height={window.innerHeight}
				gravity={0.1}
				numberOfPieces={700}
				recycle={false}
			/>

			<div className="max-w-lg w-full mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl">
				<div className="flex justify-center">
					<CheckCircle className="text-green-500 w-16 h-16 mb-4" />
				</div>

				<h1 className="text-3xl font-bold text-center text-white mb-4">
					Purchase Successful!
				</h1>

				<p className="text-gray-300 text-center mb-6">
					Thank you for your order.
				</p>

				<div className="space-y-4">
					<motion.button
						className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<HandHeart className="mr-2" size={18} />
						Thanks for trusting us!
					</motion.button>

					<Link
						to="/"
						className="w-full bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center"
					>
						Continue Shopping
						<ArrowRight className="ml-2" size={18} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PurchaseSuccessPage;
