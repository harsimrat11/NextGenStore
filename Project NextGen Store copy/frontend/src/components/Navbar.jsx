	import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();
	const location = useLocation();
	const navigate = useNavigate();

	const handleFeaturedClick = () => {
		if (location.pathname === "/") {
			// Scroll manually if already on home page
			const section = document.getElementById("featured");
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			// Navigate to home with hash
			navigate("/#featured");
		}
	};

return (
		<header className="fixed top-0 left-0 w-full bg-almost-black/60 backdrop-blur-md shadow-[0_1px_10px_rgba(0,191,255,0.1)] z-40 transition-all duration-300 border-b border-almost-black/50">
			<div className="container mx-auto px-4 py-3">
				<div className="flex flex-wrap justify-between items-center">
					<Link to="/" className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent items-center space-x-2 flex">
						NextGen Store
					</Link>

					<nav className='flex flex-wrap items-center gap-4'>
						<Link to="/" className="text-gray-300 hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300 ease-in-out" >
							Home

						</Link>

						<button
							onClick={handleFeaturedClick}
							className="text-gray-300 hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300 ease-in-out"
						>
							Featured

						</button>

						<Link to="/about" className="text-gray-300 hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300 ease-in-out">
							About Us

						</Link>

						{user && (
							<Link to="/cart" className="relative group text-gray-300 hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300 ease-in-out">
								<ShoppingCart className="inline-block mr-1 group-hover:text-neon-blue" size={20} />

								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span className="absolute -top-2 -left-2 bg-neon-blue text-almost-black rounded-full px-2 py-0.5 text-xs shadow-neon-glow transition-all duration-300">
										{cart.length}
									</span>
								)}
							</Link>
						)}

						{isAdmin && (
							<Link to="/secret-dashboard" className="bg-almost-black/50 hover:bg-neon-blue/10 border border-neon-blue/30 hover:border-neon-blue text-white px-3 py-1 rounded-full font-medium transition-all duration-300 ease-in-out flex items-center hover:shadow-neon-glow">
								<Lock className="inline-block mr-1" size={18} />

								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button onClick={logout} className="border border-gray-600/50 bg-transparent hover:bg-neon-blue/5 text-white py-2 px-4 rounded-full flex items-center transition-all duration-300 ease-in-out hover:shadow-neon-glow/50 hover:border-neon-blue/30">
								<LogOut size={18} />
								<span className="hidden sm:inline ml-2">Log Out</span>
							</button>
						) : (
							<>
								<Link to="/signup" className="border border-neon-blue/50 bg-transparent hover:bg-neon-blue/10 text-neon-blue py-2 px-4 rounded-full flex items-center transition-all duration-300 ease-in-out hover:shadow-neon-glow">
									<UserPlus className="mr-2" size={18} />
									Sign Up
								</Link>
								<Link to="/login" className="border border-gray-600/50 bg-transparent hover:bg-neon-blue/5 text-white py-2 px-4 rounded-full flex items-center transition-all duration-300 ease-in-out hover:shadow-neon-glow/50 hover:border-neon-blue/30">
									<LogIn className="mr-2" size={18} />
									Login
								</Link>

							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
