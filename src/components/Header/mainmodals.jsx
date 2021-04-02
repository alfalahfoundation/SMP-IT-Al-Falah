import React, { Component } from "react";

import { Link } from "gatsby"

import Modal from "./nModals";



class Main extends Component {
  // state = {
  //   isModalOpen: false
  // };
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isModalOpen: false };
  }

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    let burgerClass = "burger";
    // let openModal = "open-modal";

    return (
      <div>
        <button onClick={this.toggleState}

          className="open-button"
          aria-label="modals"

        >
          <div className={burgerClass} >
            <div className="burger-line-1"></div>
            <div className="burger-line-2"></div>
            <div className="burger-line-3"></div>
          </div>
        </button>

        {/* <div>Modal is: {this.state.isModalOpen ? "Open" : "Closed"}</div> */}
        {this.state.isModalOpen && (
          <Modal
            id="modal"
            isOpen={this.state.isModalOpen}
            onClose={this.toggleState}
          >
            <Link to="/app/video">Courses</Link>
            <Link to="/about/"><h3>About</h3></Link>
          </Modal>
        )}
      </div>
    );
  }
}

export default Main;
