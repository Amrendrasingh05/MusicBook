import "bootstrap/dist/css/bootstrap.min.css";
function register() {
    function Register2(){
        window.open("/register2","_self")
    }
    return (

        <div className="register">

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

            <div className="Registercard card">
                <div className="card-body">
                    <h1 className="card-title">REGISTER</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    {/* <input type="file" name="" id="" /> */}
                    <input type="text" placeholder="Name"/>
                    <input type="email" name="" id="" placeholder="Email"/>
                    <input type="password" name="" id="" placeholder="Password"/>
                    <input type="password" name="" id="" placeholder="Confirm Password"/>
                    <p className="card-text">I Agree to <a href="">terms&conditions</a>and <a href="">privacy</a></p>
                    <button className="loginWithEmail" onClick={Register2}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default register;