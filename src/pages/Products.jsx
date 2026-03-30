import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

// ===== CONSTANTS =====
const AMAZON_URL = "https://www.amazon.in/s?k=natural+tatva+jaggery"; // Replace with actual store URL

// ===== ANIMATION VARIANTS (outside component to prevent re-creation) =====
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

// ===== STORY STRIP DATA (outside component) =====
const storyStrip = [
  {
    title: "Organic Sugarcane",
    text: "Grown without chemicals using regenerative farming practices.",
  },
  {
    title: "Traditional Processing",
    text: "Slow boiled in iron vessels over wood fire for authentic taste.",
  },
  {
    title: "Naturally Preserved",
    text: "No additives, no shortcuts — only time and sunlight.",
  },
];

// ===== PRODUCTS DATA =====
// FIX: available is now a NUMBER (ProductCard uses available > 0)
// FIX: price and amazonUrl added so buy buttons actually show
const PRODUCTS = [
  {
    id: 1,
    name: "Soft Jaggery Cubes",
    description:
      "Hand-cut jaggery cubes with a soft texture. Ideal for daily use, tea, sweets, and traditional recipes. Pure sugarcane goodness with no additives.",
    weight: "500g",
    available: 50,
    price: "149",
    badge: "Best Seller",
    image: "/images/2.jpeg",
    amazonUrl: AMAZON_URL,
  },
  {
    id: 2,
    name: "Traditional Jaggery Block",
    description:
      "Traditionally prepared jaggery blocks made from organically grown sugarcane. Slow boiled in iron vessels to preserve minerals, aroma, and deep caramel flavor.",
    weight: "500g",
    available: 35,
    price: "129",
    image: "/images/3.jpeg",
    amazonUrl: AMAZON_URL,
  },
  {
    id: 3,
    name: "Powdered Jaggery",
    description:
      "Finely ground jaggery powder for easy mixing in beverages, desserts, and baking. All the benefits of jaggery in a convenient, mess-free form.",
    weight: "500g",
    available: 40,
    price: "159",
    badge: "New",
    image: "/images/6.jpeg",
    amazonUrl: AMAZON_URL,
  },
  {
    id: 4,
    name: "Traditional Jaggery Block",
    description:
      "Compact jaggery block perfect for small households. Same premium quality — slow boiled in iron vessels — in a smaller, more affordable pack.",
    weight: "250g",
    available: 5,
    price: "79",
    badge: "Limited",
    image: "/images/2.jpeg",
    amazonUrl: AMAZON_URL,
  },
  {
    id: 5,
    name: "Soft Jaggery Cubes",
    description:
      "Starter pack of our best-selling sugarcane jaggery cubes. Great for trying Natural Tatva for the first time. Hand-cut and chemical-free.",
    weight: "250g",
    available: 60,
    price: "89",
    image: "/images/3.jpeg",
    amazonUrl: AMAZON_URL,
  },
  {
    id: 6,
    name: "Premium Gift Box",
    description:
      "Curated gift box featuring our complete range of organic jaggery products. Thoughtfully packed for gifting wellness to health-conscious loved ones.",
    weight: "Mixed",
    available: 20,
    price: "499",
    badge: "Gift",
    image: "/images/4.jpeg",
    amazonUrl: AMAZON_URL,
  },
];

export default function Products() {
  return (
    <>
      {/* ===== SEO — FIX: was completely missing ===== */}
      <Helmet>
        <title>Our Products | Natural Tatva — Pure Organic Jaggery</title>
        <meta
          name="description"
          content="Shop Natural Tatva's range of pure organic jaggery — sugarcane cubes, traditional blocks, powder and gift boxes. Chemical-free, traditionally crafted in Bangalore. Buy on Amazon."
        />
        <meta
          name="keywords"
          content="buy organic jaggery online, sugarcane jaggery cubes, jaggery block 500g, powdered jaggery, jaggery gift box, Natural Tatva products"
        />
        <link rel="canonical" href="https://www.naturaltatva.com/products" />
        <meta property="og:title" content="Our Products | Natural Tatva — Pure Organic Jaggery" />
        <meta
          property="og:description"
          content="Shop Natural Tatva's range of pure organic jaggery. Chemical-free, traditionally crafted in Bangalore."
        />
        <meta property="og:url" content="https://www.naturaltatva.com/products" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] overflow-hidden"
      >
        {/* DOTTED BACKGROUND */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* PAGE HEADER */}
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#8B5A3C] font-light">
              From Cane to Kitchen
            </span>

            {/* FIX: This is the products PAGE so h1 is correct here */}
            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#2D5016]">
              Our <span className="italic font-light">Products</span>
            </h1>

            <div className="mt-4 sm:mt-6 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto" aria-hidden="true" />

            <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-[#5a4a3a] font-light leading-relaxed text-xs sm:text-sm md:text-base px-4">
              Every product we offer is a result of patience, tradition, and
              respect for nature. Crafted using age-old methods, our jaggery
              retains its natural nutrients, aroma, and taste — just the way it
              was meant to be.
            </p>
          </motion.div>

          {/* STORY STRIP */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center"
          >
            {storyStrip.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#FFFDF8] border border-[#E8DCC8] p-6 sm:p-8"
              >
                <h2 className="text-base sm:text-lg font-light text-[#2D5016] mb-2 sm:mb-3">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#6a5a4a] font-light leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* PRODUCTS GRID */}
          {/* FIX: grid-cols-2 on mobile (was grid-cols-2 — too cramped on small phones) */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Product catalog"
          >
            {PRODUCTS.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  weight={product.weight}
                  available={product.available}
                  price={product.price}
                  badge={product.badge}
                  image={product.image}
                  amazonUrl={product.amazonUrl}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* BOTTOM NOTE */}
          <motion.div
            {...fadeInUp}
            className="text-center mt-12 sm:mt-16 text-xs sm:text-sm text-[#8B5A3C] font-light"
          >
            <p>
              All products are available on{" "}
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shop Natural Tatva on Amazon India"
                className="underline underline-offset-4 hover:text-[#2D5016] transition-colors duration-300"
              >
                Amazon India
              </a>
              {" "}or directly via WhatsApp.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </>
  );
}