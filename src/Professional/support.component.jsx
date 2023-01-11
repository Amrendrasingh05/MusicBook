import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Professional_header.component'
// import profile from  '../images/Rectangle  83.png'
import profileImg from '../images/Rectangle 83.png'

import Img1 from '../images/Rectangle 102.png'
import support from '../images/P_support.png'
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

        <div className="black-bg">

            <Header />

            <div className="BasicStyle-professional black-bg">
                <div className="about">
                    <h5>◄ SUPPORT</h5>
                </div>

                <p className="text-secondary">Recents</p>


                <div className="display-flex support">
                    <div style={{width:"60%"}}>
                        
                            <img src={support} alt="" style={{marginLeft:"0%", width:"100%"}} />
                        
                        <br />
                        <br />
                        <div className="history">

                        
                        <p className="text-secondary">History</p>

                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Introduction</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Course Title</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Course Title</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Course Title</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        <div className="supportColumns">
                            <p className="text-secondary">Ticket No: #25625</p>
                            <div className="display-flex" style={{justifyContent:"space-between"}}>
                                <h5>Course Title</h5>
                                <a>Active</a>
                                </div>
                            <p className="text-secondary">12 sep 2022</p>
                        </div>
                        </div>
                        <br />
                        
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