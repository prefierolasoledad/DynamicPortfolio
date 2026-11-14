import Image from "next/image";
import { buildMetadata } from "@/i18n/seo";
import bg from "../../../../../public/background/undefined_image (2).png";
import ProjectList from "@/components/projects";
import { projectsData } from "@/app/data";

export const generateMetadata = ({ params }) =>
  buildMetadata(params.lang, "projects");

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt=""
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      <ProjectList projects={projectsData} />
    </>
  );
}
