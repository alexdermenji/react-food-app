import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const modalRoot = document.getElementById("modal-root");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, modalRoot)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalRoot
      )}
    </Fragment>
  );
};

export default Modal;
