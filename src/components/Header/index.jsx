// import React from "react"
// import { Link } from "gatsby"

// const Header = ({}) => (
  // <nav className={`header ` + `header-fixed`}   >
  //   <div className="header-logo">
  //         <span className="header-logo-span"><Link to="/" >E-Learning</Link></span>
  //     </div>
  //     <div className="header-div">
  //         <Link to="/app/video" className="header-div-link">
  //             Courses     
  //         </Link>
  //         <Link to="/about" className="header-div-link">
  //             About     
  //         </Link>
  //         {/* <Link to="/" className="block text-white hover:text-grey-500 mr-4">
  //             Home
  //         </Link> */}
  //     </div>
  // </nav>
// )

// export default Header


import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"

// import Search from "./Search";
import Modals from "./mainmodals"
// import Sc from "./SearchQuery"
import Status from "../Status"


class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
    this.state = {
      isModalOpen: false
      
    };
  }

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
  let modal = "modal-desktop";
  // let navItemClasses = 'nav-link-item';
  // let navClasses = 'nav-links';
    return (
      
    <header>
      <nav className={`header header-fixed navbar`}>
        <div className="header-logo nav-belt">
              <span className="header-logo-span"><Link to="/" >E-Learning</Link></span>
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
            <Modals />
          </div>
      </nav>
      {/* <nav className="navbar">
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/" >
                <a className="logo-image">E-Learning</a>     
              </Link>
            </h4>
          </div>
          <ul className={navClasses}>

        <li className={navItemClasses}><Link to="/app/video">Courses</Link></li>
        <li className={navItemClasses}><Link to="/about">About</Link></li>
        <li className={navItemClasses} 
        onClick={this.toggleState}
        id="search-nav"
        >
          <a onClick={this.toggleState}>
            <FontAwesomeIcon icon="search"/>
          </a>
        </li>
      </ul>
          <div className={modal} >
            <Modals />
          </div>
          
       
        </div>
      </nav> */}
      {/* {this.state.isModalOpen && (
         <Search
           id="modal"
           isOpen={this.state.isModalOpen}
           onClose={this.toggleState}
         >
           <Sc/>
         </Search>
       )} */}

    </header>
      
    );
  }
}

export default Header;

