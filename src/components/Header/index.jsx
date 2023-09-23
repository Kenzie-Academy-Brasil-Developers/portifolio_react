import logo from '../../assets/portfolio.png'

export const HeaderComponent = ({about, stack, projects}) => {
  return (
    <header>
      <img src={logo} alt="home page logo" />
      <div>
        <a href="#">{about}</a>
        <a href="#">{stack}</a>
        <a href="#">{projects}</a>
      </div>
      <button>Contato</button>
    </header>
  );
};
