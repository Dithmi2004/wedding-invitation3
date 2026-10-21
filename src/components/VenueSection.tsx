import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon, NavigationIcon } from "lucide-react";
import { wedding } from "../data/wedding";
import { getDirectionsUrl, getMapEmbedUrl } from "../utils/links";
import { reveal } from "../utils/motion";
import { InviteButton } from "./InviteButton";
import { SectionHeading } from "./SectionHeading";

export function VenueSection() {
  return (
    <section id="venue" aria-labelledby="venue-title">
      <SectionHeading id="venue-title" title="The venue" subtitle="Nestled in the hill capital of Kandy" />
      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
        <motion.div {...reveal()} className="text-center lg:text-left">
          <MapPinIcon className="mx-auto h-6 w-6 text-gold lg:mx-0" strokeWidth={1.5} aria-hidden="true" />
          <h3 className="mt-3 text-[32px] font-semibold leading-tight text-ink sm:text-[38px]">{wedding.venue.name}</h3>
          <address className="mt-2 text-[19px] not-italic leading-relaxed text-ink/75">{wedding.venue.address}</address>
          <p className="mt-4 text-[16px] italic text-ink/60">
            Ceremony at {wedding.ceremony.time} · Reception at {wedding.reception.time}
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <InviteButton href={getDirectionsUrl()} icon={NavigationIcon} variant="primary" ariaLabel={`Get directions to ${wedding.venue.name} on Google Maps (opens in a new tab)`}>
              Get Directions
            </InviteButton>
          </div>
        </motion.div>
        <motion.div {...reveal(0.05)} className="rounded-[26px] border border-gold/60 bg-ivory p-1.5 shadow-soft">
          <div className="overflow-hidden rounded-[20px] border border-gold/30">
            <iframe
              title={`Map showing ${wedding.venue.name}, ${wedding.venue.address}`}
              src={getMapEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-72 w-full sm:h-80"
              style={{ border: 0, filter: "sepia(0.35) saturate(0.85) contrast(0.95)" }} />
            
          </div>
        </motion.div>
      </div>
    </section>);

}