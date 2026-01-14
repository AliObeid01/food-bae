import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { restaurantInfo } from '../data/menu';
import { useCart } from '../context/CartContext';
import ghostSvg from '../assets/ghost.svg';

function WhatsAppButton() {
  const { items } = useCart();

  const handleClick = () => {
    const whatsappNumber = restaurantInfo.whatsapp.replace(/\D/g, '');
    const message = items.length > 0
      ? `Hi! I'm browsing your menu and would like to place an order.`
      : `Hi! I'd like to place an order.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <AnimatePresence>
      {/* WhatsApp button */}
      <motion.button
        key="whatsapp-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={handleClick}
        className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-whatsapp-500 hover:bg-whatsapp-600 text-white rounded-full shadow-lg shadow-whatsapp-500/30 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} className="sm:w-8 sm:h-8" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-whatsapp-500 animate-ping opacity-25" />
      </motion.button>
    </AnimatePresence>
  );
}

export default WhatsAppButton;