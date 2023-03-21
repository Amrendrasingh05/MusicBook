import { useState } from 'react'
import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'


function Slider() {
    const slidesArr = [
        albumImg1, albumImg2, albumImg3, albumImg4
    ]
    const [slide, setSlide] = useState(0)
    const [slideNo, setSlideNo] = useState(1)
    function Left() {
        if (slideNo > 1) {
            setSlide((prev) => prev + 300)
            setSlideNo((prev) => prev - 1)
            console.log("slide", slide)
        }
        else {
            return
        }

    }
    function Right() {
        if (slideNo < slidesArr.length) {
            setSlide((prev) => prev - 300)
            setSlideNo((prev) => prev + 1)
            console.log("slide", slide)
        }
        else {
            return
        }

    }

    function MoreThanOne() {
        return (
            <>
                <center>{slideNo}/{slidesArr.length}</center>
                <div className="LeftRightBtns">
                <button className='arrow-left' onClick={Left}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>
                <button className='arrow-right' onClick={Right}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>
                </div>
                
            </>
        )
    }
    return (
        <div className='carouse-container'>
            <div className='carousel' style={{ transform: `translate(${slide}px)` }}>
                {slidesArr.map((e) => (<img src={e} />))}
            </div>
            {slidesArr.length>1?<MoreThanOne />:<></>}
        </div>
    );
}
export default Slider;