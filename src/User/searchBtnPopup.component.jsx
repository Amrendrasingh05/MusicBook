import { useState } from 'react';


function Popup({show, onClose}){

    const[showSucess, setshowSucess]=useState(false)

    function openclose(){
        setshowSucess(true);
        onClose();
    }

    if(!show){
        return null;
    }
    else
    return(
        <div className="popup">
        <div className="popup-box">
            <button className="close-popup " onClick={onClose}>X</button>
            <div className="ring"></div>
            <br />
            <h1>S E A R C H</h1>
           <br />
           <input type="search" name="" id="" className='search' placeholder='Search'/>
           <br />
           <div onClick={() => window.open("/dashboard","_self")} style={{cursor:"pointer"}}>

           <div>Back To Home</div>
           <center style={{fontSize:"40px",marginTop:"-20%"}}> ←</center>
           </div>
            
        </div>

       
        </div>
    );
}
export default Popup;