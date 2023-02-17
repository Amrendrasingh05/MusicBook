import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
// import profile from  '../images/Rectangle  83.png'
import profileImg from '../images/Rectangle 83.png'

import Img1 from '../images/Rectangle 108.png'
import Img2 from '../images/Rectangle 111.png'
import Post2 from "./post2.component";


import {useEffect} from 'react'
import { useState } from "react";

function Account() {
    

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

    const[name , setName]=useState("");
    const[email , setEmail]=useState("");
    const[image , setImage]=useState("");


    useEffect(() => {
        getdata('https://musicbook.co.in/api/v1/auth/get-user-details?user_id='+localStorage.getItem("user_id"), 'GET')
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




    
    return (

        <div>

            <Header />

            <div className="BasicStyle home">
                <div className="account">

                </div>

                <div className="home-right-mid">
                    <div className="display-flex" >
                        <div style={{ maxWidth: "60%" }}>
                        {/* <img src={profileImg} alt="" style={{ marginTop: "-10%" }} /> */}
                        <img src={image} alt="" style={{ marginTop: "-10%" }} className="round-img"/>
                            <div className="display-flex">
                            <h3>{name}</h3> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                            <button className="btn btn-outline-secondary"
                            style={{height:"30px",padding:"4px"}}
                            onClick={()=> window.open("/profile-update","_self")}>Edit ✎ </button> 
                            </div>
                            <p>{email}</p>
                            <div className="display-flex">
                                <button className="TopPlayer">Top Player</button>
                                <p className="display-flex">Profile Rattig &nbsp; <p className="text-warning"> 4.8</p></p>
                            </div>
                            <div className="below-topBtn">

                            </div>
                            <h5 className="text-secondary">ABOUT THE ARTIST</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis facere harum vel vitae molestias illum, pariatur necessitatibus minima omnis voluptate ab reiciendis dicta. Quas tempore odit soluta in, minima cupiditate.</p>
                            <div className="display-flex">
                                {/* {BtnArray.map(buttons)} */}
                                 <button className="btn btn-outline-secondary">Digital Visiting Card</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <button className="btn btn-outline-secondary">My Purchase</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <button className="btn btn-outline-secondary" onClick={() => window.open("/support","_self")}>Support & Help</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <button className="btn btn-outline-secondary" onClick={() => window.open("/privacy","_self")}>Privacy Policy</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </div>
                            <br />
                            <div className="display-flex">
                            <button className="btn btn-outline-secondary">Rating</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <button className="btn btn-outline-secondary" onClick={() => window.open("/aboutUs","_self")}>About</button>
                                
                            </div>
                            <br />
                            <br />
                            <button className="btn btn-danger" style={{marginLeft:"40%"}} onClick={()=> window.open("/login","_self")}>Log Out</button>
                        </div>

                        <div>
                            <br />
                            <div className="display-flex">
                                <div className="primary-color">Post</div> &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="">Album</div>
                            </div>
                            <br />
                            <div className="account-right">
                            <Post2 />
                            </div>
                            {/* <img src={Img1} alt="" />
                            <img src={Img2} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );

}
export default Account;