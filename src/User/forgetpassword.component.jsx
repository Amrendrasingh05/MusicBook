import "bootstrap/dist/css/bootstrap.min.css";
function forgetpassword() {
    function verification(){
        window.open("/verification","_self")
    }
    return (

        <div className="forgetpassword">

            <div className="left">
                <div className="pgNo">01</div>
                <div className="leftHeading">Forget Password</div>
                <div className="left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                <div className="dots">
                    <div className="dot-white"></div>
                    <div className="dot-gray"></div>
                    <div className="dot-gray"></div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h1 className="card-title-small">FORGET PASSWORD</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    <input type="email" name="" id="" placeholder="Email"/>
                    <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="">Forget password?</a></p>
                    <button className="loginWithEmail buttonFull" onClick={verification}>Submit</button>
                    <button className="loginWithMobile buttonFull">Back</button>
                    <p className="card-text">I don't Have Account? <a href="">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default forgetpassword;