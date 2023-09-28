import banner from "../../assets/banner-img.png";
import styles from "./style.module.css"

export const AboutSection = ({ username, about }) => {
  return (
    <section className={`container ${styles.flexContainer}`}>
      <div className={styles.flexWellcome}>
        <p className={styles.userName}>{username}</p>
        <h1 className="title-1">Bem vindo ao meu portfólio</h1>
        <small className="paragraph">{about}</small>
        <button className="button">Saiba mais</button>
      </div>

      <div>
        <img className={styles.banner} src={banner} alt="banner" />
      </div>
    </section>
  );
};
