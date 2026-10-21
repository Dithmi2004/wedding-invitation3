import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarPlusIcon, CheckIcon, Share2Icon } from "lucide-react";
import { wedding } from "../data/wedding";
import { getGoogleCalendarUrl } from "../utils/links";
import { InviteButton } from "./InviteButton";

type Status = "idle" | "copied" | "shared" | "error";

const messages: Record<Exclude<Status, "idle">, string> = {
  copied: "Invitation link copied",
  shared: "Thank you for sharing",
  error: "Couldn't copy — please copy the page link"
};

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {

    // fall through to legacy copy
  }try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

export function ShareActions() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const id = window.setTimeout(() => setStatus("idle"), 2600);
    return () => window.clearTimeout(id);
  }, [status]);

  const handleShare = async () => {
    const url = window.location.href;
    const data = {
      title: `${wedding.bride} & ${wedding.groom} · Wedding Invitation`,
      text: `${wedding.invitationWording} ${wedding.date.long}, ${wedding.venue.name}, Kandy.`,
      url
    };
    if (typeof navigator.share === "function") {
      try {
        await navigator.share(data);
        setStatus("shared");
        return;
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    }
    setStatus((await copyText(url)) ? "copied" : "error");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
        <InviteButton href={getGoogleCalendarUrl()} icon={CalendarPlusIcon} variant="primary" ariaLabel="Add the wedding to Google Calendar (opens in a new tab)">
          Add to Calendar
        </InviteButton>
        <InviteButton onClick={handleShare} icon={Share2Icon} ariaLabel="Share this invitation">
          Share Invitation
        </InviteButton>
      </div>
      <div className="mt-3 h-6" aria-live="polite">
        <AnimatePresence>
          {status !== "idle" &&
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1.5 text-[15px] italic text-antique">
            
              {status !== "error" && <CheckIcon className="h-4 w-4" aria-hidden="true" />}
              {messages[status]}
            </motion.p>
          }
        </AnimatePresence>
      </div>
    </div>);

}