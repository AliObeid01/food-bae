import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Phone, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { restaurantInfo } from '../data/menu';
import { createPortal } from 'react-dom';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'Our Story' },
  { path: '/contact', label: 'Contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleWhatsAppOrder = () => {
    const whatsappNumber = restaurantInfo.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order.`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-cream-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="relative z-10 group flex items-center gap-2">
            <motion.span 
              whileHover={{ scale: 1.02 }}
              className="font-display text-2xl sm:text-3xl bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"
            >
              FOOD BAE
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-cream-100/80 backdrop-blur-sm px-2 py-1.5 rounded-full border border-cream-200/50">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-brown-500 hover:text-brown-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <motion.button
              onClick={toggleCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-brown-500 hover:text-primary-500 hover:bg-cream-200' 
                  : 'text-brown-600 hover:text-primary-500 hover:bg-white/50'
              }`}
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingBag size={22} />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-[20px] px-1.5 text-[10px] font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-md"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Order Now Button - Desktop */}
            <motion.button
              onClick={handleWhatsAppOrder}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaWhatsapp size={16} />
              <span>Order Now</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-brown-500 hover:text-primary-500 hover:bg-cream-200' 
                  : 'text-brown-600 hover:text-primary-500 hover:bg-white/50'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Using Portal */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-brown-900/40 backdrop-blur-sm lg:hidden z-[9999]"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-white to-cream-50 shadow-2xl lg:hidden overflow-y-auto z-[9999]"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-5 border-b border-cream-200">
                  <span className="font-display text-2xl bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                    FOOD BAE
                  </span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-brown-400 hover:text-brown-600 hover:bg-cream-200 rounded-xl transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="p-5 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center px-5 py-4 text-lg font-medium rounded-2xl transition-all duration-300 ${
                            isActive
                              ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                              : 'text-brown-600 hover:text-primary-500 hover:bg-cream-200'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-cream-200 bg-white/80 backdrop-blur-sm">
                  <motion.button
                    onClick={handleWhatsAppOrder}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white btn-whatsapp hover:from-primary-600 hover:to-primary-700 rounded-full transition-all duration-300 shadow-lg"
                  >
                    <FaWhatsapp size={18} />
                    <span>Order on WhatsApp</span>
                  </motion.button>

                  <div className="mt-5 pt-5 border-t border-cream-200 text-center space-y-1">
                    <p className="text-sm font-medium text-brown-600">{restaurantInfo.phone}</p>
                    <p className="text-sm text-brown-400">{restaurantInfo.email}</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}

export default Header;
