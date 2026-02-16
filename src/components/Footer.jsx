import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <footer className="bg-[#2D5016] text-[#C4A57B]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
        >
          {/* BRAND & DESCRIPTION */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-tight">
              PreTea Gud
            </h3>
            <div className="w-12 sm:w-16 h-[1px] bg-[#A0785A] mb-4 sm:mb-6"></div>
            <p className="text-xs sm:text-sm leading-relaxed font-light mb-4 sm:mb-6">
              Crafting pure, organic jaggery with ancient wisdom and modern consciousness. Every block is a promise to honor tradition and nourish souls.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 sm:w-10 sm:h-10 border border-[#4A7C2C] flex items-center justify-center hover:border-[#C4A57B] hover:bg-[#C4A57B]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 sm:w-10 sm:h-10 border border-[#4A7C2C] flex items-center justify-center hover:border-[#C4A57B] hover:bg-[#C4A57B]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 sm:w-10 sm:h-10 border border-[#4A7C2C] flex items-center justify-center hover:border-[#C4A57B] hover:bg-[#C4A57B]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 sm:w-10 sm:h-10 border border-[#4A7C2C] flex items-center justify-center hover:border-[#C4A57B] hover:bg-[#C4A57B]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* PRODUCTS */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-base sm:text-lg font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-wide">
              Our Collection
            </h4>
            <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-4 sm:mb-6"></div>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-[#E8DCC8] text-xs sm:text-sm font-normal mb-2">Tea Sweetener</p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-light">
                  <li className="hover:text-[#E8DCC8] transition-colors duration-300 cursor-pointer">Sugarcane Jaggery Cubes 6 Units</li>
                  <li className="hover:text-[#E8DCC8] transition-colors duration-300 cursor-pointer">Sugarcane Jaggery Cubes 25 Units</li>
                  <li className="hover:text-[#E8DCC8] transition-colors duration-300 cursor-pointer">Sugarcane Jaggery Cubes 50 Units</li>
                </ul>
              </div>

              <div>
                <p className="text-[#E8DCC8] text-xs sm:text-sm font-normal mb-2 mt-3 sm:mt-4">Coffee Sweetener</p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-light">
                  <li className="hover:text-[#E8DCC8] transition-colors duration-300 cursor-pointer">Coconut Jaggery Cubes 6 Units</li>
                  <li className="hover:text-[#E8DCC8] transition-colors duration-300 cursor-pointer">Coconut Jaggery Cubes 25 Units</li>
                  <li className="hover:text-[#E8DCC8] transition-colors duration-300 cursor-pointer">Coconut Jaggery Cubes 50 Units</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-base sm:text-lg font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-wide">
              Our Company
            </h4>
            <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-4 sm:mb-6"></div>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-light">
              <li>
                <Link to="/about" className="hover:text-[#E8DCC8] transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#A0785A] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <a href="/WhyJaggery" className="hover:text-[#E8DCC8] transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#A0785A] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  WhyJaggery
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E8DCC8] transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#A0785A] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/products" className="hover:text-[#E8DCC8] transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#A0785A] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Products
                </a>
              </li>
            </ul>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-base sm:text-lg font-light text-[#E8DCC8] mb-4 sm:mb-6 tracking-wide">
              Get In Touch
            </h4>
            <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-4 sm:mb-6"></div>
            
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-light">
              <div className="flex items-start gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+91 7972060463" className="hover:text-[#E8DCC8] transition-colors duration-300">
                  +91 7972060463
                </a>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@preteagud.com" className="hover:text-[#E8DCC8] transition-colors duration-300 break-all">
                  support@preteagud.com
                </a>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-normal text-[#E8DCC8] mb-1">Registered Office</p>
                  <p className="leading-relaxed">MG Road, Bangalore – 560001<br />Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="font-normal text-[#E8DCC8] mb-1">Manufacturing Unit</p>
                  <p className="leading-relaxed">Tumkur Road, Bangalore – 560073<br />Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#4A7C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm font-light">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} PreTea Gud. All Rights Reserved. Crafted with reverence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}