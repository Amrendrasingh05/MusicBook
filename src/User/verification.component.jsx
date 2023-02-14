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


    const[otp , setOtp] = useState("")

    function LoginBtn() {

        let data = {
            "mobile_number": localStorage.getItem("mobile_num"),
            "otp":otp
        }

        postdata('http://musicbook.co.in/api/v1/auth/verify-login', data, 'POST')
            .then(data => {
                if (data.status == true) {
                    
                    swal(data.message)
                    localStorage.setItem("auth_token",data.token)
                    localStorage.setItem("user_id",data.data._id)
                    window.open("/dashboard","_self")
                }
                else {
                    console.log("incorrect")
                    swal(data.message)
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
                    <h1 className="card-title">VERIFICATION</h1>
                    {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
                    <p>Your OTP is: {localStorage.getItem("login_otp")}</p>
                    <input type="number" name="" id="" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)}/>
                    <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="">Forget password?</a></p>
                    <button className="loginWithEmail buttonFull" onClick={LoginBtn}>Submit</button>
                    <button className="loginWithMobile buttonFull" onClick={() => window.open("/mobile-login","_self")}>Back</button>
                    <p className="card-text">Resend OTP in <a href="">26 sec</a></p>
                </div>
            </div>
        </div>
    );

}
export default  Verify;