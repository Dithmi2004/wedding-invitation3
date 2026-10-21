import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ClosingSection } from "./ClosingSection";
import { CountdownSection } from "./CountdownSection";
import { DressCodeSection } from "./DressCodeSection";
import { FloatingParticles } from "./FloatingParticles";
import { HeroSection } from "./HeroSection";
import { MessageSection } from "./MessageSection";
import { MusicToggle } from "./MusicToggle";
import { ScheduleTimeline } from "./ScheduleTimeline";
import { SiteNav } from "./SiteNav";
import { VenueSection } from "./VenueSection";
import { WeddingDetails } from "./WeddingDetails";
import { OrnamentDivider } from "./ornaments/OrnamentDivider";

export function InvitationSite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}>
      
      <SiteNav />
      <FloatingParticles petals={7} dust={12} />
      <main className="relative z-10">
        <HeroSection />

        <div className="paper relative mx-3 mb-16 max-w-5xl rounded-[36px] shadow-card sm:mx-6 lg:mx-auto">
          <div className="pointer-events-none absolute inset-2.5 rounded-[28px] border border-gold/60" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-4 rounded-[22px] border border-gold/25" aria-hidden="true" />
          <div className="relative space-y-16 px-5 py-16 sm:space-y-20 sm:px-12 sm:py-20 lg:px-20">
            <MessageSection />
            <OrnamentDivider />
            <CountdownSection />
            <WeddingDetails />
            <ScheduleTimeline />
            <VenueSection />
            <DressCodeSection />
            <OrnamentDivider />
            <ClosingSection />
          </div>
        </div>
      </main>
      <MusicToggle />
    </motion.div>);

}