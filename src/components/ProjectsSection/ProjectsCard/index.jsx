export const ProjectCard = ({ img, title, name, description, link }) => {
  return (
    <li>
      <div>
        <h3 className="title-3">{title}</h3>
        <img src={img} alt={name} />
      </div>
      <p className="text">{description}</p>
      <a href="#">{link}</a>
    </li>
  );
};
