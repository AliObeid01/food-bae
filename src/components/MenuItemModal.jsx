import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Star, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { modifiers as allModifiers } from '../data/menu';

function MenuItemModal({ item, isOpen, onClose, editingCartItem = null }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedModifiers, setSelectedModifiers] = useState([]);
  const [notes, setNotes] = useState('');
  const { addItem, updateItem, openCart } = useCart();

  const isEditMode = !!editingCartItem;

  const availableModifiers = item?.availableModifiers
    ? allModifiers.filter((mod) => item.availableModifiers.includes(mod.id))
    : [];

  useEffect(() => {
    if (isOpen) {
      if (editingCartItem) {
        setQuantity(editingCartItem.quantity);
        setSelectedModifiers(editingCartItem.modifiers || []);
        setNotes(editingCartItem.notes || '');
      } else {
        setQuantity(1);
        setSelectedModifiers([]);
        setNotes('');
      }
    }
  }, [isOpen, editingCartItem]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

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

  const toggleModifier = useCallback((modifier) => {
    setSelectedModifiers((prev) => {
      const exists = prev.find((m) => m.id === modifier.id);
      if (exists) {
        return prev.filter((m) => m.id !== modifier.id);
      }
      return [...prev, modifier];
    });
  }, []);

  const calculateTotal = useCallback(() => {
    if (!item) return 0;
    const basePrice = item.price;
    const modifiersTotal = selectedModifiers.reduce((sum, mod) => sum + mod.price, 0);
    return (basePrice + modifiersTotal) * quantity;
  }, [item, selectedModifiers, quantity]);

  const handleAddToCart = () => {
    if (!item) return;
    addItem(item, quantity, selectedModifiers, notes);
    onClose();
    openCart();
  };

  const handleUpdateCart = () => {
    if (!editingCartItem) return;
    updateItem(editingCartItem.cartItemId, quantity, selectedModifiers, notes);
    onClose();
  };

  const handleSubmit = () => {
    if (isEditMode) {
      handleUpdateCart();
    } else {
      handleAddToCart();
    }
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brown-900/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] bg-gradient-to-b from-white to-cream-50 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-cream-200/50"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 text-brown-500 bg-white/90 backdrop-blur-sm hover:bg-white hover:text-brown-700 rounded-full shadow-md transition-all"
              aria-label="Close modal"
            >
              <X size={20} />
            </motion.button>

            {/* Edit Mode Badge */}
            {isEditMode && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-secondary-600 bg-secondary-100 border border-secondary-200 rounded-full backdrop-blur-sm shadow-sm"
              >
                <Sparkles size={12} />
                Editing Item
              </motion.div>
            )}

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                
                {/* Price Badge on Image */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xl font-bold text-primary-500 shadow-lg">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && (
                    <span className="px-3 py-1.5 bg-primary-500 text-white text-sm font-bold rounded-full shadow-lg">
                      {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Header */}
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl text-brown-600">
                    {item.name}
                  </h2>
                  <p className="mt-3 text-brown-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Modifiers */}
                {availableModifiers.length > 0 && (
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-brown-600 uppercase tracking-wider mb-4">
                      <Sparkles size={14} className="text-secondary-400" />
                      Customize Your Order
                    </h3>
                    <div className="grid gap-3">
                      {availableModifiers.map((modifier) => {
                        const isSelected = selectedModifiers.find((m) => m.id === modifier.id);
                        return (
                          <motion.button
                            key={modifier.id}
                            type="button"
                            onClick={() => toggleModifier(modifier)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 ${
                              isSelected
                                ? 'bg-gradient-to-r from-secondary-50 to-secondary-100 border-2 border-secondary-400 shadow-md'
                                : 'bg-cream-100 border-2 border-cream-200 hover:border-secondary-300 hover:bg-cream-50'
                            }`}
                          >
                            <span
                              className={`flex items-center justify-center w-6 h-6 rounded-lg transition-all duration-300 ${
                                isSelected
                                  ? 'bg-gradient-to-r from-secondary-400 to-secondary-500 text-white shadow-md'
                                  : 'bg-cream-300 border border-cream-400'
                              }`}
                            >
                              {isSelected && <Check size={14} strokeWidth={3} />}
                            </span>
                            <span className="flex-1 text-left font-medium text-brown-600">
                              {modifier.name}
                            </span>
                            <span className={`text-sm font-bold ${isSelected ? 'text-secondary-600' : 'text-brown-400'}`}>
                              +${modifier.price.toFixed(2)}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Special Instructions */}
                <div>
                  <h3 className="text-sm font-bold text-brown-600 uppercase tracking-wider mb-3">
                    Special Instructions
                  </h3>
                  <textarea
                    placeholder="E.g., No onions, extra sauce, allergies..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={200}
                    className="w-full h-28 px-5 py-4 bg-white border-2 border-cream-200 text-brown-600 placeholder-brown-400 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-secondary-400/30 focus:border-secondary-400 transition-all"
                  />
                  <p className="mt-2 text-xs text-brown-400 text-right">
                    {notes.length}/200 characters
                  </p>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 pt-5 pb-3 bg-gradient-to-t from-cream-50 to-transparent -mx-6 px-6">
                  <div className="flex items-center gap-4">
                    {/* Quantity Control */}
                    <div className="flex items-center bg-white rounded-2xl border-2 border-cream-200 shadow-sm">
                      <motion.button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        whileHover={{ scale: quantity > 1 ? 1.1 : 1 }}
                        whileTap={{ scale: quantity > 1 ? 0.9 : 1 }}
                        className="p-3.5 text-brown-400 hover:text-primary-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} />
                      </motion.button>
                      <span className="w-12 text-center text-xl font-bold text-brown-600">
                        {quantity}
                      </span>
                      <motion.button
                        onClick={() => setQuantity((q) => q + 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3.5 text-brown-400 hover:text-primary-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={18} />
                      </motion.button>
                    </div>

                    {/* Add Button */}
                    <motion.button
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-glow"
                    >
                      {/* <ShoppingBag size={18} /> */}
                      <span>{isEditMode ? 'Edit' : 'Add'}</span>
                      <span className="font-bold">${calculateTotal().toFixed(2)}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MenuItemModal;
