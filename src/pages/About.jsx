import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

// ===== DATA =====
const valuesData = [
  {
    title: "Authenticity",
    desc: "No shortcuts, no compromises. We honor traditional methods because they work — delivering flavor and nutrition modern processes destroy.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    desc: "Carbon-neutral operations, fair trade practices, and biodegradable packaging. The planet's health is non-negotiable.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "Every purchase supports farming families with premium prices, long-term contracts, and investment in rural infrastructure.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    desc: "Know exactly where your food comes from. We're proud of every step in our process and have nothing to hide.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const certificationsData = [
  {
    title: "Organic Certified",
    desc: "100% certified organic by recognized authorities. No synthetic pesticides, fertilizers, or processing chemicals — ever.",
  },
  {
    title: "FSSAI Approved",
    desc: "Full compliance with Food Safety and Standards Authority of India regulations. Your safety is our priority.",
  },
  {
    title: "Fair Trade Partner",
    desc: "Committed to equitable pricing and long-term relationships with farming communities. Prosperity should be shared.",
  },
];

// ===== ABOUT PAGE =====
export default function About() {
  return (
    <>
      {/* ===== SEO ===== */}
      <Helmet>
        <title>About Us | Natural Tatva — Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about Natural Tatva's mission to bring 100% pure, organic jaggery to Indian homes. Founded in Bangalore in 2020, we combine ancient wisdom with modern consciousness."
        />
        <meta
          name="keywords"
          content="Natural Tatva about, organic jaggery brand India, natural jaggery Bangalore, jaggery mission, traditional jaggery makers"
        />
        <link rel="canonical" href="https://www.naturaltatva.com/about" />
        <meta property="og:title" content="About Natural Tatva | Our Story & Mission" />
        <meta property="og:description" content="Natural Tatva was born from a belief that food should heal, not harm. Learn our story of preserving traditional jaggery crafting." />
        <meta property="og:url" content="https://www.naturaltatva.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-[#F5F1E8]">

        {/* ===== HERO SECTION ===== */}
        <section
          aria-label="About Natural Tatva"
          className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-5xl mx-auto text-center"
          >
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
              Our Story
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-[#2D5016] tracking-tight leading-[1.1] mb-6 sm:mb-8">
              About
              <br />
              <span className="italic font-light">Natural Tatva</span>
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#A0785A] mx-auto mb-6 sm:mb-8 md:mb-10" aria-hidden="true" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#5a4a3a] font-light leading-relaxed max-w-3xl mx-auto px-4">
              Where ancient wisdom meets modern consciousness. We're not just
              crafting jaggery — we're preserving heritage, supporting
              communities, and honoring the earth.
            </p>
          </motion.div>
        </section>

        {/* ===== MISSION SECTION ===== */}
        <section
          aria-label="Our mission"
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#F5F1E8]"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
                Our Mission
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight">
                Reviving <span className="italic font-light">Tradition</span>
              </h2>
              <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto" aria-hidden="true" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16"
            >
              <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#2D5016]">
                  Food Should Heal, Not Harm
                </h3>
                <div className="w-12 sm:w-16 h-[1px] bg-[#A0785A]" aria-hidden="true" />
                <p className="text-[#5a4a3a] leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  In a world dominated by industrial food production, we stand
                  as guardians of authenticity. Natural Tatva was born from a
                  profound belief that wellness begins with what we consume —
                  and that real food shouldn't require a chemistry degree to
                  understand.
                </p>
                <p className="text-[#5a4a3a] leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  Our Bangalore-based operation is more than a business; it's a
                  movement to reconnect urban consumers with the land, to honor
                  farmers' wisdom, and to prove that traditional methods aren't
                  obsolete — they're essential.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#2D5016]">
                  Purity in Every Piece
                </h3>
                <div className="w-12 sm:w-16 h-[1px] bg-[#A0785A]" aria-hidden="true" />
                <p className="text-[#5a4a3a] leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  By working closely with certified organic farmers and avoiding
                  all chemical processing, we deliver jaggery that carries the
                  essence of sun-ripened sugarcane and generations of
                  craftsmanship.
                </p>
                <p className="text-[#5a4a3a] leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  Every block is a testament to patience — slowly boiled in iron
                  vessels over wood fire, naturally clarified using plant
                  extracts, and sun-dried to develop its deep, caramel
                  complexity. This is how our ancestors made jaggery. This is
                  how it should still be made.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== VALUES SECTION ===== */}
        <section
          aria-label="Our values"
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#E8DCC8]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
                Our Values
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight">
                What We <span className="italic font-light">Stand For</span>
              </h2>
              <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto" aria-hidden="true" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {valuesData.map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-white p-6 sm:p-8 border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-500"
                >
                  <div className="text-[#8B5A3C] mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-light text-[#2D5016] mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-3 sm:mb-4 group-hover:w-16 transition-all duration-500" aria-hidden="true" />
                  <p className="text-[#6a5a4a] text-xs sm:text-sm leading-relaxed font-light">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== JOURNEY SECTION ===== */}
        <section
          aria-label="Our journey and founding story"
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#F5F1E8]"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
                The Beginning
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight">
                Our <span className="italic font-light">Journey</span>
              </h2>
              <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto" aria-hidden="true" />
            </motion.div>

            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <div className="space-y-6 sm:space-y-8 text-[#5a4a3a] font-light leading-relaxed">
                <p className="text-sm sm:text-base md:text-lg">
                  Natural Tatva emerged from a profound awakening. After years
                  in corporate corridors, our founder returned to ancestral
                  farmlands in Karnataka, witnessing firsthand how industrial
                  food production had severed humanity's connection to the earth.
                </p>

                <p className="text-sm sm:text-base md:text-lg">
                  The sight of traditional jaggery-making — unchanged for
                  centuries — sparked a vision: to bridge ancient wisdom and
                  modern consciousness, bringing wholesome sweetness to urban
                  homes while supporting the farming communities who preserve
                  these precious traditions.
                </p>

                <p className="text-sm sm:text-base md:text-lg">
                  Starting in 2020 from a small operation in Bangalore, we've
                  grown into a trusted name among health-conscious consumers who
                  refuse to compromise on quality. Our success isn't measured in
                  quarterly earnings but in the smiles of farmers receiving fair
                  prices, the health improvements customers report, and the
                  knowledge that we're preserving techniques that might
                  otherwise vanish.
                </p>

                {/* Founder Quote */}
                <blockquote className="bg-[#E8DCC8] border-l-4 border-[#8B5A3C] p-6 sm:p-8 my-8 sm:my-12">
                  <p className="text-base sm:text-lg md:text-xl italic text-[#2D5016] font-light leading-relaxed">
                    "Every block is a promise — to honor tradition, respect
                    nature, and nourish bodies and souls with integrity. We're
                    not just making jaggery; we're keeping alive a heritage that
                    feeds both body and spirit."
                  </p>
                  <footer className="mt-3 sm:mt-4">
                    <cite className="text-xs sm:text-sm text-[#8B5A3C] font-normal tracking-wide not-italic">
                      — Founder, Natural Tatva
                    </cite>
                  </footer>
                </blockquote>

                <p className="text-sm sm:text-base md:text-lg">
                  Today, thousands of families across India have made Natural
                  Tatva their sweetener of choice. But we're not satisfied. Our
                  vision extends beyond business success — we dream of a food
                  system where purity is the norm, not the exception; where
                  farmers thrive, not merely survive; where traditional
                  knowledge is celebrated, not forgotten.
                </p>

                <p className="text-sm sm:text-base md:text-lg">
                  Join us on this journey. Every purchase is a vote for
                  authenticity, a stand against industrial food's empty
                  promises, and an investment in a healthier, more connected
                  world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CERTIFICATIONS SECTION ===== */}
        <section
          aria-label="Our certifications and quality standards"
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#2D5016]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#C4A57B] uppercase mb-4 sm:mb-6 font-light">
                Trust & Quality
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#E8DCC8] tracking-tight">
                Certified <span className="italic font-light">Excellence</span>
              </h2>
              <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto" aria-hidden="true" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-[#4A7C2C]/20 backdrop-blur-sm p-6 sm:p-8 border border-[#4A7C2C]/40 hover:border-[#C4A57B] transition-all duration-500"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#E8DCC8] mb-3 sm:mb-4">
                    {cert.title}
                  </h3>
                  <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-4 sm:mb-6 group-hover:w-16 transition-all duration-500" aria-hidden="true" />
                  <p className="text-[#C4A57B] leading-relaxed font-light text-xs sm:text-sm md:text-base">
                    {cert.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section
          aria-label="Call to action"
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#E8DCC8]"
        >
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight mb-6 sm:mb-8">
              Be Part of the
              <br />
              <span className="italic font-light">Movement</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#A0785A] mx-auto mb-8 sm:mb-10 md:mb-12" aria-hidden="true" />
            <p className="text-[#5a4a3a] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 font-light max-w-2xl mx-auto">
              Every block of Natural Tatva jaggery supports sustainable farming,
              preserves traditional craftsmanship, and nourishes your body the
              way nature intended.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/products"
                aria-label="Explore Natural Tatva products"
                className="bg-[#2D5016] text-[#E8DCC8] px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest uppercase hover:bg-[#4A7C2C] transition-all duration-500 text-center"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                aria-label="Contact Natural Tatva"
                className="bg-transparent border-2 border-[#8B5A3C] text-[#8B5A3C] px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest uppercase hover:bg-[#8B5A3C] hover:text-white transition-all duration-500 text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
}