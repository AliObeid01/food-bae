import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, ArrowRight, Sparkles, Flame } from 'lucide-react';
import MenuItemModal from './MenuItemModal';

function SpecialDealsCarousel({ specialDeals, handleWhatsAppOrder }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const navigate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === specialDeals.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? specialDeals.length - 1 : prev - 1;
    });
  }, [specialDeals.length]);

  useEffect(() => {
    if (isPaused || specialDeals.length <= 1) return;
    
    const interval = setInterval(() => {
      navigate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, navigate, specialDeals.length]);

  if (!specialDeals || specialDeals.length === 0) return null;

  const deal = specialDeals[currentIndex];
  const discountPercent = Math.round((1 - deal.price / deal.originalPrice) * 100);

  // const { addItem } = useCart();

  // const handleQuickAdd = (e) => {
  //   e.stopPropagation();
  //   addItem(deal, 1, [], '');
  // };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="section-label">
          <Flame size={14} className="text-primary-500" />
          Hot Deals
        </span>
        <h2 className="font-display text-display-md text-brown-600">
          Special Offers
        </h2>
        <p className="mt-2 text-brown-500 max-w-md mx-auto">
          Limited-time deals you don't want to miss
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        {specialDeals.length > 1 && (
          <>
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 -ml-2 sm:-ml-6 text-brown-500 bg-white hover:bg-cream-100 border border-cream-300 rounded-full shadow-lg transition-all hover:shadow-xl"
              aria-label="Previous deal"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={() => navigate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 -mr-2 sm:-mr-6 text-brown-500 bg-white hover:bg-cream-100 border border-cream-300 rounded-full shadow-lg transition-all hover:shadow-xl"
              aria-label="Next deal"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}

        {/* Slides */}
        <div className="overflow-hidden rounded-3xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative"
            >
              <div className="relative flex flex-col lg:flex-row bg-gradient-to-br from-white via-cream-50 to-cream-100 rounded-3xl overflow-hidden shadow-premium border border-cream-200/50">
                {/* Deal Image */}
                <div className="relative lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={deal.image || "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800"}
                    alt={deal.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/80 via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-white/60" /> */}
                  
                  {/* Discount Badge */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="absolute top-4 left-4 z-20"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-500 rounded-2xl blur-md opacity-50" />
                      <div className="relative px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl shadow-lg">
                        <span className="font-bold text-lg">{discountPercent}% OFF</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <Sparkles size={24} className="text-secondary-400/50" />
                  </div>
                </div>

                {/* Deal Content */}
                <div className="relative lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 mb-4"
                    >
                      <span className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-primary-600 bg-primary-100 border border-primary-200 rounded-full">
                        <Clock size={12} />
                        Limited Time Offer
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown-600 mb-4"
                    >
                      {deal.name}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-brown-500 leading-relaxed mb-8 max-w-md"
                    >
                      {deal.description}
                    </motion.p>

                    {/* Price Block */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap items-baseline gap-4 mb-8"
                    >
                      <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                        ${deal.price}
                      </span>
                      <span className="text-xl text-brown-400 line-through">
                        ${deal.originalPrice}
                      </span>
                      <span className="px-3 py-1.5 text-xs font-bold text-sage-600 bg-sage-400/20 border border-sage-400/30 rounded-full">
                        Save ${(deal.originalPrice - deal.price).toFixed(2)}
                      </span>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      onClick={() => setIsModalOpen(true)}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-glow"
                    >
                      <span>Order Now</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    {/* Fine Print */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="mt-6 text-xs text-brown-400"
                    >
                      *Offer valid until Sunday. Terms and conditions apply.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        {specialDeals.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {specialDeals.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-10 bg-gradient-to-r from-primary-500 to-secondary-400'
                    : 'w-2.5 bg-cream-400 hover:bg-cream-500'
                }`}
                aria-label={`Go to deal ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <MenuItemModal
        item={deal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default SpecialDealsCarousel;
