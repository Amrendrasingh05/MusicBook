import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
// import profile from  '../images/Rectangle  83.png'
import profileImg from '../images/Rectangle 83.png'

import Img1 from '../images/Rectangle 108.png'
import Img2 from '../images/Rectangle 111.png'


function forgetpassword() {
    function verification() {
        window.open("/verification", "_self")
    }


    let BtnArray =["Digital Visiting Card","My Purchase","Support & Help","Privacy Policy","Rating","About"]

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

            <div className="BasicStyle home">
                <div className="account">

                </div>

                <div className="home-right-mid">
                    <div className="display-flex" >
                        <div style={{ maxWidth: "60%" }}>
                            <img src={profileImg} alt="" style={{ marginTop: "-10%" }} />
                            <h3>Miller Joeson</h3>
                            <p>@millerjoe</p>
                            <div className="display-flex">
                                <button className="TopPlayer">Top Player</button>
                                <p className="display-flex">Profile Rattig &nbsp; <p className="text-warning"> 4.8</p></p>
                            </div>
                            <div className="below-topBtn">

                            </div>
                            <h5 className="text-secondary">ABOUT THE ARTIST</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis facere harum vel vitae molestias illum, pariatur necessitatibus minima omnis voluptate ab reiciendis dicta. Quas tempore odit soluta in, minima cupiditate.</p>
                            <div className="display-flex">
                                {BtnArray.map(buttons)}
                                
                            </div>
                            <br />
                            <br />
                            <button className="btn btn-danger" style={{marginLeft:"40%"}}>Log Out</button>
                        </div>

                        <div>
                            <br />
                            <div className="display-flex">
                                <div className="primary-color">Post</div> &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="">Album</div>
                            </div>
                            <br />
                            <img src={Img1} alt="" />
                            <img src={Img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );

}
export default forgetpassword;