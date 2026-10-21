import React from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { reveal } from "../utils/motion";
import { SectionHeading } from "./SectionHeading";

export function DressCodeSection() {
  const { dressCode } = wedding;
  return (
    <section id="attire" aria-labelledby="attire-title">
      <SectionHeading id="attire-title" title="Dress code" />
      <div className="mt-10 grid items-center gap-8 md:grid-cols-[240px_1fr] md:gap-12">
        <motion.div {...reveal()} className="mx-auto w-48 md:w-full">
          <div className="paper relative aspect-[3/4] overflow-hidden rounded-b-[20px] rounded-t-[999px] border border-gold/60 p-1.5">
            <div className="h-full w-full overflow-hidden rounded-b-[16px] rounded-t-[999px] border border-gold/30">
              <img
                src={wedding.images.couple}
                alt="Cartoon Kandyan couple in Osariya saree and Nilame attire"
                className="h-full w-full scale-[1.15] object-cover object-[50%_30%] mix-blend-multiply" />
              
            </div>
          </div>
        </motion.div>

        <motion.div {...reveal(0.05)} className="text-center md:text-left">
          <h3 className="text-[32px] font-semibold leading-tight text-maroon sm:text-[40px]">{dressCode.title}</h3>
          <p className="mt-3 max-w-lg text-[18px] leading-relaxed text-ink/75 md:max-w-none">{dressCode.description}</p>

          <dl className="mt-6 grid gap-4 border-y border-gold/35 py-5 sm:grid-cols-2 sm:gap-8">
            <div>
              <dt className="text-[12px] font-bold uppercase tracking-[0.24em] text-antique">Ladies</dt>
              <dd className="mt-1 text-[18px] text-ink">{dressCode.ladies}</dd>
            </div>
            <div>
              <dt className="text-[12px] font-bold uppercase tracking-[0.24em] text-antique">Gentlemen</dt>
              <dd className="mt-1 text-[18px] text-ink">{dressCode.gentlemen}</dd>
            </div>
          </dl>

          <div className="mt-5">
            <p className="text-[16px] italic text-ink/60">Suggested tones</p>
            <ul className="mt-3 flex justify-center gap-5 md:justify-start">
              {dressCode.palette.map((c) =>
              <li key={c.name} className="flex flex-col items-center gap-1.5">
                  <span className="h-9 w-9 rounded-full border border-gold/60 shadow-sm" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                  <span className="text-[13px] text-ink/70">{c.name}</span>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>);

}