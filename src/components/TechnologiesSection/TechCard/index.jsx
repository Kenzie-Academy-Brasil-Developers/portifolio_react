import { technologies } from "../../../data/technologies";

export const TechCard = () => {
  return (
    <ul>
      {technologies.map((technology) => (
        <li key={technology.name}>
          <img src={technology.img} alt={technology.name} />
        </li>
      ))}
    </ul>
  );
};
