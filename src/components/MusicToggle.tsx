import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2Icon, VolumeXIcon } from "lucide-react";
import { wedding } from "../data/wedding";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    if (!hint) return;
    const id = window.setTimeout(() => setHint(false), 3000);
    return () => window.clearTimeout(id);
  }, [hint]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || unavailable) {
      setHint(true);
      return;
    }
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    audio.volume = 0.5;
    audio.
    play().
    then(() => setPlaying(true)).
    catch(() => {
      setUnavailable(true);
      setHint(true);
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={wedding.musicSrc}
        loop
        preload="none"
        onError={() => {
          setUnavailable(true);
          setPlaying(false);
        }} />
      
      <AnimatePresence>
        {hint &&
        <motion.p
          role="status"
          initial={{ opacity: 0, x: 6 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="rounded-full border border-gold/40 bg-ivory/95 px-4 py-2 text-[14px] italic text-ink/80 shadow-soft">
          
            Music is unavailable right now
          </motion.p>
        }
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Mute background music" : "Play background music"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-ivory/95 text-antique shadow-soft backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
        
        {playing ? <Music2Icon className="h-5 w-5" strokeWidth={1.6} /> : <VolumeXIcon className="h-5 w-5" strokeWidth={1.6} />}
      </motion.button>
    </div>);

}