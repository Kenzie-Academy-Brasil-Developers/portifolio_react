export const TechCard = ({ img, alt, name }) => {
  return (
    <li>
      <img src={img} alt={alt} />
      <h3>{name}</h3>
    </li>
  );
};
