import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

function Login() {
    function forgetpassword() {
        window.open("/forgetpassword", "_self")
    }



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

        let data = {
            "email": email,
            "password": Pass
        }

        postdata('http://musicbook.co.in/api/v1/auth/login', data, 'POST')
            .then(data => {
                if (data.status == true) {
                    console.log("successfully loged in")
                    localStorage.setItem("auth_token",data.token)
                    localStorage.setItem("user_id",data.data._id)
                    console.log(localStorage.getItem("auth_token"))
                    console.log(localStorage.getItem("user_id"))
                    window.open("/dashboard","_self")
                }
                else {
                   swal("incorrect credentials")

                }
            })

        console.log("hiiiiii",data)

    }


    return (

        <div className="login">

            <div className="left">
                {/* <div className="pgNo">01</div> */}
                <div className="leftHeading">Teach your audiance what they want to learn</div>
                {/* <div className="left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</div> */}
                <br />
                <br />
                <br />
                <br />
                <div className="dots">
                    <div className="dot-purple"></div>
                    <div className="dot-gray"></div>
                    <div className="dot-gray"></div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">LOGIN</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    <input type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="" id="" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                    <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="/forgetPassword">Forget password?</a></p>
                    <button className="loginWithEmail" onClick={LoginBtn}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="/register1">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default Login;