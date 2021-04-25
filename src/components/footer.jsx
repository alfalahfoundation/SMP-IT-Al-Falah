import React from "react";
import Sub from "../components/sub"
import Social from "../components/social"


const Footer = () => {
  let footer = "footer-div"
  let footerP = "footer-p"

  return (
    <div className={footer}>
      <Sub></Sub>
      <Social></Social>
      <p className={footerP}>
        &copy; {new Date().getFullYear()} Copyright : {" "}
        <a href="#"> Alfalah </a>
      </p>
    </div>

  );
}

export default Footer;