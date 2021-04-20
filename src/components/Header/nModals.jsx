import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { Link } from "gatsby"

import Close from "./assets/close.inline.svg"
import StyledModal from "./cssJs/nModal.css.js"
import Social from "../social"



const modalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

class Modal extends Component {
  constructor() {
    super()
    this.el = typeof document !== `undefined` ? document.createElement('div') : null
    this.toggleState = this.toggleState.bind(this);
    this.state = { isModalOpen: false };
  };

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  static defaultProps = {
    id: "",
    modalClass: "",
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    modalClass: PropTypes.string,
  };

  state = { fadeType: null };




  background = React.createRef();

  componentDidMount() {

    modalRoot.appendChild(this.el)

    window.addEventListener("keydown", this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
  }

  componentWillUnmount() {

    modalRoot.removeChild(this.el)

    window.removeEventListener("keydown", this.onEscKeyDown, false);
  }

  transitionEnd = e => {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;

    if (this.state.fadeType === "out") {
      this.props.onClose();
    }
  };

  onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    this.setState({ fadeType: "out" });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ fadeType: "out" });
  };

  render() {

    // let icon = "icon"

    if (this.el) {
      return ReactDom.createPortal(
        <StyledModal
          id={this.props.id}
          className={`wrapper ${"size-" + this.props.modalSize} fade-${
            this.state.fadeType
            } ${this.props.modalClass}`}
          role="dialog"
          onTransitionEnd={this.transitionEnd}
        >
          <div className="box-dialog">
            <div className="box-header">
              <div>
                <h4>
                  <Link className="logo" to="/" >
                    {/* <div className="logo-image">E-Learning<h2>E-Learning</h2></div> */}
                    E-Learning
                  </Link>
                </h4>
              </div>
              <button onClick={this.handleClick} className="close-modal">
                <Close />
              </button>
            </div>
            <div className="box-content">
              {this.props.children}
            </div>
            <div className="box-footer">
              <Social />
            </div>
          </div>
          <div
            role="button"
            className={`background`}
            onMouseDown={this.handleClick}
            ref={this.background}
            aria-name="background"
          />
        </StyledModal>,
        this.el
      )
    } else {
      return null
    }

  }
}

export default Modal;
