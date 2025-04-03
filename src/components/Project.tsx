import { Reveal } from "@/utils/Reveal";
import Link from "next/link";

const data = [
  {
    name: "VibeSync",
    description:
      "A chatting application with real-time messaging and group chats.",
    href: "https://vibesync-you9.onrender.com/",
  },
  {
    name: "CP-List",
    description:
      "A web-app which shows upcoming competitive programming schedule and practice problems.",
    href: "https://cplist-gray.vercel.app",
  },
  {
    name: "Facts2day",
    description: "A web-app on which you can read and post random facts.",
    href: "https://facts2day.netlify.app",
  },
];

export default function Project() {
  return (
    <Reveal>
      <div className="mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className=" px-4 text-2xl font-light ">Projects</span>
        <div className="mt-3 grid grid-cols-2 gap-4 mx-auto px-4">
          {data.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              target="_blank"
              className="border p-4 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <button className="font-medium">{project.name}</button>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
