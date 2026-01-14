import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ShoppingBag, Sparkles, UtensilsCrossed } from 'lucide-react';
import useMenu from '../hooks/useMenu';
import MenuItemCard from '../components/MenuItemCard';
import MenuItemModal from '../components/MenuItemModal';
import { categories } from '../data/menu';
import { useCart } from '../context/CartContext';

function Menu() {
  const { items, loading } = useMenu();
  const { openCart, itemCount } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [dietaryFilters, setDietaryFilters] = useState({
    isSpicy: false,
    isHealthy: false,
    isBestSeller: false,
  });

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDescription = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDescription) {
          return false;
        }
      }
      if (dietaryFilters.isSpicy && !item.isSpicy) return false;
      if (dietaryFilters.isHealthy && !item.isHealthy) return false;
      if (dietaryFilters.isBestSeller && !item.isBestSeller) return false;
      return true;
    });
  }, [items, activeCategory, searchQuery, dietaryFilters]);

  const groupedItems = useMemo(() => {
    if (activeCategory !== 'all') {
      return { [activeCategory]: filteredItems };
    }
    return filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [filteredItems, activeCategory]);

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const handleDietaryFilterChange = useCallback((filter) => {
    setDietaryFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.icon : '🍽️';
  };

  const activeFiltersCount = Object.values(dietaryFilters).filter(Boolean).length;

  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300" />
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 bg-mesh-warm opacity-50" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 right-[15%] w-64 h-64 bg-primary-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-[10%] w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"
        />

        {/* Decorative Icons */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[18%] text-secondary-400/20 hidden lg:block"
        >
          <UtensilsCrossed size={48} />
        </motion.div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-brown-600 bg-white/80 backdrop-blur-sm border border-cream-300 rounded-full shadow-sm"
            >
              <Sparkles size={14} className="text-secondary-400" />
              Discover Our Menu
            </motion.span>
            
            <h1 className="font-display text-display-lg text-brown-600">
              EXPLORE <span className="text-secondary-500">OUR</span> <span className="text-primary-500">FLAVORS.</span>
            </h1>
            <p className="mt-4 text-lg text-brown-500">
              Fresh ingredients, bold flavors, and dishes made with love. Find your new favorite today.
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/98 backdrop-blur-md shadow-md border-b border-cream-200">
        <div className="container-custom py-4">
          {/* Search & Filter Row */}
          <div className="flex items-center gap-3 mb-4">
            {/* Search Bar */}
            <div className="flex-1 relative group">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-400 group-focus-within:text-secondary-400 transition-colors" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-cream-100 border border-cream-300 text-brown-600 placeholder-brown-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-400/30 focus:border-secondary-400 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-brown-400 hover:text-brown-600 hover:bg-cream-200 rounded-full transition-all"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border rounded-xl transition-all ${
                showFilters
                  ? 'text-white bg-gradient-to-r from-secondary-400 to-secondary-500 border-transparent shadow-md'
                  : 'text-brown-500 bg-cream-100 border-cream-300 hover:border-secondary-400 hover:text-secondary-500'
              }`}
            >
              <Filter size={18} />
              <span className="hidden sm:inline">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-primary-500 rounded-full shadow-sm">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* View Cart Button */}
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={openCart}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <ShoppingBag size={18} />
                  <span className="hidden sm:inline">View Order</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">({itemCount})</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Dietary Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-3 pb-4">
                  <span className="text-sm font-medium text-brown-500">Quick Filters:</span>
                  {[
                    { key: 'isBestSeller', label: '⭐ Best Sellers', color: 'secondary' },
                    { key: 'isSpicy', label: '🌶️ Spicy', color: 'primary' },
                    { key: 'isHealthy', label: '🥗 Healthy', color: 'sage' },
                  ].map(({ key, label, color }) => (
                    <button
                      key={key}
                      onClick={() => handleDietaryFilterChange(key)}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                        dietaryFilters[key]
                          ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                          : 'text-brown-500 bg-cream-100 border border-cream-300 hover:border-secondary-400 hover:text-secondary-500'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                  
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={() => setDietaryFilters({ isSpicy: false, isHealthy: false, isBestSeller: false })}
                      className="px-4 py-2 text-sm font-medium text-brown-400 hover:text-primary-500 transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Navigation */}
          <nav className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                activeCategory === 'all'
                  ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                  : 'text-brown-500 bg-cream-100 border border-cream-300 hover:border-secondary-400 hover:text-secondary-500'
              }`}
            >
              <span>🍽️</span>
              <span>All Items</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                    : 'text-brown-500 bg-cream-100 border border-cream-300 hover:border-secondary-400 hover:text-secondary-500'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="relative py-12 lg:py-16 bg-cream-300 overflow-hidden min-h-[60vh]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238a552e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container-custom relative">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-cream-400 rounded-full" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-secondary-400 border-t-transparent rounded-full animate-spin" />
              </div>
              <p className="mt-6 text-brown-500 font-medium">Loading delicious options...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-24 h-24 mb-6 bg-cream-200 rounded-full flex items-center justify-center">
                <span className="text-5xl">😢</span>
              </div>
              <h3 className="text-2xl font-display text-brown-600 mb-2">No items found</h3>
              <p className="text-brown-500 mb-8 max-w-md">Try adjusting your search or filters to find what you're looking for</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setDietaryFilters({ isSpicy: false, isHealthy: false, isBestSeller: false });
                }}
                className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            Object.entries(groupedItems).map(([categoryId, categoryItems]) => (
              <motion.div
                key={categoryId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-14 last:mb-0"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-2xl shadow-sm text-2xl">
                    {getCategoryIcon(categoryId)}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl text-brown-600">
                      {getCategoryName(categoryId)}
                    </h2>
                  </div>
                  <span className="px-3 py-1 text-xs font-bold text-secondary-600 bg-secondary-100 border border-secondary-200 rounded-full">
                    {categoryItems.length} item{categoryItems.length !== 1 ? 's' : ''}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-cream-400 to-transparent ml-4 hidden sm:block" />
                </div>

                {/* Items Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryItems.map((item, index) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      index={index}
                      onClick={() => setSelectedItem(item)}
                    />
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Menu;
