import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { wedding } from "../data/wedding";
import { easeOut } from "../utils/motion";
import { CoupleIllustration } from "./CoupleIllustration";
import { WaxSeal } from "./WaxSeal";
import { CornerOrnament } from "./ornaments/CornerOrnament";
import { LotusMotif } from "./ornaments/LotusMotif";

type InvitationCoverProps = {
  onOpen: () => void;
};

export function InvitationCover({ onOpen }: InvitationCoverProps) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);
  const lock = useRef(false);

  const handleOpen = () => {
    if (lock.current) return;
    lock.current = true;
    setOpening(true);
    window.setTimeout(onOpen, reduce ? 80 : 480);
  };

  return (
    <motion.section
      aria-label="Wedding invitation cover"
      className="fixed inset-0 z-30 flex items-center justify-center p-3 sm:p-6"
      style={{ perspective: 1400 }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: reduce ? 0 : 0.12, ease: "easeOut" } }}>
      
      <motion.div
        onClick={handleOpen}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={opening ? { opacity: 1, y: 0, scale: 1.015 } : { opacity: 1, y: 0, scale: 1 }}
        exit={{ rotateX: 24, y: -90, scale: 0.94, transition: { duration: 0.3, ease: easeOut } }}
        transition={{ duration: 0.3, ease: easeOut }}
        style={{ transformOrigin: "50% 0%" }}
        className="paper relative flex h-[min(94svh,880px)] w-full max-w-[440px] cursor-pointer select-none flex-col items-center overflow-hidden rounded-[32px] px-7 pb-5 pt-[clamp(28px,5svh,48px)] text-center shadow-card">
        
        {/* double gold border */}
        <div className="pointer-events-none absolute inset-2.5 rounded-[26px] border border-gold/70" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-[15px] rounded-[22px] border border-gold/35" aria-hidden="true" />
        <CornerOrnament className="absolute left-4 top-4 h-10 w-10" />
        <CornerOrnament className="absolute right-4 top-4 h-10 w-10 -scale-x-100" />
        <CornerOrnament className="absolute bottom-4 left-4 h-10 w-10 -scale-y-100" />
        <CornerOrnament className="absolute bottom-4 right-4 h-10 w-10 -scale-100" />

        <motion.div
          className="relative flex min-h-0 w-full flex-1 flex-col items-center"
          animate={{ opacity: opening ? 0.85 : 1 }}
          transition={{ duration: 0.2 }}>
          
          <LotusMotif className="h-6 w-10" />
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-antique">
            {wedding.familiesLine}
          </p>

          <h1 className="mt-[clamp(6px,1.4svh,14px)] font-script font-normal leading-[0.95] text-ink text-[clamp(42px,7.4svh,66px)]">
            <span className="block">{wedding.bride}</span>
            <span className="my-0.5 block font-serif text-[0.38em] italic text-gold">&amp;</span>
            <span className="block">{wedding.groom}</span>
          </h1>

          <p className="mx-auto mt-[clamp(6px,1.4svh,14px)] max-w-[280px] text-[14px] italic leading-snug text-ink/75">
            {wedding.coverWording}
          </p>
          <p className="mt-[clamp(6px,1.2svh,12px)] text-[15px] font-semibold tracking-[0.32em] text-antique">
            {wedding.date.short}
          </p>

          <motion.div
            className="relative mt-1 w-full min-h-0 flex-1"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15, ease: easeOut }}>
            
            <CoupleIllustration halo className="absolute inset-0 h-full w-full" />
          </motion.div>
        </motion.div>

        <div className="relative mt-1 flex flex-col items-center">
          <WaxSeal opening={opening} onActivate={handleOpen} />
          <motion.p
            className="mt-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-antique"
            animate={reduce || opening ? { opacity: opening ? 0 : 0.8 } : { opacity: [0.45, 0.9, 0.45] }}
            transition={reduce || opening ? { duration: 0.2 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
            
            Tap to open
          </motion.p>
        </div>
      </motion.div>
    </motion.section>);

}