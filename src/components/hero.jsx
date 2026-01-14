      <section  className="relative min-h-screen flex items-center overflow-hidden bg-cream-200">
        <div className="container-custom relative z-20 pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-primary-500 bg-primary-50 border border-primary-100 rounded-full mb-6"
              >
                👻 Food you can't ghost
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-display-lg text-brown-600 leading-none"
              >
                TOO GOOD
                <br />
                <span className="text-primary-500">TO GHOST.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-brown-500 max-w-lg leading-relaxed"
              >
                Premium fast food that hits different. Fresh ingredients, bold
                flavors, and the vibes you've been craving.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <button
                  onClick={handleWhatsAppOrder}
                  className="btn-whatsapp"
                >
                  <FaWhatsapp size={20} />
                  <span>Order on WhatsApp</span>
                </button>
                <Link to="/menu" className="btn-secondary">
                  <span>View Full Menu</span>
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Hero Video/Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-brown-400 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>