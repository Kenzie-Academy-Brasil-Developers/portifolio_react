export const HeaderComponent = ({ img, about, stack, projects }) => {
  return (
    <header>
      <img src={img} alt="home page logo" />
      <div>
        <a href="#">{about}</a>
        <a href="#">{stack}</a>
        <a href="#">{projects}</a>
      </div>
      <button>Contato</button>
    </header>
  );
};
