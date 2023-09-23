import { AboutMe } from "../../components/AboutSection";
import { AboutSection } from "../../components/BannerSection";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { ProjectsSection } from "../../components/ProjectsSection";
import { TechSection } from "../../components/TechnologiesSection";
import { username } from "../../data/user";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <AboutSection username={username} about={"Desenvolvedor Front-end"} />
        <AboutMe />
        <TechSection />
        <ProjectsSection />
      </DefaultTemplate>
    </>
  );
};
