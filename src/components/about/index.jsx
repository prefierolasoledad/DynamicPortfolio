import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";
const AboutDetails = () => {
  return (
    <section className="mt-[-70%] md:py-0 xs:mt-0 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Designer of Boundless Possibilities
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is fueled by the spirit of exploration, crafting seamless 
            experiences that transport users across digital landscapes. With TypeScript as my guiding 
            compass and React.js, Next.js, and Flutter as my trusted tools, I build dynamic and immersive 
            portals that bridge the gap between travelers and unforgettable experiences. Material-UI and Tailwind CSS 
            enhance my creations, ensuring both functionality and aesthetic appeal. Backed by Node.js, MySQL, and 
            OAuth 2.0, I engineer secure and efficient systems, while AI-driven technologies like Cohere and Hugging 
            Face unlock intelligent interactions. Join me as I continue to push the boundaries of web and mobile innovation 
            with Adventroz—where technology meets adventure.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            6+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+{" "}
            <sub className="font-semibold text-base">months of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=prefierolasoledad&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="ADVENTROZ"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=prefierolasoledad&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="ADVENTROZ"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=vscode,aws,python,java,js,react,css,nodejs,gcp,flutter,c,anaconda,androidstudio,cpp,dart,express,git,github,mysql,nextjs,npm,tailwind&theme=light`}
            alt="ADVENTROZ"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=prefierolasoledad&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="ADVENTROZ"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/prefierolasoledad/DynamicPortfolio"
            target="_blank"
            className="w-full"
          >
            <Image
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=prefierolasoledad&repo=DynamicPortfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=3`}
              alt="ADVENTROZ"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
