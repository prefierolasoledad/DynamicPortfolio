"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

const EXIT_MS = 300; // matches the `bubble-out` animation in tailwind.config.js

// Comic-style speech bubble. Its top-left corner sits on the anchor point
// (the speaker's mouth); the bubble floats up and to the right of it, with
// the tail pointing back down at the anchor.
//
// Animated with CSS keyframes rather than framer-motion: this renders inside
// drei's <Html>, which mounts it in a separate React root where framer's
// mount animations don't start.
const SpeechBubble = ({ messages, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let swapTimer;
    const cycleTimer = setTimeout(() => {
      setLeaving(true);
      swapTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setLeaving(false);
      }, EXIT_MS);
    }, interval);
    return () => {
      clearTimeout(cycleTimer);
      clearTimeout(swapTimer);
    };
  }, [index, messages.length, interval]);

  const { lang, greeting, line } = messages[index];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none"
      style={{ transform: "translate(18px, calc(-100% - 22px))" }}
    >
      {/* key={index} remounts the bubble so the pop-in replays per message. */}
      <div
        key={index}
        lang={lang}
        className={clsx(
          "origin-bottom-left",
          leaving ? "motion-safe:animate-bubble-out" : "motion-safe:animate-bubble-in"
        )}
      >
        <div className="relative w-max max-w-[200px] sm:max-w-[260px] rounded-2xl bg-white px-4 py-2.5 text-center text-neutral-900 shadow-[0_6px_24px_rgba(0,0,0,0.35)] motion-safe:animate-float">
          <p className="text-lg sm:text-2xl font-bold leading-tight">
            {greeting}
          </p>
          <p className="mt-0.5 text-[11px] sm:text-xs leading-snug text-neutral-600 motion-safe:animate-fade-up">
            {line}
          </p>
          {/* Tail pointing down-left, back at the speaker. */}
          <span className="absolute -bottom-2 left-4 h-4 w-4 rotate-45 rounded-[3px] bg-white" />
        </div>
      </div>
    </div>
  );
};

export default SpeechBubble;
