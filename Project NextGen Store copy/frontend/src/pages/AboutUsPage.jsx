import { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden text-white bg-almost-black min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,112,210,0.15)_0.32%,rgba(0,191,255,0.08)_25%,rgba(10,10,10,0.95)_100%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-black text-glow mb-12 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        <section className="mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            1. Introduction
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            NextGen Store is an online platform focused on next-generation gaming products, offering a modern and immersive shopping experience.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We bring the latest in gaming directly to you with seamless browsing and fast delivery.
          </motion.p>
        </section>

        <section className="mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            2. What We Offer
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium PlayStation consoles (Standard, Slim, Pro), high-quality accessories including controllers and headphones, popular games, and essential gaming equipment.
          </motion.p>
        </section>

        <section className="mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            3. Our Approach
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We prioritize simplicity, clean design, and smooth user experience to make shopping effortless.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every detail is crafted for reliability and premium service.
          </motion.p>
        </section>

        <section className="mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            4. Technology
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built with the MERN stack for performance. Secure payments powered by Stripe.
          </motion.p>
        </section>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent text-glow"
          >
            5. Closing
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-200 max-w-3xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            NextGen Store: Elevating your gaming world, one purchase at a time.
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUsPage;

