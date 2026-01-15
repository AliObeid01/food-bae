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
    }, 3000); // Increased to 5s for better UX

    return () => clearInterval(interval);
  }, [isPaused, navigate, specialDeals.length]);

  if (!specialDeals || specialDeals.length === 0) return null;

  const deal = specialDeals[currentIndex];
  const discountPercent = Math.round((1 - deal.price / deal.originalPrice) * 100);

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
        className="text-center mb-6 sm:mb-8 lg:mb-10"
      >
        <span className="section-label">
          <Flame size={14} className="text-primary-500" />
          Hot Deals
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-display-md text-brown-600">
          Special Offers
        </h2>
        <p className="mt-2 text-sm sm:text-base text-brown-500 max-w-md mx-auto">
          Limited-time deals you don't want to miss
        </p>
      </motion.div>

      {/* Carousel Container - Added max-width constraint */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows - Improved positioning */}
        {specialDeals.length > 1 && (
          <>
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-1 sm:left-0 top-[30%] sm:top-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 sm:-ml-6 text-brown-500 bg-white/90 backdrop-blur-sm hover:bg-cream-100 border border-cream-300 rounded-full shadow-lg transition-all hover:shadow-xl"
              aria-label="Previous deal"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
            <motion.button
              onClick={() => navigate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-1 sm:right-0 top-[30%] sm:top-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 sm:-mr-6 text-brown-500 bg-white/90 backdrop-blur-sm hover:bg-cream-100 border border-cream-300 rounded-full shadow-lg transition-all hover:shadow-xl"
              aria-label="Next deal"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </>
        )}

        {/* Slides */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
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
              <div className="relative flex flex-col lg:flex-row bg-gradient-to-br from-white via-cream-50 to-cream-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium border border-cream-200/50">
                
                {/* Deal Image - Improved Responsive Sizing */}
                <div className="relative w-full lg:w-[45%] xl:w-[42%]">
                  {/* Aspect ratio wrapper - different ratios per breakpoint */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[5/4] overflow-hidden">
                    <img
                      src={deal.image || "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800"}
                      alt={deal.name}
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle gradient overlay for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:hidden" />
                  </div>
                  
                  {/* Discount Badge - Responsive sizing */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-500 rounded-xl sm:rounded-2xl blur-md opacity-50" />
                      <div className="relative px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl sm:rounded-2xl shadow-lg">
                        <span className="font-bold text-sm sm:text-base lg:text-lg">{discountPercent}% OFF</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements - Mobile only */}
                  <div className="absolute bottom-3 left-3 lg:hidden opacity-60">
                    <Sparkles size={20} className="text-secondary-400" />
                  </div>
                </div>

                {/* Deal Content - Improved Responsive Spacing */}
                <div className="relative flex-1 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-secondary-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  
                  <div className="relative">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 mb-3 sm:mb-4"
                    >
                      <span className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold text-primary-600 bg-primary-100 border border-primary-200 rounded-full">
                        <Clock size={10} className="sm:w-3 sm:h-3" />
                        Limited Time Offer
                      </span>
                    </motion.div>

                    {/* Title - Responsive Typography */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brown-600 mb-2 sm:mb-3 lg:mb-4"
                    >
                      {deal.name}
                    </motion.h3>
                    
                    {/* Description - Line clamping for mobile */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-brown-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-md line-clamp-2 sm:line-clamp-3 lg:line-clamp-none"
                    >
                      {deal.description}
                    </motion.p>

                    {/* Price Block - Responsive sizing */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap items-baseline gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8"
                    >
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                        ${deal.price}
                      </span>
                      <span className="text-base sm:text-lg lg:text-xl text-brown-400 line-through">
                        ${deal.originalPrice}
                      </span>
                      <span className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold text-sage-600 bg-sage-400/20 border border-sage-400/30 rounded-full">
                        Save ${(deal.originalPrice - deal.price).toFixed(2)}
                      </span>
                    </motion.div>

                    {/* CTA Button - Touch-friendly sizing */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      onClick={() => setIsModalOpen(true)}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-glow"
                    >
                      <span>Order Now</span>
                      <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    {/* Fine Print */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="mt-4 sm:mt-5 lg:mt-6 text-[10px] sm:text-xs text-brown-400"
                    >
                      *Offer valid until Sunday. Terms and conditions apply.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator - Improved touch targets */}
        {specialDeals.length > 1 && (
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-5 sm:mt-6 lg:mt-8">
            {specialDeals.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 sm:w-10 bg-gradient-to-r from-primary-500 to-secondary-400'
                    : 'w-2 sm:w-2.5 bg-cream-400 hover:bg-cream-500'
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