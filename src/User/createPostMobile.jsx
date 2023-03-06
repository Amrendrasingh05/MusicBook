import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Popup from './searchBtnPopup.component'
import Notification from './notification.component'
import 'reactjs-popup/dist/index.css';
import swal from "sweetalert";
import axios from "axios";
import sidebarImg1 from '../images/Vector (1).png'
import sidebarImg2 from '../images/Vector (2).png'
import sidebarImg3 from '../images/Vector (3).png'
import sidebarImg4 from '../images/Vector (4).png'
import sidebarImg5 from '../images/Vector (5).png'
import sidebarImg6 from '../images/Vector (6).png'

function Mobileheader() {
    
    const [caption, setCaption] = useState("")
    const [file, setFile] = useState([])
    // const [ThumbnailFile, setThumbnailFile] = useState([])
    // const [enableDisable, setenableDisable] = useState(true)
    const [filetype, setFiletype] = useState("")
    const onImageChange = (e) => {
        setFile(e.target.files);
        setFiletype("image")
        // swal(filetype)
    };
    const onImageChange2 = (e) => {
        setFile(e.target.files);
        setFiletype("video")
        // setenableDisable(false)
        // swal(filetype)
    };
    
    const onImageChange3 = (e) => {
        setFile(e.target.files);
        setFiletype("audio")
        // swal(filetype)
    };

    const [uploadingPercent, setUploadingPercent] = useState(0)
    const [visibleProgress, setVisibleProgress] = useState("0%")
    function Upload() {

        if (filetype == 'video') {
           

                let formData = new FormData();
                formData.append('media', file[0]);
                formData.append('caption', caption)
                formData.append('tags', "post,video")
                formData.append('user_id', localStorage.getItem("user_id"))
                formData.append('type', filetype)
                formData.append('upload_from', 'web') //testing thumbnail in video


                setVisibleProgress("100%")

                axios.post('https://musicbook.co.in/api/v1/post/create', formData, {
                    headers: { "authorization": localStorage.getItem("auth_token") },
                    onUploadProgress: (data) => {
                        setUploadingPercent(Math.round((data.loaded / data.total) * 100))
                    }
                }).then((sucess) => {
                    swal("sucess")
                    window.open("/dashboard", "_self")
                }).catch((erorr) => {
                    swal("error")
                    setVisibleProgress("0")
                })


           
        }
        else {

            let formData = new FormData();
            formData.append('media', file[0]);
            formData.append('caption', caption)
            formData.append('tags', "post,video")
            formData.append('user_id', localStorage.getItem("user_id"))
            formData.append('type', filetype)
            // formData.append('reel3', ThumbnailFile[0]) //testing thumbnail in video


            setVisibleProgress("100%")

            axios.post('https://musicbook.co.in/api/v1/post/create', formData, {
                headers: { "authorization": localStorage.getItem("auth_token") },
                onUploadProgress: (data) => {
                    setUploadingPercent(Math.round((data.loaded / data.total) * 100))
                }
            }).then((sucess) => {
                swal("sucess")
                window.open("/dashboard", "_self")
            }).catch((erorr) => {
                swal("error")
                setVisibleProgress("0")
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






    return (
        <div className="create-post-mobile">
            <nav className="navbar navbar-expand-lg">
                <div>Create Post</div>
                <input onChange={(e) => setCaption(e.target.value)} className="create-post-mobile-input" type="text" placeholder="Description" />
            </nav>
            <nav className="navbar navbar-expand-lg">
                <div class="upload-btn-wrapper create-post-mobile-btn">
                    <button class="btn">Image</button>
                    <input onChange={onImageChange} type="file" name="myfile" />
                </div>
                <div class="upload-btn-wrapper create-post-mobile-btn">
                    <button class="btn">Video</button>
                    <input onChange={onImageChange2} type="file" name="myfile" />
                </div>
                <div class="upload-btn-wrapper create-post-mobile-btn">
                    <button class="btn">Audio</button>
                    <input onChange={onImageChange3} type="file" name="myfile" />
                </div>
                <buton onClick={Upload} className="create-post-mobile-btn">Upload</buton>
            </nav>
            <div className="progress" style={{ opacity: visibleProgress }}>
                <div className="progress-bar" role="progressbar" style={{ width: `${uploadingPercent}%` }} aria-valuenow={uploadingPercent} aria-valuemin="0" aria-valuemax="100">{uploadingPercent}%</div>
            </div>
        </div>
    )
}

export default Mobileheader;