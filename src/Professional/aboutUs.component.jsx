import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
// import profile from  '../images/Rectangle  83.png'
import profileImg from '../images/Rectangle 83.png'

import Img1 from '../images/Rectangle 102.png'
import socialMediaImg1 from '../images/Vector.png'
import socialMediaImg2 from '../images/Vector (10).png'
import socialMediaImg3 from '../images/Vector (20).png'
import socialMediaImg4 from '../images/Vector (30).png'
import socialMediaImg5 from '../images/Vector (40).png'


function forgetpassword() {
    function verification() {
        window.open("/verification", "_self")
    }

    let BtnArray =["Digital Visiting Card","My Purchase","Support & Help","Privacy Policy","Rating","About"]

    function buttons(val) {
        return (
            <>
            <button className="btn btn-outline-secondary accountBtn">{val}</button>
                
            </>
        );
    }

    

    return (

        <div>

            <Header />

            <div className="BasicStyle">
                <div className="about">
                    <h5>◄ ABOUT</h5>
                <img src={Img1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est id, odio laboriosam dolore consequatur earum ipsum, itaque facere aperiam assumenda repellat ex exercitationem at atque commodi soluta quidem sapiente?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus placeat aspernatur ipsa maiores sint praesentium, repudiandae totam. Ea voluptatem possimus autem reprehenderit illo, numquam tenetur illum quisquam aliquid odio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus quaerat asperiores ipsum repudiandae. Voluptates inventore odio vero amet, neque ipsum laboriosam tenetur incidunt natus a recusandae aut sit ad!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni inventore totam eaque pariatur consequatur sapiente ratione laudantium dolore delenit
                </p>
                <h6 className="text-secondary">Follow Us</h6>
                 <hr />
                 <div className="display-flex socialImages">
                    <img src={socialMediaImg1} alt="" />
                    <img src={socialMediaImg2} alt="" />
                    <img src={socialMediaImg3} alt="" />
                    <img src={socialMediaImg4} alt="" />
                    <img src={socialMediaImg5} alt="" />
                 </div>

                 <div className="display-flex">
                                {BtnArray.map(buttons)}
                                
                            </div>
                </div>

                  
            </div>




        </div>
    );

}
export default forgetpassword;