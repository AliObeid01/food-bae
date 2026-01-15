import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Flame, Leaf, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MenuItemModal from './MenuItemModal';

function MenuItemCard({ item, index = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addItem(item, 1, [], '');
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        onClick={() => setIsModalOpen(true)}
        className="group relative bg-gradient-to-b from-white to-cream-50 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer hover:-translate-y-2"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
      >
        {/* Subtle border */}
        <div className="absolute inset-0 rounded-2xl border border-cream-200/50 pointer-events-none z-10" />
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
          {/* Skeleton loader */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-cream-200 via-cream-100 to-cream-200 animate-pulse" />
          )}
          
          <img
            src={item.image}
            alt={item.name}
            onLoad={() => setIsImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />

          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {item.isBestSeller && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="badge bg-gradient-to-r from-secondary-400 to-secondary-500 text-white flex items-center gap-1 shadow-md"
              >
                <Star size={10} fill="currentColor" />
                Best Seller
              </motion.span>
            )}
            {item.isSpicy && (
              <span className="badge bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center gap-1 shadow-md">
                <Flame size={10} />
                Spicy
              </span>
            )}
            {item.isHealthy && (
              <span className="badge bg-gradient-to-r from-sage-500 to-sage-600 text-white flex items-center gap-1 shadow-md">
                <Leaf size={10} />
                Healthy
              </span>
            )}
            {item.isLimitedTime && (
              <span className="badge bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center gap-1 shadow-md">
                <Sparkles size={10} />
                Limited
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <motion.button
            onClick={handleQuickAdd}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-3 right-3 flex items-center justify-center w-11 h-11 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:shadow-glow z-10"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus size={20} strokeWidth={2.5} />
          </motion.button>

          {/* Price tag on image (appears on hover) */}
          <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-lg font-bold text-primary-500 shadow-lg">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Customizable indicator */}
          {item.availableModifiers?.length > 0 && (
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles size={12} className="text-secondary-400" />
              <span className="text-xs font-semibold text-secondary-500 uppercase tracking-wide">
                Customizable
              </span>
            </div>
          )}

          {/* Name */}
          <h3 className="font-display text-xl text-brown-600 group-hover:text-primary-500 transition-colors duration-300 line-clamp-1">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-brown-400 line-clamp-2 leading-relaxed min-h-[3.5em]">
            {item.description}
          </p>

          {/* Price Row */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                ${item.price.toFixed(2)}
              </span>
              {item.originalPrice && (
                <span className="text-sm text-brown-400 line-through">
                  ${item.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* View details hint */}
            <span className="text-xs font-medium text-brown-400 group-hover:text-secondary-500 transition-colors">
              View details →
            </span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.article>

      {/* Detail Modal */}
      <MenuItemModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default MenuItemCard;
