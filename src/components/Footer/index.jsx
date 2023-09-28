import whatsappLogo from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import gitHub from "../../assets/github-icon.png";
import styles from "./style.module.css";

export const Footer = ({ user }) => {
  return (
    <footer className={`container ${styles.footerContainer}`}>
      <div className={styles.flexDiv}>
        <div className={styles.flexContactsAndCopyright}> 
          <h2 className="title-2">Contato</h2>
          <div className={styles.flexDivImg}>
            <img src={whatsappLogo} alt={"whatsapp"} />
            <img src={linkedin} alt={"linkedin"} />
            <img src={gitHub} alt={"gitHub"} />
          </div>
        </div>
        <small className="paragraph">{user}</small>
      </div>
    </footer>
  );
};
