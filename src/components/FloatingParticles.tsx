import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FloatingParticlesProps = {
  petals?: number;
  dust?: number;
};

type Particle = {left: number;delay: number;duration: number;size: number;drift: number;rotate: number;};

function makeParticles(count: number, minDur: number, maxDur: number): Particle[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * -maxDur,
    duration: minDur + Math.random() * (maxDur - minDur),
    size: 0.7 + Math.random() * 0.6,
    drift: (Math.random() - 0.5) * 80,
    rotate: Math.random() * 360
  }));
}

export function FloatingParticles({ petals = 8, dust = 14 }: FloatingParticlesProps) {
  const reduce = useReducedMotion();
  const petalList = useMemo(() => makeParticles(petals, 16, 26), [petals]);
  const dustList = useMemo(() => makeParticles(dust, 10, 18), [dust]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {petalList.map((p, i) =>
      <motion.span
        key={`p-${i}`}
        className="absolute top-0 block h-3.5 w-2.5 rounded-[70%_0_70%_0] bg-blush/80 shadow-sm"
        style={{ left: `${p.left}%`, scale: p.size }}
        initial={{ y: "-5vh", x: 0, rotate: p.rotate }}
        animate={{ y: "110vh", x: [0, p.drift, 0], rotate: p.rotate + 300 }}
        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }} />

      )}
      {dustList.map((p, i) =>
      <motion.span
        key={`d-${i}`}
        className="absolute bottom-0 block h-1 w-1 rounded-full bg-gold"
        style={{ left: `${p.left}%`, scale: p.size }}
        initial={{ y: "5vh", opacity: 0 }}
        animate={{ y: "-105vh", opacity: [0, 0.8, 0.8, 0], x: [0, p.drift / 2, 0] }}
        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }} />

      )}
    </div>);

}