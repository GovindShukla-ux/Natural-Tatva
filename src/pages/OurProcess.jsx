import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// ===== ANIMATION VARIANTS =====
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

// ===== PROCESS STEPS DATA =====
const processSteps = [
  {
    step: "01",
    title: "Organic Cultivation",
    image: "/images/Sugar.jpg",
    alt: "Sugarcane organic cultivation for Natural Tatva jaggery in Karnataka",
    desc: "Our partner farmers nurture sugarcane using regenerative agriculture practices. Each stalk grows under the Karnataka sun, rooted deep in mineral-rich earth farmed with respect for generations.",
  },
  {
    step: "02",
    title: "Traditional Craft",
    image: "/images/boiling.png",
    alt: "Traditional jaggery boiling process in iron vessels at Natural Tatva",
    desc: "Pressed juice simmers slowly in iron vessels over wood fires. The liquid thickens and develops deep caramel notes. Days of sunlight transform liquid into solid.",
    reverse: true,
  },
  {
    step: "03",
    title: "Natural Clarification",
    image: "/images/1.jpeg",
    alt: "Natural clarification process at Natural Tatva",
    desc: "Using only plant-based extracts, we clarify the juice naturally — no chemicals, no bleaching agents. The result is pure, golden jaggery with all minerals intact.",
  },
  {
    step: "04",
    title: "Sun Drying & Setting",
    image: "/images/3.jpeg",
    alt: "Natural Tatva jaggery sun drying process",
    desc: "Poured into traditional moulds, the jaggery sets slowly under open skies. Patience is our ingredient. No artificial cooling, no shortcuts — just time and tradition.",
    reverse: true,
  },
  {
    step: "05",
    title: "Quality & Packaging",
    image: "/images/4.jpeg",
    alt: "Natural Tatva quality check and eco packaging",
    desc: "Each batch is hand-inspected for color, texture, and aroma. Packed in eco-friendly materials that protect the product and respect the planet.",
  },
];

// ===== PARALLAX BLOCK =====
function ParallaxBlock({ title, image, alt, step, children, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center`}
    >
      {/* TEXT */}
      <div className={`${reverse ? "md:order-2" : ""} px-2`}>
        <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#8B5A3C] uppercase mb-3 font-light">
          Step {step}
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#2D5016] mb-3 md:mb-4">
          {title}
        </h3>
        <div className="w-12 h-[1px] bg-[#A0785A] mb-4" aria-hidden="true" />
        <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed font-light">
          {children}
        </p>
      </div>

      {/* IMAGE */}
      <div className={`${reverse ? "md:order-1" : ""} flex justify-center`}>
        <motion.div
          style={{ y }}
          className="w-full max-w-[420px] aspect-[4/3] overflow-hidden rounded-lg border border-[#C4A57B]/50 bg-[#EFE8DC]"
        >
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover [filter:contrast(1.04)_saturate(0.92)_sepia(0.06)]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ===== OUR PROCESS PAGE =====
export default function OurProcess() {
  return (
    <>
      <Helmet>
        <title>Our Process | Natural Tatva — From Farm to Table</title>
        <meta
          name="description"
          content="Discover how Natural Tatva crafts pure organic jaggery — from organic sugarcane cultivation in Karnataka to traditional boiling, natural clarification and eco-friendly packaging."
        />
        <meta
          name="keywords"
          content="jaggery making process, organic jaggery production, traditional jaggery, Natural Tatva process, farm to table jaggery"
        />
        <link rel="canonical" href="https://www.naturaltatva.com/our-process" />
        <meta property="og:title" content="Our Process | Natural Tatva — From Farm to Table" />
        <meta property="og:description" content="See how Natural Tatva crafts pure organic jaggery using traditional methods from farm to table." />
        <meta property="og:url" content="https://www.naturaltatva.com/our-process" />
        <meta property="og:type" content="article" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#F5F1E8]"
      >
        {/* ===== HERO ===== */}
        <section
          aria-label="Our process hero"
          className="relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 px-4 sm:px-6 bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 font-light">
              From Farm to Table
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#2D5016] tracking-tight leading-[1.1] mb-6">
              The Sacred
              <br />
              <span className="italic font-light">Journey</span>
            </h1>
            <div className="w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] font-light leading-relaxed max-w-2xl mx-auto px-4">
              Every block of Natural Tatva jaggery travels a sacred path —
              from Karnataka's sun-drenched fields to your home. Here's how
              we honor that journey.
            </p>
          </motion.div>
        </section>

        {/* ===== STEPS TIMELINE (mobile) / ALTERNATING (desktop) ===== */}
        <section
          aria-label="Our production process steps"
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        >
          <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 md:space-y-24">
            {processSteps.map((step) => (
              <ParallaxBlock
                key={step.step}
                step={step.step}
                title={step.title}
                image={step.image}
                alt={step.alt}
                reverse={step.reverse}
              >
                {step.desc}
              </ParallaxBlock>
            ))}
          </div>
        </section>

        {/* ===== PROMISE STRIP ===== */}
        <section
          aria-label="Our quality promise"
          className="bg-[#2D5016] py-10 sm:py-12 px-4 sm:px-6"
        >
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
          >
            {[
              { number: "100%", label: "Organic" },
              { number: "0", label: "Chemicals" },
              { number: "5+", label: "Years Experience" },
              { number: "∞", label: "Traditional Wisdom" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <p className="text-3xl sm:text-4xl font-extralight text-[#E8DCC8] mb-2">
                  {stat.number}
                </p>
                <p className="text-xs tracking-widest uppercase text-[#C4A57B] font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ===== CTA ===== */}
        <section
          aria-label="Call to action"
          className="py-12 sm:py-16 px-4 sm:px-6 bg-[#E8DCC8]"
        >
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-[#2D5016] mb-4">
              Taste the <span className="italic font-light">Difference</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#A0785A] mx-auto mb-6" aria-hidden="true" />
            <p className="text-[#5a4a3a] text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
              Now that you know how it's made — experience it for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                aria-label="Shop Natural Tatva products"
                className="bg-[#2D5016] text-[#E8DCC8] px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#4A7C2C] transition-all duration-500 text-center"
              >
                Shop Now
              </Link>
              <Link
                to="/why-jaggery"
                aria-label="Learn why jaggery is good for you"
                className="border-2 border-[#8B5A3C] text-[#8B5A3C] px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#8B5A3C] hover:text-white transition-all duration-500 text-center"
              >
                Why Jaggery?
              </Link>
            </div>
          </motion.div>
        </section>

      </motion.div>
    </>
  );
}