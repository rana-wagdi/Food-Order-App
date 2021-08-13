import { Fragment } from "react";
import ReactDom from "react-dom";


import classes from './Model.module.css';


const Backdrop = (props) => {
    return <div className={classes.backdrop} />
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.model}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays')

const Model = (props ) => {
    return <Fragment>
       {ReactDom.createPortal(<Backdrop />, portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
};

 export default Modal;