"use client";
import React from "react";
import { MotionConfig, motion } from "framer-motion";
import ItemLayout from "./ItemLayout";
import CountUp from "./CountUp";
import ResearchCard from "./ResearchCard";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

const statsUrl = process.env.NEXT_PUBLIC_GITHUB_STATS_URL;
const streakUrl = process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL;
const statsTheme =
  "theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false";

const japanese = ["日", "本", "語"];

const AboutDetails = () => {
  const { dict } = useI18n();
  const t = dict.about;
  return (
    // Respect the OS "reduce motion" setting for every animation below.
    <MotionConfig reducedMotion="user">
      <section className="mt-[-70%] md:py-0 xs:mt-0 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
          <ItemLayout
            className={
              " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
            }
          >
            <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
              {t.heading}
            </h2>
            <p className="font-light  text-xs sm:text-sm md:text-base   ">
              {t.intro}
            </p>
            <p className="font-light  text-xs sm:text-sm md:text-base   ">
              {t.goal.before}
              <span className="text-accent">{t.goal.highlight}</span>
              {t.goal.after}
            </p>
          </ItemLayout>

          <ItemLayout
            className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              <CountUp to={10} />+{" "}
              <sub className="font-semibold text-base">{t.projects}</sub>
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              <CountUp to={2} duration={1} />+{" "}
              <sub className="font-semibold text-base">{t.experience}</sub>
            </p>
          </ItemLayout>

          <ItemLayout
            className={
              "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
            }
          >
            <ResearchCard {...dict.research} />
          </ItemLayout>

          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 flex-col items-start !space-y-4"
            }
          >
            <Link
              href="https://leetcode.com/u/Karan_Bhatt"
              target="_blank"
              className="w-full space-y-4 group"
            >
              <p className="text-sm uppercase tracking-wider text-muted group-hover:text-accent transition-colors">
                {t.leetcode}
              </p>
              <p className="font-semibold text-accent text-2xl sm:text-4xl">
                <CountUp to={400} />+{" "}
                <sub className="font-semibold text-base">{t.problemsSolved}</sub>
              </p>
              <p className="font-semibold text-accent text-2xl sm:text-4xl">
                <CountUp to={1679} duration={2} />{" "}
                <sub className="font-semibold text-base">{t.contestRating}</sub>
              </p>
            </Link>
          </ItemLayout>

          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 flex-col items-start !space-y-3"
            }
          >
            <p className="text-sm uppercase tracking-wider text-muted">
              {t.alsoLearning}
            </p>
            <p
              className="text-4xl sm:text-5xl text-accent flex gap-1"
              lang="ja"
              aria-label="日本語 (Japanese)"
            >
              {japanese.map((char, i) => (
                <motion.span
                  key={char}
                  aria-hidden="true"
                  className="inline-block"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: [24, -6, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                >
                  <span
                    className="inline-block motion-safe:animate-float"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  >
                    {char}
                  </span>
                </motion.span>
              ))}
            </p>
            <p className="font-light text-xs sm:text-sm">
              {t.learningJapanese}
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
          >
            <Image
              className="w-full h-auto"
              src={`${statsUrl}/api/top-langs?username=prefierolasoledad&${statsTheme}`}
              alt={t.alt.topLangs}
              loading="lazy"
              width="500"
              height="500"
            />
          </ItemLayout>

          <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
            <Image
              className="w-full h-auto"
              src={`${statsUrl}/api?username=prefierolasoledad&${statsTheme}`}
              alt={t.alt.stats}
              loading="lazy"
              width="500"
              height="500"
            />
          </ItemLayout>

          <ItemLayout className={"col-span-full flex-col !items-start"}>
            <h3 className="text-sm uppercase tracking-wider text-muted w-full">
              {t.skillsBackend}
            </h3>
            <Image
              className="w-full h-auto !mt-4"
              src={`https://skillicons.dev/icons?i=nodejs,ts,js,express,postgres,prisma,redis,kafka,mongodb,mysql,docker,kubernetes,nginx,aws,gcp,githubactions,linux,git,react,nextjs,tailwind,threejs,flutter,cpp,java&theme=light&perline=13`}
              alt={t.alt.skillsBackend}
              loading="lazy"
              width="500"
              height="500"
            />
            <h3 className="text-sm uppercase tracking-wider text-muted w-full">
              {t.skillsMl}{" "}
              <span className="normal-case tracking-normal text-accent">
                {t.skillsMlNote}
              </span>
            </h3>
            <div className="flex flex-wrap items-center gap-4 !mt-4">
              <Image
                className="h-12 sm:h-14 w-auto"
                src={`https://skillicons.dev/icons?i=python,pytorch,tensorflow,sklearn,anaconda&theme=light`}
                alt={t.alt.skillsMl}
                loading="lazy"
                width="273"
                height="48"
              />
              <span className="rounded-md border border-accent/40 px-3 py-2 text-sm text-accent">
                🤗 Hugging Face Transformers
              </span>
            </div>
          </ItemLayout>

          <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <Image
              className="w-full h-auto"
              src={`${streakUrl}?user=prefierolasoledad&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
              alt={t.alt.streak}
              loading="lazy"
              width="500"
              height="500"
            />
          </ItemLayout>

          <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <Link
              href="https://github.com/prefierolasoledad/Kintsugi"
              target="_blank"
              className="w-full"
            >
              <Image
                className="w-full h-auto"
                src={`${statsUrl}/api/pin/?username=prefierolasoledad&repo=Kintsugi&${statsTheme}&description_lines_count=3`}
                alt={t.alt.pin}
                loading="lazy"
                width="500"
                height="500"
              />
            </Link>
          </ItemLayout>
        </div>
      </section>
    </MotionConfig>
  );
};

export default AboutDetails;
