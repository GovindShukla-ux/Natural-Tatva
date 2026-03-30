import { Helmet } from "react-helmet-async";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/videos/jaggery.mp4";
import ProductCard from "../components/ProductCard";

// ===== CONSTANTS =====
const WHATSAPP_NUMBER = "917972060463";
const AMAZON_URL = "https://www.amazon.in/s?k=natural+tatva+jaggery";
const INSTAGRAM_URL = "https://www.instagram.com/naturaltatva";

// ===== ANIMATION VARIANTS =====
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15 } },
};

// ===== PRODUCTS DATA =====
const productsData = [
  {
    name: "Jaggery Cubes",
    weight: "500g",
    image: "/images/2.jpeg",
    available: 50,
    price: "149",
    badge: "Best Seller",
    description: "Pure sugarcane jaggery in convenient cube form. Perfect for your daily tea and coffee. No chemicals, no additives — just pure sweetness.",
    amazonUrl: AMAZON_URL,
  },
  {
    name: "Jaggery Block",
    weight: "500g",
    image: "/images/3.jpeg",
    available: 35,
    price: "129",
    description: "Traditional jaggery block made using century-old methods. Rich in iron and minerals. Ideal for cooking and traditional recipes.",
    amazonUrl: AMAZON_URL,
  },
  {
    name: "Powder Jaggery",
    weight: "500g",
    image: "/images/6.jpeg",
    available: 40,
    price: "159",
    badge: "New",
    description: "Finely ground jaggery powder for easy mixing in beverages, desserts, and baking. All the benefits of jaggery in a convenient form.",
    amazonUrl: AMAZON_URL,
  },
  {
    name: "Jaggery Cubes",
    weight: "250g",
    image: "/images/2.jpeg",
    available: 60,
    price: "89",
    description: "Starter pack of our best-selling sugarcane jaggery cubes. Great for trying Natural Tatva for the first time and having a taste of pure, natural sweetness.",
    amazonUrl: AMAZON_URL,
  },
  {
    name: "Jaggery Block",
    weight: "250g",
    image: "/images/3.jpeg",
    available: 45,
    price: "79",
    description: "Compact jaggery block perfect for small households. Same premium quality in a smaller, more affordable pack.",
    amazonUrl: AMAZON_URL,
  },
  {
    name: "Premium Gift Box",
    weight: "Mixed",
    image: "/images/4.jpeg",
    available: 20,
    price: "499",
    badge: "Gift",
    description: "Curated gift box featuring our complete range of organic jaggery products. Perfect for gifting to health-conscious loved ones.",
    amazonUrl: AMAZON_URL,
  },
];

// ===== WHY CHOOSE US DATA =====
const whyUsData = [
  {
    title: "Organic Sourcing",
    desc: "Every stalk comes from certified organic farms where soil health and biodiversity thrive without synthetic intervention.",
    color: "#4A7C2C",
  },
  {
    title: "Traditional Methods",
    desc: "Our process honors centuries-old techniques — slow boiling in iron vessels, natural clarification, and patient sun-drying.",
    color: "#8B5A3C",
  },
  {
    title: "Zero Compromise",
    desc: "No preservatives, no artificial colors, no chemical clarifiers. Pure concentrated sugarcane juice transformed through time.",
    color: "#2D5016",
  },
];

// ===== HEALTH BENEFITS DATA =====
const benefitsData = [
  {
    title: "Sustained Energy",
    desc: "Complex carbohydrates provide steady glucose release without crashes",
  },
  {
    title: "Mineral Rich",
    desc: "Natural iron, magnesium, and calcium for comprehensive nutrition",
  },
  {
    title: "Immune Support",
    desc: "Antioxidants strengthen the body's natural defense mechanisms",
  },
  {
    title: "Digestive Health",
    desc: "Traditional remedy for supporting healthy digestion and cleansing",
  },
];

