import { AboutSection } from "../../components/BannerSection";
import { DefaultTemplate } from "../../components/MainTemplate";
import { username } from "../../data/user";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <AboutSection username={username} about={"Desenvolvedor Front-end"} />
      </DefaultTemplate>
    </>
  );
};
