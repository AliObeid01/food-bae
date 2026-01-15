import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, Heart, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { restaurantInfo } from '../data/menu';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'Our Story' },
  { path: '/contact', label: 'Contact' },
];

const legalLinks = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppOrder = () => {
    const whatsappNumber = restaurantInfo.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order.`, '_blank');
  };

  return (
    <footer className="relative bg-gradient-to-b from-brown-700 via-brown-800 to-brown-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 0C1440 0 1140 40 720 40C300 40 0 0 0 0L0 60Z" fill="currentColor" className="text-cream-300"/>
        </svg>
      </div>

      <div className="container-custom relative pt-20 pb-12 lg:pt-24 lg:pb-16">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 p-8 sm:p-10 bg-gradient-to-r from-primary-500/20 to-secondary-400/20 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl sm:text-4xl text-white mb-2">Ready to Find your Bae?</h3>
              <p className="text-cream-300">Get your favorite food delivered to your door</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={handleWhatsAppOrder}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-semibold rounded-full transition-all shadow-lg"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp Us</span>
              </motion.button>
              <motion.a
                href={`tel:${restaurantInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-whatsapp"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block group mb-4">
              <span className="font-display text-3xl bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                FOOD BAE
              </span>
            </Link>
            <p className="text-sm font-medium text-secondary-400 mb-3">
              {restaurantInfo.tagline}
            </p>
            <p className="text-sm text-brown-300 leading-relaxed max-w-xs">
              {restaurantInfo.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <motion.a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-11 h-11 text-brown-300 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white rounded-xl border border-white/10 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-11 h-11 text-brown-300 bg-white/5 hover:bg-blue-600 hover:text-white rounded-xl border border-white/10 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.button
                onClick={handleWhatsAppOrder}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-11 h-11 text-brown-300 bg-white/5 hover:bg-whatsapp-500 hover:text-white rounded-xl border border-white/10 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={20} />
              </motion.button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-brown-300 hover:text-secondary-400 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brown-500 group-hover:bg-secondary-400 transition-colors" />
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-secondary-400" />
                </div>
                <span className="text-sm text-brown-300 leading-relaxed">
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.district}, {restaurantInfo.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg flex-shrink-0">
                  <Phone size={14} className="text-secondary-400" />
                </div>
                <span className="text-sm text-brown-300">{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg flex-shrink-0">
                  <Mail size={14} className="text-secondary-400" />
                </div>
                <span className="text-sm text-brown-300">{restaurantInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm">
                <span className="text-brown-400">Mon - Thu</span>
                <span className="text-brown-300 font-medium">{restaurantInfo.hours.monThu.open} - {restaurantInfo.hours.monThu.close}</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-brown-400">Fri - Sat</span>
                <span className="text-brown-300 font-medium">{restaurantInfo.hours.friSat.open} - {restaurantInfo.hours.friSat.close}</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-brown-400">Sunday</span>
                <span className="text-brown-300 font-medium">{restaurantInfo.hours.sunday.open} - {restaurantInfo.hours.sunday.close}</span>
              </li>
            </ul>

            {/* Legal Links */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-xs text-brown-400 hover:text-brown-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-brown-400 text-center sm:text-left">
              © {currentYear} {restaurantInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-brown-400">
              Developed by
              {/* <Heart size={14} className="text-primary-400 fill-current" /> */}
              <a
                href={restaurantInfo.social.aliInsta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-secondary-300 font-medium transition-colors"
              >
                Ali Obeid
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
