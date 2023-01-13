import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function Register() {

    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [name, setName] = useState("");
    // let abx="kk";

    // const formData = new FormData();
    // formData.append('username', 'Chris');
    // formData.append("email","email");
    // formdata.append("password","email");
    // formdata.append("full_nme","email");

    async function postdata(url = '', data ={}, methods = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: methods,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }


    let formData = new FormData();
    let file=[]
    const onImageChange = (e) => {
        file = e.target.files;
        setImage(URL.createObjectURL(file[0]));
            
    };

    function Register(){
        formData.append('image',file[0]);
       formData.append('email','email hai')    
        formData.append('email','email')
        formData.append('password','password')
        formData.append('email','email')
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ' - ' + pair[1]); 
        }
                  
    
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
                        {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
                        <img src={image} alt="" className="round-img" style={{height:"50px",width:"50px"}}/>
                        <input type="file" name="" id="" onChange={onImageChange}/>
                        <input type="text" placeholder="Name" />
                        <input type="email" name="" id="" placeholder="Email" />
                        <input type="password" name="" id="" placeholder="Password" />
                        <input type="password" name="" id="" placeholder="Confirm Password" />
                        <p className="card-text">I Agree to <a href="">terms&conditions</a>and <a href="">privacy</a></p>
                        <button className="loginWithEmail" onClick={() => window.open("/register2","_self")}>Continue</button>
                        <p className="card-text">I don't Have Account? <a href="">Create New</a></p>
                    </div>
                </div>
            </div>
        );

    }
    export default Register;