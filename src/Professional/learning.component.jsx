import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Professional_header.component'
import leftImg1 from '../images/Rectangle 80 (1).png'
import leftImg2 from '../images/Rectangle 79.png'

import albumImg1 from '../images/Rectangle 6.png'


function forgetpassword() {
    function verification() {
        window.open("/verification", "_self")
    }
    return (

        <div>

            <Header />

            <div className="BasicStyle-professional home">
                <div className="display-flex">

                    <div>
                        <img src={leftImg1} alt="" />
                    </div>

                    <div className="home-right">
                        <div>
                            <img src={leftImg2} alt="" />

                        </div>
                    </div>

                </div>

                <div className="home-right-mid">
                    <br />
                    <h5>My Learnings</h5>
                    <div className="display-flex">
                        <div className="home-right-mid-blocks">
                            <h6>How to create Music Notes</h6>
                            <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                            <span>12:30 Min Remaining</span>
                        </div>
                        <div className="home-right-mid-blocks">
                            <h6>How to create Music Notes</h6>
                            <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                            <span>12:30 Min Remaining</span>
                        </div>
                        <div className="home-right-mid-blocks">
                            <h6>How to create Music Notes</h6>
                            <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                            <span>12:30 Min Remaining</span>
                        </div>
                    </div>
                </div>

                <div className="home-right-mid">
                    <br />
                    <h5>My Learnings</h5>
                    <div className="display-flex">
                        <div className="home-right-mid-blocks display-flex">
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                           <div>
                           <h6>How to create Music Notes</h6>
                            <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                            <span>12:30 Min Remaining</span>
                           </div>
                            
                        </div>
                        <div className="home-right-mid-blocks display-flex">
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                           <div>
                           <h6>How to create Music Notes</h6>
                            <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                            <span>12:30 Min Remaining</span>
                           </div>
                            
                        </div><div className="home-right-mid-blocks display-flex">
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                           <div>
                           <h6>How to create Music Notes</h6>
                            <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                            <span>12:30 Min Remaining</span>
                           </div>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );

}
export default forgetpassword;