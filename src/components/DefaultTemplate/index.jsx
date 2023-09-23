import logo from "../../assets/portfolio.png";
import { HeaderComponent } from "../../components/Header";
import { Footer } from "../Footer";
import { user } from "../../data/user";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <HeaderComponent
        img={logo}
        about={"Sobre"}
        stack={"Stack"}
        projects={"Projetos"}
      />
      <main>{children}</main>
      <Footer
        user={`Todos os direitos reservados - 
        ${user}`}
      />
    </>
  );
};
