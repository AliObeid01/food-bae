import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronRight,
  Flame,
  Leaf,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Star,
  Sparkles
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import useMenu from '../hooks/useMenu';
import MenuItemCard from '../components/MenuItemCard';
import SpecialDealsCarousel from '../components/SpecialDealsCarousel';
import { restaurantInfo } from '../data/menu';
import ghostSvg from '../assets/ghost.svg';
import heroGhost from '../assets/hero-ghost.svg';

function Home() {
  const { bestSellers, specialDeals } = useMenu();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleWhatsAppOrder = () => {
    const whatsappNumber = restaurantInfo.whatsapp.replace(/\D/g, '');
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order.`,
      '_blank'
    );
  };

  const values = [
    {
      icon: <Flame className="w-7 h-7" />,
      title: 'Fresh off the Flame',
      description: 'Every order is grilled to perfection the moment you place it. No heat lamps, no shortcuts.',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-100',
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: 'Quality Ingredients',
      description: 'We partner with local farms for the freshest produce and source premium meats daily.',
      color: 'from-sage-500 to-sage-600',
      bgColor: 'bg-sage-400/10',
      borderColor: 'border-sage-400/20',
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: 'Speed Without Compromise',
      description: 'Our optimized kitchen workflow means you get your food fast without sacrificing quality.',
      color: 'from-secondary-400 to-secondary-500',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-100',
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'Made With Love',
      description: "Every dish is crafted with passion. We treat each order like we're feeding family.",
      color: 'from-primary-400 to-secondary-400',
      bgColor: 'bg-cream-200',
      borderColor: 'border-cream-300',
    },
  ];

  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300" />
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 bg-mesh-warm opacity-60" />
        
        {/* Floating Blobs */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[20%] w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-96 h-96 bg-secondary-400/15 rounded-full blur-3xl"
        />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />

        <div className="container-custom relative z-10">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="grid py-20 lg:py-28 max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16"
          >
            <div>
              <div className="text-center lg:text-left">
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-6"
                >
                  <motion.img
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="animate-float w-8 h-8"
                    src={ghostSvg}
                    alt=""
                  />
                  <span className="animate-float inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-brown-600 bg-white/80 backdrop-blur-sm border border-cream-300 rounded-full shadow-sm">
                    <Sparkles size={14} className="text-secondary-400" />
                    Food you can't ghost
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display text-display-xl text-brown-600 leading-none"
                >
                  GOOD <span className="text-gradient">FOOD</span>
                  <br />
                  <span className="text-primary-500">BETTER </span>MOOD.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-lg sm:text-xl text-brown-500 max-w-lg mx-auto lg:mx-0"
                >
                  Premium fast food that hits different. Fresh ingredients, bold
                  flavors, and the vibes you've been craving.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
                >
                  <button
                    onClick={handleWhatsAppOrder}
                    className="group btn-whatsapp"
                  >
                    <FaWhatsapp size={20} />
                    <span>Order on WhatsApp</span>
                  </button>
                  <Link to="/menu" className="btn-secondary group">
                    <span>View Full Menu</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} size={16} fill="#f89e23" stroke="#f89e23" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-brown-500">4.7 Google Rating</span>
                  </div>
                  <div className="h-5 w-px bg-cream-400 hidden sm:block" />
                  <div className="flex items-center gap-2 text-sm text-brown-500">
                    <span className="font-semibold text-primary-500">30K+</span> Happy Customers
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary-400/30 via-secondary-400/20 to-transparent scale-110" />
                
                <motion.img 
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="animate-pulse relative w-full h-[400px] sm:h-[500px] 2xl:h-[600px] object-contain drop-shadow-2xl" 
                  src={heroGhost} 
                  alt="Food Bae Ghost Mascot" 
                />

                {/* Floating Badges */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-10 -left-4 sm:left-0"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-lg border border-cream-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <Flame size={16} className="text-primary-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-brown-400">Made Fresh</p>
                      <p className="text-sm font-semibold text-brown-600">Every Order</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-20 -right-4 sm:right-0"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-lg border border-cream-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center">
                      <Heart size={16} className="text-secondary-500" fill="currentColor" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-brown-400">Est.</p>
                      <p className="text-sm font-semibold text-brown-600">Since 2016</p>
                    </div>
                  </motion.div>
                </motion.div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 lg:mb-20"
          >
            <span className="section-label">
              <Sparkles size={14} />
              What Drives Us
            </span>
            <h2 className="font-display text-display-md text-brown-600">OUR CORE VALUES</h2>
            <p className="mt-4 text-brown-500 max-w-2xl mx-auto">
              We're not just making food—we're crafting experiences that keep you coming back for more.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full p-8 ${value.bgColor} border ${value.borderColor} rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${value.color} text-white rounded-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="font-display text-xl text-brown-600 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-brown-500 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="relative py-20 lg:py-28 bg-cream-300 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238a552e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-custom relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">
                <Star size={14} fill="currentColor" />
                Customer Favorites
              </span>
              <h2 className="font-display text-display-md text-brown-600">FAN FAVORITES</h2>
              <p className="mt-2 text-brown-500 max-w-md">
                The items that keep people coming back for more.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-500 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
              >
                See Full Menu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.slice(0, 4).map((item, index) => (
              <MenuItemCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals Section */}
      {specialDeals.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-cream-50 to-white" />
          <div className="container-custom relative">
            <SpecialDealsCarousel
              specialDeals={specialDeals}
              handleWhatsAppOrder={handleWhatsAppOrder}
            />
          </div>
        </section>
      )}

      {/* Find Us Section */}
      <section className="relative py-20 lg:py-28 bg-cream-300 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">
                <MapPin size={14} />
                Visit Us
              </span>
              <h2 className="font-display text-display-md text-brown-600 mb-4">FIND US</h2>
              <p className="text-brown-500 mb-10 max-w-md text-lg">
                Come say hi! We're located in the heart of Beirut. Can't make it? We deliver straight to your door.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin size={22} />,
                    title: 'Main Location',
                    content: (
                      <>
                        {restaurantInfo.address.street}
                        <br />
                        {restaurantInfo.address.district}, {restaurantInfo.address.city}
                      </>
                    ),
                  },
                  {
                    icon: <Clock size={22} />,
                    title: 'Opening Hours',
                    content: `Mon - Sun: ${restaurantInfo.hours.monThu.open} - ${restaurantInfo.hours.monThu.close}`,
                  },
                  {
                    icon: <Phone size={22} />,
                    title: 'Contact',
                    content: (
                      <>
                        {restaurantInfo.phone}
                        <br />
                        {restaurantInfo.phone2}
                      </>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="icon-container flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown-600 mb-1">{item.title}</h4>
                      <p className="text-sm text-brown-500 leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="btn-whatsapp"
                >
                  <FaWhatsapp size={18} />
                  Chat with Us
                </button>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="btn-secondary"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-premium">
                {/* Map Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-3xl blur-2xl" />
                
                <iframe
                  src={restaurantInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Food Bae Location"
                  className="relative w-full h-full rounded-3xl"
                />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 left-6 z-10"
              >
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg border border-cream-200">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <div>
                    <p className="text-xs text-brown-400">We're</p>
                    <p className="font-semibold text-green-600">Open Now!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
