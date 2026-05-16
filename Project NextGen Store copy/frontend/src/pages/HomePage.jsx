// import { useEffect } from "react";
// import CategoryItem from "../components/CategoryItem";
// import { useProductStore } from "../stores/useProductStore";
// import FeaturedProducts from "../components/FeaturedProducts";
// const categories = [
// 	{ href: "/street", name: "Street", imageUrl: "/street.jpg" },
// 	{ href: "/sportster", name: "Sportster", imageUrl: "/sportster.jpg.webp" },
// 	{ href: "/dyna", name: "Dyna", imageUrl: "/dyna.jpeg" },
// 	{ href: "/soft-tail", name: "Soft-Tail", imageUrl: "/soft-tail.jpeg" },
// 	{ href: "/touring", name: "Touring", imageUrl: "/touring.jpeg" },
// 	{ href: "/vrod", name: "V-Rod", imageUrl: "/vrod.jpeg" },
// 	{ href: "/accessories", name: "Accessories", imageUrl: "/accessories.jpeg" },
// ];

// const HomePage = () => {
// 	const { fetchFeaturedProducts, featuredProducts, isLoading } = useProductStore();

// 	useEffect(() => {
// 		fetchFeaturedProducts();
// 	}, [fetchFeaturedProducts]);

// 	useEffect(() => {
// 		if (window.location.hash === "#featured") {
// 			const element = document.getElementById("featured");
// 			if (element) {
// 				element.scrollIntoView({ behavior: "smooth" });
// 			}
// 		}
// 	}, []);

// 	return (
// 		<div className='relative min-h-screen text-white overflow-hidden flex flex-col'>
// 			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow'>
// 				<h1 className='text-center text-5xl sm:text-6xl font-bold text-[#6A0DAD] mb-4'>
// 					Explore Our Categories
// 				</h1>
// 				<p className='text-center text-xl text-gray-300 mb-12'>
// 					Unleash Power – Elevate Your Ride
// 				</p>

// 				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
// 					{categories.map((category) => (
// 						<CategoryItem category={category} key={category.name} />
// 					))}
// 				</div>

// 				{!isLoading && featuredProducts.length > 0 && (
// 					<div id="featured">
// 						<FeaturedProducts featuredProducts={featuredProducts} />
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default HomePage;
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/ps5-standard", name: "PS5 Standard", imageUrl: "/ps5.jpeg" },
  { href: "/ps5-slim", name: "PS5 Slim", imageUrl: "/ps5slim.jpeg" },
  { href: "/ps5-pro", name: "PS5 Pro", imageUrl: "/ps5pro.jpeg" },
  { href: "/nvme-ssd", name: "NVMe SSD", imageUrl: "/nvmessd.png" },
  { href: "/controllers", name: "Controllers", imageUrl: "/controller.jpeg" },
  { href: "/games", name: "Games", imageUrl: "/gamedisc.webp" },
  { href: "/accessories", name: "Accessories", imageUrl: "/accessories.png" },
  { href: "/headphones", name: "Headphones", imageUrl: "/headphones.jpeg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, featuredProducts, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  useEffect(() => {
    if (window.location.hash === "#featured") {
      const element = document.getElementById("featured");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const { scrollYProgress } = useScroll();

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <div className="relative overflow-hidden text-white bg-almost-black min-h-screen">
      {/* 1. HERO SECTION */}
      <motion.section 
        className="hero-bg h-screen flex items-center justify-center px-4 text-center relative"
        style={{ y: yHero }}
      >
        <div className="absolute inset-0 bg-almost-black/70 z-10" />
        <motion.div 
          className="relative z-20 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 text-glow bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent drop-shadow-2xl tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Enter the
            <br />
            <span className="block">Next Generation</span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-gray-200/80 max-w-3xl mx-auto mb-16 leading-relaxed opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Beyond gaming. This is pure immersion.
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <motion.a
              href="/category/ps5-pro"
              className="btn-neon text-xl font-bold py-6 px-16 shadow-ps-glow hover:shadow-neon-glow-lg tracking-wide"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 1.2 }}
            >
              Shop Now
            </motion.a>
            <motion.button
              onClick={() => document.getElementById('ps5')?.scrollIntoView({ behavior: 'smooth' })}
              className="py-6 px-16 border-2 border-neon-blue/40 bg-transparent text-neon-blue font-bold rounded-full hover:bg-neon-blue/5 hover:border-neon-blue hover:shadow-neon-glow transition-all duration-300 text-xl tracking-wide"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 1.4 }}
            >
              Explore
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* 2. PS5 PRODUCT SHOWCASE */}
      <section id="ps5" className="relative py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-glow mb-8 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent">
            PlayStation 5
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
            Lightning speed. Breathtaking immersion.
          </p>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            className="relative max-w-4xl w-full h-[600px] sm:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl shadow-neon-glow-lg border border-neon-blue/20 backdrop-blur-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.2 }}
          >
            <img 
              src="ps5home.png" 
              alt="PlayStation 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-almost-black/70 via-transparent to-transparent" />
          </motion.div>
        </div>
        <div className="text-center mt-20">
          <motion.button
            className="btn-neon text-xl font-bold py-6 px-20 shadow-ps-glow hover:shadow-neon-glow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Buy Now →
          </motion.button>
        </div>
      </section>

      {/* 3. PS5 PRO UPGRADE */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-glow mb-8 bg-gradient-to-r from-ps-blue to-neon-blue bg-clip-text text-transparent">
              Upgrade to Pro
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed mb-12">
              More power. More performance. Engineered for the future of gaming.
            </p>
            <motion.a
              href="/category/ps5-pro"
              className="btn-neon text-xl font-bold py-5 px-12 shadow-ps-glow hover:shadow-neon-glow-lg inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore PS5 Pro
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-ps-glow border border-neon-blue/20"
          >
            <img 
              src="/ps5pro.png" 
              alt="PS5 Pro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-almost-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      {!isLoading && featuredProducts.length > 0 && (
        <section id="featured" className="relative py-40 bg-almost-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedProducts featuredProducts={featuredProducts} />
          </div>
        </section>
      )}

      {/* 5. CATEGORIES BOTTOM */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent mb-6 text-glow">
            Explore Categories
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <CategoryItem category={category} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. FINAL BANNER */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-almost-black via-gray-900/30 to-almost-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_10%,rgba(0,112,210,0.08),transparent)] opacity-50" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-glow mb-8 bg-gradient-to-r from-neon-blue via-white to-ps-blue/80 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            More than gaming.
            <span className="block text-6xl md:text-8xl lg:text-9xl">This is immersion.</span>
          </motion.h2>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

