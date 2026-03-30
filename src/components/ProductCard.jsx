import { motion } from "framer-motion";

// ===== CONSTANTS (module-level, not recreated on every render) =====
const WHATSAPP_NUMBER = "917972060463";

export default function ProductCard({
  name,
  description,
  weight,
  image,
  price,
  badge,
  amazonUrl,
  whatsappMessage,
}) {
  const defaultMessage =
    whatsappMessage ||
    `Hi! I'm interested in ordering ${name}${weight ? ` (${weight})` : ""} from Natural Tatva.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
  const isAvailable = available > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${name} product card`}
      // ===== Schema.org Product Microdata for Google Rich Results =====
      itemScope
      itemType="https://schema.org/Product"
      className="group relative bg-white border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Hidden brand meta for Google Rich Results */}
      <meta itemProp="brand" content="Natural Tatva" />

      {/* ===== BADGE (Best Seller, New, etc.) ===== */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#2D5016] text-[#E8DCC8] text-[10px] font-medium tracking-widest uppercase px-2.5 py-1">
            {badge}
          </span>
        </div>
      )}

      {/* ===== OUT OF STOCK OVERLAY ===== */}
      {!isAvailable && (
        <div
          className="absolute inset-0 bg-white/70 z-20 flex items-center justify-center backdrop-blur-sm"
          aria-label="This product is out of stock"
        >
          <span className="bg-[#8B5A3C] text-white text-sm font-medium tracking-widest uppercase px-4 py-2">
            Out of Stock
          </span>
        </div>
      )}

      {/* ===== PRODUCT IMAGE ===== */}
      <div className="relative h-[140px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden bg-[#F5F1E8]">
        {image ? (
          <img
            src={image}
            alt={`${name} - Natural Tatva ${weight ?? ""} organic jaggery`}
            title={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            style={{ willChange: "transform" }}
            loading="lazy"
            decoding="async"
            itemProp="image"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            aria-hidden="true"
          >
            <svg
              className="w-10 h-10 text-[#8B5A3C]/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-[#8B5A3C]/40 text-xs tracking-widest uppercase">
              Product Image
            </span>
          </div>
        )}
      </div>

      {/* ===== PRODUCT INFO ===== */}
      <div className="p-3 sm:p-6 md:p-8 flex flex-col flex-grow">

        {/* META ROW */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          {weight && (
            <span
              className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#8B5A3C] uppercase font-light border border-[#E8DCC8] px-2 py-1 sm:px-3"
            >
              {weight}
            </span>
          )}

          {/* Availability indicator */}
          <span
            className={`text-[10px] sm:text-xs tracking-wider font-medium flex items-center gap-1.5 ${
              isAvailable ? "text-[#2D5016]" : "text-[#8B5A3C]"
            }`}
            itemProp="availability"
            content={
              isAvailable
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock"
            }
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isAvailable ? "bg-[#2D5016]" : "bg-[#8B5A3C]"
              }`}
              aria-hidden="true"
            />
            {isAvailable ? `${available} In Stock` : "Out of Stock"}
          </span>
        </div>

        {/* PRODUCT NAME */}
        <h3
          className="text-lg sm:text-xl md:text-2xl font-light text-[#2D5016] mb-2 leading-tight"
          itemProp="name"
        >
          {name}
        </h3>

        {/* PRICE */}
        {price && (
          <p
            className="text-base sm:text-lg font-medium text-[#8B5A3C] mb-3"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <span itemProp="priceCurrency" content="INR">
              ₹
            </span>
            <span itemProp="price" content={price}>
              {price}
            </span>
            {/* Hidden availability for offer schema */}
            <link
              itemProp="availability"
              href={
                isAvailable
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock"
              }
            />
          </p>
        )}

        {/* DIVIDER */}
        <div
          className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-3 sm:mb-4"
          aria-hidden="true"
        />

        {/* DESCRIPTION */}
        <p
          className="text-[#6a5a4a] leading-relaxed font-light text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3 flex-grow"
          itemProp="description"
        >
          {description}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">

          {/* WhatsApp Order Button */}
          <a
            href={isAvailable ? whatsappUrl : undefined}
            target={isAvailable ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={
              isAvailable
                ? `Order ${name} via WhatsApp`
                : `${name} is currently unavailable`
            }
            aria-disabled={!isAvailable}
            className={`flex-1 border-2 text-center px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest uppercase transition-all duration-500 ${
              isAvailable
                ? "border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white cursor-pointer"
                : "border-[#E8DCC8] text-[#C4A57B] cursor-not-allowed pointer-events-none"
            }`}
          >
            {isAvailable ? "Order on WhatsApp" : "Unavailable"}
          </a>

          {/* Amazon Buy Button */}
          {amazonUrl && isAvailable && (
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy ${name} on Amazon India`}
              className="flex-1 bg-[#FF9900] text-white text-center px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-[#e68a00] transition-all duration-500 flex items-center justify-center gap-2 font-medium"
            >
              {/* Amazon cart icon - cleaner SVG */}
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v1a2 2 0 002 2h.022l.987 9.868A2 2 0 007 21h10a2 2 0 001.991-1.807L19.978 10H20a2 2 0 000-4h-1V3a1 1 0 00-1-1H6zm1 2h10v1H7V4zm-3 3h16v1H4V7zm2.035 3h11.93l-.9 9H6.935l-.9-9zM9 14a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              Buy on Amazon
            </a>
          )}
        </div>
      </div>

      {/* HOVER BORDER EFFECT */}
      <div
        className="absolute inset-0 border-2 border-[#C4A57B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />
    </motion.article>
  );
}