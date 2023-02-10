import "bootstrap/dist/css/bootstrap.min.css";
function register() {
    function login(){
        window.open("/login","_self")
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
                    {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
                    <input type="text" placeholder="Mobile no:"/>
                    <div style={{display:"flex",maxWidth:"85%", marginLeft:"30px"}}>
                    <input type="date" placeholder="Eg. 12/06/1994"/>
                    <input type="text"style={{marginLeft:"5px"}} placeholder="Gender"/>

                    </div>
                    <input type="text" placeholder="Name"/>

                    <div style={{display:"flex",maxWidth:"85%", marginLeft:"30px"}}>
                    <input type="text" placeholder="City"/>
                    <input type="text"style={{marginLeft:"5px"}} placeholder="Pincode"/>

                    </div>

                    
                    <p className="card-text">I Agree to <a href="">terms&conditions</a>and <a href="">privacy</a></p>
                    <button className="loginWithEmail" onClick={() => window.open("/professional-login","_self")}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default register;