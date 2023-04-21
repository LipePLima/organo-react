import "./Banner.css";
import banner from "../../img/banner.png";
import { Fragment } from "react";

const Banner = () => {
  return (
    <Fragment>
      <header className="container__banner">
        <img src={banner} alt="Banner principal" className="banner__img" />
      </header>
    </Fragment>
  );
};

export default Banner;
