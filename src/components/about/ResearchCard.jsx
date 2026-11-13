"use client";
import { motion } from "framer-motion";
import { Flag, Microscope } from "lucide-react";
import clsx from "clsx";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
};

const step = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

const StepMarker = ({ status }) => {
  if (status === "now") {
    return (
      <span className="relative flex h-4 w-4 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
      </span>
    );
  }
  if (status === "goal") {
    return (
      <span className="flex h-4 w-4 items-center justify-center text-accent">
        <Flag className="h-4 w-4" strokeWidth={1.75} />
      </span>
    );
  }
  return (
    <span className="flex h-4 w-4 items-center justify-center">
      <span className="h-3 w-3 rounded-full border border-accent/60 bg-background" />
    </span>
  );
};

const ResearchCard = ({ heading, headingSub, badge, status: statusLabel, title, summary, steps }) => {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl capitalize">
          <Microscope className="h-6 w-6 text-accent" strokeWidth={1.5} />
          {heading}
          {headingSub && (
            <span className="hidden sm:inline text-muted text-base font-light">
              {headingSub}
            </span>
          )}
        </h2>
        <span className="flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {badge}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg md:text-xl text-accent">{title}</h3>
        <p className="font-light text-xs sm:text-sm md:text-base">{summary}</p>
      </div>

      <div className="relative">
        {/* Timeline line draws itself downwards when the card comes into view. */}
        <motion.span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-accent/40 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        />
        <motion.ol
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative space-y-4"
        >
          {steps.map(({ label, detail, status }) => (
            <motion.li key={label} variants={step} className="flex gap-4">
              <span className="mt-1 shrink-0">
                <StepMarker status={status} />
              </span>
              <div className="space-y-0.5">
                <p className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                  {label}
                  <span
                    className={clsx(
                      "rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wider",
                      status === "now"
                        ? "bg-accent/15 text-accent"
                        : "border border-muted/50 text-muted"
                    )}
                  >
                    {statusLabel[status]}
                  </span>
                </p>
                <p className="font-light text-xs sm:text-sm text-muted">{detail}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default ResearchCard;
