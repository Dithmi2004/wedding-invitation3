import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { useCountdown } from "../hooks/useCountdown";
import { SectionHeading } from "./SectionHeading";
import { ShareActions } from "./ShareActions";
import { LotusMotif } from "./ornaments/LotusMotif";

function Unit({ value, label }: {value: number;label: string;}) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center px-1 py-2">
      <span className="relative block h-[48px] overflow-hidden sm:h-[76px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={{ y: "40%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-40%", opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="block text-[44px] font-medium leading-none tabular-nums text-ink sm:text-[72px]">
            
            {display}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-antique sm:text-[12px]">{label}</span>
    </div>);

}

export function CountdownSection() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(wedding.startISO);

  return (
    <section id="countdown" aria-labelledby="countdown-title" className="mx-auto max-w-3xl">
      <SectionHeading id="countdown-title" title="Counting the moments" subtitle={`Until ${wedding.date.long}, ${wedding.ceremony.time} Sri Lanka time`} />

      {isPast ?
      <div className="mt-10 flex flex-col items-center text-center">
          <LotusMotif className="h-10 w-16" filled />
          <p className="mt-4 max-w-md text-[24px] italic leading-snug text-ink">
            Our wedding day has arrived — thank you for celebrating with us.
          </p>
        </div> :

      <div className="mt-10 grid grid-cols-4 divide-x divide-gold/35" role="timer" aria-label={`${days} days, ${hours} hours, ${minutes} minutes until the wedding`}>
          <Unit value={days} label="Days" />
          <Unit value={hours} label="Hours" />
          <Unit value={minutes} label="Minutes" />
          <Unit value={seconds} label="Seconds" />
        </div>
      }

      <div className="mt-10">
        <ShareActions />
      </div>
    </section>);

}