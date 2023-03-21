import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import swal from "sweetalert";
import eye from "../images/eye-solid.svg"


function Register() {

    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [Pass1, setPass1] = useState("");
    const [Pass2, setPass2] = useState("");
    const [name, setName] = useState("");


    const [file, setFile] = useState([])
    function onImageChange(e){
        console.log("hiiiii")
        setFile(e.target.files);
        setImage(URL.createObjectURL(file[0]));
        console.log(URL.createObjectURL(file[0]))

    };

    console.log("file = ", file[0])



    const[checkBox, setcheckBox]=useState(false)

    async function Register() {
        if (Pass1 != Pass2) {
            swal("write correct Password")
            return;
        }

        if (checkBox == false){
            swal("Please Accept Terms and Conditions")
            return;
        }
        let formData = new FormData();
        formData.append('image', file[0]);
        formData.append('email', email)
        formData.append('password', Pass1)
        formData.append('full_name', name)
        formData.append("user_type","user")
        let response = await fetch('https://musicbook.co.in/api/v1/auth/register', {
            method: 'POST',
            body: formData
        });
        let result = await response.json();
        swal(result.message);

        if (result.status == true)
            window.open("/login", "_self")



    }



    const[eyeV, setEyeV]=useState("password")
    function visible(){
        if(eyeV == "password")
        setEyeV("text")
        else
        setEyeV("password")
    }
    const[eyeV2, setEyeV2]=useState("password")
    function visible2(){
        if(eyeV2 == "password")
        setEyeV2("text")
        else
        setEyeV2("password")
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
                    <img src={image} alt="" className="round-img" style={{ height: "50px", width: "50px" }} />
                    <input type="file" name="" id="image-input" onChange={onImageChange} />
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="eye-pass" type={eyeV} name="" id="" placeholder="Password" onChange={(e) => setPass1(e.target.value)} />
                    <img src={eye} className="eye-register" onClick={visible} style={{cursor:"pointer"}} alt="" />
                    <input className="eye-pass" type={eyeV2} name="" id="" placeholder="Password" onChange={(e) => setPass2(e.target.value)} />
                    <img src={eye} className="eye2-register" onClick={visible2} style={{cursor:"pointer"}} alt="" />                    <div className="display-flex">
                        <div>
                        <input type="checkbox" name="" id="" onChange={(event)=> setcheckBox(event.target.checked)} style={{ height: "15px",marginTop:"10px",marginLeft:"15px" }} />
                        </div>
                        <div style={{marginLeft:"15px"}}>
                        <p className="card-text">I Agree to <a href="/privacy">terms & conditions </a>and <a href="/privacy">privacy policy</a></p>
                        </div>
                    </div>
                    <button className="loginWithEmail" onClick={Register}>Continue</button>
                    <p className="card-text">I already have an account <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );

}
export default Register;