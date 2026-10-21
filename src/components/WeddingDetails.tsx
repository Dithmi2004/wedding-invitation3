import React from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon, MapPinIcon, SparklesIcon, UtensilsCrossedIcon, BoxIcon } from "lucide-react";
import { wedding } from "../data/wedding";
import { reveal } from "../utils/motion";
import { SectionHeading } from "./SectionHeading";
type DetailCardProps = {
  icon: BoxIcon;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  featured?: boolean;
  delay: number;
};
function DetailCard({
  icon: Icon,
  title,
  subtitle,
  children,
  footer,
  featured,
  delay
}: DetailCardProps) {
  return <motion.article {...reveal(delay)} className={`relative flex flex-col items-center rounded-[24px] border px-6 pb-6 pt-8 text-center ${featured ? "border-gold/70 bg-cream/70" : "border-gold/35 bg-ivory/70"}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-antique">
        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-[26px] font-semibold leading-tight text-ink">{title}</h3>
      <p className="text-[16px] italic text-ink/60">{subtitle}</p>
      <div className="mt-4 h-px w-10 bg-gold/60" aria-hidden="true" />
      <div className="mt-4 text-[18px] leading-relaxed text-ink">{children}</div>
      <div className="mt-auto pt-5 text-[14px] italic text-antique">{footer}</div>
    </motion.article>;
}
export function WeddingDetails() {
  return <section id="details" aria-labelledby="details-title">
      <SectionHeading id="details-title" title="Wedding details" subtitle="Where and when we celebrate" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <DetailCard icon={SparklesIcon} title={wedding.ceremony.title} subtitle={wedding.ceremony.subtitle} footer={wedding.ceremony.note} featured delay={0}>
          <p>{wedding.date.long}</p>
          <p className="font-semibold">{wedding.ceremony.time}</p>
        </DetailCard>
        <DetailCard icon={UtensilsCrossedIcon} title={wedding.reception.title} subtitle={wedding.reception.subtitle} footer={wedding.reception.note} delay={0.05}>
          <p>{wedding.date.long}</p>
          <p className="font-semibold">{wedding.reception.time}</p>
        </DetailCard>
        <DetailCard icon={MapPinIcon} title="Venue" subtitle={wedding.venue.name} delay={0.1} footer={<a href="#venue" className="inline-flex items-center gap-1 not-italic font-bold uppercase tracking-[0.2em] text-[11px] hover:text-maroon focus:outline-none focus-visible:underline">
              View location <ArrowDownIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>}>
          <address className="not-italic">{wedding.venue.address}</address>
        </DetailCard>
      </div>
    </section>;
}