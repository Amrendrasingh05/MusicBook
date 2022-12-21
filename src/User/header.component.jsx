import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import searchBtnPopupComponent from "./searchBtnPopup.component";

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import sidebarImg1 from '../images/Vector (1).png'
import sidebarImg2 from '../images/Vector (2).png'
import sidebarImg3 from '../images/Vector (3).png'
import sidebarImg4 from '../images/Vector (4).png'
import sidebarImg5 from '../images/Vector (5).png'
import sidebarImg6 from '../images/Vector (6).png'

function forgetpassword() {

    function openSearch() {

        console.log("hii")
    }

    function closeSearch() {
        document.getElementById("myOverlay").style.display = "none";
    }

    return (

        <>

            <header>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4 ">

                            <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg1} alt="" />
                            </a>
                            <searchBtnPopupComponent/>

                            <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg2} alt="" onClick={openSearch} />
                            </a>

                            <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg4} alt="" />
                            </a>

                            <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg3} alt="" />
                            </a>

                            <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg5} alt="" />
                            </a>

                            <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg6} alt="" />
                            </a>

                            {/* <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg1} alt="" />
                            </a> */}




                        </div>
                    </div>
                </nav>

            </header>
        </>
    );

}
export default forgetpassword;