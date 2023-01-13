import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import { useState } from "react";
function Forgetpassword() {
    
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
  
    function SubmitBtn(){
        let data ={
            "mobile_number": Mobile,
        }
        postdata('http://musicbook.co.in/api/v1/auth/forgot-password', data, 'POST')
            .then(data => {
                if (data.status == true) {

                    localStorage.setItem("mobile_num",Mobile)
                    localStorage.setItem("forget_otp",data.data.forget_passord_otp)
                    swal("otp sent to", Mobile)
                    window.open("/forgetpassword-otp","_self")
                }
                else {
                    swal(data.message)

                }
            })
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
                    <input type="number" name="" id="" placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)}/>
                    {/* <p className="card-text">Remember me &nbsp;&nbsp;&nbsp;&nbsp; <a href="">Forget password?</a></p> */}
                    <button className="loginWithEmail buttonFull" onClick={SubmitBtn}>Submit</button>
                    <button className="loginWithMobile buttonFull">Back</button>
                    <p className="card-text">I don't Have Account? <a href="/register">Create New</a></p>
                </div>
            </div>
        </div>
    );

}
export default Forgetpassword;