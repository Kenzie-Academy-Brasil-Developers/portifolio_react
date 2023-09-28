import styles from "./style.module.css"

export const TechCard = ({ img, alt, name }) => {
  return (
    <li className={styles.flexLi}>
      <img src={img} alt={alt} />
      <h3 className="title-3">{name}</h3>
    </li>
  );
};
