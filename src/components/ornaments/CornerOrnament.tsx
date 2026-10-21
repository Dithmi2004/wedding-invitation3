import React from "react";

type CornerOrnamentProps = {
  className?: string;
};

// Kandyan-inspired corner flourish. Rotate/flip via className for each corner.
export function CornerOrnament({ className = "" }: CornerOrnamentProps) {
  return (
    <svg viewBox="0 0 64 64" className={`h-12 w-12 ${className}`} aria-hidden="true" fill="none" stroke="#C9A24B" strokeWidth="1.1" strokeLinecap="round">
      <path d="M4 60 V22 Q4 4 22 4 H60" />
      <path d="M11 60 V27 Q11 11 27 11 H60" strokeOpacity="0.55" />
      <path d="M20 20 C26 16 33 18 34 26 C27 27 22 25 20 20Z" fill="rgba(201,162,75,0.3)" />
      <path d="M20 20 C16 26 18 33 26 34 C27 27 25 22 20 20Z" fill="rgba(201,162,75,0.3)" />
      <circle cx="20" cy="20" r="2" fill="#C9A24B" stroke="none" />
      <circle cx="40" cy="7.5" r="1.2" fill="#C9A24B" stroke="none" />
      <circle cx="7.5" cy="40" r="1.2" fill="#C9A24B" stroke="none" />
    </svg>);

}