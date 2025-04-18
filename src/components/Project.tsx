import { Reveal } from "@/utils/Reveal";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export const data = [
  {
    name: "VibeSync",
    description:
      "A chatting application with real-time messaging and group chats.",
    tech: ["Nextjs", "ReactJs", "Typescript"],
    image: "/vibesync.png",
    repo: "https://github.com/behalnihal/vibesync",
    href: "https://vibesync-you9.onrender.com/",
  },
  {
    name: "CP-List",
    description:
      "A web-app which shows upcoming competitive programming schedule and practice problems.",
    tech: ["Nextjs", "ReactJs", "Typescript"],
    image: "/cplist.png",
    repo: "https://github.com/behalnihal/cplist",
    href: "https://cplist-gray.vercel.app",
  },
  {
    name: "Facts2day",
    description: "A web-app on which you can read and post random facts.",
    tech: ["ReactJs", "Javascript"],
    image: "/facts2day.png",
    repo: "https://github.com/behalnihal/facts2day",
    href: "https://facts2day.netlify.app",
  },
  {
    name: "weather-cli",
    description: "A command line tool to get the weather forecast of any city.",
    tech: ["GoLang", "CLI", "OpenWeatherAPI"],
    image: "/weather-cli.png",
    repo: "https://github.com/behalnihal/weather-cli",
    href: "https://github.com/behalnihal/weather-cli",
  },
];

export default function Project() {
  return (
    <Reveal>
      <div className="mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className=" px-4 text-2xl font-light ">Projects</span>
        <div className="mt-3 grid sm:grid-cols-2 gap-4 mx-auto px-4 ">
          {data.slice(0, 2).map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.name}
                image={project.image}
                technologies={project.tech}
                repoUrl={project.repo}
                liveUrl={project.href}
                description={project.description}
              />
            </div>
          ))}
        </div>
        {data.length > 2 && (
          <div className="flex justify-center mt-4">
            <button className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
              <Link href="/projects">View All Projects</Link>
            </button>
          </div>
        )}
      </div>
    </Reveal>
  );
}
