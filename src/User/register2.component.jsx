import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import swal from "sweetalert";
function Register() {
    function login(){
        window.open("/login","_self")
    }

    async function postdata(url = '', data = {}, methods = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("auth_token")
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    const[Mobile, setMobile] = useState("");
    const[Date, setDate] = useState("");
    const[Gender, setGender] = useState("");
    const[Add, setAdd] = useState("");
    const[State, setState] = useState("");
    const[City, setCity] = useState("");
    const[Pin, setPin] = useState("");


    function RegisterBtn(){
        let data ={
            "mobile_number": Mobile,
            "dob": Date,
            "address": Add,
            "city": City,
            "state": State,
            "pincode":Pin,
            "gender": Gender
        }
        postdata('https://musicbook.co.in/api/v1/auth/save-user-details', data, 'POST')
            .then(data => {
                if (data.status == true) {
                    // console.log("successfully loged in")
                    // localStorage.setItem("auth_token",data.token)
                    // localStorage.setItem("user_id",data.data._id)
                    // console.log(localStorage.getItem("auth_token"))
                    // console.log(localStorage.getItem("user_id"))
                    swal("Successfully Uploaded")
                    window.open("/account","_self")
                }
                else {
                    swal("incorrect")

                }
            })
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
                    <input type="text" placeholder="Mobile no:" onChange={(e) => setMobile(e.target.value)}/>
                    <div style={{display:"flex",maxWidth:"85%", marginLeft:"30px"}}>
                    <input type="date" placeholder="Eg. 12/06/1994" onChange={(e) => setDate(e.target.value)}/>
                    {/* <input type="text"style={{marginLeft:"5px"}} placeholder="Gender"/> */}
                    <select name="" id="" style={{marginLeft:"5px"}} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                    </select>

                    </div>
                    <input type="text" placeholder="Address" onChange={(e) => setAdd(e.target.value)}/>

                    <div style={{display:"flex",maxWidth:"85%", marginLeft:"30px"}}>
                    <input type="text" placeholder="State" onChange={(e) => setState(e.target.value)}/>
                    <input type="text"style={{marginLeft:"5px"}} onChange={(e) => setCity(e.target.value)} placeholder="City"/>
                    <input type="text"style={{marginLeft:"5px"}} onChange={(e) => setPin(e.target.value)} placeholder="Pincode"/>

                    </div>

                    
                    <p className="card-text">I Agree to <a href="">terms&conditions</a>and <a href="">privacy</a></p>
                    <button className="loginWithEmail" onClick={RegisterBtn}>Continue</button>
                    <p className="card-text">I don't Have Account? <a href="">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default Register;