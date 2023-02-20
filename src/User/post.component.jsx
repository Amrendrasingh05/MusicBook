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




function Post() {

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
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("u_token")
            },
            body: JSON.stringify(data)
        });
        // console.log(JSON.stringify(data))
        return await response.json();
    }


    const [forceUpdate, setForceUpdate] = useState("")
    const [post, setPost] = useState([])
    useEffect(() => {
        getdata('https://musicbook.co.in/api/v1/post/home-data', 'GET')
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


        function Visible() {
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


        if (val.media[0]) {

            if (postType == "image") {
                return (

                    <div className="mt-5">
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
                                        <div style={{ cursor: "pointer" }}>{localStorage.getItem("user_id") == val.created_by._id ? <>&nbsp;&nbsp;&nbsp;⋮</> : <><img src={share} alt="" className="share-img" /></>}</div>
                                    </div>
                                </div>
                            </div>
                        </center>

                        <div className="comment-area" style={{ display: visible }}>

                            <div className="comments">
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                            </div>

                            <div className="display-flex">
                                <input type="text" placeholder="Type your comment.." className="comment-box" />
                                <button className="comment-btn primary-bg">✎</button>
                            </div>
                        </div>
                    </div>
                );
            }

            else if (postType == "video") {
                return (

                    <div className="mt-5">
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
                                        <div style={{ cursor: "pointer" }}>{localStorage.getItem("user_id") == val.created_by._id ? <>&nbsp;&nbsp;&nbsp;⋮</> : <><img src={share} alt="" className="share-img" /></>}</div>
                                    </div>
                                </div>
                            </div>
                        </center>

                        <div className="comment-area" style={{ display: visible }}>

                            <div className="comments">
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                                <div className="align">
                                    <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                    <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                                </div>
                            </div>

                            <div className="display-flex">
                                <input type="text" placeholder="Type your comment.." className="comment-box" />
                                <button className="comment-btn primary-bg">✎</button>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else {
            return (

                <div className="mt-5">
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
                                    <div style={{ cursor: "pointer" }}>{localStorage.getItem("user_id") == val.created_by._id ? <>&nbsp;&nbsp;&nbsp;⋮</> : <><img src={share} alt="" className="share-img" /></>}</div>
                                </div>
                            </div>
                        </div>
                    </center>

                    <div className="comment-area" style={{ display: visible }}>

                        <div className="comments">
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                            <div className="align">
                                <img src={profileImg} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                                <p className="text-small">Lorem ipsum  Eligendi ab nulla excepturi quidem.</p>
                            </div>
                        </div>

                        <div className="display-flex">
                            <input type="text" placeholder="Type your comment.." className="comment-box" />
                            <button className="comment-btn primary-bg">✎</button>
                        </div>
                    </div>
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