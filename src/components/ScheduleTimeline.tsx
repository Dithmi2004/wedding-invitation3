import React from "react";
import { motion } from "framer-motion";
import { schedule } from "../data/wedding";
import { reveal } from "../utils/motion";
import { SectionHeading } from "./SectionHeading";

export function ScheduleTimeline() {
  return (
    <section id="schedule" aria-labelledby="schedule-title" className="mx-auto max-w-2xl">
      <SectionHeading id="schedule-title" title="Order of the day" subtitle="A gentle guide to our celebration" />
      <ol className="relative mt-10">
        <span className="absolute bottom-3 left-[95px] top-3 w-px bg-gold/50 sm:left-[127px]" aria-hidden="true" />
        {schedule.map((event, i) =>
        <motion.li
          key={event.time}
          {...reveal(i * 0.05)}
          className="relative grid grid-cols-[80px_32px_1fr] items-start gap-0 py-4 sm:grid-cols-[112px_32px_1fr]">
          
            <time className={`pt-0.5 text-right text-[17px] tabular-nums ${event.highlight ? "font-bold text-maroon" : "font-semibold text-antique"}`}>
              {event.time}
            </time>
            <span className="flex justify-center pt-2" aria-hidden="true">
              <span
              className={`block rotate-45 border border-gold ${event.highlight ? "h-3.5 w-3.5 bg-gold" : "h-2.5 w-2.5 bg-ivory"}`} />
            
            </span>
            <div>
              <h3 className={`leading-snug text-ink ${event.highlight ? "text-[24px] font-semibold" : "text-[20px] font-semibold"}`}>
                {event.title}
              </h3>
              <p className="text-[16px] italic text-ink/60">{event.detail}</p>
            </div>
          </motion.li>
        )}
      </ol>
    </section>);

}