import Image from "next/image";
import bg from "../../../../public/background/undefined_image (4).png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Deploy Your Thoughts
          </h1>
          <p className="text-center font-light text-sm xs:text-lg">
            Whether you&lsquo;re debugging ideas, committing to new collaborations, or  
            just exploring new frameworks of thought, let&lsquo;s connect. Drop your  
            message below, and let&lsquo;s build something great together.  
            From brainstorming innovative solutions to optimizing existing ones,  
            every line of communication brings us closer to pushing boundaries.  
            Let&lsquo;s architect something meaningful—one message at a time.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
