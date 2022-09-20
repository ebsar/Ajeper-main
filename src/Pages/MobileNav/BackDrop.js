import React from "react";
import './BackDrop.css';
function BackDrop (props) {
    return (
        <div onClick={props.onClose} className="Backdrop" />
    )
}   
export default BackDrop;