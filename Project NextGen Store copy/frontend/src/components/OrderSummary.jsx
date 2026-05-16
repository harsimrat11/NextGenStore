import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
// 	"pk_test_51KZYccCoOZF2UhtOwdXQl3vcizup20zqKqT9hVUIsVzsdBrhqbUI2fE0ZdEVLdZfeHjeyFXtqaNsyCJCmZWnjNZa00PzMAjlcL"
// );
const stripePromise = loadStripe(
	"pk_test_51QMlgjKaj0hyHnIBFiHSKTSWlUxtmLr827wF0dE7N1bS3mnkM8HEzYOfiTDQL0NtHsID0TCiUsxPeXIPvefjT2Xy00if8sYEm5"
);
const OrderSummary = () => {
	const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();

	const savings = subtotal - total;
	const formattedSubtotal = subtotal.toFixed(2);
	const formattedTotal = total.toFixed(2);
	const formattedSavings = savings.toFixed(2);

	const handlePayment = async () => {
		const stripe = await stripePromise;

		console.log(localStorage.getItem("accessToken"));

		console.log(cart);

		const res = await fetch("/api/payments/create-checkout-session",{
            method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem("accessToken"),
			},
			body :JSON.stringify({
				products: cart,
				couponCode: coupon ? coupon.code : null,
			}),

		});
		// const res = await axios.post("/payments/create-checkout-session", {
		// 	products: cart,
		// 	couponCode: coupon ? coupon.code : null,
		// });

		const session = await res.json();
		console.log(session);
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			console.error("Error:", result.error);
		}
	};

	return (
		<motion.div
			className='space-y-4 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 shadow-neon-glow ring-neon-blue/20 backdrop-blur-sm lg:max-w-sm'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<p className='text-xl font-semibold text-neon-blue'>Order summary</p>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-gray-300'>Original price</dt>
						<dd className='text-base font-medium text-white'>₹{formattedSubtotal}</dd>
					</dl>

					{savings > 0 && (
						<dl className='flex items-center justify-between gap-4'>
							<dt className='text-base font-normal text-gray-300'>Savings</dt>
						<dd className='text-base font-medium text-neon-blue'>-₹{formattedSavings}</dd>
						</dl>
					)}

					{coupon && isCouponApplied && (
						<dl className='flex items-center justify-between gap-4'>
							<dt className='text-base font-normal text-gray-300'>Coupon ({coupon.code})</dt>
							<dd className='text-base font-medium text-neon-blue'>-{coupon.discountPercentage}%</dd>
						</dl>
					)}
					<dl className='flex items-center justify-between gap-4 border-t border-gray-600 pt-2'>
						<dt className='text-base font-bold text-white'>Total</dt>
						<dd className='text-base font-bold text-neon-blue'>₹{formattedTotal}</dd>
					</dl>
				</div>

				<motion.button
					className='flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-neon-blue to-ps-blue px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-neon-glow-lg focus:outline-none focus:ring-4 focus:ring-neon-blue/50 transition-all duration-300'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handlePayment}
				>
					Proceed to Checkout
				</motion.button>

				<div className='flex items-center justify-center gap-2'>
					<span className='text-sm font-normal text-gray-400'>or</span>
					<Link
						to='/'
						className='inline-flex items-center gap-2 text-sm font-semibold text-neon-blue underline hover:text-ps-blue hover:no-underline transition-colors duration-200'
					>
						Continue Shopping
						<MoveRight size={16} />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};
export default OrderSummary;
