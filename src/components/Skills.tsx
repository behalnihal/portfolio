import { Reveal } from "@/utils/Reveal";
import Marquee from "react-fast-marquee";
import { DiJavascript } from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { IconCloud } from "./IconCloud";

const skills = [
  {
    name: "Javascript",
    icon: DiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
];

export default function Skills() {
  return (
    <Reveal>
      <div className="flex flex-col sm:flex-row mx-4 mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className="text-2xl text-neutral-500 dark:text-neutral-300">
          Skills
        </span>
        <Marquee speed={30} pauseOnHover>
          <div className="flex flex-1 mt-4 gap-x-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm border p-3 rounded-2xl"
                >
                  {
                    <Icon className="text-2xl text-neutral-500 dark:text-neutral-300" />
                  }
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </Marquee>
        <IconCloud />
      </div>
    </Reveal>
  );
}
