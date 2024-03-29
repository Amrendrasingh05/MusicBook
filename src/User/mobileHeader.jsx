import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import Popup from './searchBtnPopup.component'
import Notification from './notification.component'
import 'reactjs-popup/dist/index.css';

import sidebarImg1 from '../images/Vector (1).png'
import sidebarImg2 from '../images/Vector (2).png'
import sidebarImg3 from '../images/Vector (3).png'
import sidebarImg4 from '../images/Vector (4).png'
import sidebarImg5 from '../images/Vector (5).png'
import sidebarImg6 from '../images/Vector (6).png'

function Mobileheader() {
    const[show , setShow] = useState(false)
    const[show2 , setShow2] = useState(false)

    
    

    return (
        <div className="Mobile-header">
            <nav className="navbar navbar-expand-lg navbar-black bg-black">
            <a className=" " onClick={() => window.open("/dashboard","_self")} aria-current="true">
                                <img src={sidebarImg1} alt="" />
                            </a>
                            <Popup show={show} onClose={() => setShow(false)}/>


                            <a className=" " onClick={() => setShow(true)} aria-current="true">
                                <img src={sidebarImg2} alt=""  />
                            </a>

                            <Notification show={show2} onClose={() => setShow2(false)}/>


                            <a className=" " onClick={() => setShow2(true)} aria-current="true">
                                <img src={sidebarImg4} alt="" />
                            </a>

                            <a className=" " onClick={() => window.open("/learning","_self")} aria-current="true">
                                <img src={sidebarImg3} alt="" />
                            </a>

                            <a className=" " onClick={() => window.open("/album","_self")} aria-current="true">
                                <img src={sidebarImg5} alt="" />
                            </a>

                            <a className=" " onClick={() => window.open("/account","_self")} aria-current="true">
                                <img src={sidebarImg6} alt="" />
                            </a>



            </nav>
        </div>
    )
}

export default Mobileheader;