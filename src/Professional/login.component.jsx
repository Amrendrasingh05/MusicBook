import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import eye from "../images/eye-solid.svg"
function Login() {
    function forgetpassword(){
        window.open("/forgetpassword","_self")
    }

    const[eyeV, setEyeV]=useState("password")
    function visible(){
        if(eyeV == "password")
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
                    <input type="email inpt" name="" id="" placeholder="Email"/>
                    <input className="eye-pass" type={eyeV} name="" id="" placeholder="Password" />
                    <img src={eye} className="eye" onClick={visible} style={{cursor:"pointer",marginTop:"2%"}} alt="" />
                    
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <div>
                            <input type="checkbox" name="" id="" style={{ height: "15px", marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                        <div style={{ marginLeft: "-95px" }}>
                            <p className="card-text">Remember me &nbsp;&nbsp; <a href="/professional-forgetPassword">forget Password </a></p>
                        </div>
                    </div>
                    <button className="loginWithEmail" onClick={() => window.open("/professional-home","_self")}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="/professional-register1" onClick={() => window.open("/professional-register1","_self")}>Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default Login;