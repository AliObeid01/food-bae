import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { restaurantInfo } from '../data/menu';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const isOpen = () => {
    const hour = new Date().getHours();
    return !(hour >= 3 && hour <= 13);
  };

  const handleWhatsAppOrder = () => {
    const whatsappNumber = restaurantInfo.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order.`, '_blank');
  };

  const subjectOptions = [
    'General Inquiry',
    'Catering Request',
    'Private Event',
    'Feedback',
    'Partnership',
    'Other',
  ];

  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300" />
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 bg-mesh-warm opacity-50" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-64 h-64 bg-primary-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"
        />

        {/* Decorative Icons */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[20%] text-primary-400/20 hidden lg:block"
        >
          <Phone size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-[20%] text-secondary-400/20 hidden lg:block"
        >
          <MessageCircle size={56} />
        </motion.div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-brown-600 bg-white/80 backdrop-blur-sm border border-cream-300 rounded-full shadow-sm"
            >
              <Sparkles size={14} className="text-secondary-400" />
              Get In Touch
            </motion.span>
            
            <h1 className="font-display text-display-lg text-brown-600">
              LET'S <span className="text-secondary-500">TALK</span> <span className="text-primary-500">FOOD.</span>
            </h1>
            <p className="mt-6 text-lg text-brown-500">
              Visit us for the crispiest bites in town or drop a message for catering inquiries. We are here to feed your soul.
            </p>

            {/* Quick Contact Pills */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mt-8 mb-8"
            >
              <a 
                href={`tel:${restaurantInfo.phone}`} 
                className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all border border-cream-200"
              >
                <Phone size={16} className="text-primary-500" />
                <span className="text-sm font-medium text-brown-600">{restaurantInfo.phone}</span>
              </a>
              <button 
                onClick={handleWhatsAppOrder}
                className="flex items-center gap-2 px-5 py-2.5 bg-whatsapp-500 text-white rounded-full shadow-sm hover:shadow-md hover:bg-whatsapp-600 transition-all"
              >
                <FaWhatsapp size={16} />
                <span className="text-sm font-medium">WhatsApp Us</span>
              </button>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left Column - Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Visit Us Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-7 bg-gradient-to-br from-cream-100 to-cream-200 rounded-3xl border border-cream-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container group-hover:scale-110 transition-transform">
                    <MapPin size={22} />
                  </div>
                  <h3 className="font-display text-2xl text-brown-600">Visit Us</h3>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <MapPin size={18} className="text-primary-500" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brown-400 uppercase tracking-wider">Address</span>
                      <p className="text-sm text-brown-600 mt-1 font-medium">
                        {restaurantInfo.address.street}
                        <br />
                        {restaurantInfo.address.district}, {restaurantInfo.address.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Phone size={18} className="text-primary-500" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brown-400 uppercase tracking-wider">Phone</span>
                      <p className="text-sm text-brown-600 mt-1 font-medium">{restaurantInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Mail size={18} className="text-primary-500" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brown-400 uppercase tracking-wider">Email</span>
                      <p className="text-sm text-brown-600 mt-1 font-medium">{restaurantInfo.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Opening Hours Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group p-7 bg-gradient-to-br from-cream-100 to-cream-200 rounded-3xl border border-cream-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container group-hover:scale-110 transition-transform">
                    <Clock size={22} />
                  </div>
                  <h3 className="font-display text-2xl text-brown-600">Opening Hours</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Mon - Thu', hours: `${restaurantInfo.hours.monThu.open} - ${restaurantInfo.hours.monThu.close}` },
                    { label: 'Fri - Sat', hours: `${restaurantInfo.hours.friSat.open} - ${restaurantInfo.hours.friSat.close}` },
                    { label: 'Sunday', hours: `${restaurantInfo.hours.sunday.open} - ${restaurantInfo.hours.sunday.close}` },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center text-sm justify-between py-3 border-b border-cream-300 last:border-0">
                      <span className="text-brown-500 font-medium">{row.label}</span>
                      <span className="text-brown-600 font-semibold bg-white px-3 py-1 rounded-lg shadow-sm">{row.hours}</span>
                    </div>
                  ))}
                </div>

                {/* Status Badge */}
                <div className="mt-6 flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpen() ? 'bg-green-400' : 'bg-red-400'} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen() ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  </span>
                  <span className={`font-semibold ${isOpen() ? 'text-green-600' : 'text-red-600'}`}>
                    {isOpen() ? "We're Open!" : "Currently Closed"}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="relative p-8 sm:p-10 bg-gradient-to-br from-cream-100 to-cream-200 rounded-3xl border border-cream-200 shadow-sm">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-secondary-400/10 to-primary-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative">
                  <h2 className="font-display text-3xl text-brown-600 mb-2">Send us a message</h2>
                  <p className="text-brown-500 mb-8">
                    Got feedback? We promise not to ghost you. Fill out the form below.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-brown-600 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-brown-600 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+961 XX XXX XXX"
                          className="input"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brown-600 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-brown-600 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="select pr-12"
                        >
                          {subjectOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-brown-600 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        rows={5}
                        className="input resize-none"
                        required
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 text-sage-600 bg-sage-400/20 border border-sage-400/30 rounded-xl"
                      >
                        <span className="text-xl">✅</span>
                        <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 text-red-600 bg-red-50 border border-red-100 rounded-xl"
                      >
                        <span className="text-xl">❌</span>
                        <span className="font-medium">Something went wrong. Please try again.</span>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center justify-center gap-3 w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
    </main>
  );
}

export default Contact;
