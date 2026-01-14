import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Edit2, Sparkles, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import MenuItemModal from './MenuItemModal';
import { useNavigate  } from 'react-router-dom';

function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    calculateItemTotal,
    subtotal,
    tax,
    total,
    sendToWhatsApp,
  } = useCart();

  const [editingItem, setEditingItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen && !isEditModalOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart, isEditModalOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSendOrder = () => {
    sendToWhatsApp();
    closeCart();
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingItem(null);
  };

  const navigate = useNavigate();

  const handleBrowseMenu = () => {
    closeCart();
    navigate('/menu');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="fixed inset-0 z-50 bg-brown-900/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-gradient-to-b from-white to-cream-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-cream-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 text-secondary-500 rounded-2xl shadow-sm">
                    <ShoppingBag size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-brown-600">
                      Your Order
                    </h3>
                    <p className="text-sm text-brown-400">
                      {items.length} {items.length === 1 ? 'item' : 'items'} in cart
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={closeCart}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 text-brown-400 hover:text-brown-600 hover:bg-cream-200 rounded-xl transition-all"
                  aria-label="Close cart"
                >
                  <X size={22} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-2xl" />
                      <div className="relative flex items-center justify-center w-24 h-24 mb-6 text-5xl bg-gradient-to-br from-cream-200 to-cream-300 rounded-3xl shadow-inner">
                        🍔
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-display text-brown-600">
                      Your cart is empty
                    </h4>
                    <p className="mt-2 text-brown-400 max-w-xs">
                      Add some delicious items to get started on your food journey!
                    </p>
                    <motion.button
                      onClick={handleBrowseMenu}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full shadow-lg transition-all"
                    >
                        Browse Menu
                    </motion.button>
                  </div>
                ) : (
                  <div className="p-5 space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.cartItemId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative flex gap-4 p-4 bg-white rounded-2xl border border-cream-200 shadow-sm hover:shadow-md transition-shadow"
                      >
                        {/* Image */}
                        <div
                          onClick={() => handleEditItem(item)}
                          className="relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden cursor-pointer group"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-brown-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                            <Edit2 size={18} className="text-white" />
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h4
                            onClick={() => handleEditItem(item)}
                            className="font-semibold text-brown-600 cursor-pointer hover:text-primary-500 transition-colors line-clamp-1"
                          >
                            {item.name}
                          </h4>

                          {item.modifiers.length > 0 && (
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              {item.modifiers.map((mod) => (
                                <span
                                  key={mod.id}
                                  className="inline-flex items-center gap-1 text-[10px] font-medium text-secondary-600 bg-secondary-50 px-2 py-0.5 rounded-full border border-secondary-100"
                                >
                                  <Plus size={8} />
                                  {mod.name}
                                </span>
                              ))}
                            </div>
                          )}

                          {item.notes && (
                            <p className="mt-1.5 text-xs text-brown-400 line-clamp-1 italic">
                              "{item.notes}"
                            </p>
                          )}

                          {/* Quantity & Actions */}
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center bg-cream-100 rounded-xl border border-cream-200">
                              <motion.button
                                onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-brown-400 hover:text-primary-500 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </motion.button>
                              <span className="w-8 text-center text-sm font-bold text-brown-600">
                                {item.quantity}
                              </span>
                              <motion.button
                                onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-brown-400 hover:text-primary-500 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </motion.button>
                            </div>

                            <motion.button
                              onClick={() => removeItem(item.cartItemId)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 text-brown-300 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} />
                            </motion.button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-lg font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                            ${calculateItemTotal(item).toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-5 border-t border-cream-200 bg-white/90 backdrop-blur-sm">
                  <button
                    onClick={clearCart}
                    className="text-sm font-medium text-brown-400 hover:text-red-500 transition-colors mb-5"
                  >
                    Clear Cart
                  </button>

                  {/* Summary */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-brown-400">Subtotal</span>
                      <span className="text-brown-600 font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-brown-400">Tax (11%)</span>
                      <span className="text-brown-600 font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-semibold text-brown-600">Total</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    onClick={handleSendOrder}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-3 w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-whatsapp-500 to-whatsapp-600 hover:from-whatsapp-600 hover:to-whatsapp-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaWhatsapp size={22} />
                    <span>Send Order via WhatsApp</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="mt-4 text-xs text-center text-brown-400">
                    You'll be redirected to WhatsApp to complete your order
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Edit Item Modal */}
      <MenuItemModal
        item={editingItem}
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        editingCartItem={editingItem}
      />
    </>
  );
}

export default CartDrawer;
