import "bootstrap/dist/css/bootstrap.min.css";
function login() {
    function forgetpassword(){
        window.open("/forgetpassword","_self")
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
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    <input type="email inpt" name="" id="" placeholder="Email"/>
                    <input type="password inpt" name="" id="" placeholder="Password"/>
                    <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="/professional-forgetPassword" onClick={() => window.open("/professional-forgetPassword","_self")}>Forget password?</a></p>
                    <button className="loginWithEmail" onClick={() => window.open("/professional-home","_self")}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="/professional-register1" onClick={() => window.open("/professional-register1","_self")}>Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default login;