import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component'
import Webcam from "./webcam.component";
import Header from './header.component'
import leftImg1 from '../images/Rectangle 36.png'
import leftImg2 from '../images/Rectangle 37.png'
import profileImg from '../images/Rectangle 83.png'
import { useState, useEffect, useReducer,useRef } from "react";
import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'
import swal from "sweetalert";
import Post from "./post.component";
import Popup from './songsPopup.component'
import Mobileheader from "./mobileHeader";
import Createpost from "./createPostMobile";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";

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

    const [forceUpdate, setForceUpdate] = useReducer(x => x + 1, 0)

    useEffect(() => {
        getdata('https://musicbook.co.in/api/v1/auth/get-user-details?user_id=' + localStorage.getItem("user_id"), 'GET')
            .then(data => {
                if (data.status == true) {
                    // console.log(data)
                    setName(data.data.full_name)
                    setEmail(data.data.email)
                    setImage(data.data.pic)
                }
                else {
                    console("incorrect")

                }
            })
    }, [forceUpdate])


    const [album, setAlbum] = useState([])
    useEffect(() => {
        getdata('https://musicbook.co.in/api/v1/album/get?offset=0&user_id=6346f880c5f4ce2d6a77bc39', 'GET')
            .then(data => {
                if (data.status == true) {
                    setAlbum(data.data)
                    // console.log("album = ", data)
                }
                else {
                    console("incorrect")

                }
            })
    }, [])





    const [show, setShow] = useState(false)
    const [song, setSong] = useState("")
    function Albums(val) {
        function Click() {
            setShow(true)
            setSong(val)
        }

        // console.log("val2=",val)

        return (

            <>
                <img src={val.cover_photo} onClick={Click} style={{ cursor: "pointer" }} alt="" />
            </>
        );
    }



    const [caption, setCaption] = useState("")
    const [file, setFile] = useState([])
    // const [ThumbnailFile, setThumbnailFile] = useState([])
    // const [enableDisable, setenableDisable] = useState(true)
    const [filetype, setFiletype] = useState("")
    const onImageChange = (e) => {
        setFile(e.target.files);
        setFiletype("image")
        // swal(filetype)
    };
    const onImageChange2 = (e) => {
        setFile(e.target.files);
        setFiletype("video")
        // setenableDisable(false)
        // swal(filetype)
    };
    
    const onImageChange3 = (e) => {
        setFile(e.target.files);
        setFiletype("audio")
        // swal(filetype)
    };

    const [uploadingPercent, setUploadingPercent] = useState(0)
    const [visibleProgress, setVisibleProgress] = useState("0%")
    function Upload() {

        if (filetype == 'video') {
           

                let formData = new FormData();
                formData.append('media', file[0]);
                formData.append('caption', caption)
                formData.append('tags', "post,video")
                formData.append('user_id', localStorage.getItem("user_id"))
                formData.append('type', filetype)
                formData.append('upload_from', 'web') //testing thumbnail in video


                setVisibleProgress("100%")

                axios.post('https://musicbook.co.in/api/v1/post/create', formData, {
                    headers: { "authorization": localStorage.getItem("auth_token") },
                    onUploadProgress: (data) => {
                        setUploadingPercent(Math.round((data.loaded / data.total) * 100))
                    }
                }).then((sucess) => {
                    swal("sucess")
                    window.open("/dashboard", "_self")
                }).catch((erorr) => {
                    swal("error")
                    setVisibleProgress("0")
                })


           
        }
        else {

            let formData = new FormData();
            formData.append('media', file[0]);
            formData.append('caption', caption)
            formData.append('tags', "post,video")
            formData.append('user_id', localStorage.getItem("user_id"))
            formData.append('type', filetype)
            // formData.append('reel3', ThumbnailFile[0]) //testing thumbnail in video


            setVisibleProgress("100%")

            axios.post('https://musicbook.co.in/api/v1/post/create', formData, {
                headers: { "authorization": localStorage.getItem("auth_token") },
                onUploadProgress: (data) => {
                    setUploadingPercent(Math.round((data.loaded / data.total) * 100))
                }
            }).then((sucess) => {
                swal("sucess")
                window.open("/dashboard", "_self")
            }).catch((erorr) => {
                swal("error")
                setVisibleProgress("0")
            })


        }


        // let response = await fetch('https://musicbook.co.in/api/v1/post/create', {
        //     method: 'POST',
        //     headers: { "authorization": localStorage.getItem("auth_token") },
        //     body: formData
        // });
        // let result = await response.json();
        // swal(filetype + " of " + result.message);
        // setForceUpdate()
        // window.open("/dashboard", "_self")
    }
    
    const [e , setBottom]= useState("")
    const [ScrollerBttom,setScrollerBttom]=useState(false)
    const [page, setPage]= useState(0)
    function ReachBottom(e){
        
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
        setScrollerBttom(bottom)
        setPage((prev) => prev + 10)
        console.log( bottom,"reach Bottom",page)
     }
    }
    return (

        <div>
            <Popup show={show} val={song} onClose={() => setShow(false)} />
            {/* <Webcam /> */}
            <Header />
            <Mobileheader />
            <Createpost />

            <div className="BasicStyle home">
                {/* <Slider/> */}
                <div className="home-df display-flex">

                    <div className="home-left" onScroll={(e) => {setBottom(e.target.value)}, ReachBottom}>
                        <span>Hello,</span>
                        <h1>{name}</h1>
                        {/* <InfiniteScroll> */}
                        <Post val={page} />
                        {/* </InfiniteScroll> */}
                    </div>

                    <div className="home-right2 scroller-100vh">

                        <div className="home-right-top">
                            <h6>Create Post</h6>
                            <p>Description</p>
                            <input type="text" onChange={(e) => setCaption(e.target.value)} />
                            <div className="display-flex">
                                <div class="upload-btn-wrapper">
                                    <button class="btn">Image</button>
                                    <input type="file" name="myfile" onChange={onImageChange} />
                                </div>
                                <div class="upload-btn-wrapper">
                                    <button class="btn">Video</button>
                                    <input type="file" name="myfile" onChange={onImageChange2} />
                                </div>
                               
                                <div class="upload-btn-wrapper">
                                    <button class="btn">Audio</button>
                                    <input type="file" name="myfile" onChange={onImageChange3} />
                                </div>
                                <button className="btn btn-outline-primary">Camera</button>
                                <button className="btn btn-outline-primary">Live</button>
                                <button className="btn btn-outline-primary" onClick={Upload}>Upload</button>
                            </div>
                            <div className="progress" style={{ opacity: visibleProgress }}>
                                <div className="progress-bar" role="progressbar" style={{ width: `${uploadingPercent}%` }} aria-valuenow={uploadingPercent} aria-valuemin="0" aria-valuemax="100">{uploadingPercent}%</div>
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