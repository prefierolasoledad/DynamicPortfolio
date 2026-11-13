"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Counts from 0 up to `to` the first time it scrolls into view.
// Renders the final number on the server, so it's correct without JS.
const CountUp = ({ to, duration = 1.6, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
    </span>
  );
};

export default CountUp;