// ===== PARALLAX BLOCK COMPONENT =====
function ParallaxBlock({ title, image, altText, children, reverse }) {
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative grid md:grid-cols-2 gap-6 md:gap-10 items-center"
    >
      {/* TEXT */}
      <div className={reverse ? "md:order-2" : ""}>
        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#2D5016] mb-3 md:mb-4">
          {title}
        </h3>
        <div className="w-12 h-[1px] bg-[#A0785A] mb-3 md:mb-4" aria-hidden="true" />
        <p className="text-xs sm:text-sm md:text-base text-[#5a4a3a] leading-relaxed font-light">
          {children}
        </p>
      </div>

      {/* IMAGE */}
      <div className={`flex justify-center ${reverse ? "md:order-1" : ""}`}>
        <motion.div
          style={{ y }}
          className="w-full max-w-[420px] aspect-[16/10] overflow-hidden rounded-lg border border-[#C4A57B]/50 bg-[#EFE8DC]"
        >
          <img
            src={image}
            alt={altText || `${title} - Natural Tatva organic jaggery`}
            className="w-full h-full object-cover object-center [filter:contrast(1.04)_saturate(0.92)_sepia(0.06)]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ===== HOME PAGE =====
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <>
      {/* ===== SEO ===== */}
      <Helmet>
        <title>Natural Tatva | Pure & Organic Jaggery Products</title>
        <meta
          name="description"
          content="Natural Tatva offers 100% pure, organic jaggery — sugarcane cubes, blocks and powder. Chemical-free, traditionally crafted in Bangalore. Buy online on Amazon."
        />
        <meta
          name="keywords"
          content="organic jaggery, natural jaggery, buy jaggery online, sugarcane jaggery cubes, jaggery block, jaggery powder, Natural Tatva, chemical free jaggery"
        />
        <link rel="canonical" href="https://www.naturaltatva.com/" />
        <meta property="og:title" content="Natural Tatva | Pure & Organic Jaggery Products" />
        <meta property="og:description" content="100% pure organic jaggery, traditionally crafted in Bangalore. No chemicals, no additives." />
        <meta property="og:url" content="https://www.naturaltatva.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div ref={containerRef} className="bg-[#F5F1E8]">

        {/* ===== HERO SECTION ===== */}
        <section
          aria-label="Hero section"
          className="relative h-screen w-full overflow-hidden"
        >
          <motion.div style={{ scale }} className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label="Natural Tatva jaggery production process"
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
              {/* Fallback for browsers that don't support video */}
              <img
                src="/images/1.jpeg"
                alt="Natural Tatva pure organic jaggery"
                className="w-full h-full object-cover"
              />
            </video>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#8B5A3C]/60" aria-hidden="true" />

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
              Where ancient wisdom meets modern consciousness. Our organic jaggery
              is a celebration of tradition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center w-full px-4"
            >
              <a
                href="#products"
                aria-label="Explore our jaggery collection"
                className="group relative bg-white text-[#8B5A3C] px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 text-center w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-[#C4A57B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" aria-hidden="true" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Natural Tatva on WhatsApp"
                className="group bg-transparent border border-white/40 text-white px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase backdrop-blur-md hover:bg-white/10 hover:border-white transition-all duration-500 text-center w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <span className="inline-flex items-center gap-3 justify-center">
                  Connect With Us
                  <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 z-10"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-transparent via-white/60 to-transparent"
            />
          </motion.div>
        </section>

        {/* ===== MARQUEE STRIP ===== */}
        <div
          className="bg-[#2D5016] py-3 sm:py-5 overflow-hidden border-y border-[#4A7C2C]"
          aria-label="Product highlights"
          role="marquee"
        >
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 sm:gap-20 whitespace-nowrap"
            aria-hidden="true"
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex gap-12 sm:gap-20 items-center text-[#C4A57B] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light"
              >
                <span>Chemical-Free</span>
                <span>✦</span>
                <span>Sustainably Sourced</span>
                <span>✦</span>
                <span>Traditionally Crafted</span>
                <span>✦</span>
                <span>Rich in Minerals</span>
                <span>✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===== PRODUCTS SECTION ===== */}
        <section
          id="products"
          aria-label="Our product collection"
          className="bg-[#E8DCC8] py-16 sm:py-20 md:py-28 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-24">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
                Our Collection
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extralight text-[#2D5016] tracking-tight mb-4 sm:mb-6 px-4">
                Handcrafted <span className="italic font-light">Varieties</span>
              </h2>
              <div className="w-16 sm:w-24 h-[1px] bg-[#A0785A] mx-auto mb-6 sm:mb-10" aria-hidden="true" />
              <p className="text-[#5a4a3a] text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-light px-4">
                Each product is a labor of love, crafted in small batches to
                ensure the highest quality and purest taste.
              </p>
            </motion.div>

            {/* Product Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
            >
              {productsData.map((product, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </motion.div>

            {/* View All Products Link */}
            <motion.div {...fadeInUp} className="text-center mt-12 sm:mt-16">
              <Link
                to="/products"
                aria-label="View all Natural Tatva products"
                className="inline-flex items-center gap-3 border border-[#8B5A3C] text-[#8B5A3C] px-8 py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-[#8B5A3C] hover:text-white transition-all duration-500"
              >
                View All Products
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ===== PHILOSOPHY SECTION ===== */}
        <section
          aria-label="Our philosophy"
          className="relative bg-[#F5F1E8] overflow-hidden py-12 sm:py-16 md:py-20"
        >
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6 lg:px-12">
            {/* Image */}
            <motion.div
              {...fadeInUp}
              className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/images/1.jpeg"
                alt="Natural Tatva organic jaggery being crafted traditionally in Bangalore"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white/70 text-xs sm:text-sm font-light tracking-widest">
                Traditional Crafting
              </span>
            </motion.div>

            {/* Content */}
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
              <div className="w-16 sm:w-20 h-[1px] bg-[#A0785A] mb-6 sm:mb-8" aria-hidden="true" />
              <p className="text-[#5a4a3a] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
                In the heart of Bangalore, we craft jaggery the way it was meant
                to be — slowly, mindfully, and with deep respect for the earth.
              </p>
              <p className="text-[#5a4a3a] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-light">
                We reject chemical shortcuts and embrace the patience of
                traditional methods.
              </p>
              <Link
                to="/about"
                aria-label="Learn more about Natural Tatva's story"
                className="mt-8 self-start inline-flex items-center gap-2 text-[#8B5A3C] text-xs sm:text-sm tracking-widest uppercase border-b border-[#8B5A3C] pb-1 hover:text-[#2D5016] hover:border-[#2D5016] transition-colors duration-300"
              >
                Our Story <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section
          aria-label="Why choose Natural Tatva"
          className="bg-[#E8DCC8] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
                The Difference
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight px-4">
                Why <span className="italic font-light">Natural Tatva</span>
              </h2>
              <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-[1px] bg-[#A0785A] mx-auto" aria-hidden="true" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
            >
              {whyUsData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative bg-white p-6 sm:p-8 md:p-10 border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-700 overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-700"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
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

        {/* ===== HEALTH BENEFITS ===== */}
        <section
          aria-label="Health benefits of Natural Tatva jaggery"
          className="bg-[#2D5016] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#C4A57B] uppercase mb-4 sm:mb-6 font-light">
                Wellness Within
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#E8DCC8] tracking-tight px-4">
                Nature's <span className="italic font-light">Medicine</span>
              </h2>
              <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-[1px] bg-[#A0785A] mx-auto" aria-hidden="true" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {benefitsData.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-[#4A7C2C]/20 backdrop-blur-sm p-6 sm:p-8 border border-[#4A7C2C]/40 hover:border-[#C4A57B] transition-all duration-500"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-light text-[#E8DCC8] mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#A0785A] mb-3 sm:mb-4 group-hover:w-16 transition-all duration-500" aria-hidden="true" />
                  <p className="text-[#C4A57B] text-xs sm:text-sm font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== INSTAGRAM SECTION ===== */}
        <section
          aria-label="Follow us on Instagram"
          className="bg-[#E8DCC8] py-12 sm:py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-3 sm:mb-4 font-light">
                Follow Our Journey
              </div>
              <a
                href={'https://www.instagram.com/natural_tatva/'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Natural Tatva on Instagram"
                className="text-xl sm:text-2xl md:text-3xl font-light text-[#2D5016] hover:text-[#8B5A3C] transition-colors duration-300"
              >
                @natural_tatva
              </a>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
            >
              {[...Array(6)].map((_, i) => (
                <motion.a
                  key={i}
                  variants={fadeInUp}
                  href={'https://www.instagram.com/natural_tatva/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View Natural Tatva Instagram post ${i + 1}`}
                  className={`aspect-square w-full bg-[#4A7C2C]/20 hover:bg-[#4A7C2C]/40 transition-all duration-500 flex items-center justify-center group overflow-hidden ${
                    i >= 3 ? "hidden lg:flex" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-[#8B5A3C]/40 group-hover:text-[#8B5A3C]/70 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section
          aria-label="Call to action"
          className="relative bg-[#2D5016] py-8 sm:py-10 md:py-12 px-4 sm:px-6 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
          </div>

          <motion.div {...fadeInUp} className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#E8DCC8] tracking-tight mb-3 sm:mb-4 px-4">
              Begin Your
              <br />
              <span className="italic font-light">Wellness Journey</span>
            </h2>
            <div className="w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto mb-4 sm:mb-6" aria-hidden="true" />
            <p className="text-[#C4A57B] text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 font-light max-w-2xl mx-auto px-4">
              Join thousands who have rediscovered the joy of pure, natural
              sweetness.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order Natural Tatva jaggery on WhatsApp"
                className="w-full sm:w-auto group bg-[#E8DCC8] text-[#2D5016] px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-[#C4A57B] transition-all duration-500 text-center"
              >
                <span className="inline-flex items-center gap-3">
                  Order Now
                  <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                </span>
              </a>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shop Natural Tatva on Amazon"
                className="w-full sm:w-auto group bg-[#FF9900] text-white px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-[#e68a00] transition-all duration-500 text-center"
              >
                <span className="inline-flex items-center gap-3">
                  Shop on Amazon
                  <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                </span>
              </a>
            </div>

            {/* Contact Info */}
            <address className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#C4A57B]/20 not-italic text-xs sm:text-sm text-[#C4A57B] font-light space-y-1.5 sm:space-y-2">
              <div>
                <p>Bangalore, Karnataka, India</p>
                <a href="mailto:hello@naturaltatva.com" className="block hover:text-[#E8DCC8] transition-colors duration-300">
                  hello@naturaltatva.com
                </a>
                <a href="tel:+917972060463" className="block hover:text-[#E8DCC8] transition-colors duration-300">
                  +91 79720 60463
                </a>
              </div>
            </address>
          </motion.div>
        </section>

      </div>
    </>
  );
}