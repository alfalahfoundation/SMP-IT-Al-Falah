import styled from "styled-components";

const Search = styled.div`
  position: absolute;
  top: 0;

  right: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ease 0.15s;
  /* z-index: 2000; */
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
    transition: all 0.6s linear;
  
  }
  &.fade-out {
    opacity: 0;
    transition: all 0.6s linear;
  }
  

  .background {

    background: rgba(0,0,0,.33);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    /* top: 9em; */
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }

  /* .search{
    border: 1px solid gray;
    border-top: none;
    opacity: ${props => (props.open ? "1" : "0")};
    max-height: ${props => (props.open ? "100%" : "0")};
    overflow: hidden;
    padding: ${props => (props.open ? "15px" : "0 15px")};
    transition: all 0.3s;
  } */

  .box-dialog {
    width : 100vw;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1050;
    background-color: #fff;
    box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
     .box-content {
       padding: 3em;
      width: 100%;
     }
    .box-header {
       height: 48px;
      padding: 70px 24px;
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
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }
  }
`;

export default Search;
