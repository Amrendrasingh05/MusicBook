import React,{useState} from "react";
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

            <div>
      <div>
        {/* <button onClick={() => setOpenPanel(true)}>Open</button> */}

        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">See Modal</button>
      </div>
      {/* <SlidingPanel
        type={'left'}
        isOpen={openPanel}
        size={30}
      >
        <div>
          <div>My Panel Content</div>
          <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel> */}


<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 className="modal-title" id="myModalLabel">Bootstrap Modal with Blurred Background</h4>
      </div>
      <div className="modal-body">
       
        <h3>How This concept evolved in me</h3>
        <p>Today I received a mailer from <a href="https://www.canva.com/" target="_blank">Canva</a></p>
        <p>When I clicked their button elements I found that background is going blurred. So it looked awesome to me. </p>
        <p>There are available plugins to do this also -- 
        <a href="http://www.jqueryscript.net/lightbox/jQuery-Plugin-To-Popup-A-Modal-Window-with-Blurred-Background-BlurBox.html" target="_blank">Check this
        link</a></p>
        <p>But I tried to do it in bootstrap modal<br/>
            Thanks to Stack Overflow
            <a href="http://stackoverflow.com/questions/19571955/how-to-make-modal-dialog-with-blur-background-using-twitter-bootstrap" target="_blank">
            http://stackoverflow.com/questions/19571955/how-to-make-modal-dialog-with-blur-background-using-twitter-bootstrap</a>
        </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
                <div className="about">
                    <h5>◄ ALBUM</h5>
                </div>

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
                    <img src={albumImg2} alt="" />
                    <div>
                        <h6>Giveaay</h6>
                        <p>By Atif Aslam</p>
                    </div> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <img src={play} alt="" /> 
                    {/* img           */}
                </div>
                
                    <div></div>

             </div>




        </div>
    );

}
export default Forgetpassword;