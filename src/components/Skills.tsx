import { Reveal } from "@/utils/Reveal";

const skills = [
  "Javascript",
  "Typescript",
  "C++",
  "Go",
  "Reactjs",
  "Nextjs",
  "Nodejs",
  "MongoDb",
  "ExpressJs",
];

export default function Skills() {
  return (
    <Reveal>
      <div className="mx-4 mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className="text-2xl text-neutral-500 dark:text-neutral-300">
          Skills
        </span>
        <div className="grid grid-cols-4 mt-2 gap-2 mx-auto">
          {skills.map((skill, index) => (
            <span key={index} className="text-sm border p-2 rounded-2xl">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
