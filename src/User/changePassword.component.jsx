import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import swal from 'sweetalert'
function Verify() {


    async function postdata(url = '', data = {}, methods = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }


    const[Password , setPassword] = useState("")

    function LoginBtn() {

        let data = {
            "mobile_number": localStorage.getItem("mobile_num"),
            "password":Password
        }

        postdata('http://musicbook.co.in/api/v1/auth/change-password', data, 'POST')
            .then(data => {
                if (data.status == true && Password.length>1) {
                    
                    swal(data.message)
                   
                    window.open("/login","_self")
                }
                else {
                    console.log("incorrect")
                    swal("write correct password")
                }
            })

        console.log("hiiiiii",data)

    }
    return (

        <div className="forgetpassword">

<div className="left">
                {/* <div className="pgNo">01</div> */}
                <div className="leftHeading">Teach your audiance what they want to learn</div>
                {/* <div className="left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</div> */}
                <br />
                <br />
                <br />
                <br /><div className="dots">
                    <div className="dot-purple"></div>
                    <div className="dot-gray"></div>
                    <div className="dot-gray"></div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">CHANGE PASSWORD</h1>
                    {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
                    {/* <p>Your Password is: {localStorage.getItem("forget_Password")}</p> */}
                    <input type="text" name="" id="" placeholder="Enter New Password" onChange={(e) => setPassword(e.target.value)}/>
                    <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="">Forget password?</a></p>
                    <button className="loginWithEmail buttonFull" onClick={LoginBtn}>Submit</button>
                    <button className="loginWithMobile buttonFull" onClick={() => window.open("/mobile-login","_self")}>Back</button>
                    {/* <p className="card-text">Resend Password in <a href="">26 sec</a></p> */}
                </div>
            </div>
        </div>
    );

}
export default  Verify;