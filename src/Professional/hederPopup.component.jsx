import { useState } from 'react';
import Notification from './notification.component'

function Popup({ show, onClose }) {

    const [show2, setShow2] = useState(false)

   


    if (!show) {
        return null;
    }
    else
        return (
            <>

                <Notification show={show2} onClose={() => setShow2(false)} />
                <div className="popup2">
                    <div class="popup-box2 ">
                        <button className="close-popup " onClick={onClose}>X</button>

                        <button className="threeDotBox" onClick={() => setShow2(true)}>
                            <div>Notification</div>
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-wallet", "_self")}>
                            <div>Wallet</div>
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-account", "_self")}>
                        <div className="display-flex">
                                <div>My</div> &nbsp;
                                <div>Profile</div>
                            </div>
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-classInfo", "_self")}>
                        <div className="display-flex">
                                <div>Class</div> &nbsp;
                                <div>info</div>
                            </div>
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-learning", "_self")}>
                            <div className="display-flex">
                                <div>My</div> &nbsp;
                                <div>Class</div>
                            </div>
                        </button>
                        <button className="threeDotBox">
                           <div> Chat</div>
                        </button>
                        <button className="threeDotBox" onClick={() => window.open("professional-support", "_self")}>
                        <div className="display-flex">
                                <div>Support</div> &nbsp;
                                <div>&</div>&nbsp;
                                <div>Help</div>
                            </div>
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-privacy", "_self")}>
                        <div className="display-flex">
                                <div>Privacy</div> &nbsp;
                                <div>Policy</div>
                            </div>
                        </button>
                        <button className="threeDotBox" onClick={() => window.open("professional-aboutUs", "_self")}>
                        <div className="display-flex">
                                <div>About</div> &nbsp;
                                <div>Us</div>
                            </div>
                        </button>
                    </div>

                </div>
            </>
        );
}
export default Popup;