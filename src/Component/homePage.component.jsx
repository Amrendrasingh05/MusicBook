import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
import leftImg1 from '../images/Rectangle 36.png'
import leftImg2 from '../images/Rectangle 37.png'

import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'


function forgetpassword() {
    function verification(){
        window.open("/verification","_self")
    }
    return (

       <div>
       
       <Header/>

       <div className="BasicStyle home">
        <div className="display-flex">
            
            <div className="home-left">
                <span>HELLO,</span>
                <h1>Nakul Kumar</h1>
                <img src={leftImg1} alt="" />
                <br />
                <img src={leftImg2} alt="" />
            </div>
           
            <div className="home-right">
            <div className="home-right-top">
                <h6>Create Post</h6>
                <p>Description</p>
                <input type="text" />
                <div className="display-flex">
                    <button className="btn btn-outline-primary">Upload</button>
                    <button className="btn btn-outline-primary">Camera</button>
                    <button className="btn btn-outline-primary">Live</button>
                    <button className="btn btn-outline-primary upload-content">Upload Content</button>
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
                </div>
            </div>
            <div className="home-right-bottom">
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
            </div>
            </div>

        </div>
       </div>

       </div>
    );

}
export default forgetpassword;