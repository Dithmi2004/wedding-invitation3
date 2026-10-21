import React from "react";
import { motion } from "framer-motion";
import { navSections, wedding } from "../data/wedding";
import { easeOut } from "../utils/motion";

export function SiteNav() {
  return (
    <motion.nav
      aria-label="Invitation sections"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3, ease: easeOut }}
      className="fixed inset-x-0 top-3 z-40 flex justify-center px-3">
      
      <div className="no-scrollbar flex h-11 max-w-full items-center overflow-x-auto rounded-full border border-gold/35 bg-ivory/90 pl-4 pr-1.5 shadow-soft backdrop-blur">
        <a href="#home" className="mr-2 shrink-0 font-script text-[22px] leading-none text-maroon" aria-label="Back to top">
          {wedding.monogram.first}&amp;{wedding.monogram.second}
        </a>
        <span className="mr-1 h-4 w-px shrink-0 bg-gold/40" aria-hidden="true" />
        {navSections.map((s) =>
        <a
          key={s.id}
          href={`#${s.id}`}
          className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink/70 transition-colors duration-150 hover:bg-champagne/40 hover:text-maroon focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          
            {s.label}
          </a>
        )}
      </div>
    </motion.nav>);

}