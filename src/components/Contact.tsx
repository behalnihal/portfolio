import { Reveal } from "@/utils/Reveal";

export default function Contact() {
  return (
    <Reveal>
      <div className="px-4 mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className="text-2xl font-light">Connect</span>
        <div className="mt-2">
          Find me on{" "}
          <a
            href="https://x.com/behalnihal"
            target="_blank"
            className="underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            @behalnihal
          </a>{" "}
          or{" "}
          <a
            href="mailto:nihalgupta140@gmail.com"
            target="_blank"
            className="underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            nihalgupta140@gmail.com
          </a>
        </div>
      </div>
    </Reveal>
  );
}
