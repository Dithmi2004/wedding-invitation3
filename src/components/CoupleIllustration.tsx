import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { wedding } from "../data/wedding";
import { LotusMotif } from "./ornaments/LotusMotif";

type CoupleIllustrationProps = {
  className?: string;
  position?: "bottom" | "center" | "top";
  halo?: boolean;
};

// Cartoon Kandyan bride (Osariya) & groom (Nilame attire). Replace wedding.images.couple to swap the artwork.
export function CoupleIllustration({ className = "", position = "bottom", halo = false }: CoupleIllustrationProps) {
  const [failed, setFailed] = useState(false);
  const reduce = useReducedMotion();
  const objectPos = position === "bottom" ? "object-bottom" : position === "top" ? "object-top" : "object-center";

  if (failed) {
    return (
      <div className={`flex flex-col items-center justify-center gap-2 text-antique ${className}`} role="img" aria-label="Kandyan bride and groom illustration">
        <LotusMotif className="h-14 w-20" filled />
        <span className="font-script text-3xl">
          {wedding.bride} &amp; {wedding.groom}
        </span>
      </div>);

  }

  return (
    <div className={`relative ${className}`}>
      {halo &&
      <div className="pointer-events-none absolute inset-x-0 bottom-[6%] top-[4%] flex items-center justify-center" aria-hidden="true">
          <div className="relative aspect-square h-full max-w-full">
            <div className="absolute inset-0 rounded-full bg-champagne/35" />
            <div className="absolute inset-[6%] rounded-full border border-gold/45" />
            <div className="absolute inset-[11%] rounded-full border border-dashed border-gold/30" />
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold" />
          </div>
        </div>
      }
      <motion.img
        src={wedding.images.couple}
        alt={`Cartoon illustration of ${wedding.bride} and ${wedding.groom} holding hands in traditional Kandyan wedding attire — the bride in an Osariya saree and the groom in Nilame dress`}
        onError={() => setFailed(true)}
        draggable={false}
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`relative h-full w-full object-contain mix-blend-multiply ${objectPos}`} />
      
    </div>);

}