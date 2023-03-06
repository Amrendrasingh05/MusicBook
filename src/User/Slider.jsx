import albumImg1 from '../images/Rectangle 70.png'
import albumImg2 from '../images/Rectangle 71.png'
import albumImg3 from '../images/Rectangle 73.png'
import albumImg4 from '../images/Rectangle 74.png'


function Slider(){
    const slides =[
        albumImg1,albumImg2,albumImg3,albumImg4
    ]
return(
<div style={{width:"500px",overflow:"hidden"}}>
{slides.map((e)=> (<img src={e}/>))}
</div>
);
}
export default Slider;