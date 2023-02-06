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
                            Notification
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-wallet", "_self")}>
                            Wallet
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-account", "_self")}>
                            My Profile
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-learning", "_self")}>
                            My Class
                        </button>
                        <button className="threeDotBox">
                            Chat
                        </button>
                        <button className="threeDotBox" onClick={() => window.open("professional-support", "_self")}>
                            Support&help
                        </button>

                        <button className="threeDotBox" onClick={() => window.open("professional-privacy", "_self")}>
                            Privacy Policy
                        </button>
                        <button className="threeDotBox" onClick={() => window.open("professional-aboutUs", "_self")}>
                            Abou Us
                        </button>
                    </div>

                </div>
            </>
        );
}
export default Popup;