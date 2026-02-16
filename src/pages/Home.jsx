import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "../assets/videos/jaggery.mp4";
import ProductCard from "../components/ProductCard";

function ParallaxBlock({ title, image, children, reverse }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
    >
      {/* TEXT */}
      <div className={reverse ? "md:order-2" : ""}>
        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#2D5016] mb-3 md:mb-4">
          {title}
        </h3>
        <div className="w-12 h-[1px] bg-[#A0785A] mb-3 md:mb-4"></div>
        <p className="text-xs sm:text-sm md:text-base text-[#5a4a3a] leading-relaxed font-light">
          {children}
        </p>
      </div>

      {/* IMAGE */}
      <div
        className={`flex justify-center ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <motion.div
          style={{ y }}
          className="
            w-full max-w-[420px]
            aspect-[16/10]
            overflow-hidden
            rounded-lg
            border border-[#C4A57B]/50
            bg-[#EFE8DC]
          "
        >
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover object-center
              [filter:contrast(1.04)_saturate(0.92)_sepia(0.06)]
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div ref={containerRef} className="bg-[#F5F1E8]">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#8B5A3C]/60"></div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 sm:mb-6 tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs text-[#C4A57B] font-light uppercase"
          >
            Handcrafted Since 2020
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-white tracking-tighter leading-[0.9] max-w-6xl mb-6 sm:mb-8"
          >
            Purity in
            <br />
            <span className="font-light italic">Every Drop</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 max-w-2xl font-light leading-relaxed tracking-wide px-4"
          >
            Where ancient wisdom meets modern consciousness. Our organic jaggery is a celebration of tradition.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center w-full px-4"
          >
            <a
              href="#products"
              className="group relative bg-white text-[#8B5A3C] px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 text-center w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-[#C4A57B] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>

            <a
              href="https://wa.me/917972060463"
              target="_blank"
              className="group bg-transparent border border-white/40 text-white px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase backdrop-blur-md hover:bg-white/10 hover:border-white transition-all duration-500 text-center w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="inline-flex items-center gap-3 justify-center">
                Connect With Us
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-transparent via-white/60 to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="bg-[#2D5016] py-3 sm:py-5 overflow-hidden border-y border-[#4A7C2C]">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 sm:gap-20 whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 sm:gap-20 items-center text-[#C4A57B] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light">
              <span>Chemical-Free</span>
              <span>Sustainably Sourced</span>
              <span>Traditionally Crafted</span>
              <span>Rich in Minerals</span>
            </div>
          ))}
        </motion.div>
      </div>

{/* PRODUCTS COLLECTION - MOVED UP */}
<section id="products" className="bg-[#E8DCC8] py-16 sm:py-20 md:py-28 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADER */}
    <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-24">
      <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
        Our Collection
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extralight text-[#2D5016] tracking-tight mb-4 sm:mb-6 px-4">
        Handcrafted <span className="italic font-light">Varieties</span>
      </h2>

      <div className="w-16 sm:w-24 h-[1px] bg-[#A0785A] mx-auto mb-6 sm:mb-10"></div>

      <p className="text-[#5a4a3a] text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-light px-4">
        Each product is a labor of love, crafted in small batches to ensure the
        highest quality.
      </p>
    </motion.div>

    {/* PRODUCT GRID */}
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
    >
      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Jaggery Cubes"
          weight="500g"
          image="/images/2.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Jaggery Block"
          weight="500g"
          image="/images/3.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Powder Jaggery"
          weight="500g"
          image="/images/6.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Jaggery Cubes"
          weight="250g"
          image="/images/2.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Jaggery Block"
          weight="250g"
          image="/images/3.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Premium Gift Box"
          weight="Mixed"
          image="/images/4.jpeg"
        />
      </motion.div>
    </motion.div>

  </div>
</section>

      {/* PHILOSOPHY SECTION - CONDENSED */}
      <section className="relative bg-[#F5F1E8] overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6 lg:px-12">

        {/* IMAGE BLOCK */}
        <motion.div
          {...fadeInUp}
            className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
            style={{
                  backgroundImage: "url('/images/1.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
            }}
            >
      <span className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white/70 text-xs sm:text-sm font-light tracking-widest">
        Product Photography
      </span>
    </motion.div>

    {/* CONTENT BLOCK */}
    <motion.div
      {...fadeInUp}
      className="flex flex-col justify-center px-2 sm:px-4 md:px-8 lg:px-16"
    >
      <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
        Our Philosophy
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] mb-6 sm:mb-8 leading-[1.15]">
        Nature's Gift,
        <br />
        <span className="italic font-light">Preserved</span>
      </h2>

      <div className="w-16 sm:w-20 h-[1px] bg-[#A0785A] mb-6 sm:mb-8"></div>

      <p className="text-[#5a4a3a] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
        In the heart of Bangalore, we craft jaggery the way it was meant to be—
        slowly, mindfully, and with deep respect for the earth.
      </p>

      <p className="text-[#5a4a3a] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-light">
        We reject chemical shortcuts and embrace the patience of traditional
        methods.
      </p>
    </motion.div>

        </div>
      </section>

      {/* WHY CHOOSE US - REDUCED TO 3 ITEMS */}
      <section className="bg-[#E8DCC8] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">The Difference</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight px-4">
              Why <span className="italic font-light">PreTea Gud</span>
            </h2>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
          >
            {[
              {
                title: "Organic Sourcing",
                desc: "Every stalk comes from certified organic farms where soil health and biodiversity thrive without synthetic intervention.",
                color: "#4A7C2C"
              },
              {
                title: "Traditional Methods",
                desc: "Our process honors centuries-old techniques—slow boiling in iron vessels, natural clarification, and patient sun-drying.",
                color: "#8B5A3C"
              },
              {
                title: "Zero Compromise",
                desc: "No preservatives, no artificial colors, no chemical clarifiers. Pure concentrated sugarcane juice transformed through time.",
                color: "#2D5016"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-white p-6 sm:p-8 md:p-10 border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-700" style={{ backgroundColor: item.color }}></div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#2D5016] mb-3 sm:mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#6a5a4a] leading-relaxed font-light text-xs sm:text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

{/* CRAFTING PROCESS - CONDENSED TO 2 STEPS */}
<section className="bg-[#F5F1E8] py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16 md:mb-20"
    >
      <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
        From Farm to Table
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight px-4">
        The Sacred <span className="italic">Journey</span>
      </h2>
      <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-[1px] bg-[#A0785A] mx-auto"></div>
    </motion.div>

    <div className="space-y-16 sm:space-y-20 md:space-y-24">

      <ParallaxBlock
        title="Organic Cultivation"
        image="/images/Sugar.jpg"
      >
        Our partner farmers nurture sugarcane using regenerative agriculture
        practices. Each stalk grows under the Karnataka sun, rooted deep in mineral-rich
        earth farmed with respect for generations.
      </ParallaxBlock>

      <ParallaxBlock
        title="Traditional Craft"
        image="/images/boiling.png"
        reverse
      >
        Pressed juice simmers slowly in iron vessels over wood fires. The liquid
        thickens and develops deep caramel notes. Days of sunlight transform liquid into solid.
      </ParallaxBlock>

    </div>
  </div>
</section>

      {/* HEALTH BENEFITS - REDUCED TO 4 ITEMS */}
      <section className="bg-[#2D5016] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#C4A57B] uppercase mb-4 sm:mb-6 font-light">Wellness Within</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#E8DCC8] tracking-tight px-4">
              Nature's <span className="italic font-light">Medicine</span>
            </h2>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { title: "Sustained Energy", desc: "Complex carbohydrates provide steady glucose release without crashes" },
              { title: "Mineral Rich", desc: "Natural iron, magnesium, and calcium for comprehensive nutrition" },
              { title: "Immune Support", desc: "Antioxidants strengthen the body's natural defense mechanisms" },
              { title: "Digestive Health", desc: "Traditional remedy for supporting healthy digestion and cleansing" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-[#4A7C2C]/20 backdrop-blur-sm p-6 sm:p-8 border border-[#4A7C2C]/40 hover:border-[#C4A57B] transition-all duration-500"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-light text-[#E8DCC8] mb-3 sm:mb-4">{benefit.title}</h3>
                <div className="w-12 h-[1px] bg-[#A0785A] mb-3 sm:mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-[#C4A57B] text-xs sm:text-sm font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

{/* INSTAGRAM FEED - CONDENSED */}
<section className="bg-[#E8DCC8] py-12 sm:py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
    {/* HEADER */}
    <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 md:mb-16">
      <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-3 sm:mb-4 font-light">
        Follow Our Journey
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#2D5016]">
        @preteagud
      </h3>
    </motion.div>

    {/* GRID - 3 IMAGES ON MOBILE, 6 ON DESKTOP */}
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
    >
      {[...Array(6)].map((_, i) => (
        <motion.a
          key={i}
          variants={fadeInUp}
          href="https://www.instagram.com/preteagud.in?igsh=dno2cHIzMHpraW91"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            aspect-square
            w-full
            bg-[#4A7C2C]/20
            hover:bg-[#4A7C2C]/30
            transition-all duration-500
            flex items-center justify-center
            text-[#8B5A3C]/50
            text-[10px] sm:text-xs font-light
            cursor-pointer
            ${i >= 3 ? 'hidden lg:flex' : ''}
          `}
        >
          <span className="tracking-widest">IMAGE</span>
        </motion.a>
      ))}
    </motion.div>

  </div>
</section>

      {/* FINAL CTA */}
      <section className="relative bg-[#2D5016] py-8 sm:py-10 md:py-12 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <motion.div {...fadeInUp} className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#E8DCC8] tracking-tight mb-3 sm:mb-4 px-4">
            Begin Your
            <br />
            <span className="italic font-light">Wellness Journey</span>
          </h2>
          <div className="w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#C4A57B] text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 font-light max-w-2xl mx-auto px-4">
            Join thousands who have rediscovered the joy of pure, natural sweetness.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="https://wa.me/917972060463"
              target="_blank"
              className="w-full sm:w-auto group bg-[#E8DCC8] text-[#2D5016] px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-[#C4A57B] transition-all duration-500 text-center"
            >
              <span className="inline-flex items-center gap-3">
                Order Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#C4A57B]/20 text-xs sm:text-sm text-[#C4A57B] font-light space-y-1.5 sm:space-y-2">
            <p>Bangalore, Karnataka, India</p>
            <p>hello@preteagud.com</p>
            <p>+91 79720 60463</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}