import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/MusicBookLogo.png'
import threeDots from "../images/3dot.png"
import Popup from "./hederPopup.component";
import React from 'react';
import { useState } from "react";


function Forgetpassword() {

    const [show, setShow] = useState(false)


    return (

        <>
            <div className="display-flex bg-black text-white professional-header" style={{ alignItems: "center", justifyContent: "space-between", paddingRight: "5%", padding: "2%" }}>
                <Popup show={show} onClose={() => setShow(false)}/>
                <div className="display-flex" onClick={() => window.open("/professional-home","_self")} style={{cursor:"pointer"}}>
                    <img src={logo} alt="" />
                    <div>
                        <h5>MusicBook</h5>
                        <p>Live every Beatof your life</p>
                    </div>
                </div>

                <img className="three-dot-img" src={threeDots} onClick={() => setShow(true)} alt="" style={{cursor:"pointer"}}/>
            </div>
        </>
    );

}
export default Forgetpassword;