import { Reveal } from "@/utils/Reveal";
import Image from "next/image";

const data = [
  {
    company: "Airtel Digital",
    role: "Software Engineer Intern",
    tenure: "July 2024 - Sept 2024",
    icon: "/airtel-logo.svg",
  },
];

export default function Experience() {
  return (
    <Reveal>
      <div className="px-4 mb-8 font-light">
        <h2 className="text-2xl font-semibold mb-6 text-neutral-700 dark:text-neutral-200">
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {data.map((experience, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full">
                  <Image
                    src={experience.icon}
                    alt={experience.company}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                        {experience.company}
                      </h3>
                      <span className="text-sm bg-gray-50 dark:bg-gray-800 text-neutral-500 dark:text-neutral-400 px-3 py-1 rounded-full">
                        {experience.tenure}
                      </span>
                    </div>

                    <p className="text-base font-light text-neutral-600 dark:text-neutral-300">
                      {experience.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
