import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
// import profile from  '../images/Rectangle  83.png'
import profileImg from '../images/Rectangle 83.png'
import editPic from '../images/edit-pic.png'

import Img1 from '../images/Rectangle 108.png'
import Img2 from '../images/Rectangle 111.png'
import Post2 from "./post2.component";


import { useEffect } from 'react'
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        getdata('https://musicbook.co.in/api/v1/auth/get-user-details?user_id=' + localStorage.getItem("user_id"), 'GET')
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
                    {/* for bg img */}
                </div>

                <div className="home-right-mid">
                    <div className="display-flex" >
                        <div style={{ maxWidth: "60%" }} className="display-flex">
                            {/* <img src={profileImg} alt="" style={{ marginTop: "-10%" }} /> */}
                            <div className="edit-pic">
                            <img src={editPic} className="edit-pic-img" alt="" />
                            <img src={image} alt="" style={{ marginTop: "-20%" }} className="round-img" />
                            </div>
                            <p className="mt-5 m-3 btn btn-secondary">{email}..✎</p>
                        </div>
                    </div>
                </div>

                <div className="profile-edit-card">
                    <div style={{maxWidth:"50%",width:"50%"}}>
                        <input type="text" placeholder="✎ Name" /> <br />
                        <input type="text" placeholder="✉ Email" /><br />
                        <input type="text" placeholder="✆ Mobile Number" /><br />
                        <input type="text" placeholder="📌 Address" /><br />
                        <div className="justify-space" style={{width:"90%"}}>
                            <input type="text" placeholder=" City " style={{width:"45%"}}/><br />
                            <input type="text" placeholder=" State " style={{width:"45%"}}/>
                        </div>
                    </div>
                    <div style={{maxWidth:"50%",width:"50%"}}>
                        <input type="text" placeholder="* Pincode" /><br />
                        <input type="text" placeholder="ꗃ Old Password" /><br />
                        <input type="text" placeholder="ꗃ New Password" /><br />
                        <input type="text" placeholder="ꗃ Retype Password" /><br />
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>




        </div>
    );

}
export default Account;