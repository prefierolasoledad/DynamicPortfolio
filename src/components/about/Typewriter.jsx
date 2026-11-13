"use client";
import { useEffect, useState } from "react";

// Types each line, pauses, deletes it, then moves on to the next one.
// Users who prefer reduced motion get the first line, static.
const Typewriter = ({
  lines,
  className,
  typeSpeed = 55,
  deleteSpeed = 25,
  pause = 1800,
}) => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const line = lines[lineIndex];
    const finishedTyping = !deleting && text === line;

    const timer = setTimeout(
      () => {
        if (finishedTyping) {
          setDeleting(true);
        } else if (deleting && text === "") {
          setDeleting(false);
          setLineIndex((i) => (i + 1) % lines.length);
        } else {
          setText(line.slice(0, text.length + (deleting ? -1 : 1)));
        }
      },
      finishedTyping ? pause : deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timer);
  }, [text, deleting, lineIndex, lines, reduceMotion, typeSpeed, deleteSpeed, pause]);

  return (
    <p className={className}>
      <span className="sr-only">{lines.join(". ")}</span>
      <span aria-hidden="true">
        {reduceMotion ? lines[0] : text}
        <span className="inline-block w-[2px] h-[1em] ml-1 -mb-[0.15em] bg-accent animate-blink" />
      </span>
    </p>
  );
};

export default Typewriter;
