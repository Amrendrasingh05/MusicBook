import "bootstrap/dist/css/bootstrap.min.css";
function forgetpassword() {
    function getStarted(){
        window.open("/","_self")
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
                    <h1 className="professional-card-title">VERIFICATION</h1>
                    {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
                    <input type="number" name="" id="" placeholder="Enter OTP"/>
                    {/* <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="">Forget password?</a></p> */}
                    <button className="loginWithEmail buttonFull" onClick={() => window.open("/professional-changePassword","_self")}>Submit</button>
                    <button className="loginWithMobile buttonFull" onClick={getStarted}>Back</button>
                    <p className="card-text">Resend OTP in <a href="">26 sec</a></p>
                </div>
            </div>
        </div>
    );

}
export default forgetpassword;