export const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.3, ease: easeOut, delay }
  };
}