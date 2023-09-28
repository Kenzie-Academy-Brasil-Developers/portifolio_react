import styles from "./style.module.css"

export const HeaderComponent = ({ img, about, stack, projects }) => {
  return (
    <header className={styles.headerContainer}>
      <img src={img} alt="home page logo" />
      <div className={styles.flexDiv}>
        <a className="link" href="#">{about}</a>
        <a className="link" href="#">{stack}</a>
        <a className="link" href="#">{projects}</a>
      </div>
      <button className="button">Contato</button>
    </header>
  );
};
