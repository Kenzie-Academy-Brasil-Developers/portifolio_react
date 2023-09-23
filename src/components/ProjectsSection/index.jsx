import gitLogo from "../../assets/git-icon.png";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectsCard";

export const ProjectsSection = () => {
  return (
    <section>
      <h2>Projetos</h2>
      <ul>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              title={project.name}
              img={gitLogo}
              name={"git logo"}
              description={project.description}
              link={"saiba mais"}
            />
          );
        })}
      </ul>
    </section>
  );
};
