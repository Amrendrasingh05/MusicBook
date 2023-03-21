import { useState, useEffect } from 'react';
import swal from 'sweetalert';
function Popup({ show,url,onClose}) {

    console.log("url of singlepi =",url)
    console.log("url of singlepi =",show)

    if (!show) {
        return null;
    }
    else
        return (
            <div>
                {/* <div className="swal-overlay swal-overlay--show-modal" tabindex="-1">
                    <div className="swal-modal edit-post-three-dot-popup" role="dialog" aria-modal="true"> */}

                        <img src={url} alt="" />

                    {/* </div> */}
                    <h5 className='close-popup-edit-post' onClick={onClose}>X</h5>

                </div>
            // </div>
            // <>
            // <h1>hiiii</h1>
            // {swal("jhiiiiiii")}
            // </>
           
        );
}
export default Popup;