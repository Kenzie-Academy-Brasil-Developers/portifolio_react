import { HeaderComponent } from "../../components/Header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <HeaderComponent about={"Sobre"} stack={"Stack"} projects={"Projetos"} />
      <main>
        {children}
      </main>
    </>
  );
};
