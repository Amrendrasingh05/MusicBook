import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import searchBtnPopupComponent from "./searchBtnPopup.component";
import logo from '../images/MusicBookLogo.png'
import threeDots from "../images/3dot.png"

import React from 'react';
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";


function Forgetpassword() {

    const [modal, setmodal] = useState(false)


    return (

        <>


            <Modal
                className="bg-dark text-white threeDotsComponentModal"
                size="lg"
                isOpen={modal}
                toggle={() => setmodal(!modal)}>
                <ModalHeader
                    toggle={() => setmodal(!modal)}
                    className="bg-black threeDotsComponent"
                >
                    <div className="display-flex">

                        <div className="threeDotBox">
                            Notification
                        </div>
                        <div className="threeDotBox">
                            Wallet
                        </div>
                        <div className="threeDotBox">
                            My Profile
                        </div>
                    </div>
                    <div className="display-flex">
                        <div className="threeDotBox">
                            My Class
                        </div>
                        <div className="threeDotBox">
                            Chat
                        </div>
                        <div className="threeDotBox">
                            Support&help
                        </div>
                    </div>
                    <div className="display-flex">
                        <div className="threeDotBox">
                            Privacy Policy
                        </div>
                        <div className="threeDotBox">
                            Abou Us
                        </div>
                    </div>
                </ModalHeader>

            </Modal>


           


                <div className="display-flex bg-black text-white professional-header" style={{ alignItems: "center", justifyContent: "space-between", paddingRight: "5%", padding: "2%" }}>

                    <div className="display-flex">
                        <img src={logo} alt="" />
                        <div>
                            <h5>MusicBook</h5>
                            <p>Live every Beatof your life</p>
                        </div>
                    </div>

                    <img className="three-dot-img" src={threeDots} onClick={() => setmodal(true)} alt="" />
                </div>






           
        </>
    );

}
export default Forgetpassword;