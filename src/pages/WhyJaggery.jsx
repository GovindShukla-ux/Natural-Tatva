import { motion } from "framer-motion";

export default function WhyJaggery() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="bg-[#F5F1E8]">

      {/* HERO SECTION (MATCHES ABOUT & PRODUCTS) */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] overflow-hidden">
        
        {/* DOTTED BACKGROUND */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        </div>

        {/* HERO CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
            Ancient Wisdom
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-[#2D5016] tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Why
            <br />
            <span className="italic font-light">Jaggery?</span>
          </h1>

          <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#A0785A] mx-auto mb-6 sm:mb-8 md:mb-10"></div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#5a4a3a] font-light leading-relaxed max-w-3xl mx-auto px-4">
            Nature's perfect sweetener—rich in minerals, gentle on the body, and crafted by tradition rather than chemistry.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#2D5016] tracking-tight mb-4 sm:mb-6">
              More Than <span className="italic font-light">Sweetness</span>
            </h2>
            <div className="w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] leading-relaxed font-light px-4">
              Jaggery isn't just a sugar alternative—it's a nutritional powerhouse that has nourished civilizations for millennia. While refined sugar strips away everything except empty calories, jaggery retains the vital minerals, vitamins, and natural compounds that make it a genuine health food.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white border border-[#E8DCC8] p-6 sm:p-8 md:p-10">
            <p className="text-[#5a4a3a] leading-relaxed font-light text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Unlike the chemical-laden process that creates white sugar, jaggery is made through a simple, time-honored method: sugarcane juice is boiled slowly until it concentrates into golden blocks. No bleaching, no bone char, no chemical refinement—just heat, patience, and respect for the raw ingredient.
            </p>
            <p className="text-[#5a4a3a] leading-relaxed font-light text-sm sm:text-base md:text-lg">
              This traditional approach preserves what industrial processing destroys: iron for healthy blood, magnesium for muscle function, potassium for heart health, and trace minerals that work synergistically to support overall wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Health Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#E8DCC8]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
              Health Benefits
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight">
              Natural <span className="italic font-light">Wellness</span>
            </h2>
            <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Cardiovascular Support",
                desc: "Potassium and magnesium work together to support healthy blood pressure, while natural compounds help maintain proper heart rhythm and vascular function."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                title: "Sustained Energy",
                desc: "Complex carbohydrates provide steady glucose release over hours, avoiding the spikes and crashes that refined sugar creates. Perfect for active lifestyles."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "Digestive Wellness",
                desc: "Activates digestive enzymes and promotes healthy gut function. Ayurvedic tradition recommends jaggery after meals to aid digestion and prevent bloating."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "Immune Resilience",
                desc: "Antioxidants and trace minerals strengthen the body's natural defense mechanisms, helping ward off seasonal illnesses and supporting overall vitality."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "Iron for Vitality",
                desc: "Natural iron content supports oxygen transport to cells, combating fatigue and promoting healthy blood. Especially beneficial for women and active individuals."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: "Respiratory Relief",
                desc: "Traditional remedy for soothing coughs and clearing respiratory passages. The warming properties help dissolve phlegm and ease breathing."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                  </svg>
                ),
                title: "Detoxification Support",
                desc: "Aids the body's natural cleansing processes, supporting liver function and helping eliminate toxins accumulated from environmental exposure."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                ),
                title: "Mood Enhancement",
                desc: "Contains compounds that support serotonin production, promoting feelings of well-being and helping manage stress naturally."
              },
              {
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
                title: "Radiant Complexion",
                desc: "Vitamins and minerals nourish skin from within, promoting natural glow and supporting collagen production for healthy, vibrant skin."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-white p-6 sm:p-8 border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-500"
              >
                <div className="text-[#8B5A3C] mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-light text-[#2D5016] mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-3 sm:mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-[#6a5a4a] text-xs sm:text-sm leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
              The Difference
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight">
              Jaggery vs. <span className="italic font-light">Refined Sugar</span>
            </h2>
            <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div {...fadeInUp} className="overflow-x-auto">
            <table className="w-full bg-white border border-[#E8DCC8] min-w-[600px]">
              <thead className="bg-[#E8DCC8]">
                <tr>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs md:text-sm font-normal text-[#2D5016] tracking-widest uppercase">
                    Aspect
                  </th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs md:text-sm font-normal text-[#2D5016] tracking-widest uppercase">
                    Jaggery
                  </th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs md:text-sm font-normal text-[#2D5016] tracking-widest uppercase">
                    Refined Sugar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DCC8]">
                <tr className="hover:bg-[#F5F1E8] transition-colors">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#5a4a3a] font-light text-xs sm:text-sm">Processing</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#2D5016] font-light text-xs sm:text-sm">Natural boiling, no chemicals</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#8B5A3C] font-light text-xs sm:text-sm">Multiple chemical treatments, bleaching</td>
                </tr>
                <tr className="hover:bg-[#F5F1E8] transition-colors">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#5a4a3a] font-light text-xs sm:text-sm">Nutritional Value</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#2D5016] font-light text-xs sm:text-sm">Rich in iron, magnesium, potassium</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#8B5A3C] font-light text-xs sm:text-sm">Empty calories, zero nutrients</td>
                </tr>
                <tr className="hover:bg-[#F5F1E8] transition-colors">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#5a4a3a] font-light text-xs sm:text-sm">Glycemic Response</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#2D5016] font-light text-xs sm:text-sm">Gradual, sustained energy release</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#8B5A3C] font-light text-xs sm:text-sm">Rapid spikes and crashes</td>
                </tr>
                <tr className="hover:bg-[#F5F1E8] transition-colors">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#5a4a3a] font-light text-xs sm:text-sm">Digestive Impact</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#2D5016] font-light text-xs sm:text-sm">Aids digestion, activates enzymes</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#8B5A3C] font-light text-xs sm:text-sm">Can cause digestive issues</td>
                </tr>
                <tr className="hover:bg-[#F5F1E8] transition-colors">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#5a4a3a] font-light text-xs sm:text-sm">Environmental Impact</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#2D5016] font-light text-xs sm:text-sm">Traditional methods, minimal processing</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#8B5A3C] font-light text-xs sm:text-sm">Energy-intensive, chemical waste</td>
                </tr>
                <tr className="hover:bg-[#F5F1E8] transition-colors">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#5a4a3a] font-light text-xs sm:text-sm">Flavor Profile</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#2D5016] font-light text-xs sm:text-sm">Complex caramel, earthy notes</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#8B5A3C] font-light text-xs sm:text-sm">One-dimensional sweetness</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Ayurvedic Wisdom Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#2D5016]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#C4A57B] uppercase mb-4 sm:mb-6 font-light">
              Ancient Knowledge
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#E8DCC8] tracking-tight mb-6 sm:mb-8">
              Ayurvedic <span className="italic font-light">Perspective</span>
            </h2>
            <div className="w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-[#C4A57B] leading-relaxed font-light">
              Ayurveda, the ancient Indian system of medicine, has celebrated jaggery for over 5,000 years as a warming, cleansing food that balances the body's doshas (biological energies). Unlike cooling white sugar, jaggery's warming nature makes it particularly beneficial during cold seasons and for individuals with vata or kapha constitutions.
            </p>

            <div className="bg-[#4A7C2C]/20 border-l-4 border-[#C4A57B] p-6 sm:p-8">
              <p className="text-base sm:text-lg md:text-xl italic text-[#E8DCC8] font-light leading-relaxed mb-3 sm:mb-4">
                "Guda (jaggery) is heavy, unctuous, warm, aphrodisiac, and promotes strength. It alleviates vata, purifies blood, and kindles digestive fire."
              </p>
              <p className="text-xs sm:text-sm text-[#C4A57B] font-light tracking-wide">
                — Charaka Samhita, foundational Ayurvedic text
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#C4A57B] leading-relaxed font-light">
              Traditional practitioners recommend consuming jaggery after meals to aid digestion, mixing it with spices for respiratory health, or combining it with ghee and herbs as a rejuvenating tonic. This wisdom, proven through millennia of use, aligns perfectly with modern nutritional science's understanding of jaggery's benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Usage Tips Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#E8DCC8]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#8B5A3C] uppercase mb-4 sm:mb-6 font-light">
              Practical Guide
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#2D5016] tracking-tight">
              How to <span className="italic font-light">Use Jaggery</span>
            </h2>
            <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 gap-6 sm:gap-8"
          >
            {[
              {
                title: "Morning Beverages",
                desc: "Replace sugar in your tea or coffee with jaggery for a richer flavor and sustained energy. Start with a small piece and adjust to taste."
              },
              {
                title: "Baking & Desserts",
                desc: "Substitute jaggery for sugar in recipes at a 1:1 ratio. Adds depth and moisture to cakes, cookies, and traditional sweets."
              },
              {
                title: "Post-Meal Digestive",
                desc: "Consume a small piece after meals to aid digestion, as recommended by Ayurveda. Particularly helpful after heavy meals."
              },
              {
                title: "Smoothies & Shakes",
                desc: "Dissolve powdered jaggery in smoothies for natural sweetness and mineral boost. Pairs beautifully with banana, mango, and dates."
              },
              {
                title: "Savory Cooking",
                desc: "Balance acidity in curries, chutneys, and sauces. A pinch of jaggery rounds out flavors beautifully in Indian cuisine."
              },
              {
                title: "Wellness Tonics",
                desc: "Mix with ginger, tulsi, or turmeric for immunity-boosting drinks. Traditional remedies for cold, cough, and seasonal ailments."
              }
            ].map((tip, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 sm:p-8 border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-500"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-light text-[#2D5016] mb-3 sm:mb-4">
                  {tip.title}
                </h3>
                <div className="w-10 sm:w-12 h-[1px] bg-[#A0785A] mb-3 sm:mb-4"></div>
                <p className="text-[#6a5a4a] leading-relaxed font-light text-xs sm:text-sm">
                  {tip.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#F5F1E8]">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#2D5016] tracking-tight mb-6 sm:mb-8">
            Experience the
            <br />
            <span className="italic font-light">Difference</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#A0785A] mx-auto mb-8 sm:mb-10 md:mb-12"></div>
          <p className="text-[#5a4a3a] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 font-light max-w-2xl mx-auto">
            Make the switch to PreTea Gud jaggery and discover how traditional wisdom can transform your daily wellness routine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="#products"
              className="bg-[#2D5016] text-[#E8DCC8] px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest uppercase hover:bg-[#4A7C2C] transition-all duration-500"
            >
              Shop Now
            </a>

            <a
              href="/about"
              className="bg-transparent border-2 border-[#8B5A3C] text-[#8B5A3C] px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest uppercase hover:bg-[#8B5A3C] hover:text-white transition-all duration-500"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}