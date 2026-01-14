// Menu Categories
export const categories = [
  { id: 'chicken-burgers', name: 'Chicken Burgers', icon: '🍔' },
  { id: 'beef-burgers', name: 'Beef Burgers', icon: '🥩' },
  { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
  { id: 'starters', name: 'Starters', icon: '🍟' },
  { id: 'salads', name: 'Salads', icon: '🥗' },
  { id: 'platters', name: 'Platters', icon: '🍽️' },
  { id: 'special-deals', name: 'Special Deals', icon: '⭐' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
];

// Modifiers / Add-ons
export const modifiers = [
  { id: 'extra-cheese', name: 'Extra Cheese', price: 1.50 },
  { id: 'bacon', name: 'Crispy Bacon', price: 2.00 },
  { id: 'avocado', name: 'Fresh Avocado', price: 2.50 },
  { id: 'extra-sauce', name: 'Extra Sauce', price: 0.75 },
  { id: 'jalapenos', name: 'Jalapeños', price: 1.00 },
  { id: 'fries-addon', name: 'Add Fries', price: 3.50 },
  { id: 'onion-rings', name: 'Onion Rings', price: 4.00 },
  { id: 'coleslaw', name: 'Coleslaw', price: 2.00 },
];

// Menu Items
export const menuItems = [
  // Chicken Burgers
  {
    id: 'bae-burger',
    name: 'The Bae Burger',
    description: 'Double patty, secret sauce, caramelized onions, brioche bun',
    price: 12.99,
    category: 'chicken-burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    rating: 4.8,
    isPopular: true,
    isBestSeller: true,
    availableModifiers: ['extra-cheese', 'bacon', 'avocado', 'extra-sauce', 'jalapenos', 'fries-addon'],
  },
  {
    id: 'crispy-chicken',
    name: 'Crispy Chicken Classic',
    description: 'Crispy fried chicken, lettuce, tomato, mayo, sesame bun',
    price: 10.99,
    category: 'chicken-burgers',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500',
    rating: 4.6,
    isPopular: true,
    availableModifiers: ['extra-cheese', 'bacon', 'extra-sauce', 'jalapenos', 'fries-addon'],
  },
  {
    id: 'spicy-chicken',
    name: 'Spicy Chicken Deluxe',
    description: 'Spicy marinated chicken, pepper jack, chipotle mayo, pickles',
    price: 11.99,
    category: 'chicken-burgers',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500',
    rating: 4.7,
    isSpicy: true,
    availableModifiers: ['extra-cheese', 'bacon', 'avocado', 'extra-sauce', 'fries-addon'],
  },
  {
    id: 'grilled-chicken',
    name: 'Grilled Chicken Lite',
    description: 'Grilled chicken breast, arugula, tomato, light mayo, whole wheat bun',
    price: 11.49,
    category: 'chicken-burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
    rating: 4.5,
    isHealthy: true,
    availableModifiers: ['avocado', 'extra-sauce', 'fries-addon'],
  },

  // Beef Burgers
  {
    id: 'classic-beef',
    name: 'Classic Beef Burger',
    description: 'Angus beef patty, American cheese, lettuce, tomato, special sauce',
    price: 11.99,
    category: 'beef-burgers',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500',
    rating: 4.7,
    isPopular: true,
    availableModifiers: ['extra-cheese', 'bacon', 'avocado', 'extra-sauce', 'jalapenos', 'fries-addon'],
  },
  {
    id: 'double-smash',
    name: 'Double Smash Burger',
    description: 'Two smashed beef patties, double cheese, caramelized onions, pickles',
    price: 14.99,
    category: 'beef-burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500',
    rating: 4.9,
    isBestSeller: true,
    availableModifiers: ['extra-cheese', 'bacon', 'avocado', 'extra-sauce', 'jalapenos', 'fries-addon'],
  },
  {
    id: 'bbq-bacon',
    name: 'BBQ Bacon Beast',
    description: 'Beef patty, crispy bacon, cheddar, BBQ sauce, crispy onions',
    price: 13.99,
    category: 'beef-burgers',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500',
    rating: 4.8,
    availableModifiers: ['extra-cheese', 'bacon', 'extra-sauce', 'jalapenos', 'fries-addon'],
  },
  {
    id: 'mushroom-swiss',
    name: 'Mushroom Swiss',
    description: 'Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli',
    price: 12.99,
    category: 'beef-burgers',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500',
    rating: 4.6,
    availableModifiers: ['extra-cheese', 'bacon', 'extra-sauce', 'fries-addon'],
  },

  // Sandwiches
  {
    id: 'philly-cheesesteak',
    name: 'Philly Cheesesteak',
    description: 'Shaved beef, melted provolone, peppers, onions, hoagie roll',
    price: 12.49,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500',
    rating: 4.7,
    availableModifiers: ['extra-cheese', 'jalapenos', 'fries-addon'],
  },
  {
    id: 'club-sandwich',
    name: 'Triple Club',
    description: 'Turkey, ham, bacon, lettuce, tomato, mayo, toasted bread',
    price: 11.99,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500',
    rating: 4.5,
    availableModifiers: ['avocado', 'extra-sauce', 'fries-addon'],
  },
  {
    id: 'grilled-cheese',
    name: 'Ultimate Grilled Cheese',
    description: 'Three cheese blend, tomato soup dip, sourdough bread',
    price: 8.99,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500',
    rating: 4.4,
    availableModifiers: ['bacon', 'avocado', 'fries-addon'],
  },

  // Starters
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with liquid cheese, bacon bits, and jalapeños',
    price: 7.50,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500',
    rating: 4.6,
    isPopular: true,
    availableModifiers: ['extra-cheese', 'bacon', 'jalapenos'],
  },
  {
    id: 'inferno-wings',
    name: 'Inferno Wings',
    description: '6pcs wings tossed in our signature ghost pepper glaze',
    price: 9.99,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500',
    rating: 4.7,
    isSpicy: true,
    isBestSeller: true,
    availableModifiers: ['extra-sauce'],
  },
  {
    id: 'onion-rings-starter',
    name: 'Crispy Onion Rings',
    description: 'Beer-battered onion rings with chipotle dipping sauce',
    price: 6.99,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500',
    rating: 4.5,
    availableModifiers: ['extra-sauce'],
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    description: '6pcs crispy mozzarella sticks with marinara sauce',
    price: 7.99,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=500',
    rating: 4.4,
    availableModifiers: ['extra-sauce'],
  },
  {
    id: 'chicken-tenders',
    name: 'Chicken Tenders',
    description: '5pcs crispy chicken tenders with honey mustard',
    price: 8.99,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
    rating: 4.6,
    availableModifiers: ['extra-sauce', 'fries-addon'],
  },

  // Salads
  {
    id: 'caesar-salad',
    name: 'Classic Caesar',
    description: 'Romaine, parmesan, croutons, Caesar dressing',
    price: 8.99,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500',
    rating: 4.3,
    isHealthy: true,
    availableModifiers: ['bacon', 'avocado'],
  },
  {
    id: 'grilled-chicken-salad',
    name: 'Grilled Chicken Salad',
    description: 'Mixed greens, grilled chicken, cherry tomatoes, cucumber, balsamic',
    price: 11.99,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    rating: 4.5,
    isHealthy: true,
    availableModifiers: ['avocado', 'bacon'],
  },
  {
    id: 'cobb-salad',
    name: 'Cobb Salad',
    description: 'Mixed greens, chicken, bacon, egg, avocado, blue cheese',
    price: 12.99,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500',
    rating: 4.6,
    isHealthy: true,
    availableModifiers: ['avocado', 'bacon'],
  },

  // Platters
  {
    id: 'chicken-platter',
    name: 'Healthy Chicken Platter',
    description: 'Grilled chicken breast, quinoa, roasted vegetables, tahini',
    price: 14.99,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
    rating: 4.7,
    isHealthy: true,
    isBestSeller: true,
    availableModifiers: ['avocado', 'extra-sauce'],
  },
  {
    id: 'bbq-ribs-platter',
    name: 'Smoky BBQ Ribs',
    description: 'Slow-cooked ribs glazed with our house special BBQ sauce',
    price: 18.99,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
    rating: 4.9,
    isBestSeller: true,
    availableModifiers: ['coleslaw', 'fries-addon'],
  },
  {
    id: 'mixed-grill',
    name: 'Mixed Grill Platter',
    description: 'Beef kebab, chicken wings, lamb chops, grilled vegetables, rice',
    price: 22.99,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
    rating: 4.8,
    availableModifiers: ['extra-sauce', 'coleslaw'],
  },

  // Special Deals
  {
    id: 'weekend-bae-ndle',
    name: 'The Weekend Bae',
    description: 'Get 2 Classic Burgers, 2 Large Fries, and 2 Drinks for a special price',
    price: 24.99,
    originalPrice: 34.99,
    category: 'special-deals',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
    rating: 4.9,
    isLimitedTime: true,
    availableModifiers: [],
  },
  {
    id: 'family-feast',
    name: 'Family Feast',
    description: '4 Burgers, 4 Fries, 4 Drinks, 1 Loaded Fries to share',
    price: 44.99,
    originalPrice: 59.99,
    category: 'special-deals',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500',
    rating: 4.8,
    isPopular: true,
    availableModifiers: [],
  },
  {
    id: 'lunch-combo',
    name: 'Lunch Express Combo',
    description: 'Any burger + Regular fries + Drink. Available 11AM-3PM',
    price: 12.99,
    originalPrice: 17.99,
    category: 'special-deals',
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=500',
    rating: 4.5,
    availableModifiers: [],
  },

  // Beverages
  {
    id: 'craft-lemonade',
    name: 'Fresh Craft Lemonade',
    description: 'House-made lemonade with a hint of mint',
    price: 3.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500',
    rating: 4.4,
    availableModifiers: [],
  },
  {
    id: 'iced-tea',
    name: 'Southern Iced Tea',
    description: 'Sweet or unsweetened, freshly brewed',
    price: 2.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    rating: 4.3,
    availableModifiers: [],
  },
  {
    id: 'milkshake',
    name: 'Classic Milkshake',
    description: 'Creamy shake in vanilla, chocolate, or strawberry',
    price: 5.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
    rating: 4.7,
    isPopular: true,
    availableModifiers: [],
  },
  {
    id: 'soft-drinks',
    name: 'Soft Drinks',
    description: 'Coca-Cola, Sprite, Fanta, Diet Coke',
    price: 2.49,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500',
    rating: 4.2,
    availableModifiers: [],
  },
  {
    id: 'bottled-water',
    name: 'Bottled Water',
    description: 'Still or sparkling',
    price: 1.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?w=500',
    rating: 4.0,
    availableModifiers: [],
  },
];

// Get best sellers
export const getBestSellers = () => menuItems.filter(item => item.isBestSeller);

// Get popular items
export const getPopularItems = () => menuItems.filter(item => item.isPopular);

// Get items by category
export const getItemsByCategory = (categoryId) => 
  menuItems.filter(item => item.category === categoryId);

// Get special deals
export const getSpecialDeals = () => 
  menuItems.filter(item => item.category === 'special-deals');

// Get item by ID
export const getItemById = (id) => menuItems.find(item => item.id === id);

// Get modifiers by IDs
export const getModifiersByIds = (ids) => 
  modifiers.filter(mod => ids.includes(mod.id));

// Restaurant Info
export const restaurantInfo = {
  name: 'Food Bae',
  tagline: 'Follow Your Taste',
  description: 'Halal fast food and healthy picks. Foreign flavors, local freshness.',
  phone:  '+961 81 82 70 87',
  phone2: '+961 78 84 82 90',
  phone3: '+961 70 20 75 20',
  email:"info@foodbae.com",
  whatsapp: '+961 81 82 70 87',
  address: {
    street: 'S. Hadi Nasrallah Road',
    district: 'Bir Al Abed',
    city: 'Beirut',
    state: 'Beirut',
    zip: '1001',
  },
  hours: {
    monThu: { open: '01:00 PM', close: '02:30 AM' },
    friSat: { open: '01:00 PM', close: '02:30 AM' },
    sunday: { open: '01:00 PM', close: '02:30 AM' },
    happyHour: { start: '4:00 PM', end: '7:00 PM', note: 'Daily' },
  },
  social: {
    tiktok: 'https://tiktok.com/foodbae.lb',
    instagram: 'https://www.instagram.com/foodbae.lb/',
    facebook: 'https://www.facebook.com/Foodbae.lb',
    aliInsta: 'https://www.instagram.com/_ali_obeid_/',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2329818701505!2d35.5130256!3d33.856084200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172575f5410f%3A0xa98498ad3a669756!2sFood%20Bae!5e1!3m2!1sen!2slb!4v1767601956655!5m2!1sen!2slb',
};
