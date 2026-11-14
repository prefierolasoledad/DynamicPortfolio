import Image from "next/image";
import { buildMetadata } from "@/i18n/seo";
import { getDictionary } from "@/i18n";
import bg from "../../../public/background/undefined_image (1).png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export const generateMetadata = ({ params }) => buildMetadata(params.lang, "home");

export default function Home({ params }) {
  const { seo } = getDictionary(params.lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt=""
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <h1 className="sr-only">{seo.pages.home.title}</h1>

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard lang={params.lang} />
        </RenderModel>
      </div>
    </main>
  );
}
