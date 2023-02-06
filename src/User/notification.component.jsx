import { useState } from 'react';


function Popup({ show, onClose }) {

    const [Clear, setClear] = useState("block")



    if (!show) {
        return null;
    }
    else
        return (
            <div className="popup">
                <div className="popup-box">
                    <h3 style={{ marginLeft: "-100%", marginTop: "-8%" }} className="display-flex">
                        <div onClick={onClose} style={{ cursor: "pointer" }}>◄</div> &nbsp;
                        <div>NOTIFICATIONS</div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className=' mb-2 btn btn-outline-secondary' style={{ display: Clear }} onClick={() => setClear("none")}>Clear All</button>
                    </h3>
                    

                    <div className='notification-box' style={{ display: Clear }}>
                        <div className="notifications align">

                        </div>
                        <div className="notifications align">

                        </div>
                        <div className="notifications align">

                        </div>
                        <div className="notifications align">

                        </div>
                        <div className="notifications align">

                        </div>
                        <div className="notifications align">

                        </div>
                        <div className="notifications align">

                        </div>
                        <div className="notifications align">

                        </div>

                    </div>
                    
                </div>
            </div>
        );
}
export default Popup;