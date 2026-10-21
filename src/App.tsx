import React, { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { FloralBackdrop } from "./components/FloralBackdrop";
import { FloatingParticles } from "./components/FloatingParticles";
import { InvitationCover } from "./components/InvitationCover";
import { InvitationSite } from "./components/InvitationSite";

export function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen w-full overflow-x-hidden bg-ivory font-serif text-ink">
        <FloralBackdrop dimmed={opened} />
        {!opened && <FloatingParticles petals={6} dust={10} />}
        <AnimatePresence mode="wait">
          {!opened ?
          <InvitationCover key="cover" onOpen={() => setOpened(true)} /> :

          <InvitationSite key="site" />
          }
        </AnimatePresence>
      </div>
    </MotionConfig>);

}