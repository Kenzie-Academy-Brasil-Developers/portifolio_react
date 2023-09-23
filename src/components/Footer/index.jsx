import whatsappLogo from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import gitHub from "../../assets/github-icon.png";

export const Footer = ({ user }) => {
  return (
    <div>
      <h2>Contato</h2>
      <div>
        <img src={whatsappLogo} alt={"whatsapp"} />
        <img src={linkedin} alt={"linkedin"} />
        <img src={gitHub} alt={"gitHub"} />
      </div>
      <small>{user}</small>
    </div>
  );
};
