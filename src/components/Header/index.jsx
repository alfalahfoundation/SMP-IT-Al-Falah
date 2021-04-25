


import React, { Component, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"

// import Search from "./Search";
// import Modals from "./mainmodals"
// import Sc from "./SearchQuery"
import Status from "../Status"

import Modal from './modal';

import Logo from "../../../static/logo.inline.svg"


class Header  extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef1 = React.createRef();
  }

  state = { className: "" };

  // // const modalRef1 = useRef();

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 100) {
      if (!this.state.className) {
        this.setState({ className: "header-fixed" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" });
      }
    }

  }
  render(){

    let modal = "modal-desktop";

    return (
      
    <header>
      <nav className={`header navbar ${this.state.className}`} ref={(r) => this.ref = r} >
      {/* <nav className={`header header-fixed navbar`}> */}
          <div className="header-logo nav-belt">
              <Link to="/" ><Logo/></Link>
          </div>
          <div className="header-div">
              <Link to="/daftar" className="header-div-link">
                  Daftar     
              </Link>
              <Link to="/jurnal" className="header-div-link">
                  Jurnal     
              </Link>
              <Link to="/berita" className="header-div-link">
                  Berita     
              </Link>
              <Link to="/tentang-kami" className="header-div-link">
                  Tentang Kami     
              </Link>
              <Status/>
          </div>
          <div className={modal} >
            <button className="btn" onClick={() => this.modalRef1.current.openModal()}>
              <div className="burger" >
                <div className="burger-line-1"></div>
                <div className="burger-line-2"></div>
                <div className="burger-line-3"></div>
              </div>
            </button>
              <Modal ref={this.modalRef1}>
                  <Link to="daftar" className="header-div-link">
                  Daftar
                  </Link>
                  <Link to="jurnal" className="header-div-link">
                  Jurnal
                  </Link>
                  <Link to="berita" className="header-div-link">
                  Berita
                  </Link>
                  <Link to="/about" className="header-div-link">
                  Tentang Kami
                  </Link>
              </Modal>
          </div>
      </nav>

    </header>
      
    );
  }
}

export default Header;

