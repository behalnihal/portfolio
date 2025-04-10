import { Reveal } from "@/utils/Reveal";
import ProjectCard from "./ProjectCard";

const data = [
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
];

export default function Project() {
  return (
    <Reveal>
      <div className="mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className=" px-4 text-2xl font-light ">Projects</span>
        <div className="mt-3 grid sm:grid-cols-2 gap-4 mx-auto px-4">
          {data.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.name}
              image={project.image}
              technologies={project.tech}
              repoUrl={project.repo}
              liveUrl={project.href}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
