import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
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
        // console.log(file[0])

    };

    console.log("file = ", file[0])

    


    async function Register() {
        if(Pass1 == Pass2)
        {
            setPass(Pass1)
        }
        else{
            swal("write correct Password")
            return;
        }
        let formData = new FormData();
        formData.append('image', file[0]);
        formData.append('email', email)
        formData.append('password', Pass)
        formData.append('full_name', name)
  
        let response = await fetch('http://musicbook.co.in/api/v1/auth/register', {
          method: 'POST',
          body: formData
        });
        let result = await response.json();
       swal(result.message);

       if(result.status == true)
       window.open("/login","_self")



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
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    <input type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="" id="" placeholder="Password" onChange={(e) => setPass1(e.target.value)}/>
                    <input type="password" name="" id="" placeholder="Confirm Password" onChange={(e) => setPass2(e.target.value)} />
                    <p className="card-text">I Agree to <a href="">terms&conditions</a>and <a href="">privacy</a></p>
                    <button className="loginWithEmail" onClick={Register}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default Register;