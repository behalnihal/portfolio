import { Reveal } from "@/utils/Reveal";

const data = [
  {
    company: "Airtel Digital",
    role: "Software Engineer Intern",
    tenure: "July 2024 - Sept 2024",
  },
];
export default function Experience() {
  return (
    <Reveal>
      <div className="px-4 mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className="text-2xl text-neutral-500 dark:text-neutral-300">
          Experience
        </span>
        <div className="mt-3">
          {data.map((experience, index) => (
            <div key={index} className="mt-2 mx-4 grid grid-cols-2 gap-2">
              <p className="font-medium">{experience.company}</p>
              <span className="text-sm">{experience.tenure}</span>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {experience.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
