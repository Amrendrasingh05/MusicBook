import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Editpost from './editPost.component'
function Popup({ show, onClose, val }) {

    async function getdata(url = '', methods = '') {
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("auth_token")
            },
        });
        return response.json();
    }

    function Delete() {
        getdata('https://musicbook.co.in/api/v1/post/delete/'+val._id, 'DELETE')
            .then(data => {
                if (data.code == 200) {
                    
                    swal("Post Deleted")
                    window.open("/dashboard","_self")
                }
                else {
                    console("incorrect")

                }
            })

        // console.log("like called")
    }

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
                    <div className='text-danger' onClick={Delete}>Delete</div>
                </center>
                {/* <h6 onClick={onClose}>close</h6> */}
            </div>
        );
}
export default Popup;