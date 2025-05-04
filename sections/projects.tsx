import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
import Tag from "@/components/tag";
import { PROJECTS } from "@/lib/data";

const Projects = () => {
  return (
    <Container className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-16 md:px-8 md:py-20 2xl:py-24">
      <Tag>Mes projets</Tag>
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          order={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
};

export default Projects;
