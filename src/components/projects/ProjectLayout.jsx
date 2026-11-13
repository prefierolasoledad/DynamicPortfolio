import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { formatDate } from "@/i18n/config";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink, featured }) => {
  const { lang, dict } = useI18n();
  return (
    <ProjectLink
      variants={item}
      whileHover={{ scale: 1.02, x: 6 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      href={demoLink}
      target={"_blank"}
      className="group text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6    bg-background/50 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm hover:border-accent/60"
    >
      {/* Light sweep across the card on hover. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out"
      />
      <div className="flex items-center min-w-0 space-x-2">
        <h2 className="text-foreground group-hover:text-accent transition-colors sm:whitespace-nowrap sm:shrink-0">
          {name}
        </h2>
        {featured && (
          <span className="hidden sm:inline-block shrink-0 rounded border border-accent/40 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">
            {dict.projects.featured}
          </span>
        )}
        <p className="text-muted hidden sm:block truncate min-w-0">
          {description[lang] ?? description.en}
        </p>
      </div>
      <div className="self-end flex-1 min-w-[1.5rem] mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground whitespace-nowrap shrink-0">
        {/* Formatted from the "YYYY-MM-DD" string itself, so every visitor
            sees the same date regardless of timezone. */}
        {formatDate(lang, date)}
      </p>
    </ProjectLink>
  );
};

export default ProjectLayout;
