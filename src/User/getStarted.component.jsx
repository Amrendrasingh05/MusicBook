import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
// import { signInWithGoogle } from "../firebase"; 

function GetStarted() {
    function Register1() {
        window.open("/register1", "_self")
    }
    function Google() {

    }

    const { user, loginWithRedirect } = useAuth0();
    console.log("current user", user)
    return (

        <div className="GetStarted">

            <div className="left">
                <div className="pgNo">01</div>
                <div className="leftHeading">Learn Music</div>
                {/* <div className="left-text">Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
                <div className="dots">
                    <div className="dot-white"></div>
                    <div className="dot-gray"></div>
                    <div className="dot-gray"></div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">WELCOME</h1>
                    {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing  </p> */}
                    <button onClick={() => window.open("/login", "_self")} className="loginWithEmail">Login With Email</button> <br />
                    <button onClick={() => window.open("/mobile-login", "_self")} className="loginWithMobile">Login With Mobile</button> <br />
                    <button  className="loginWithMobile">Login With Google</button>
                    <p className="card-text">I don't Have Account? <a href="/register1">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default GetStarted;