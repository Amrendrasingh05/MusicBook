import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Editpost from './editPost.component'
function Popup({ show, onClose, val }) {

    const[show2, setShow2]= useState(false)
    if (!show) {
        return null;
    }
    else
        return (
            <div className="post-three-dot-popup">
                <Editpost show={show2} onClose={()=> setShow2(false)} val={val}/>
                <div className="close-popup-three-dot" onClick={onClose}>X</div>
                <center>
                    {/* <div>{val.comments.comment}</div> */}
                    <div>Share</div>
                    <div>Copy link</div>
                    <div onClick={()=> setShow2(true)}>Edit Post</div>
                    <div className='text-danger'>Delete</div>
                </center>
                {/* <h6 onClick={onClose}>close</h6> */}
            </div>
        );
}
export default Popup;