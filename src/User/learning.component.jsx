import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
import leftImg1 from '../images/Rectangle 80 (1).png'
import leftImg2 from '../images/Rectangle 79.png'
import searchIcon from '../images/Vector (2).png'
import albumImg1 from '../images/Rectangle 6.png'


function forgetpassword() {
    function verification() {
        window.open("/verification", "_self")
    }
    return (

        <div>

            <Header />

            <div className="BasicStyle home">
            <div className="display-flex" style={{ justifyContent: "space-between",marginTop:"-5%",marginBottom:"2%" }}>
          <h5>◄ Learning</h5>
          <img src={searchIcon} className="album-search" alt="" />
        </div>
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
                    <div className="display-flex slider-left2right">
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

                <div className="home-right-mid slider-left2right">
                    <br />
                    <h5>My Learnings</h5>
                    <div className="display-flex slider-left2right">
                        <div className="home-right-mid-blocks2 display-flex" onClick={() => window.open("/coursePurchase","_self")}>
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>How to create Music Notes</h6>
                                <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                                <span>12:30 Min Remaining</span>
                            </div>

                        </div>
                        <div className="home-right-mid-blocks2 display-flex" onClick={() => window.open("/coursePurchase","_self")}>
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>How to create Music Notes</h6>
                                <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                                <span>12:30 Min Remaining</span>
                            </div>

                        </div>

                        <div className="home-right-mid-blocks2 display-flex" onClick={() => window.open("/coursePurchase","_self")}>
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>How to create Music Notes</h6>
                                <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                                <span>12:30 Min Remaining</span>
                            </div>
                        </div>

                        <div className="home-right-mid-blocks2 display-flex" onClick={() => window.open("/coursePurchase","_self")}>
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