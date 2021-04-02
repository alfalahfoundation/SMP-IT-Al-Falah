import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;

  right: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ease 0.15s;
  z-index: 2000;
  width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;

  &.fade-in {
    opacity: 1;
    transition: opacity 0.6s linear;
    /* transform: translateY(0);
    transition: transform 0.25s ease-in-out, box-shadow 0.1s 0.25s linear; */
  }
  &.fade-out {
    opacity: 0;
    transition: opacity 0.6s linear;
  }
  

  .background {

    background: rgba(0,0,0,.33);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    width : 100vw;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1050;
    background-color: #fff;
    box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
      .box-content {
        padding-top: 1em;
        padding-bottom: 3em;
        padding-left: 1em;
        font-size: larger;
        width: 100%;
        /* padding-top: 0;
      }
      .box-header {
        height: 5em;
        padding: 10px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #c7c7c7;
            .sosmed-icon{
              font-size:2em;
            }
            .close-button{
              background:transparent;
            }
            .open-button{
              background:transparent
            }
          }
      .box-body {
        font-size: 14px;
        padding: 0px;
        width: auto;
        height: auto;
      }
      .box-footer {
        padding: 0px 24px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid #c7c7c7;
        .social-div{
          flex-direction:row;
          justify-content: flex-end;
          width: 100%;
          padding:0;
          padding-bottom:1em;
          h3{
            display:none;
          }
        }
      }
  }
`;

export default Modal;
