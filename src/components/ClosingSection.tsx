import React from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { reveal } from "../utils/motion";
import { LotusMotif } from "./ornaments/LotusMotif";
import { OrnamentDivider } from "./ornaments/OrnamentDivider";

export function ClosingSection() {
  return (
    <section aria-label="Closing message" className="mx-auto max-w-2xl text-center">
      <motion.p {...reveal()} className="text-[26px] font-medium italic leading-snug text-ink sm:text-[32px]">
        {wedding.closingMessage}
      </motion.p>
      <motion.div {...reveal(0.06)} className="mt-10">
        <p className="text-[18px] italic text-ink/65">With love and gratitude,</p>
        <p className="mt-3 text-[14px] font-semibold tracking-wide text-ink/80">
          The Perera &amp; Silva Families
        </p>
      </motion.div>
      <motion.div {...reveal(0.1)} className="mt-6 flex flex-col items-center">
        <LotusMotif className="h-14 w-24" filled />
        <OrnamentDivider className="mt-3" />
        <p className="mt-5 text-[13px] font-bold tracking-[0.3em] text-antique">
          {wedding.date.short} · KANDY
        </p>
      </motion.div>
    </section>);

}
