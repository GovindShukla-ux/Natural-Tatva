import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";

// ===== CONSTANTS =====
const WHATSAPP_NUMBER = "917972060463";
const EMAIL = "hello@naturaltatva.com";
const B2B_EMAIL = "b2b@naturaltatva.com";
const PHONE_DISPLAY = "+91 79720 60463";
const PHONE_B2B_DISPLAY = "+91 79720 60463"; // Update with actual B2B number

// EmailJS config — keep these but move out of handler
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ===== ANIMATION VARIANTS (outside component) =====
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

// ===== SOCIAL LINKS (outside component) =====
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
    href: "https://youtube.com/@naturaltatva",
    label: "Subscribe to Natural Tatva on YouTube",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
  {
    href: "https://linkedin.com/company/naturaltatva",
    label: "Follow Natural Tatva on LinkedIn",
    path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  },
];

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // FIX: useCallback prevents re-creation on every render
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // FIX: replaced alert() with inline status UI — alerts are bad UX on mobile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* ===== SEO — FIX: was completely missing ===== */}
      <Helmet>
        <title>Contact Us | Natural Tatva — Get In Touch</title>
        <meta
          name="description"
          content="Contact Natural Tatva for product enquiries, bulk orders, or partnership opportunities. Reach us via WhatsApp, email, or our contact form. Based in Bangalore, Karnataka."
        />
        <meta
          name="keywords"
          content="contact Natural Tatva, Natural Tatva Bangalore, jaggery bulk order, organic jaggery enquiry, Natural Tatva WhatsApp"
        />
        <link rel="canonical" href="https://www.naturaltatva.com/contact" />
        <meta property="og:title" content="Contact Us | Natural Tatva" />
        <meta property="og:description" content="Get in touch with Natural Tatva for product enquiries, bulk orders, or partnership opportunities." />
        <meta property="og:url" content="https://www.naturaltatva.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#F5F1E8]"
      >

        {/* ===== HERO SECTION ===== */}
        <section
          aria-label="Contact Natural Tatva"
          className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] overflow-hidden"
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
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
              Let's Connect
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-[#2D5016] tracking-tight leading-[1.1] mb-6 sm:mb-8">
              Get In
              <br />
              <span className="italic font-light">Touch</span>
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#A0785A] mx-auto mb-6 sm:mb-8 md:mb-10" aria-hidden="true" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5a4a3a] font-light leading-relaxed max-w-2xl mx-auto px-4">
              Have questions about our products or want to explore partnership
              opportunities? We're here to help.
            </p>
          </motion.div>
        </section>

        {/* ===== MAIN CONTACT SECTION ===== */}
        <section
          aria-label="Contact information and form"
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">

              {/* LEFT INFO */}
              <motion.div
                {...fadeInUp}
                className="lg:col-span-2 space-y-8 sm:space-y-10 lg:space-y-12"
              >
                {/* Customer Support */}
                <address className="not-italic">
                  <div className="group">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 border border-[#E8DCC8] group-hover:border-[#8B5A3C] flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        aria-hidden="true"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5A3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-sm sm:text-base font-normal text-[#2D5016] mb-2 sm:mb-3 tracking-wide uppercase">
                          Customer Support
                        </h2>
                        <div className="space-y-1.5 sm:space-y-2 text-[#5a4a3a] font-light text-xs sm:text-sm">
                          {/* FIX: Updated phone number to match actual number */}
                          <p className="flex items-center gap-2">
                            <span className="text-[#8B5A3C]">Phone:</span>
                            <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-[#2D5016] transition-colors">
                              {PHONE_DISPLAY}
                            </a>
                          </p>
                          {/* FIX: Updated email from preteagud.com → naturaltatva.com */}
                          <p className="flex items-center gap-2">
                            <span className="text-[#8B5A3C]">Email:</span>
                            <a href={`mailto:${EMAIL}`} className="hover:text-[#2D5016] transition-colors break-all">
                              {EMAIL}
                            </a>
                          </p>
                          {/* FIX: Added WhatsApp link */}
                          <p className="flex items-center gap-2">
                            <span className="text-[#8B5A3C]">WhatsApp:</span>
                            <a
                              href={`https://wa.me/${WHATSAPP_NUMBER}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#2D5016] transition-colors"
                            >
                              Chat with us
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* B2B Queries */}
                  <div className="group mt-8 sm:mt-10">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 border border-[#E8DCC8] group-hover:border-[#8B5A3C] flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        aria-hidden="true"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5A3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-sm sm:text-base font-normal text-[#2D5016] mb-2 sm:mb-3 tracking-wide uppercase">
                          B2B Queries
                        </h2>
                        <div className="space-y-1.5 sm:space-y-2 text-[#5a4a3a] font-light text-xs sm:text-sm">
                          <p className="flex items-center gap-2">
                            <span className="text-[#8B5A3C]">Phone:</span>
                            <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-[#2D5016] transition-colors">
                              {PHONE_B2B_DISPLAY}
                            </a>
                          </p>
                          {/* FIX: Updated email from preteagud.com → naturaltatva.com */}
                          <p className="flex items-center gap-2">
                            <span className="text-[#8B5A3C]">Email:</span>
                            <a href={`mailto:${B2B_EMAIL}`} className="hover:text-[#2D5016] transition-colors break-all">
                              {B2B_EMAIL}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Registered Office */}
                  <div className="group mt-8 sm:mt-10">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 border border-[#E8DCC8] group-hover:border-[#8B5A3C] flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        aria-hidden="true"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5A3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-sm sm:text-base font-normal text-[#2D5016] mb-2 sm:mb-3 tracking-wide uppercase">
                          Registered Office
                        </h2>
                        {/* FIX: "PreTea Gud Pvt. Ltd." → "Natural Tatva" */}
                        <p className="text-[#5a4a3a] font-light leading-relaxed text-xs sm:text-sm">
                          Natural Tatva<br />
                          MG Road, Bangalore – 560001<br />
                          Karnataka, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Manufacturing Unit */}
                  <div className="group mt-8 sm:mt-10">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 border border-[#E8DCC8] group-hover:border-[#8B5A3C] flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        aria-hidden="true"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5A3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-sm sm:text-base font-normal text-[#2D5016] mb-2 sm:mb-3 tracking-wide uppercase">
                          Manufacturing Unit
                        </h2>
                        <p className="text-[#5a4a3a] font-light leading-relaxed text-xs sm:text-sm">
                          Industrial Area, Tumkur Road<br />
                          Bangalore, Karnataka – 560073<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </address>

                {/* Social Media */}
                <div className="pt-6 sm:pt-8 border-t border-[#E8DCC8]">
                  <h2 className="text-xs sm:text-sm font-normal text-[#2D5016] mb-3 sm:mb-4 tracking-widest uppercase">
                    Follow Us
                  </h2>
                  <div className="flex gap-3 sm:gap-4" aria-label="Social media links">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-9 h-9 sm:w-10 sm:h-10 border border-[#E8DCC8] flex items-center justify-center text-[#8B5A3C] hover:border-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white transition-all duration-300"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT FORM */}
              <motion.div {...fadeInUp} className="lg:col-span-3">
                <div className="bg-white border border-[#E8DCC8] p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#2D5016] mb-3 sm:mb-4">
                      Send Us a <span className="italic font-normal">Message</span>
                    </h2>
                    <div className="w-12 sm:w-16 h-[1px] bg-[#A0785A] mb-3 sm:mb-4" aria-hidden="true" />
                    <p className="text-[#6a5a4a] font-light text-xs sm:text-sm">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* FIX: Replaced alert() with inline success/error messages */}
                  {status === "success" && (
                    <div
                      role="alert"
                      className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-light rounded"
                    >
                      ✓ Message sent successfully! We'll get back to you within 24 hours.
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      role="alert"
                      className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-light rounded"
                    >
                      ✗ Failed to send message. Please try again or contact us directly on WhatsApp.
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                    aria-label="Contact form"
                    noValidate
                  >
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm text-[#5a4a3a] font-light mb-2 tracking-wide"
                        >
                          Your Name <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className="w-full border border-[#E8DCC8] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-[#2D5016] placeholder:text-[#A0785A] focus:outline-none focus:border-[#8B5A3C] transition-colors duration-300 font-light"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm text-[#5a4a3a] font-light mb-2 tracking-wide"
                        >
                          Email Address <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="your.email@example.com"
                          className="w-full border border-[#E8DCC8] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-[#2D5016] placeholder:text-[#A0785A] focus:outline-none focus:border-[#8B5A3C] transition-colors duration-300 font-light"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs sm:text-sm text-[#5a4a3a] font-light mb-2 tracking-wide"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-[#E8DCC8] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-[#2D5016] placeholder:text-[#A0785A] focus:outline-none focus:border-[#8B5A3C] transition-colors duration-300 font-light"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm text-[#5a4a3a] font-light mb-2 tracking-wide"
                      >
                        Your Message <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className="w-full border border-[#E8DCC8] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-[#2D5016] placeholder:text-[#A0785A] focus:outline-none focus:border-[#8B5A3C] transition-colors duration-300 font-light resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      aria-busy={status === "sending"}
                      className="group w-full bg-[#2D5016] text-[#E8DCC8] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest uppercase hover:bg-[#4A7C2C] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <span
                            className="w-4 h-4 border-2 border-[#E8DCC8] border-t-transparent rounded-full animate-spin"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] sm:text-xs text-[#8B5A3C] font-light text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== MAP SECTION ===== */}
        <section
          aria-label="Office location"
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#E8DCC8]"
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#2D5016] mb-3 sm:mb-4">
                Visit Our <span className="italic font-normal">Office</span>
              </h2>
              <div className="w-12 sm:w-16 h-[1px] bg-[#A0785A] mx-auto mb-4 sm:mb-6" aria-hidden="true" />
              <p className="text-[#5a4a3a] font-light text-xs sm:text-sm md:text-base">
                We'd love to meet you in person. Schedule a visit to our Bangalore office.
              </p>
            </div>

            {/* 
              FIX: Replace placeholder with real Google Maps embed.
              To get your embed URL:
              1. Go to maps.google.com
              2. Search your address
              3. Click Share → Embed a map → Copy HTML
              4. Paste the src URL below
            */}
            <div className="relative h-64 sm:h-80 md:h-96 border border-[#C4A57B]/30 overflow-hidden">
              <iframe
                title="Natural Tatva Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9850823614!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Natural Tatva office location in Bangalore"
              />
            </div>
            <p className="text-center text-xs text-[#8B5A3C] mt-3 font-light">
              MG Road, Bangalore – 560001, Karnataka, India
            </p>
          </motion.div>
        </section>

      </motion.div>
    </>
  );
}