import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Professional_header.component'
import SlidingPanel from 'react-sliding-side-panel';
// import profile from  '../images/Rectangle  83.png'
import play from '../images/play.png'

import Img1 from '../images/Rectangle 102.png'
import socialMediaImg1 from '../images/Vector.png'
import socialMediaImg2 from '../images/Vector (10).png'
import socialMediaImg3 from '../images/Vector (20).png'
import socialMediaImg4 from '../images/Vector (30).png'
import socialMediaImg5 from '../images/Vector (40).png'

import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'


function Forgetpassword() {
  function verification() {
    window.open("/verification", "_self")
  }

  let BtnArray = ["Digital Visiting Card", "My Purchase", "Support & Help", "Privacy Policy", "Rating", "About"]

  function buttons(val) {
    return (
      <>
        <button className="btn btn-outline-secondary accountBtn">{val}</button>

      </>
    );
  }

  const [openPanel, setOpenPanel] = useState(false);



  return (

    <div>

      <Header />

      <div className="BasicStyle-professional">

          <h5>◄ ALBUM</h5>

        <div className="album">
          <br />
          <h5>Recent Albums</h5>
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
        </div>

        <div className="album-bottom display-flex">
          <div className="display-flex" style={{alignItems:"center"}}>
          <img src={albumImg2} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{marginTop:"10%"}}>
            <h6>Giveaay</h6>
            <p>By Atif Aslam</p>
          </div>
          </div>
          <img src={play} alt="" />
        </div>

        
        <div></div>

      </div>




    </div>
  );

}
export default Forgetpassword;