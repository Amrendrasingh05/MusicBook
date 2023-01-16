import { useState } from 'react';


function Popup({ show, onClose, val }) {
    // console.log("props = ",props.data)

    if (!show) {
        return null;
    }
    else
        return (
            <div className='album-popup'>
                <button className="close-popup-album primary-bg" onClick={onClose}>➤</button>
                <div className='popup-box3'>
                    <img src={val.cover_photo} alt="" className='album-popup-img' />
                    <h3>{val.title}</h3>
                    <h6 className='display-flex'> by- &nbsp;<div className="text-primary">{val.created_by.full_name}</div></h6>
                    <br />
                    <h5>Other Albums</h5>
                    <div className="other-albums">

                    </div>
                </div>
            </div>
        );
}
export default Popup;