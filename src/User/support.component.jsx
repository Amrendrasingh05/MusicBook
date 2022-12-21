import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
// import profile from  '../images/Rectangle  83.png'
import profileImg from '../images/Rectangle 83.png'

import Img1 from '../images/Rectangle 102.png'
import socialMediaImg1 from '../images/Vector.png'
import socialMediaImg2 from '../images/Vector (10).png'
import socialMediaImg3 from '../images/Vector (20).png'
import socialMediaImg4 from '../images/Vector (30).png'
import socialMediaImg5 from '../images/Vector (40).png'


function forgetpassword() {
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



    return (

        <div>

            <Header />

            <div className="BasicStyle">
                <div className="about">
                    <h5>◄ SUPPORT</h5>
                </div>

                <p className="text-secondary">Recents</p>


                <div className="display-flex support">
                    <div style={{width:"60%"}}>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Music Album Not Working</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <br />
                        <div className="history">

                        
                        <p className="text-secondary">History</p>

                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Music Album Not Working</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Music Album Not Working</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Music Album Not Working</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Music Album Not Working</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Music Album Not Working</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        </div>
                        <br />
                        <button className="raiseTicketBtn">Raise Ticket</button>

                    </div>
                    <div style={{width:"40%", textAlign:"center"}}>
                        <h6>Support</h6>
                        <input type="text" placeholder="Email" /> <br />
                        <input type="text" placeholder="Select reason" /> <br />
                        <textarea name=""  placeholder="Message" id="" cols="30" rows="10"></textarea>
                       <br /> <br /> <button className="supportSubmitBtn">Submit</button>
                        </div>
                </div>


            </div>




        </div>
    );

}
export default forgetpassword;