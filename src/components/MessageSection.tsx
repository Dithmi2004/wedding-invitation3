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
      <motion.blockquote {...reveal(0.05)} className="mt-8">
        <p className="text-[26px] font-medium italic leading-[1.35] text-ink sm:text-[34px]">
          “{wedding.blessingMessage}”
        </p>
      </motion.blockquote>
      <motion.p {...reveal(0.1)} className="mx-auto mt-8 max-w-xl text-[18px] leading-relaxed text-ink/70">
        {wedding.invitationWording}
      </motion.p>
    </section>);

}