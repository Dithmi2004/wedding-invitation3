import React from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding";

type FloralBackdropProps = {
  dimmed: boolean;
};

export function FloralBackdrop({ dimmed }: FloralBackdropProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        src={wedding.images.floralBackground}
        alt=""
        className="h-full w-full scale-110 object-cover blur-[3px]" />
      
      <motion.div
        className="absolute inset-0 bg-ivory"
        initial={false}
        animate={{ opacity: dimmed ? 0.82 : 0.18 }}
        transition={{ duration: 0.3, ease: "easeOut" }} />
      
    </div>);

}