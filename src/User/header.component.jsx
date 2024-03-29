import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import Popup from './searchBtnPopup.component'
import Notification from './notification.component'
import 'reactjs-popup/dist/index.css';
import { NavLink } from "react-router-dom";
import sidebarImg1 from '../images/Vector (1).png'
import sidebarImg2 from '../images/Vector (2).png'
import sidebarImg3 from '../images/Vector (3).png'
import sidebarImg4 from '../images/Vector (4).png'
import sidebarImg5 from '../images/Vector (5).png'
import sidebarImg6 from '../images/Vector (6).png'

function Forgetpassword() {

    const[show , setShow] = useState(false)
    const[show2 , setShow2] = useState(false)

    // const handleClick = (e) => {
	// 	let navItems = document.querySelectorAll("a");
	// 	navItems.forEach((navItem) => {
	// 		navItem.classList.remove("active-header");
	// 	});
	// 	e.target.classList.add("active-header");
	// };

    

    return (

        <>

            <header>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
                    <div className="position-sticky">
                        
                            <ul type="none">
                             <Popup show={show} onClose={() => setShow(false)}/>
                             <Notification show={show2} onClose={() => setShow2(false)}/>
                                <li onClick={()=> window.open("/dashboard","_self")}>
                                    <NavLink to="/dashboard"><img src={sidebarImg1} alt="" /></NavLink>
                                </li>
                                <li onClick={() => setShow(true)}>
                                    <a><img src={sidebarImg2} alt="" /></a>
                                </li>
                                <li onClick={() => setShow2(true)}>
                                    <a><img src={sidebarImg4} alt="" /></a>
                                </li>
                                <li onClick={()=> window.open("/learning","_self")}>
                                    <NavLink to="/learning"><img src={sidebarImg3} alt="" /></NavLink>
                                </li>
                                <li onClick={()=> window.open("/album","_self")}>
                                    <NavLink to="/album"><img src={sidebarImg5} alt="" /></NavLink>
                                </li>
                                <li onClick={()=> window.open("/account","_self")}>
                                    <NavLink to="/account"><img src={sidebarImg6} alt="" /></NavLink>
                                </li>
                            </ul>
                            {/* <a className="list-group-item list-group-item-action py-2 ripple " onClick={(e) => window.open("/dashboard","_self")} aria-current="true">
                                <img src={sidebarImg1} alt="" />
                            </a>
                            <Popup show={show} onClose={() => setShow(false)}/>


                            <a className="list-group-item list-group-item-action py-2 ripple" onClick={() => setShow(true)} aria-current="true">
                                <img src={sidebarImg2} alt=""  />
                            </a> */}

                            {/* <Notification show={show2} onClose={() => setShow2(false)}/> */}


                            {/* <a className="list-group-item list-group-item-action py-2 ripple " onClick={() => setShow2(true)} aria-current="true">
                                <img src={sidebarImg4} alt="" />
                            </a>

                            <a className="list-group-item list-group-item-action py-2 ripple " onClick={() => window.open("/learning","_self")} aria-current="true">
                                <img src={sidebarImg3} alt="" />
                            </a>

                            <a className="list-group-item list-group-item-action py-2 ripple " onClick={() => window.open("/album","_self")} aria-current="true">
                                <img src={sidebarImg5} alt="" />
                            </a>

                            <a className="list-group-item list-group-item-action py-2 ripple " onClick={() => window.open("/account","_self")} aria-current="true">
                                <img src={sidebarImg6} alt="" />
                            </a> */}

                            {/* <a className="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                                <img src={sidebarImg1} alt="" />
                            </a> */}




                        
                    </div>
                </nav>

            </header>
        </>
    );

}
export default Forgetpassword;