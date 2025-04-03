import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="border-t flex flex-row justify-between font-light text-neutral-500 dark:text-neutral-300">
      <div className="text-sm mt-5">
        Built by{" "}
        <Link
          href="https://github.com/behalnihal"
          target="_blank"
          className="underline hover:text-neutral-400"
        >
          Nihal Gupta
        </Link>
      </div>
      <div className="mx-2 flex flex-row gap-2 mt-5">
        <Link
          href="mailto:nihalgupta140@gmail.com "
          target="_blank"
          className=" hover:text-neutral-400"
        >
          <FaEnvelope />
        </Link>
        <Link
          href="https://x.com/behalnihal"
          target="_blank"
          className=" hover:text-neutral-400"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://github.com/behalnihal"
          target="_blank"
          className=" hover:text-neutral-400"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/nihalgupta0"
          target="_blank"
          className=" hover:text-neutral-400"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
