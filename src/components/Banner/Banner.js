import "./Banner.css";
import banner from "../../img/banner.png";

const Banner = () => {
  return (
    <header className="container__banner">
      <img src={banner} alt="Banner principal" className="banner__img" />
    </header>
  );
};

export default Banner;
