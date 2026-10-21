import React from "react";

type LotusMotifProps = {
  className?: string;
  filled?: boolean;
};

export function LotusMotif({ className = "h-8 w-12", filled = false }: LotusMotifProps) {
  const fill = filled ? "#C9A24B" : "none";
  const fillSoft = filled ? "rgba(201,162,75,0.35)" : "none";
  return (
    <svg viewBox="0 0 100 66" className={className} aria-hidden="true" fill="none" stroke="#C9A24B" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M50 52 C36 50 18 44 7 33 C22 31 38 39 50 52Z" fill={fillSoft} />
      <path d="M50 52 C64 50 82 44 93 33 C78 31 62 39 50 52Z" fill={fillSoft} />
      <path d="M50 52 C40 45 27 34 22 19 C35 24 45 35 50 52Z" fill={fillSoft} />
      <path d="M50 52 C60 45 73 34 78 19 C65 24 55 35 50 52Z" fill={fillSoft} />
      <path d="M50 8 C59 24 59 40 50 52 C41 40 41 24 50 8Z" fill={fill} />
      <path d="M18 58 Q50 66 82 58" strokeLinecap="round" />
      <circle cx="12" cy="58" r="1.6" fill="#C9A24B" stroke="none" />
      <circle cx="88" cy="58" r="1.6" fill="#C9A24B" stroke="none" />
    </svg>);

}