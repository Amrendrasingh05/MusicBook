import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
import leftImg1 from '../images/Rectangle 36.png'
import leftImg2 from '../images/Rectangle 37.png'
import profileImg from '../images/Rectangle 83.png'
import { useState, useEffect } from "react";
import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'
import swal from "sweetalert";
import Post from "./post.component";
import Popup from './songsPopup.component'


function Forgetpassword() {

    async function getdata(url = '', methods = '') {
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("auth_token")
            },
        });
        return response.json();
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        getdata('http://musicbook.co.in/api/v1/auth/get-user-details?user_id=' + localStorage.getItem("user_id"), 'GET')
            .then(data => {
                if (data.status == true) {
                    console.log(data)
                    setName(data.data.full_name)
                    setEmail(data.data.email)
                    setImage(data.data.pic)
                }
                else {
                    console("incorrect")

                }
            })
    }, [])


    const [album, setAlbum] = useState([])
    useEffect(() => {
        getdata('http://musicbook.co.in/api/v1/album/get?offset=0&user_id=6346f880c5f4ce2d6a77bc39', 'GET')
            .then(data => {
                if (data.status == true) {
                    setAlbum(data.data)
                    console.log("album = ", data)
                }
                else {
                    console("incorrect")

                }
            })
    }, [])


    


    const[show , setShow] = useState(false)
    const[song, setSong] = useState("")
    function Albums(val) {
        function Click(){
            setShow(true)
            setSong(val)
        }
        
        return (

            <>
                <img src={val.cover_photo} onClick={Click} style={{cursor:"pointer"}} alt="" />
            </>
        );
    }







    return (

        <div>
          <Popup show={show} val={song} onClose={() => setShow(false)}/>

            <Header />

            <div className="BasicStyle home">
                <div className="display-flex">

                    <div className="home-left">
                        <span>HELLO,</span>
                        <h1>{name}</h1>
                        <Post />
                    </div>

                    <div className="home-right scroller-100vh">

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
                                </div> <div className="home-right-mid-blocks">
                                    <h6>How to create Music Notes</h6>
                                    <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                                    <span>12:30 Min Remaining</span>
                                </div>
                            </div>
                        </div>
                        <div className="home-right-bottom">
                            <br />
                            <h5>Recent Albums</h5>
                            {/* <img src={albumImg1} alt="" />
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
                            <img src={albumImg2} alt="" /> */}
                            {album.map(Albums)}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );

}
export default Forgetpassword;