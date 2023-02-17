import { useState, useEffect } from 'react';


function Popup({ show, onClose, val }) {

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

    console.log("val = ",val)
   
    const [album, setAlbum] = useState([])

        useEffect(() => {
            getdata('https://musicbook.co.in/api/v1/album/get-songs?offset=0&album_id='+val._id, 'GET')
                .then(data => {
                    if (data.status == true) {
                        setAlbum(data.data)
                        console.log("album songs = ", data)
                    }
                    else {
                        console("incorrect")
    
                    }
                })
        }, [])
    


   
    function Ncards(value){
        console.log("songs id = ", value._id)
        return(
            <>
            <div>{value._id}</div>
            </>
        );
    }



    if (!show) {
        return null;
    }
    else
        return (
            <div className='album-popup'>
                <button className="close-popup-album primary-bg" onClick={onClose}>➤</button>
                <div className='popup-box3'>
                    <img src={val.cover_photo} alt="" className='album-popup-img' />
                    <h3>{val.title}</h3>
                    <h6 className='display-flex'> by- &nbsp;<div className="text-primary">{val.created_by.full_name}</div></h6>
                    <br />
                    <h5>Other Albums</h5>
                    
                    <div className="other-albums">
                       {album.map(Ncards)}
                    </div>
                </div>
            </div>
        );
}
export default Popup;