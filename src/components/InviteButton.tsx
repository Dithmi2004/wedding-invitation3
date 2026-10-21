import React from "react";
import { motion } from "framer-motion";
import { BoxIcon } from "lucide-react";
type InviteButtonProps = {
  children: React.ReactNode;
  icon?: BoxIcon;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
};
const base = "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.2em] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";
const variants = {
  primary: "bg-maroon text-ivory shadow-soft hover:bg-maroon-dark",
  outline: "border border-gold/70 bg-ivory/60 text-antique hover:border-gold hover:bg-champagne/30"
};
export function InviteButton({
  children,
  icon: Icon,
  variant = "outline",
  href,
  onClick,
  ariaLabel,
  className = ""
}: InviteButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = <>
      {Icon && <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />}
      <span>{children}</span>
    </>;
  if (href) {
    return <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} whileTap={{
      scale: 0.97
    }} className={classes}>
        {content}
      </motion.a>;
  }
  return <motion.button type="button" onClick={onClick} aria-label={ariaLabel} whileTap={{
    scale: 0.97
  }} className={classes}>
      {content}
    </motion.button>;
}