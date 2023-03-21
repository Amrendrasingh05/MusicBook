import { useState, useEffect, useRef, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
import leftImg1 from '../images/Rectangle 36.png'
import leftImg2 from '../images/Rectangle 37.png'
import profileImg from '../images/Rectangle 83.png'
import share from '../images/share.png'
import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'
import swal from "sweetalert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from './threeDotPopup.component'
import singlePicPopup from './singlePic'
import { RWebShare } from "react-web-share";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactPlayer from 'react-player'

function Post(val) {

    // const [loading,setLoading] = useState("Loading...")
    const [CommentText, setCommentText] = useState("")
    const [show, setShow] = useState(false)
    const [postId, setpostId] = useState("")

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



    async function postdata(url = '', data = {}, methods = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: methods,
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("auth_token")
            },
            body: JSON.stringify(data)
        });
        // console.log(JSON.stringify(data))
        return await response.json();
    }


    const [forceUpdate, setForceUpdate] = useState("")
    const [post, setPost] = useState([])
    // const [page, setPage]= useState(0)

    useEffect(() => {

        getdata(`https://musicbook.co.in/api/v1/post/home-data?offset=${val.val}&type=`, 'GET')
            .then(data => {
                if (data.status == true) {
                    setPost((prev) => [...prev, ...data.data])
                    // setLoading("")
                    console.log("post data =", data)
                }
                else {
                    console("incorrect")

                }
            })
    }, [val])


    const [visible, setVisible] = useState("none")
    const [like, setLike] = useState("white")
    const [likeC, setLikeC] = useState(0)


    const [slide, setSlide] = useState(0)
    const [slideNo, setSlideNo] = useState(1)
    const [ShowSinglePic, setShowSinglePic] = useState(false)
    const [Index, setIndex] = useState(0)

    // const [playing, setPlaying] = useState(false);
    // const videoRef = useRef(null);
    // const [postId, setpostId] = useState(1)

    // const handlePlayer = () => {
    //     if (playing) {
    //       videoRef.current.pause();
    //       setPlaying(false);
    //       swal("playing false")
    //     } else {
    //       videoRef.current.play();
    //       setPlaying(true);
    //       swal("playing true")
    //     }
    //   };


    function Ncards(val) {
        // console.log(val.media[0])
        let imgUrl = ""
        const mediaArr = [];
        for (let i = 0; i < val.media.length; i++) {
            mediaArr.push(val.media[i].file);
        }

        


        function Left() {
            setpostId(val._id)
            if (slideNo > 1) {
                setSlide((prev) => prev + 380)
                setSlideNo((prev) => prev - 1)
                // console.log("slide", slide)
            }
            else {
                return
            }

        }
        function Right() {
            setpostId(val._id)
            if (slideNo < mediaArr.length) {
                setSlide((prev) => prev - 380)
                setSlideNo((prev) => prev + 1)
                // console.log("val id", val._id)
            }
            else {
                return
            }

        }

        function MoreThanOne() {
            return (
                <>

                    <div className="LeftRightBtns">
                        <button className='arrow-left' onClick={Left}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg></button>
                        <button className='arrow-right' onClick={Right}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></button>
                    </div>

                    <center className="current-slide">{slideNo}/{mediaArr.length}</center>

                </>
            )
        }

        if (val.media[0]) {
            imgUrl = val.media[0].file
            //   console.log(val.media.length)
        }

        // if (val.media[1]) {
        //     // imgUrl = val.media[0].file
        //     mediaArr =val.media
        //     console.log("mediaArr = ",mediaArr.map())
        // }


        let postType = ""

        if (val.media[0]) {
            postType = val.media[0].type
            // console.log(imgUrl)
        }

        let comments = val.comments

        function comment(cmmnt) {
            return (
                <div className="align">
                    <img src={cmmnt.user_id.pic} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                    <p className="text-small">{cmmnt.comment}</p>
                </div>

            )
        }

        function Visible() {
            setpostId(val._id)
            if (visible == "block")
                setVisible("none")
            else
                setVisible("block")
        }

        function Islike() {
            getdata('https://musicbook.co.in/api/v1/post/like-post/' + val._id, 'POST')
                .then(data => {
                    if (data.status == true) {
                        post.forEach((e, i) => {
                            if (e._id == val._id) {
                                e.is_like = true
                            }
                            else {
                                e.is_like = false
                            }
                        })
                        setPost(post)
                        swal(data.message)
                    }
                    else {
                        swal(data.message)

                    }
                })
            setForceUpdate();
        }


        function UploadComment() {
            let data = {
                "comment": CommentText
            }
            postdata(`https://musicbook.co.in/api/v1/post/comment-post/${val._id}`, data, 'POST')
                .then(data => {
                    if (data.status == true) {
                        swal("Successfully commented")

                    } else {
                        console.log("incorrect")
                        swal("data.message");

                    }
                })
            // swal(CommentText)
        }


        
        function play(){
            document.getElementById("myVideo").play();
            alert("hii2")
        }
        function pause(){
            document.getElementById("myVideo").pause()
        }




        if (val.media[0]) {

            if (postType == "image") {

                return (

                    <center className="mt-5 post">
                        <singlePicPopup show={ShowSinglePic} url={Index} onClose={() => setShowSinglePic(false)} />

                        <center className="post-img-bg">
                            <div className='carouse-container'>
                                <div className='carousel' style={{ transform: postId == val._id ? `translate(${slide}px)` : "translate(0px)" }}>
                                    {mediaArr.map((e) => (<img src={e} onClick={() => { setShowSinglePic(true); setIndex(e); console.log(Index, ShowSinglePic) }} />))}
                                </div>
                                {mediaArr.length > 1 ? <MoreThanOne /> : <></>}
                            </div>

                            {/* <img src={imgUrl} alt="" /> */}
                        </center>
                        <center>
                            <div className="like-comment-bar">
                                <p className="like-comment-bar-caption">{val.captions}</p>
                                <p className="like-comment-bar-tag">{val.tags + ""}</p>
                                <div className="justify-space">
                                    <div className="display-flex userName">
                                        <img src={val.created_by.pic} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <p>
                                            <p className="like-comment-bar-name">{val.created_by.full_name}</p>
                                            {/* <p className="like-comment-bar-email">{val.created_by.email}</p> */}
                                        </p>

                                    </div>
                                    <div className="display-flex">
                                        <div className="display-flex">
                                            <h5 className="heart" onClick={Islike} style={{ cursor: "pointer", color: val.is_like ? "red" : "white" }}>❤</h5>
                                            <p>{val.likes_count}</p>
                                        </div> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="display-flex">
                                            <h5 onClick={Visible} style={{ cursor: "pointer" }}>💬</h5>
                                            <p>{val.comment_counts}</p>
                                        </div>&nbsp;
                                        <div style={{ cursor: "pointer" }}>
                                            {localStorage.getItem("user_id") == val.created_by._id ? <div onClick={() => { setShow(true); setpostId(val._id) }}>&nbsp;&nbsp;&nbsp;⋮</div> : <>
                                                <RWebShare
                                                    data={{
                                                        text: "MusicBook",
                                                        url: "`https://musicbook.co.in/share/" + val._id,
                                                        title: "MusicBook",
                                                    }}
                                                    onClick={() => console.log("shared successfully!")}
                                                >
                                                    {/* <button> */}
                                                    <img src={share} alt="" className="share-img" />
                                                    {/* </button> */}
                                                </RWebShare>
                                            </>}</div>
                                    </div>
                                </div>
                            </div>
                        </center>
                        {postId == val._id ? <><Popup show={show} onClose={() => setShow(false)} val={val} /></> : <></>}

                        {postId == val._id ?
                            <div className="comment-area" style={{ display: visible }}>

                                <div className="comments">
                                    {comments.map(comment)}
                                </div>

                                <div className="display-flex">
                                    <input type="text" placeholder="Type your comment.." className="comment-box"
                                        onChange={(e) => setCommentText(e.target.value)} />
                                    <button className="comment-btn primary-bg" onClick={UploadComment}>✎</button>
                                </div>
                            </div>
                            : <></>}

                    </center>
                );
            }

            else if (postType == "video") {
                return (


                    <center className="mt-5 post">
                        <center className="post-img-bg">
                            {/* <img src={imgUrl} alt="" className="mt-8" /> */}
                            {/* <video controls autoplay src={imgUrl}></video> */}
                            {/* <video id="myVideo">
                                <source  src={imgUrl} />
                            </video>
                            <button onClick={play}>play</button> &nbsp;
                            <button onClick={pause}>pause</button> */}
                            {/* {postId == val._id ?<ReactPlayer className="video" url={imgUrl} controls playing={false}/>:<ReactPlayer className="video" url={imgUrl} controls playing={false} />} */}
                            <ReactPlayer className="video" url={imgUrl} controls playing={false}/>

                        </center>
                        <center>
                            <div className="like-comment-bar">
                                <p className="like-comment-bar-caption">{val.captions}</p>
                                <p className="like-comment-bar-tag">{val.tags + ""}</p>
                                <div className="justify-space">
                                    <div className="display-flex userName">
                                        <img src={val.created_by.pic} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <p>
                                            <p className="like-comment-bar-name">{val.created_by.full_name}</p>
                                            {/* <p className="like-comment-bar-email">{val.created_by.email}</p> */}
                                        </p>
                                    </div>
                                    <div className="display-flex">
                                        <div className="display-flex">
                                            <h5 className="heart" onClick={Islike} style={{ cursor: "pointer", color: val.is_like ? "red" : "white" }}>❤</h5>
                                            <p>{val.likes_count}</p>
                                        </div> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="display-flex">
                                            <h5 onClick={Visible} style={{ cursor: "pointer" }}>💬</h5>
                                            <p>{val.comment_counts}</p>
                                        </div>&nbsp;
                                        <div style={{ cursor: "pointer" }}>
                                            {localStorage.getItem("user_id") == val.created_by._id ? <div onClick={() => { setShow(true); setpostId(val._id) }}>&nbsp;&nbsp;&nbsp;⋮</div> : <>
                                                <img src={share} alt="" className="share-img" /></>}</div>
                                    </div>
                                </div>
                            </div>
                        </center>

                        {postId == val._id ? <><Popup show={show} onClose={() => setShow(false)} val={val} /></> : <></>}

                        {postId == val._id ?
                            <div className="comment-area" style={{ display: visible }}>

                                <div className="comments">
                                    {comments.map(comment)}
                                </div>

                                <div className="display-flex">
                                    <input type="text" placeholder="Type your comment.." className="comment-box"
                                        onChange={(e) => setCommentText(e.target.value)} />
                                    <button className="comment-btn primary-bg" onClick={UploadComment}>✎</button>
                                </div>
                            </div>
                            : <></>}

                    </center>
                );
            }
            else if (postType == "audio") {
                return (


                    <center className="mt-5 post">
                        <center className="post-img-bg">
                            <center className="music-wave-box">
                                <div className="display-flex waves">
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                    <div className="music-wave"></div>
                                </div>

                                {/* {postId == val._id ? <audio controls Play src={imgUrl}></audio> : <audio controls Pause src={imgUrl}></audio>} */}
                                <audio controls autoplay src={imgUrl}></audio>
                            </center>

                        </center>
                        <center>
                            <div className="like-comment-bar">
                                <p className="like-comment-bar-caption">{val.captions}</p>
                                <p className="like-comment-bar-tag">{val.tags + ""}</p>
                                <div className="justify-space">
                                    <div className="display-flex userName">
                                        <img src={val.created_by.pic} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <p>
                                            <p className="like-comment-bar-name">{val.created_by.full_name}</p>
                                            {/* <p className="like-comment-bar-email">{val.created_by.email}</p> */}
                                        </p>
                                    </div>
                                    <div className="display-flex">
                                        <div className="display-flex">
                                            <h5 className="heart" onClick={Islike} style={{ cursor: "pointer", color: val.is_like ? "red" : "white" }}>❤</h5>
                                            <p>{val.likes_count}</p>
                                        </div> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="display-flex">
                                            <h5 onClick={Visible} style={{ cursor: "pointer" }}>💬</h5>
                                            <p>{val.comment_counts}</p>
                                        </div>&nbsp;
                                        <div style={{ cursor: "pointer" }}>
                                            {localStorage.getItem("user_id") == val.created_by._id ? <div onClick={() => { setShow(true); setpostId(val._id) }}>&nbsp;&nbsp;&nbsp;⋮</div> : <>
                                                <img src={share} alt="" className="share-img" /></>}</div>
                                    </div>
                                </div>
                            </div>
                        </center>

                        {postId == val._id ? <><Popup show={show} onClose={() => setShow(false)} val={val} /></> : <></>}

                        {postId == val._id ?
                            <div className="comment-area" style={{ display: visible }}>

                                <div className="comments">
                                    {comments.map(comment)}
                                </div>

                                <div className="display-flex">
                                    <input type="text" placeholder="Type your comment.." className="comment-box"
                                        onChange={(e) => setCommentText(e.target.value)} />
                                    <button className="comment-btn primary-bg" onClick={UploadComment}>✎</button>
                                </div>
                            </div>
                            : <></>}

                    </center>
                );
            }
        }
        else {
            return (

                <center className="mt-5 post">
                    <center className="post-img-bg2">
                        {/* <img src={imgUrl} alt="" className="mt-8" /> */}
                        {/* <video controls autoplay src={imgUrl}></video> */}
                        <div>{val.captions}</div>
                    </center>
                    <center>
                        <div className="like-comment-bar">
                            <p className="like-comment-bar-tag">{val.tags + ""}</p>
                            <div className="justify-space">
                                <div className="display-flex userName">
                                    <img src={val.created_by.pic} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <p>
                                        <p className="like-comment-bar-name">{val.created_by.full_name}</p>
                                        {/* <p className="like-comment-bar-email">{val.created_by.email}</p> */}
                                    </p>
                                </div>
                                <div className="display-flex">
                                    <div className="display-flex">
                                        <h5 className="heart" onClick={Islike} style={{ cursor: "pointer", color: val.is_like ? "red" : "white" }}>❤</h5>
                                        <p>{val.likes_count}</p>
                                    </div> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="display-flex">
                                        <h5 onClick={Visible} style={{ cursor: "pointer" }}>💬</h5>
                                        <p>{val.comment_counts}</p>
                                    </div>&nbsp;
                                    <div style={{ cursor: "pointer" }}>{localStorage.getItem("user_id") == val.created_by._id ? <div onClick={() => { setShow(true); setpostId(val._id) }}>&nbsp;&nbsp;&nbsp;⋮</div> : <><img src={share} alt="" className="share-img" /></>}</div>
                                </div>
                            </div>
                        </div>
                    </center>

                    {postId == val._id ? <><Popup show={show} onClose={() => setShow(false)} val={val} /></> : <></>}

                    {postId == val._id ?
                        <div className="comment-area" style={{ display: visible }}>

                            <div className="comments">
                                {comments.map(comment)}
                            </div>

                            <div className="display-flex">
                                <input type="text" placeholder="Type your comment.." className="comment-box"
                                    onChange={(e) => setCommentText(e.target.value)} />
                                <button className="comment-btn primary-bg" onClick={UploadComment}>✎</button>
                            </div>
                        </div>
                        : <></>}

                </center>
            );
        }
    }




    return (
        <>

            {post.map(Ncards)}
            <center>
                <div className="display-flex">
                    <div className="ring"></div>
                    <div>Loading..</div>
                </div>
            </center>

        </>
    );

}
export default Post;