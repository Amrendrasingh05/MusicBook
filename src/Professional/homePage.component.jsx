import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Professional_header.component'
import leftImg1 from '../images/Rectangle 96.png'
import leftImg2 from '../images/Rectangle 97.png'

import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'

// import {Modal} from reactstrap;
import { useState } from "react";
import {Modal , ModalBody, ModalHeader} from "reactstrap";


function Forgetpassword() {
    
    const [modal,setmodal] =useState(false)
    const [modal2,setmodal2] =useState(false)
    const [modal3,setmodal3] =useState(false)

    

    return (

       <div>
        <Modal
        className="bg-dark text-white Modal"
        // size="lg"
        isOpen={modal}
        toggle={()=>setmodal(!modal)}>
            <ModalHeader
            toggle={()=>setmodal(!modal)}
            className="bg-black p-5"
            >
                <h6>Create Post</h6>
                <p>Description</p>
                <textarea name="" id="" cols="40" rows="5"
                className="bg-dark"></textarea>
                <div className="display-flex">
                    <button className="btn btn-outline-secondary m-3">Upload</button>
                    <button className="btn btn-outline-secondary m-3">Camera</button>
                    <button className="btn btn-outline-secondary m-3">Live</button>
                </div>
                <center>
                <button className="btn btn-primary">Upload Content</button>

                </center>
            </ModalHeader>
            
        </Modal>






        <Modal
        className="bg-dark text-white Modal"
        // size="lg"
        isOpen={modal2}
        toggle={()=>setmodal2(!modal2)}>
            <ModalHeader
            toggle={()=>setmodal2(!modal2)}
            className="bg-black p-5"
            >
                <h2>Create Class</h2>
                <p className="text-secondary">Please fill all the requied fields</p>
                <textarea name="" id="" cols="40" rows="3"
                className="bg-dark"
                placeholder="Upload Cover"></textarea>
                <input type="text" className="bg-dark" placeholder="Create Title" />
               <br /> <input type="text" className="bg-dark" placeholder="Tags"/>
               <br /> <textarea name="" id="" cols="40" rows="3"
                className="bg-dark"
                placeholder="Course description"></textarea>
                <center>
                <button className="btn btn-primary">Course</button>

                </center>
            </ModalHeader>
            
        </Modal>
       
       
       <Header/>
BasicStyle-professional home
       <div className="">
        <div className="display-flex">
            
            <div className="home-left">
                <span>HELLO,</span>
                <h1>Nakul Kumar</h1>
                <img src={leftImg1} alt="" />
                <br />
                <img src={leftImg2} alt="" />
            </div>
           
            <div className="home-right">
            
                <h6>Create Post</h6>
                
            
            <div className="display-flex">
                <button className="supportSubmitBtn" onClick={()=> setmodal(true)}>Post</button>
                &nbsp;&nbsp;
                <button className="supportSubmitBtn" onClick={()=> setmodal2(true)}>Class</button>
                &nbsp;&nbsp;
                <button className="supportSubmitBtn">Live</button>
                </div>

            <div className="home-right-mid">
                <br />
                <h5>My Learnings</h5>
                <div className="display-flex">
                    <div className="home-right-mid-blocks">
                        <h6>How to create Music Notes</h6>
                        <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                        <span>12:30 Min Remaining</span>
                    </div>
                    <div className="home-right-mid-blocks">
                        <h6>How to create Music Notes</h6>
                        <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                        <span>12:30 Min Remaining</span>
                    </div>
                </div>
            </div>
            <div className="home-right-bottom">
            <br />
                <h5>Recent Albums</h5>
                <img src={albumImg1} alt="" />
                <img src={albumImg2} alt="" />
                <img src={albumImg2} alt="" />
                <img src={albumImg2} alt="" />
                <img src={albumImg1} alt="" />
                <img src={albumImg2} alt="" />
                <img src={albumImg1} alt="" />
                <img src={albumImg2} alt="" />
                <img src={albumImg2} alt="" />
                <img src={albumImg2} alt="" />
                <img src={albumImg1} alt="" />
                <img src={albumImg2} alt="" />
            </div>
            </div>

        </div>
       </div>

       </div>
    );

}
export default Forgetpassword;