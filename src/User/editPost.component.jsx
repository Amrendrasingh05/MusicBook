import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from "axios";
function Popup({ show, onClose, val }) {

    let imgUrl = ""

    console.log(val)
    if (val.media[0]) {
        imgUrl = val.media[0].file
        // console.log(imgUrl)
    }

    const [Caption, setCaption] = useState("")
    function Upload() {

        if (val.media[0].type == 'video') {
           

                let formData = new FormData();
                formData.append('media', imgUrl);
                formData.append('caption', Caption)
                formData.append('tags', "post,video")
                formData.append('user_id', localStorage.getItem("user_id"))
                formData.append('type', val.media[0].type)
                formData.append('upload_from', 'web') //testing thumbnail in video


                // setVisibleProgress("100%")

                axios.post(`https://musicbook.co.in/api/v1/post/edit/${val.id}`, formData, {
                    headers: { "authorization": localStorage.getItem("auth_token") },
                    // onUploadProgress: (data) => {
                    //     setUploadingPercent(Math.round((data.loaded / data.total) * 100))
                    // }
                }).then((sucess) => {
                    swal("sucess")
                    onClose();
                }).catch((erorr) => {
                    swal("error")
                    // setVisibleProgress("0")
                })


           
        }
        else {

            let formData = new FormData();
            formData.append('media', val.media[0].file);
                formData.append('caption', Caption)
                formData.append('tags', "post,video")
                formData.append('user_id', localStorage.getItem("user_id"))
                formData.append('type', val.media[0].type)
            

            axios.post(`https://musicbook.co.in/api/v1/post/edit/${val.id}`, formData, {
                headers: { "authorization": localStorage.getItem("auth_token") },
                // onUploadProgress: (data) => {
                //     setUploadingPercent(Math.round((data.loaded / data.total) * 100))
                // }
            }).then((sucess) => {
                swal("sucess")
                onClose();
            }).catch((erorr) => {
                swal("error")
                // setVisibleProgress("0")
            })


        }


        // let response = await fetch('https://musicbook.co.in/api/v1/post/create', {
        //     method: 'POST',
        //     headers: { "authorization": localStorage.getItem("auth_token") },
        //     body: formData
        // });
        // let result = await response.json();
        // swal(filetype + " of " + result.message);
        // setForceUpdate()
        // window.open("/dashboard", "_self")
    }



    if (!show) {
        return null;
    }
    else
        return (
            <div>
                <div className="swal-overlay swal-overlay--show-modal" tabindex="-1">
                    <div style={{border:"0"}} className="swal-modal edit-post-three-dot-popup" role="dialog" aria-modal="true">
                        <h5>Edit</h5>
                        <div style={{border:"0"}} className="display-flex">
                            <div style={{border:"0"}}>
                                <img src={imgUrl} alt="" /> 
                                <h6>Turn off Comments</h6>
                                <h6>Hide likes</h6>
                                <h6>Tags</h6>
                                <h6 >Add a Location</h6>
                            </div>
                            <div style={{border:"0"}}>
                                <h5>Caption</h5>
                                {/* <input type="text" placeholder='hiiiii' /> */}
                                <h6><textarea name="" id="" cols="30" rows="3" onChange={(e) => setCaption(e.target.value)} >{val.captions}</textarea></h6>
                            </div>
                        </div>
                        <center style={{border:"0"}}><button className='btn btn-outline-info' onClick={Upload}>Save</button></center>
                        <h5  className='close-popup-edit-post' onClick={onClose}>X</h5>

                    </div>
                </div>
            </div>
        );
}
export default Popup;