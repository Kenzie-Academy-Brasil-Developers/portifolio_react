import banner from "../../assets/banner-img.png";

export const AboutSection = ({ username, about }) => {
  return (
    <>
      <div>
        <p>{username}</p>
        <h1>Bem vindo ao meu portfólio</h1>
        <small>{about}</small>
      </div>

      <div>
        <button>Saiba mais</button>
        <img src={banner} alt="banner" />
      </div>
    </>
  );
};
