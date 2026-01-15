import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Quote, Sparkles, Heart, Award, Users, Utensils } from 'lucide-react';
import foodBaeVideo from '../assets/food-bae-video.mp4';
import readySectionImage from '../assets/about-us-ready-section.jpeg';
import logo from '../assets/logo.jpg';
// import IframeResizer from 'iframe-resizer-react';

function About() {
  const milestones = [
    { year: '2016', title: 'The Beginning', description: 'Started as a small food truck with a big dream' },
    { year: '2019', title: 'First Location', description: 'Opened our flagship store in Foodie District' },
    { year: '2022', title: 'Community Love', description: 'Reached 50,000 happy customers served' },
    { year: '2026', title: 'Growing Strong', description: 'Expanded menu and introduced healthy options' },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '30K+', label: 'Happy Customers' },
    { icon: <Utensils className="w-6 h-6" />, value: '50+', label: 'Menu Items' },
    { icon: <Award className="w-6 h-6" />, value: '8+', label: 'Years of Service' },
    { icon: <Heart className="w-6 h-6" />, value: '4.7', label: 'Average Rating' },
  ];

  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
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

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-brown-600 bg-white/80 backdrop-blur-sm border border-cream-300 rounded-full shadow-sm"
            >
              <Sparkles size={14} className="text-secondary-400" />
              Our Story
            </motion.span>
            
            <h1 className="font-display text-display-lg text-brown-600">
              More Than<span className="text-secondary-500"> Just Food</span>
              <br />
              <span className="text-primary-500">Your New </span>FOOD BAE
            </h1>
            <p className="mt-6 text-lg text-brown-500 max-w-2xl mx-auto">
              Born from a passion for exceptional food and unforgettable experiences. 
              We're not just serving burgers. We're creating memories.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-cream-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-500 text-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className="font-display text-3xl text-brown-600">{stat.value}</span>
                </div>
                <p className="text-sm text-brown-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-3xl blur-2xl" />
                
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={foodBaeVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6"
              >
                <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-secondary-400 to-secondary-500 text-white rounded-2xl shadow-lg">
                  <Sparkles size={20} />
                  <span className="font-bold">Est. 2016</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">
                <Heart size={14} fill="currentColor" />
                Our Origin
              </span>
              <h2 className="font-display text-display-md text-brown-600 mb-6">WHY "FOOD BAE"?</h2>
              
              <div className="space-y-5 text-brown-500 leading-relaxed">
                <p className="text-lg">
                  The name says it all. We wanted to create the kind of food that becomes 
                  your favorite—the one you can't stop thinking about, the one you tell 
                  your friends about, the one that's <strong className="text-primary-500 font-semibold">too good to ghost</strong>.
                </p>
                <p>
                  What started as a small food truck in 2016 has grown into a beloved 
                  destination for food lovers who appreciate quality over quantity. We 
                  combine international culinary techniques with locally-sourced ingredients 
                  to create dishes that are both familiar and exciting.
                </p>
                <p>
                  Every burger, every platter, every meal is crafted with the same care 
                  we'd put into cooking for someone we love. Because at Food Bae, 
                  that's exactly what we're doing.
                </p>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 lg:py-28 bg-cream-300 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238a552e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Quote Card */}
            <div className="relative p-10 sm:p-14 bg-white rounded-3xl shadow-premium overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary-400/10 to-primary-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <Quote size={56} className="text-secondary-300 mb-8" />
              
              <blockquote className="relative font-display text-2xl sm:text-3xl lg:text-4xl text-brown-600 leading-relaxed mb-10">
                We don't just make food. We create experiences that bring people together, 
                spark joy, and leave you craving more. That's the Food Bae way.
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-sm opacity-50" />
                  <img
                    src={logo}
                    alt="Founder"
                    className="relative w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                  />
                </div>
                <div>
                  <span className="block font-semibold text-lg text-brown-600">Mohamad Abadi</span>
                  <span className="text-sm text-brown-400">Co-Founder</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-label">
              <Sparkles size={14} />
              Our Journey
            </span>
            <h2 className="font-display text-display-md text-brown-600">MILESTONES</h2>
            <p className="mt-4 text-brown-500 max-w-2xl mx-auto">
              From a humble food truck to a beloved destination, here's how we got here.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-secondary-400 to-primary-400 sm:-translate-x-0.5 rounded-full" />

            <div className="space-y-12 sm:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 sm:gap-12 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Year - Desktop */}
                  <div className={`hidden sm:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      <span className="font-display text-5xl lg:text-6xl bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                    </motion.div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 bg-white border-4 border-secondary-400 rounded-full shadow-md z-10" />

                  {/* Content */}
                  <div className={`flex-1 pl-12 sm:pl-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'}`}>
                    {/* Year - Mobile */}
                    <span className="sm:hidden font-display text-3xl bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent mb-2 block">
                      {milestone.year}
                    </span>
                    
                    <div className="p-6 bg-cream-100 rounded-2xl border border-cream-200 hover:shadow-lg transition-shadow">
                      <h3 className="font-display text-xl text-brown-600 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-brown-500">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-20 lg:py-28 bg-cream-300 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-warm opacity-30" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">
              <Heart size={14} fill="currentColor" />
              After the first bite
            </span>
            <h2 className="font-display text-display-md text-brown-600">Bae Approved</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://2b36a1c1284b4ac3b5d1483a54d7dd55.elf.site"
              className="
                w-full
                border-0
                rounded-3xl
                bg-white
                shadow-premium
                overflow-hidden
                h-[578px]
              "
              style={{
                padding: 'clamp(1rem, 4vw, 3.5rem)',
              }}
              loading="lazy"
            />

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}

    </main>
  );
}

export default About;
