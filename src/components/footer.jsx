import React from "react";
import {Link} from "gatsby"

import Sub from "../components/sub"
// import Social from "../components/social"

import Logo from "../../static/logoblack.inline.svg"


const Footer = () => {
  let footer = "footer-div"
  let footerP = "footer-p"

  let footer2 = "footer2"

  return (
    <div className={footer}>
      <Sub></Sub>
    <div className={footer2}> 

      <div className="navigasi">
        <h3>Navigasi</h3>
        <ul>
          <li><Link to="daftar" className="header-div-link"> Daftar</Link></li>
          <li><Link to="jurnal" className="header-div-link"> Jurnal</Link></li>
          <li><Link to="berita" className="header-div-link"> Berita</Link></li>
          <li><Link to="about" className="header-div-link"> Tentang Kami</Link></li>
        </ul>
      </div>

      <div className="sosmed">
        <h3>Sosial Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>

      <div className="hubungi">
        <h3>Hubungi Kami</h3>
        <ul>
          <li>081354789375</li>
          <li>zulzdn@gmail.com</li>
          <li>jalanananana</li>
        </ul>
      </div>
      <Logo className="logo"/>
    </div>

      <p className={footerP}>
        <a href="#"> Terms & Conditions </a>
        &copy; {new Date().getFullYear()} Copyright : {" "} Alfalah 
        
      </p>
    </div>

  );
}

export default Footer;