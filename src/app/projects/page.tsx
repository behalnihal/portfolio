import { data } from "@/components/Project";
import ProjectCard from "@/components/ProjectCard";
import { Reveal } from "@/utils/Reveal";

const projects = () => {
  return (
    <Reveal>
      <div className="mt-3 grid sm:grid-cols-2 gap-4 mx-auto px-4">
        {data.map((project, index) => (
          <div
            key={index}
            className="mb-4 font-light text-neutral-500 dark:text-neutral-300"
          >
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
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default projects;
