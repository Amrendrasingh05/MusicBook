import { useState, useEffect, useReducer } from "react";
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



function Post() {

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

        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5NDE0NDA1NzkzYzA4MWZlZmMxMTAiLCJpYXQiOjE2Nzc0OTkzMTksImV4cCI6MTY4MjY4MzMxOX0.ccSGIF8fN2xfCEm0QXrz8JgQe40P-4kyjNQe3zXvXWU");
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify(data);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://musicbook.co.in/api/v1/post/comment-post/63fc92a3a9f0a0f2319286ef", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }


    const [forceUpdate, setForceUpdate] = useState("")
    const [post, setPost] = useState([])
    useEffect(() => {
        getdata('https://musicbook.co.in/api/v1/post/home-data?offset=0&type=', 'GET')
            .then(data => {
                if (data.status == true) {
                    setPost(data.data)
                    console.log("post data =", data)
                }
                else {
                    console("incorrect")

                }
            })

        // console.log("like called")
    }, [forceUpdate])

    const [visible, setVisible] = useState("none")
    const [like, setLike] = useState("white")
    const [likeC, setLikeC] = useState(0)



    function Ncards(val) {

        // console.log(val.media[0])
        let imgUrl = ""

        if (val.media[0]) {
            imgUrl = val.media[0].file
            // console.log(imgUrl)
        }

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
                        // if (like == "white")
                        //     setLike("red")
                        // setLikeC(1)
                        setPost(post)
                        // window.open("/dashboard","_self")
                    }
                    else {
                        setLike("white")
                        setLikeC(0)

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


        if (val.media[0]) {

            if (postType == "image") {

                return (

                    <div className="mt-5 post">


                        <center className="post-img-bg">
                            <img src={imgUrl} alt="" className="mt-8" />
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
                                            <p className="like-comment-bar-email">{val.created_by.email}</p>
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

                    </div>
                );
            }

            else if (postType == "video") {
                return (


                    <div className="mt-5 post">
                        <center className="post-img-bg">
                            {/* <img src={imgUrl} alt="" className="mt-8" /> */}
                            <video controls autoplay src={imgUrl}></video>

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
                                            <p className="like-comment-bar-email">{val.created_by.email}</p>
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

                    </div>
                );
            }
            else if (postType == "audio") {
                return (


                    <div className="mt-5 post">
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
                                            <p className="like-comment-bar-email">{val.created_by.email}</p>
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

                    </div>
                );
            }
        }
        else {
            return (

                <div className="mt-5 post">
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
                                        <p className="like-comment-bar-email">{val.created_by.email}</p>
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

                </div>
            );
        }
    }




    return (
        // <div className="mt-5">
        //     <img src={leftImg1} alt="" className="mt-8" />
        //     <center>
        //         <div className="like-comment-bar justify-arrond">
        //             <img src={profileImg} alt="" />
        //             <p>Amrendra Singh</p>
        //             <FontAwesomeIcon icon="fa fa-heart" />
        //             <h5 onClick={Islike} style={{ cursor: "pointer", color:like }}>❤</h5>
        //             <h5 onClick={Visible} style={{ cursor: "pointer" }}>💬</h5>
        //         </div>
        //     </center>

        //     <div className="comment-area" style={{ display: visible }}>
        //         <div className="display-flex">
        //             <input type="text" placeholder="Type your comment.." className="comment-box" />
        //             <button className="comment-btn primary-bg">send</button>
        //         </div>
        //         <div className="comments">
        //             <div className="align">
        //                 <img src={profileImg} alt="" style={{ height: "40px", width: "40px" }} />
        //                 <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
        //             </div>
        //             <div className="align">
        //                 <img src={profileImg} alt="" style={{ height: "40px", width: "40px" }} />
        //                 <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            {/* {post.slice(0).reverse().map(Ncards)} */}
            {post.map(Ncards)}
        </>
    );

}
export default Post;