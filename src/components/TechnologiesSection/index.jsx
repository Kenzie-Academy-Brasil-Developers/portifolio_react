import { TechCard } from "./TechCard/index";
import { technologies } from "../../data/technologies";
import styles from "./style.module.css"

export const TechSection = () => {
  return (
    <section className={`container ${styles.flexContainer}`}>
      <div className="title-2">Tecnologias</div>
      <div>
        <ul className={styles.flexDiv}>
          {technologies.map((technology) => {
            return <TechCard key={technology.name} img={technology.img} alt={technology.name} name={technology.name}/>;
          })}
        </ul>
      </div>
    </section>
  );
};
