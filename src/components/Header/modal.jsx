import React, { useState, forwardRef, useImperativeHandle } from "react"
import { Link } from "gatsby"

import Portal from "./portal"

import Social from "../../components/social"
import Close from "./assets/close.inline.svg"
import Logo from "../../../static/logo.inline.svg"

const Modal = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false)
  const [classChange, setClassChange] = useState("")

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
      }
    }
  )

  const handleOpen = ()=> {
    setDisplay(true);
    setTimeout(function() {
    setClassChange("boxDialogue-open")
 }, 100);
  }

  const handleClose = () => {
    setDisplay(false);
    setTimeout(function() {
      setClassChange("")
   }, 100);
  }



  if (display) {
    return (
      <Portal >
          
          <div className={`modal`}>
            <div className={`box-dialog ${classChange}`}>
              <div className="box-header">
              <div className="modal-logo">
                  <Logo/>
              </div>
                <button onClick={handleClose} className="close-modal">
                  <Close />
                </button>
              </div>
              <div className="box-content">
                {props.children}
              </div>
              <div className="box-footer">
                <Social />
              </div>
            </div>
            <div className="background"/>
          </div>
      </Portal>
    )
  }

  return null
})

export default Modal