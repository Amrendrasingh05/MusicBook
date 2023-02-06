import { useState } from 'react';


function Popup({show, onClose}){

    const[Clear, setClear]=useState("block")

   

    if(!show){
        return null;
    }
    else
    return(
        // <div className="popup">
        // <div className="popup-box">
        //     {/* <button className="close-popup" >X</button> */}
        //     <h3 className="display-flex">
        //         <div onClick={onClose} style={{cursor:"pointer"}}>◄</div> &nbsp;
        //         <div>NOTIFICATIONS</div>
        //         </h3>
        //     <div className='notification-box' style={{display:Clear}}>
        //         <div className="notifications align">

        //         </div>
        //         <div className="notifications align">

        //         </div>
        //         <div className="notifications align">

        //         </div>
        //         <div className="notifications align">

        //         </div>
        //         <div className="notifications align">

        //         </div>
        //         <div className="notifications align">

        //         </div>
        //         <div className="notifications align">

        //         </div>
        //         <div className="notifications align">

        //         </div>

        //     </div>
        //     <button className='mt-1 btn btn-outline-secondary' style={{display:Clear}} onClick={() => setClear("none")}>Clear All</button>
        //     </div>       
        // </div>
        <>
        hiiiii</>
    );
}
export default Popup;