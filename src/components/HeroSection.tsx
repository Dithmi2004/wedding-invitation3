import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { wedding } from "../data/wedding";
import { easeOut } from "../utils/motion";
import { CoupleIllustration } from "./CoupleIllustration";
import { CornerOrnament } from "./ornaments/CornerOrnament";
import { LotusMotif } from "./ornaments/LotusMotif";
import { OrnamentDivider } from "./ornaments/OrnamentDivider";

const item = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: easeOut }
});

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-6 px-5 pb-14 pt-24 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-10">
      <motion.div
        className="relative order-2 mx-auto w-full max-w-[400px] lg:order-1 lg:max-w-[460px]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: easeOut }}>
        
        <div className="paper relative aspect-[3/4] overflow-hidden rounded-b-[28px] rounded-t-[999px] p-3 shadow-card">
          <div className="pointer-events-none absolute inset-2 rounded-b-[22px] rounded-t-[999px] border border-gold/70" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-[14px] rounded-b-[18px] rounded-t-[999px] border border-gold/35" aria-hidden="true" />
          <CoupleIllustration halo className="h-full w-full pt-10" />
          <CornerOrnament className="absolute bottom-3 left-3 h-9 w-9 -scale-y-100" />
          <CornerOrnament className="absolute bottom-3 right-3 h-9 w-9 -scale-100" />
        </div>
      </motion.div>

      <div className="order-1 text-center lg:order-2 lg:text-left">
        <motion.div {...item(0.15)} className="flex justify-center lg:justify-start">
          <LotusMotif className="h-8 w-12" />
        </motion.div>
        <motion.p {...item(0.2)} className="mt-3 text-[12px] font-bold uppercase tracking-[0.34em] text-antique">
          {wedding.familiesLine}
        </motion.p>
        <motion.h1 {...item(0.26)} id="hero-title" className="mt-3 font-script font-normal leading-[1] text-ink text-[64px] sm:text-[84px] lg:text-[104px]">
          {wedding.bride}
          <span className="mx-3 font-serif text-[0.4em] italic text-gold">&amp;</span>
          <br className="lg:hidden" />
          {wedding.groom}
        </motion.h1>
        <motion.div {...item(0.32)}>
          <OrnamentDivider className="mt-5 lg:justify-start" />
          <p className="mt-5 text-[26px] font-medium tracking-[0.08em] text-ink sm:text-[30px]">{wedding.date.long}</p>
          <p className="mt-1 text-[17px] italic text-ink/70">
            {wedding.date.weekday} · {wedding.ceremony.time} · {wedding.venue.name}, Kandy
          </p>
        </motion.div>
        <motion.a
          {...item(0.4)}
          href="#message"
          className="group mt-8 hidden items-center gap-2 text-[12px] font-bold uppercase tracking-[0.28em] text-antique hover:text-maroon focus:outline-none focus-visible:underline lg:inline-flex">
          
          Read our invitation
          <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
        </motion.a>
      </div>
    </section>);

}