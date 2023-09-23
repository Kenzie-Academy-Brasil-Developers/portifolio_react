import { TechCard } from "./TechCard/index";
import { technologies } from "../../data/technologies";

export const TechSection = () => {
  return (
    <section>
      <div>Tecnologias</div>
      <div>
        <ul>
          {technologies.map((technology) => {
            return <TechCard key={technology.name} img={technology.img} alt={technology.name} name={technology.name}/>;
          })}
        </ul>
      </div>
    </section>
  );
};
