import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import eye from "../images/eye-solid.svg"
import swal from "sweetalert";
function Register() {

    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [Pass1, setPass1] = useState("");
    const [Pass2, setPass2] = useState("");
    const [name, setName] = useState("");


    const [file, setFile] = useState([])
    const onImageChange = (e) => {
        setFile(e.target.files);
        setImage(URL.createObjectURL(file[0]));
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
        formData.append("user_type","professional")
        let response = await fetch('https://musicbook.co.in/api/v1/auth/register', {
            method: 'POST',
            body: formData
        });
        let result = await response.json();
        swal(result.message+" as a professional");

        if (result.status == true)
            window.open("/professional-login", "_self")



    }




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
                    <img src={image} alt="" className="round-img" style={{ height: "50px", width: "50px" }} />
                    <input type="file" name="" id="image-input" onChange={onImageChange} style={{border:"0",background:"transparent"}}/>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="eye-pass" type={eyeV} name="" id="" placeholder="Password" onChange={(e) => setPass1(e.target.value)} />
                    <img src={eye} className="eye-register mt-4" onClick={visible} style={{cursor:"pointer"}} alt="" />
                    <input className="eye-pass" type={eyeV2} name="" id="" placeholder="Password" onChange={(e) => setPass2(e.target.value)} />
                    <img src={eye} className="eye2-register mt-3" onClick={visible2} style={{cursor:"pointer"}} alt="" />                    <div className="display-flex">
                        <div>
                        <input type="checkbox" name="" id="" onChange={(event)=> setcheckBox(event.target.checked)} style={{ height: "15px",marginTop:"10px",marginLeft:"15px" }} />
                        </div>
                        <div style={{marginLeft:"15px"}}>
                        <p className="card-text">I Agree to <a href="/professional-privacy">terms & conditions </a>and <a href="/professional-privacy">privacy policy</a></p>
                        </div>
                    </div>
                    <button className="loginWithEmail" onClick={Register}>Continue</button>
                    <p className="card-text">I already have an account <a href="/professional-login">Login</a></p>

                </div>
            </div>
        </div>
    );

}
export default Register;