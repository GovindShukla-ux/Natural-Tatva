import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ===== CONSTANTS =====
const WHATSAPP_NUMBER = "917972060463";
const PHONE_DISPLAY = "+91 79720 60463";
const EMAIL = "hello@naturaltatva.com";
const AMAZON_URL = "https://www.amazon.in/s?k=natural+tatva+jaggery";

// ===== ANIMATION VARIANTS =====
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

// ===== DATA =====
const socialLinks = [
  {
    href: "https://instagram.com/naturaltatva",
    label: "Follow Natural Tatva on Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    href: "https://facebook.com/naturaltatva",
    label: "Follow Natural Tatva on Facebook",
    path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
  },
  {
    href: "https://linkedin.com/company/naturaltatva",
    label: "Follow Natural Tatva on LinkedIn",
    path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  },
  {
    href: "https://youtube.com/@naturaltatva",
    label: "Subscribe to Natural Tatva on YouTube",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Why Jaggery", to: "/why-jaggery" },
  { label: "Products", to: "/products" },
  { label: "Contact Us", to: "/contact" },
];

const products = [
  {
    category: "Tea Sweetener",
    items: [
      "Sugarcane Jaggery Cubes 6 Units",
      "Sugarcane Jaggery Cubes 25 Units",
      "Sugarcane Jaggery Cubes 50 Units",
    ],
  },
  {
    category: "Coffee Sweetener",
    items: [
      "Coconut Jaggery Cubes 6 Units",
      "Coconut Jaggery Cubes 25 Units",
      "Coconut Jaggery Cubes 50 Units",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-[#2D5016] text-[#C4A57B]"
    >
      {/* ===== WHATSAPP CTA STRIP ===== */}
      <div className="bg-[#4A7C2C] border-b border-[#5a8f36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[#E8DCC8] text-sm sm:text-base font-light text-center sm:text-left">
              🌿 Have questions? We're just a message away!
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Natural%20Tatva!%20I%20would%20like%20to%20know%20more%20about%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Natural Tatva on WhatsApp"
              className="flex items-center gap-2 bg-[#2D5016] text-[#E8DCC8] px-5 py-2.5 text-sm font-medium tracking-wider uppercase hover:bg-[#1e3a0f] transition-all duration-300 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN FOOTER CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
        >
          {/* BRAND & DESCRIPTION */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link to="/" aria-label="Natural Tatva - Go to homepage">
              <p className="text-2xl sm:text-3xl font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-tight hover:text-white transition-colors duration-300">
                Natural <span className="italic font-normal">Tatva</span>
              </p>
            </Link>
            <div className="w-12 sm:w-16 h-[1px] bg-[#A0785A] mb-4 sm:mb-6" aria-hidden="true" />
            <p className="text-xs sm:text-sm leading-relaxed font-light mb-6">
              Crafting pure, organic jaggery with ancient wisdom and modern
              consciousness. Every block is a promise to honor tradition and
              nourish souls.
            </p>

            {/* Shop on Amazon Button */}
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop Natural Tatva products on Amazon"
              className="inline-flex items-center gap-2 border border-[#A0785A] text-[#E8DCC8] px-4 py-2 text-xs font-medium tracking-wider uppercase hover:bg-[#A0785A]/20 transition-all duration-300 mb-6"
            >
              Shop on Amazon →
            </a>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-9 h-9 sm:w-10 sm:h-10 border border-[#4A7C2C] flex items-center justify-center hover:border-[#C4A57B] hover:bg-[#C4A57B]/10 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* PRODUCTS */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-base sm:text-lg font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-wide">
              Our Collection
            </h3>
            <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-4 sm:mb-6" aria-hidden="true" />
            <div className="space-y-3 sm:space-y-4">
              {products.map((group) => (
                <div key={group.category}>
                  <p className="text-[#E8DCC8] text-xs sm:text-sm font-normal mb-2">
                    {group.category}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-light" role="list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a
                          href={AMAZON_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Buy ${item} on Amazon`}
                          className="hover:text-[#E8DCC8] transition-colors duration-300 inline-flex items-center group"
                        >
                          <span className="w-0 group-hover:w-2 h-[1px] bg-[#A0785A] mr-0 group-hover:mr-1.5 transition-all duration-300" aria-hidden="true" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COMPANY LINKS */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-base sm:text-lg font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-wide">
              Our Company
            </h3>
            <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-4 sm:mb-6" aria-hidden="true" />
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-light" role="list">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-[#E8DCC8] transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#A0785A] mr-0 group-hover:mr-2 transition-all duration-300" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications / Trust Badges */}
            <div className="mt-8">
              <h4 className="text-xs text-[#E8DCC8] font-normal tracking-wider uppercase mb-3">
                Our Promise
              </h4>
              <ul className="space-y-2 text-xs font-light" role="list">
                {[
                  "🌿 100% Natural & Organic",
                  "🚫 No Chemicals or Additives",
                  "♻️ Eco-friendly Packaging",
                  "🇮🇳 Made in India",
                ].map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-base sm:text-lg font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-wide">
              Get In Touch
            </h3>
            <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-4 sm:mb-6" aria-hidden="true" />

            <address className="not-italic space-y-3 sm:space-y-4 text-xs sm:text-sm font-light">
              {/* Phone */}
              <div className="flex items-start gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-[#E8DCC8] transition-colors duration-300">
                  {PHONE_DISPLAY}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${EMAIL}`} className="hover:text-[#E8DCC8] transition-colors duration-300 break-all">
                  {EMAIL}
                </a>
              </div>

              {/* Registered Office */}
              <div className="flex items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-normal text-[#E8DCC8] mb-1">Registered Office</p>
                  <p className="leading-relaxed">
                    MG Road, Bangalore – 560001<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              {/* Manufacturing Unit */}
              <div className="flex items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="font-normal text-[#E8DCC8] mb-1">Manufacturing Unit</p>
                  <p className="leading-relaxed">
                    Tumkur Road, Bangalore – 560073<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </address>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-[#4A7C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm font-light">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Natural Tatva. All Rights Reserved.
              Crafted with reverence.
            </p>
            {/* Legal Links */}
            <nav aria-label="Legal links" className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/privacy-policy"
                className="hover:text-[#E8DCC8] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                to="/terms"
                className="hover:text-[#E8DCC8] transition-colors duration-300"
              >
                Terms of Use
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                to="/shipping"
                className="hover:text-[#E8DCC8] transition-colors duration-300"
              >
                Shipping Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}