import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  image: string;
  title: string;
  technologies: string[];
  description: string;
  repoUrl: string;
  liveUrl: string;
}

export default function ProjectCard({
  image,
  title,
  technologies,
  description,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="border-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          width={500}
          height={300}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* Technologies */}
        <div className="mb-3 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-700 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className=" text-sm mb-4 grow">{description}</p>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-teal-400 transition-colors text-sm"
          >
            <FaGithub className="text-lg" />
            <span>Repo</span>
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-teal-400 transition-colors text-sm"
          >
            <FaExternalLinkAlt className="text-base" />
            <span>Live Preview</span>
          </a>
        </div>
      </div>
    </div>
  );
}
