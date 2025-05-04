import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
import Tag from "@/components/tag";
import { PROJECTS } from "@/lib/data";

const Projects = () => {
  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-6">
        <Tag>Mes projets</Tag>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            order={index % 2 === 0 ? "default" : "reverse"}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
