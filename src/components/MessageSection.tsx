import React from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { reveal } from "../utils/motion";
import { LotusMotif } from "./ornaments/LotusMotif";

export function MessageSection() {
  return (
    <section id="message" aria-label="Wedding message" className="relative mx-auto max-w-3xl text-center">
      <motion.div {...reveal()} className="flex items-end justify-center gap-4">
        <LotusMotif className="h-6 w-9 opacity-70" />
        <LotusMotif className="h-12 w-[72px]" filled />
        <LotusMotif className="h-6 w-9 opacity-70" />
      </motion.div>
      <motion.p {...reveal(0.05)} className="mt-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-antique">
        Together with their families
      </motion.p>
      <motion.blockquote {...reveal(0.08)} className="mt-5">
        <p className="text-[22px] font-medium italic leading-[1.35] text-ink sm:text-[30px]">
          With the blessings of their beloved parents,
        </p>
      </motion.blockquote>
      <motion.div {...reveal(0.12)} className="mx-auto mt-8 grid max-w-2xl gap-8 text-[16px] leading-relaxed text-ink/75 sm:grid-cols-2">
        <div>
          <p className="font-semibold text-ink">{wedding.brideFamily}</p>
          <p className="mt-2">request the pleasure of your company at the wedding of their son</p>
          <p className="mt-2 font-script text-[46px] leading-tight text-maroon">{wedding.bride}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">{wedding.groomFamily}</p>
          <p className="mt-2">request the pleasure of your company at the wedding of their daughter</p>
          <p className="mt-2 font-script text-[46px] leading-tight text-maroon">{wedding.groom}</p>
        </div>
      </motion.div>
      <motion.p {...reveal(0.16)} className="mt-6 font-serif text-[26px] italic text-gold">&amp;</motion.p>
      <motion.p {...reveal(0.2)} className="mx-auto mt-5 max-w-xl text-[17px] italic leading-relaxed text-ink/70">
        as they begin their beautiful journey together in marriage.
      </motion.p>
    </section>
  );
}
