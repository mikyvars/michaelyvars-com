import { ProjectDetails } from "@/lib/types";
import Image from "next/image";
import Typography from "./typography";
import Tag from "./tag";
import { ExternalLink } from "lucide-react";
import IconButton from "./icon-button";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectDetails;
  order: "default" | "reverse";
}

const ProjectCard = ({ project, order = "default" }: ProjectCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-gray-50 md:flex-row">
      <div
        className={`${order === "reverse" ? "md:order-last" : ""} flex-1 bg-gray-100 p-8`}
      >
        <Image
          src={project.image}
          alt={project.name}
          height={480}
          width={380}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6 p-8">
        <Typography
          variant={"subtitle"}
          className="font-semibold text-gray-900"
        >
          {project.name}
        </Typography>
        <Typography variant={"body2"}>{project.description}</Typography>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Link href={project.link} target="_blank">
          <IconButton>
            <ExternalLink />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
