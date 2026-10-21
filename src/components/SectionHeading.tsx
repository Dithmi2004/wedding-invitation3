import React from "react";
import { motion } from "framer-motion";
import { reveal } from "../utils/motion";
import { OrnamentDivider } from "./ornaments/OrnamentDivider";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  id?: string;
};

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.header className="text-center" {...reveal()}>
      <h2 id={id} className="font-script text-[44px] font-normal leading-tight text-ink sm:text-[56px]">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-[17px] italic text-ink/65">{subtitle}</p>}
      <OrnamentDivider className="mt-4" />
    </motion.header>);

}