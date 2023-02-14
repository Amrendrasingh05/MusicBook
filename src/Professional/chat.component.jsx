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
                    <h4>◄ Chat</h4> <br />
                    <center className='mt-5'>
                    <div className="left-chat-box">hiii</div>
                    <div className="right-chat-box">hello</div>
                    <div className="left-chat-box">hiii</div>
                    <div className="right-chat-box">hello</div>
                    <input type="text" className="send-message" placeholder='Type Your Message'/>
                    </center>

                </div>
            </div>
        );
}
export default Popup;