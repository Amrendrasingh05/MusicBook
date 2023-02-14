import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import eye from "../images/eye-solid.svg"

function Register() {

    const [eyeV, setEyeV] = useState("password")
    function visible() {
        if (eyeV == "password")
            setEyeV("text")
        else
            setEyeV("password")
    }
    const [eyeV2, setEyeV2] = useState("password")
    function visible2() {
        if (eyeV2 == "password")
            setEyeV2("text")
        else
            setEyeV2("password")
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


            <div className="Registercard card professional-card">
                <div className="card-body">
                    <h1 className="professional-card-title">REGISTER</h1>
                    <br />
                    {/* <a href="https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript" download="resume.pdf">Download</a> */}
                    {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
                    <input type="text" placeholder="Name" style={{ marginTop: "6%" }} />
                    <input type="email" name="" id="" placeholder="Email" />
                    <input className="eye-pass" type={eyeV} name="" id="" placeholder="Password" />
                    <img src={eye} className="eye-register" onClick={visible} style={{ cursor: "pointer" }} alt="" />
                    <input className="eye-pass" type={eyeV2} name="" id="" placeholder="Password" />
                    <img src={eye} className="eye2-register" onClick={visible2} style={{ cursor: "pointer" }} alt="" />                    
                    <div className="display-flex">
                        <div>
                            <input type="checkbox" name="" id="" style={{ height: "15px", marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                        <div style={{ marginLeft: "15px" }}>
                            <p className="card-text">I Agree to <a href="/professional-privacy">terms & conditions </a>and <a href="/professional-privacy">privacy policy</a></p>
                        </div>
                    </div>
                    <button className="loginWithEmail" onClick={() => window.open("/professional-register2", "_self")}>Continue</button>
                    <p className="card-text">I already have an account <a href="/professional-login">Login</a></p>
                </div>
            </div>
        </div>
    );

}
export default Register;