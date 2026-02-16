import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ NEW: detect route
  const location = useLocation();
  const isHome = location.pathname === "/";
  const showSolidNavbar = !isHome || scrolled;

  // Detect scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Why Jaggery", href: "/WhyJaggery" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          showSolidNavbar
            ? "bg-[#F5F1E8]/95 backdrop-blur-xl shadow-sm border-b border-[#E8DCC8]"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-between h-16 sm:h-20 lg:h-24 relative">
            
            {/* MOBILE MENU BUTTON - Left Side on Mobile */}
            <button
              className={`lg:hidden flex flex-col gap-1.5 w-6 h-6 transition-colors duration-300 relative z-50 ${
                scrolled ? "text-[#2D5016]" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full h-[2px] transition-colors duration-300 ${
                  scrolled ? "bg-[#2D5016]" : "bg-white"
                }`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`w-full h-[2px] transition-colors duration-300 ${
                  scrolled ? "bg-[#2D5016]" : "bg-white"
                }`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full h-[2px] transition-colors duration-300 ${
                  scrolled ? "bg-[#2D5016]" : "bg-white"
                }`}
              />
            </button>

            {/* BRAND - Centered on Mobile, Left on Desktop */}
            <Link to="/" className="group flex items-center gap-2 sm:gap-3 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <motion.div 
                className={`w-8 h-8 sm:w-10 sm:h-10 border-2 transition-all duration-500 flex items-center justify-center ${
                  showSolidNavbar ? "border-[#8B5A3C]" : "border-white/60"
                }`}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <span className={`text-base sm:text-lg font-light transition-colors duration-500 ${
                  showSolidNavbar ? "text-[#8B5A3C]" : "text-white"
                }`}>
                  PG
                </span>
              </motion.div>

              <motion.h1 
                className={`text-base sm:text-xl lg:text-2xl font-light tracking-tight transition-colors duration-500 ${
                  showSolidNavbar ? "text-[#2D5016]" : "text-white"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                PreTea <span className="font-normal italic">Gud</span>
              </motion.h1>
            </Link>

            {/* SPACER for mobile to balance layout */}
            <div className="w-6 h-6 lg:hidden"></div>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative text-sm font-light tracking-widest uppercase transition-colors duration-500 group ${
                      showSolidNavbar
                        ? "text-[#5a4a3a] hover:text-[#2D5016]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                      showSolidNavbar ? "bg-[#A0785A]" : "bg-white"
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/917972060463"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative px-8 py-3 text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-500 ${
                  showSolidNavbar
                    ? "bg-[#2D5016] text-[#E8DCC8] hover:bg-[#4A7C2C]"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#2D5016]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <span className="text-xs group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU - Full screen elegant overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#2D5016]/80 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#F5F1E8] z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                {/* Close button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-6 sm:top-8 right-6 sm:right-8 text-[#8B5A3C] hover:text-[#2D5016] transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Brand in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12"
                >
                  <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#8B5A3C] flex items-center justify-center">
                      <span className="text-base sm:text-lg font-light text-[#8B5A3C]">PG</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-light text-[#2D5016]">
                      PreTea <span className="italic font-normal">Gud</span>
                    </h2>
                  </Link>
                </motion.div>

                {/* Mobile Links */}
                <ul className="mt-8 sm:mt-12 space-y-5 sm:space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    >
                      {link.href.startsWith('/#') ? (
                        <a
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group block text-xl sm:text-2xl font-light text-[#5a4a3a] hover:text-[#2D5016] transition-colors relative"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#A0785A] group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group block text-xl sm:text-2xl font-light text-[#5a4a3a] hover:text-[#2D5016] transition-colors relative"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#A0785A] group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-16 sm:w-20 h-[1px] bg-[#A0785A] my-8 sm:my-10"
                />

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="space-y-3 sm:space-y-4"
                >
                  <a
                    href="https://wa.me/917972060463"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full bg-[#2D5016] text-[#E8DCC8] px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest uppercase hover:bg-[#4A7C2C] transition-all duration-500"
                  >
                    <span className="flex items-center gap-2 sm:gap-3">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">→</span>
                  </a>

                  <a
                    href="https://flipkart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full bg-transparent border-2 border-[#8B5A3C] text-[#8B5A3C] px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest uppercase hover:bg-[#8B5A3C] hover:text-white transition-all duration-500"
                  >
                    Shop on Flipkart
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">→</span>
                  </a>
                </motion.div>

                {/* Mobile Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8DCC8] space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#6a5a4a] font-light"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>Bangalore, Karnataka, India</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>hello@preteagud.com</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p>+91 79720 60463</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="mt-6 sm:mt-8 flex gap-3 sm:gap-4"
                >
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 border border-[#E8DCC8] flex items-center justify-center text-[#8B5A3C] hover:border-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 border border-[#E8DCC8] flex items-center justify-center text-[#8B5A3C] hover:border-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 border border-[#E8DCC8] flex items-center justify-center text-[#8B5A3C] hover:border-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}