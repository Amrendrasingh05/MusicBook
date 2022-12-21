import "bootstrap/dist/css/bootstrap.min.css";
function login() {
    function forgetpassword(){
        window.open("/forgetpassword","_self")
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
                <br /><div className="dots">
                    <div className="dot-purple"></div>
                    <div className="dot-gray"></div>
                    <div className="dot-gray"></div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">LOGIN</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    <input type="email" name="" id="" placeholder="Email"/>
                    <input type="password" name="" id="" placeholder="Password"/>
                    <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="">Forget password?</a></p>
                    <button className="loginWithEmail" onClick={forgetpassword}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default login;