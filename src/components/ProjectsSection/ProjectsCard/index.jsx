import styles from "./style.module.css"

export const ProjectCard = ({ img, title, name, description, link }) => {
  return (
    <li className={styles.flexLi}>
      <div className={styles.flexDiv}>
        <h3 className="title-3">{title}</h3>
        <img src={img} alt={name} />
      </div>
      <p className="text">{description}</p>
      <a className={`link ${styles.linkAlt}`} href="#">{link}</a>
    </li>
  );
};
