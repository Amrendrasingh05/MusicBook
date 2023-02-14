import { useState, useEffect } from 'react';


function Popup({ show, onClose, val }) {


    if (!show) {
        return null;
    }
    else
        return (
            <div className='album-popup'>
                <button className="close-popup-album primary-bg" onClick={onClose}>➤</button>
                <div className='popup-box3'>
                    <h4>◄ Withdrawl</h4> <br />
                    <center className='mt-5'>
                        <h1 className='mt-4'>5,00,000.00</h1>
                        <h6 className="text-secondary">Balance</h6> <br /><br />
                        <h5 className='mt-5'>Enter Withdrawl Amount</h5>
                        <input type="number" name="" id="" className='withdrawl-input'/> <br /> <br /><br /> <br />
                        <button className="loginWithEmail" style={{paddingLeft:"10%",paddingRight:"10%",paddingTop:"3%",paddingBottom:"3%", borderRadius:"10px"}}>Withdrawl</button>
                    </center>

                </div>
            </div>
        );
}
export default Popup;