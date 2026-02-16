import { motion } from "framer-motion";

export default function ProductCard({
  name,
  description,
  available,
  weight,
  image,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-500 overflow-hidden"
    >
      {/* PRODUCT IMAGE - Reduced height on mobile */}
      <div className="relative h-[180px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden bg-[#E8DCC8]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#8B5A3C]/40 text-xs sm:text-sm tracking-widest uppercase">
              Product Image
            </span>
          </div>
        )}
      </div>

      {/* PRODUCT INFO - Reduced padding on mobile */}
      <div className="p-4 sm:p-6 md:p-8">
        {/* META ROW */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          {weight && (
            <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#8B5A3C] uppercase font-light border border-[#E8DCC8] px-2 py-1 sm:px-3">
              {weight}
            </span>
          )}

          <span className="text-[10px] sm:text-xs tracking-wider text-[#2D5016] font-medium">
            {available} Available
          </span>
        </div>

        {/* NAME - Smaller on mobile */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#2D5016] mb-3 sm:mb-4 leading-tight">
          {name}
        </h3>

        {/* DIVIDER - Shorter on mobile */}
        <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-3 sm:mb-4"></div>

        {/* DESCRIPTION - Smaller text and spacing on mobile */}
        <p className="text-[#6a5a4a] leading-relaxed font-light text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
          {description}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <a
            href="https://wa.me/917972060463"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-[#8B5A3C] text-[#8B5A3C] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-[#8B5A3C] hover:text-white transition-all duration-500 text-center"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* HOVER BORDER */}
      <div className="absolute inset-0 border-2 border-[#C4A57B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
}