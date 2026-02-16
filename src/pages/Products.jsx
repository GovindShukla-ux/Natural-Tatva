import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const PRODUCTS = [
  {
    id: 1,
    name: "Soft Jaggery Cubes",
    description:
      "Hand-cut jaggery cubes with a soft texture. Ideal for daily use, tea, sweets, and traditional recipes.",
    weight: "500 gm",
    available: "In Stock",
    image: "/images/2.jpeg",
  },
  {
    id: 2,
    name: "Traditional Jaggery Block",
    description:
      "Traditionally prepared jaggery blocks made from organically grown sugarcane. Slow boiled in iron vessels to preserve minerals, aroma, and deep caramel flavor.",
    weight: "500 gm",
    available: "In Stock",
    image: "/images/3.jpeg",
  },
   {
    id: 3,
    name: "Powdered Jaggery",
    description:
      "Traditionally prepared jaggery blocks made from organically grown sugarcane. Slow boiled in iron vessels to preserve minerals, aroma, and deep caramel flavor.",
    weight: "500 gm",
    available: "In Stock",
    image: "/images/6.jpeg",
  },
  {
    id: 4,
    name: "Traditional Jaggery Block",
    description:
      "Traditionally prepared jaggery blocks made from organically grown sugarcane. Slow boiled in iron vessels to preserve minerals, aroma, and deep caramel flavor.",
    weight: "250 gm",
    available: "Limited",
    image: "/images/2.jpeg",
  },
   {
    id: 5,
    name: "Soft Jaggery Cubes",
    description:
      "Hand-cut jaggery cubes with a soft texture. Ideal for daily use, tea, sweets, and traditional recipes.",
    weight: "250 gm",
    available: "In Stock",
    image: "/images/3.jpeg",
  }, 
  {
    id: 6,
    name: "Premium Gift Box",
    description:
      "Curated selection of our finest jaggery varieties. Thoughtfully packed for gifting wellness.",
    weight: "Mixed",
    available: "In Stock",
    image: "/images/4.jpeg",
  }, 
];

export default function Products() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] overflow-hidden"
    >
      {/* DOTTED BACKGROUND (SAME AS ABOUT PAGE) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HERO HEADER */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#8B5A3C] font-light">
            From Cane to Kitchen
          </span>

          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#2D5016]">
            Our Products
          </h1>

          <div className="mt-4 sm:mt-6 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto"></div>

          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-[#5a4a3a] font-light leading-relaxed text-xs sm:text-sm md:text-base px-4">
            Every product we offer is a result of patience, tradition, and respect
            for nature. Crafted using age-old methods, our jaggery retains its
            natural nutrients, aroma, and taste — just the way it was meant to be.
          </p>
        </motion.div>

        {/* STORY STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center"
        >
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFDF8] border border-[#E8DCC8] p-6 sm:p-8"
            >
              <h3 className="text-base sm:text-lg font-light text-[#2D5016] mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6a5a4a] font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* PRODUCTS GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              weight={product.weight}
              available={product.available}
              image={product.image}
            />
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}