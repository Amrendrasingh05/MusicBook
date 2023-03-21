import leftImg1 from '../images/Rectangle 36.png'
import Header from './header.component'
import {useParams} from "react-router-dom";
import { useState,useEffect} from 'react';    
function Share() {
    let postId = useParams();
    console.log(postId.id)

    async function getdata(url = '', methods = '') {
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json'
                // "authorization": localStorage.getItem("auth_token")
            },
        });
        return response.json();
    }


    const [post, setPost] = useState([])

    useEffect(() => {

        getdata(`https://musicbook.co.in/api/v1/post/get-post/${postId.id}`, 'GET')
            .then(data => {
                if (data.status == true) {
                    setPost(data.data)
                    // setLoading("")
                    console.log("post data =", data)
                }
                else {
                    console("incorrect")

                }
            })
    }, [])

    return (
        <div className="display-flex">
             <Header />
            <div className="share-screen" style={{paddingLeft:"10%"}}>
                <center className="mt-5 post">
                    {/* <singlePicPopup show={ShowSinglePic} url={Index} onClose={() => setShowSinglePic(false)} /> */}

                    <center className="post-img-bg">
                        {/* <div className='carouse-container'>
                            <div className='carousel' style={{ transform: postId == val._id ? `translate(${slide}px)` : "translate(0px)" }}>
                                {mediaArr.map((e) => (<img src={e} onClick={() => { setShowSinglePic(true); setIndex(e); console.log(Index, ShowSinglePic) }} />))}
                            </div>
                            {mediaArr.length > 1 ? <MoreThanOne /> : <></>}
                        </div> */}

                        <img src={leftImg1} alt="" />
                    </center>
                    <center>
                        <div className="like-comment-bar">
                            <p className="like-comment-bar-caption">heloo this is image</p>
                            <p className="like-comment-bar-tag">#abc #aa</p>
                            <div className="justify-space">
                                <div className="display-flex userName">
                                    <img src={leftImg1} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <p>
                                        <p className="like-comment-bar-name">Amrendra Singh</p>
                                        <p className="like-comment-bar-email">amrendras05@gmail.com</p>
                                    </p>

                                </div>
                                <div className="display-flex">
                                    <div className="display-flex">
                                        <h5 className="heart" style={{ cursor: "pointer", color: "red" }}>❤</h5>
                                        <p className='text-white'>1.2k</p>
                                    </div> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className='text-white' style={{ cursor: "pointer" }}>
                                        Share
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>

                </center>
            </div>
            <div className="share-screen-bg">
                <h3 className='text-white mt-5' style={{marginLeft:"10%"}}>Comments</h3><hr className='text-white' style={{marginLeft:"10%"}}/>
                <div className="comment-area2">

                    <div className="comments2">
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates neque ipsum consectetur ex culpa natus corporis at inventore. Delectus reiciendis velit quis quia. Porro illo enim optio rem perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="align">
                            <img src={leftImg1} alt="" style={{ height: "40px", width: "40px", marginRight: "2%", marginLeft: "2%" }} />
                            <p className="text-small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="display-flex">
                        <input type="text" placeholder="Type your comment.." className="comment-box2" />
                        <button className="comment-btn2 primary-bg">✎</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Share;