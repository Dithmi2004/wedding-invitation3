import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { easeOut } from "../utils/motion";

type WaxSealProps = {
  opening: boolean;
  onActivate: () => void;
};

function sealPath(): string {
  const points = 28;
  const parts: string[] = [];
  for (let i = 0; i <= points; i++) {
    const angle = i / points * Math.PI * 2;
    const r = i % 2 === 0 ? 47 : 44.5;
    parts.push(`${i === 0 ? "M" : "L"}${(50 + r * Math.cos(angle)).toFixed(2)} ${(50 + r * Math.sin(angle)).toFixed(2)}`);
  }
  return parts.join(" ") + "Z";
}

const burst = Array.from({ length: 12 }, (_, i) => i / 12 * Math.PI * 2);

export function WaxSeal({ opening, onActivate }: WaxSealProps) {
  const path = useMemo(sealPath, []);

  return (
    <div className="relative">
      {opening &&
      burst.map((a, i) =>
      <motion.span
        key={i}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        animate={{ x: Math.cos(a) * 64, y: Math.sin(a) * 64, opacity: 0, scale: 0.4 }}
        transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }} />

      )}
      <motion.button
        type="button"
        aria-label={`Open the wedding invitation of ${wedding.bride} and ${wedding.groom}`}
        disabled={opening}
        onClick={(e) => {
          e.stopPropagation();
          onActivate();
        }}
        whileHover={opening ? undefined : { scale: 1.06 }}
        whileTap={opening ? undefined : { scale: 0.94 }}
        animate={opening ? { scale: 1.15, opacity: 0, rotate: 18 } : { scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25, ease: easeOut, delay: opening ? 0.08 : 0 }}
        className="relative block h-16 w-16 rounded-full drop-shadow-[0_6px_10px_rgba(94,26,39,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ivory">
        
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          <path d={path} fill="#7A2533" />
          <circle cx="50" cy="50" r="36" fill="none" stroke="#5E1A27" strokeWidth="3" />
          <circle cx="50" cy="50" r="31" fill="none" stroke="#E8D3A2" strokeWidth="1" strokeOpacity="0.8" />
          <path d="M50 22 C54 28 54 33 50 37 C46 33 46 28 50 22Z" fill="#E8D3A2" fillOpacity="0.85" />
          <text x="50" y="66" textAnchor="middle" fontFamily="Pinyon Script, cursive" fontSize="26" fill="#E8D3A2">
            {wedding.monogram.first}&amp;{wedding.monogram.second}
          </text>
        </svg>
      </motion.button>
    </div>);

}