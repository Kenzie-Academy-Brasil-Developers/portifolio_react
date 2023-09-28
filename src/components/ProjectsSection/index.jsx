import gitLogo from "../../assets/git-icon.png";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectsCard";
import styles from "./style.module.css";

export const ProjectsSection = () => {
  return (
    <section className="container">
      <h2 className="title-2">Projetos</h2>
      <ul className={styles.flexContainer}>
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
