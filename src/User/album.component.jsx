import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
import searchIcon from '../images/Vector (2).png'
// import profile from  '../images/Rectangle  83.png'
import play from '../images/play.png'
import Popup from './songsPopup.component'

import Img1 from '../images/Rectangle 102.png'
import socialMediaImg1 from '../images/Vector.png'
import socialMediaImg2 from '../images/Vector (10).png'
import socialMediaImg3 from '../images/Vector (20).png'
import socialMediaImg4 from '../images/Vector (30).png'
import socialMediaImg5 from '../images/Vector (40).png'

import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'


function Forgetpassword() {

  async function getdata(url = '', methods = '') {
    const response = await fetch(url, {
        method: methods,
        headers: {
            'Content-Type': 'application/json',
            "authorization": localStorage.getItem("auth_token")
        },
    });
    return response.json();
}

  function verification() {
    window.open("/verification", "_self")
  }

  let BtnArray = ["Digital Visiting Card", "My Purchase", "Support & Help", "Privacy Policy", "Rating", "About"]

  function buttons(val) {
    return (
      <>
        <button className="btn btn-outline-secondary accountBtn">{val}</button>

      </>
    );
  }

  const [album, setAlbum] = useState([])
    useEffect(() => {
        getdata('https://musicbook.co.in/api/v1/album/get?offset=0&user_id=6346f880c5f4ce2d6a77bc39', 'GET')
            .then(data => {
                if (data.status == true) {
                    setAlbum(data.data)
                    console.log("album = ", data)
                }
                else {
                    console("incorrect")

                }
            })
    }, [])


  const[show , setShow] = useState(false)
    const[song, setSong] = useState("")
    function Albums(val) {
        function Click(){
            setShow(true)
            setSong(val)
        }

        console.log("val2=",val)
        
        return (

            <>
                <img src={val.cover_photo} onClick={Click} style={{cursor:"pointer"}} alt="" />
            </>
        );
    }



  return (

    <div>
      <Popup show={show} val={song} onClose={() => setShow(false)}/>
      <Header />

      <div className="BasicStyle">


        <div className="display-flex" style={{ justifyContent: "space-between" }}>
          <h5>◄ ALBUM</h5>
          <img src={searchIcon} className="album-search" alt="" />
        </div>

        <div className="album">
          <br />
          <h5>Recent Albums</h5>
          {/* <img src={albumImg1} alt="" />
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
          <img src={albumImg2} alt="" />
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
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg2} alt="" />
          <img src={albumImg1} alt="" />
          <img src={albumImg2} alt="" /> */}
          {album.map(Albums)}
          {album.map(Albums)}
          {album.map(Albums)}
          {album.map(Albums)}
          {album.map(Albums)}
        </div>

        <div className="album-bottom display-flex">
          <div className="display-flex" style={{alignItems:"center"}}>
          <img src={albumImg2} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{marginTop:"10%"}}>
            <h6>Giveaay</h6>
            <p>By Atif Aslam</p>
          </div>
          </div>
          <img src={play} alt="" />
        </div>

        <div>

        </div>

      </div>




    </div>
  );

}
export default Forgetpassword;