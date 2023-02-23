import { useState, useEffect } from 'react';
import swal from 'sweetalert';
function Popup({ show, onClose, val }) {

    let imgUrl = ""

    if (val.media[0]) {
        imgUrl = val.media[0].file
        // console.log(imgUrl)
    }


    if (!show) {
        return null;
    }
    else
        return (
            <div>
                <div className="swal-overlay swal-overlay--show-modal" tabindex="-1">
                    <div style={{border:"0"}} className="swal-modal edit-post-three-dot-popup" role="dialog" aria-modal="true">
                        <h5>Edit</h5>
                        <div style={{border:"0"}} className="display-flex">
                            <div style={{border:"0"}}>
                                <img src={imgUrl} alt="" /> 
                                <h6>Turn off Comments</h6>
                                <h6>Hide likes</h6>
                                <h6>Tags</h6>
                                <h6 >Add a Location</h6>
                            </div>
                            <div style={{border:"0"}}>
                                <h5>Caption</h5>
                                <input type="text" placeholder='hiiiii' />
                            </div>
                        </div>
                        <center style={{border:"0"}}><button className='btn btn-outline-info'>Save</button></center>
                        <h5  className='close-popup-edit-post' onClick={onClose}>X</h5>

                    </div>
                </div>
            </div>
        );
}
export default Popup;