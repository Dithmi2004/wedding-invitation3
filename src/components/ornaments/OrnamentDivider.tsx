import React from "react";

type OrnamentDividerProps = {
  className?: string;
};

export function OrnamentDivider({ className = "" }: OrnamentDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gold/60 sm:w-20" />
      <svg viewBox="0 0 64 16" className="h-4 w-16" fill="none" stroke="#C9A24B" strokeWidth="1.2">
        <circle cx="6" cy="8" r="1.5" fill="#C9A24B" stroke="none" />
        <path d="M14 8 C20 2 26 2 32 8 C38 14 44 14 50 8" />
        <path d="M32 3 L36 8 L32 13 L28 8Z" fill="#C9A24B" />
        <circle cx="58" cy="8" r="1.5" fill="#C9A24B" stroke="none" />
      </svg>
      <span className="h-px w-12 bg-gold/60 sm:w-20" />
    </div>);

}