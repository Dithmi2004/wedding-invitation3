import { useEffect, useState } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

function compute(target: number): Countdown {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000 % 24),
    minutes: Math.floor(diff / 60000 % 60),
    seconds: Math.floor(diff / 1000 % 60),
    isPast: false
  };
}

export function useCountdown(targetISO: string): Countdown {
  const target = new Date(targetISO).getTime();
  const [state, setState] = useState<Countdown>(() => compute(target));

  useEffect(() => {
    const id = window.setInterval(() => setState(compute(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return state;
}