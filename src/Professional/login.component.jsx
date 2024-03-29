import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import eye from "../images/eye-solid.svg"
function Login() {
    const[loader, setLoader] = useState(false)


    const [email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    // let abx="kk";
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


    function LoginBtn() {

        if (email == "" || Pass == "") {
            swal("Please Enter Correct Credentials");
            return;
        }
        setLoader(true);

        let data = {
            "email": email,
            "password": Pass,
            "user_type":"professional"
        }

        postdata('https://musicbook.co.in/api/v1/auth/login', data, 'POST')
            .then(data => {
                if (data.status == true) {
                    setLoader(false);
                    console.log("successfully loged in")
                    localStorage.setItem("auth_token", data.token)
                    localStorage.setItem("user_id", data.data._id)
                    console.log(localStorage.getItem("auth_token"))
                    console.log(localStorage.getItem("user_id"))
                    window.open("/professional-home", "_self")
                }
                else {
                    swal("incorrect credentials")

                }
            })

        console.log("hiiiiii", data)

    }

    const [eyeV, setEyeV] = useState("password")
    function visible() {
        if (eyeV == "password")
            setEyeV("text")
        else
            setEyeV("password")
    }


    return (

        <div className="professional-login">

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

            <div className="card professional-card">
                <div className="card-body">
                    <h1 className="professional-card-title">LOGIN</h1>
                    {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
                    <input type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="eye-pass" type={eyeV} name="" id="" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                    <img src={eye} className="eye" onClick={visible} style={{ cursor: "pointer" }} alt="" />
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div className="check-box-remember">
                            <input type="checkbox" name="" id="" style={{ height: "15px", marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                        <div className="remember-me" >
                            <p className="card-text">Remember me &nbsp;&nbsp; <a href="/forgetPassword">forget Password </a></p>
                        </div>
                    </div>
                    <center>
                   {loader?<div className="ring2"></div>:<></>}
                   </center>
                    {/* <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="/forgetPassword">Forget password?</a></p> */}
                    <button className="loginWithEmail" onClick={LoginBtn}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="/register1">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default Login;