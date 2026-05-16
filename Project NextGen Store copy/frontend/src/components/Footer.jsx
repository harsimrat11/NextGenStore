  
import { FaInstagram, FaFacebook, FaYoutube, FaHome, FaInfoCircle, FaSignInAlt, FaUserPlus, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
return (
    <footer className="bg-almost-black text-gray-400 text-sm py-12 mt-16 border-t border-neon-blue/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-neon-blue to-ps-blue bg-clip-text text-transparent">NextGen Store</h2>
            <p className="text-sm">Your one-stop destination for next-gen gaming gear and accessories. Experience tomorrow's play today.</p>
          </div>


          <div className="flex justify-center md:justify-start">
            <ul className="space-y-2">
              <li>
	<Link to="/" className="flex items-center hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300">
                  <FaHome className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
	<Link to="/about" className="flex items-center hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300">
                  <FaInfoCircle className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="flex items-center hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300">
                  <FaSignInAlt className="mr-2" />
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="flex items-center hover:text-neon-blue hover:drop-shadow-neon-glow transition-all duration-300">
                  <FaUserPlus className="mr-2" />
                  Signup
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="font-semibold text-white mb-4">Contact Us</p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhoneAlt className="mr-2" /> <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-white">9877129490</a>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" /> <a href="mailto:harsimrat395.be22@chitkara.edu.in" className="text-gray-300 hover:text-white">harsimrat395.be22@chitkara.edu.in</a>
            </p>
          </div>

          {/*  Icons */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-white mb-4">Follow Us</p>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a href="https://www.instagram.com" className="text-gray-300 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" className="text-gray-300 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com" className="text-gray-300 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* other links */}
        <div className="mt-8 text-center">
          <p className="text-sm">© 2026 NextGen Store. All Rights Reserved.</p>
          <p className="text-sm mt-2">Explore more: <Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link> | <Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link> | <Link to="/returns" className="text-gray-300 hover:text-white">Return Policy</Link> | <Link to="/faq" className="text-gray-300 hover:text-white">FAQs</Link></p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
